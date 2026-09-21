// Incremental question sync: keeps the live DB in step with questions-data.mjs.
// - First run backfills `slug` on existing rows by matching their prompt text
//   against legacy-prompts.mjs (prompts as seeded before the LaTeX rewrite).
//   Rows that don't match (e.g. edited via admin) get a stable `custom-<id>` slug
//   and are never overwritten by this script.
// - Then every question in QUESTIONS is upserted by slug: new ones are inserted,
//   changed ones are updated in place (attempt history is preserved).
// Safe to run multiple times. Run with: DATABASE_URL=<redacted>
import { PrismaClient } from "@prisma/client";
import { QUESTIONS } from "./questions-data.mjs";
import { LEGACY_PROMPTS } from "./legacy-prompts.mjs";

const db = new PrismaClient();

const FIELDS = ["subject", "domain", "difficulty", "prompt", "choices", "correctIndex", "correctText", "explanation"];
const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

async function main() {
  // 1) Backfill slugs on rows that don't have one yet.
  const legacy = new Map(LEGACY_PROMPTS.map((q) => [q.prompt, q.slug]));
  const unslugged = await db.question.findMany({ where: { slug: null }, select: { id: true, prompt: true } });
  let backfilled = 0;
  for (const row of unslugged) {
    const slug = legacy.get(row.prompt) ?? `custom-${row.id}`;
    await db.question.update({ where: { id: row.id }, data: { slug } });
    backfilled++;
  }
  console.log(`Backfilled slugs on ${backfilled} rows.`);

  // 2) Upsert the seed bank by slug.
  let inserted = 0, updated = 0, unchanged = 0;
  for (const q of QUESTIONS) {
    const existing = await db.question.findUnique({ where: { slug: q.slug } });
    const data = Object.fromEntries(FIELDS.map((f) => [f, q[f] ?? null]));
    if (!existing) {
      await db.question.create({ data: { slug: q.slug, ...data } });
      inserted++;
    } else if (FIELDS.some((f) => !same(existing[f], data[f]))) {
      await db.question.update({ where: { slug: q.slug }, data });
      updated++;
    } else {
      unchanged++;
    }
  }
  const total = await db.question.count();
  console.log(`Inserted ${inserted}, updated ${updated}, unchanged ${unchanged}. ${total} questions total.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
