// One-time incremental seed: inserts questions from questions-data.mjs whose
// prompts are not already in the database. Safe to run multiple times — it
// never modifies or deletes existing rows.
// Run with: DATABASE_URL=... node prisma/seed-missing.mjs
import { PrismaClient } from "@prisma/client";
import { QUESTIONS } from "./questions-data.mjs";

const db = new PrismaClient();

async function main() {
  const existing = await db.question.findMany({ select: { prompt: true } });
  const seen = new Set(existing.map((q) => q.prompt));
  const missing = QUESTIONS.filter((q) => !seen.has(q.prompt));
  console.log(`${existing.length} existing, ${missing.length} new to insert.`);
  if (missing.length) {
    await db.question.createMany({ data: missing });
  }
  const after = await db.question.count();
  console.log(`Done. ${after} questions in the database.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
