"use client";

import { useEffect, useState } from "react";
import { SUBJECTS, sectionsByUnit, sectionLabel } from "@/lib/site";
import { plainText } from "@/lib/mathText";

type Question = {
  id: string;
  subject: string;
  section: string | null;
  title: string | null;
  image: string | null;
  difficulty: string;
  prompt: string;
  choices: string[] | null;
  correctIndex: number | null;
  correctText: string;
  explanation: string;
};

type Inquiry = {
  id: string;
  name: string;
  email: string;
  test: string;
  message: string;
  status: string;
  createdAt: string;
};

type Student = {
  id: string;
  name: string;
  email: string;
  isPaid: boolean;
  createdAt: string;
  _count: { attempts: number };
};

type UnitReport = {
  id: string;
  name: string;
  short: string;
  attempts: number;
  correct: number;
  accuracy: number | null;
  lastAt: string | null;
};

type RecentAttempt = {
  id: string;
  unitShort: string;
  section: string | null;
  prompt: string;
  correct: boolean;
  timeMs: number | null;
  createdAt: string;
};

type StudentReport = {
  summary: { totalAttempts: number; totalCorrect: number; accuracy: number | null; lastAt: string | null };
  units: UnitReport[];
  recent: RecentAttempt[];
  timedTests?: TimedTestSubmission[];
};

type TimedTestSubmission = {
  id: string;
  testId: string;
  title: string;
  questionCount: number;
  answeredCount: number;
  final: boolean;
  answers: Record<string, string>;
  startedAt: string;
  finishedAt: string | null;
  timeMs: number | null;
};

const emptyForm = {
  subject: "unit-1",
  section: "",
  title: "",
  image: "",
  difficulty: "medium",
  prompt: "",
  choicesText: "",
  correctIndex: "",
  correctText: "",
  explanation: "",
};

export default function Admin() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [token, setToken] = useState("");
  const [tab, setTab] = useState<"questions" | "inquiries" | "students">("questions");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [confirmDeleteStudentId, setConfirmDeleteStudentId] = useState<string | null>(null);
  const [reportStudentId, setReportStudentId] = useState<string | null>(null);
  const [reports, setReports] = useState<Record<string, StudentReport>>({});
  const [reportLoadingId, setReportLoadingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [confirmDeleteQId, setConfirmDeleteQId] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/questions").then((r) => setUnlocked(r.status !== 401));
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (res.ok) {
      setUnlocked(true);
      loadAll();
    } else {
      setMsg("Wrong token.");
    }
  }

  async function loadAll() {
    const [q, iq, st] = await Promise.all([
      fetch("/api/admin/questions").then((r) => r.json()),
      fetch("/api/admin/inquiries").then((r) => r.json()),
      fetch("/api/admin/students").then((r) => r.json()),
    ]);
    setQuestions(q.questions ?? []);
    setInquiries(iq.inquiries ?? []);
    setStudents(st.students ?? []);
  }

  useEffect(() => {
    if (unlocked) loadAll();
  }, [unlocked]);

  function fillForm(q: Question) {
    setEditingId(q.id);
    setForm({
      subject: q.subject,
      section: q.section ?? "",
      title: q.title ?? "",
      image: q.image ?? "",
      difficulty: q.difficulty,
      prompt: q.prompt,
      choicesText: (q.choices ?? []).join("\n"),
      correctIndex: q.correctIndex !== null ? String(q.correctIndex) : "",
      correctText: q.correctText,
      explanation: q.explanation,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const choices = form.choicesText.trim() ? form.choicesText.split("\n").map((s) => s.trim()).filter(Boolean) : null;
    const payload = {
      subject: form.subject,
      section: form.section,
      title: form.title.trim() || null,
      image: form.image.trim() || null,
      difficulty: form.difficulty,
      prompt: form.prompt,
      choices,
      correctIndex: choices ? Number(form.correctIndex) : null,
      correctText: form.correctText,
      explanation: form.explanation,
    };
    const res = await fetch(editingId ? `/api/admin/questions/${editingId}` : "/api/admin/questions", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      setMsg("Save failed — check all fields (for multiple-choice, pick the correct choice from the dropdown).");
      return;
    }
    setForm(emptyForm);
    setEditingId(null);
    setMsg(editingId ? "Question updated." : "Question added.");
    loadAll();
  }

  async function remove(id: string) {
    await fetch(`/api/admin/questions/${id}`, { method: "DELETE" });
    setConfirmDeleteQId(null);
    loadAll();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setUnlocked(false);
    setToken("");
    setQuestions([]);
    setInquiries([]);
    setStudents([]);
  }

  async function setStudentPaid(id: string, isPaid: boolean) {
    await fetch(`/api/admin/students/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPaid }),
    });
    loadAll();
  }

  async function removeStudent(id: string) {
    await fetch(`/api/admin/students/${id}`, { method: "DELETE" });
    setConfirmDeleteStudentId(null);
    loadAll();
  }

  async function toggleReport(id: string) {
    if (reportStudentId === id) {
      setReportStudentId(null);
      return;
    }
    setReportStudentId(id);
    if (!reports[id]) {
      setReportLoadingId(id);
      const res = await fetch(`/api/admin/students/${id}/report`);
      if (res.ok) {
        const data = await res.json();
        setReports((prev) => ({ ...prev, [id]: { summary: data.summary, units: data.units, recent: data.recent } }));
      }
      setReportLoadingId(null);
    }
  }

  async function setInquiryStatus(id: string, status: string) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    loadAll();
  }

  async function removeInquiry(id: string) {
    await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    setConfirmDeleteId(null);
    loadAll();
  }

  if (unlocked === null) return <p className="text-slate-500">Checking admin access…</p>;
  if (!unlocked)
    return (
      <div className="card mx-auto max-w-sm">
        <h1 className="text-2xl font-extrabold">Admin</h1>
        <p className="mt-1 text-sm text-slate-500">Enter your ADMIN_TOKEN to manage questions and inquiries.</p>
        <form onSubmit={login} className="mt-4 space-y-3">
          <input className="input" type="password" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Admin token" />
          {msg && <p className="text-sm text-red-600">{msg}</p>}
          <button className="btn-primary w-full">Unlock</button>
        </form>
      </div>
    );

  const sections = sectionsByUnit(form.subject);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">Admin</h1>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            {(["questions", "students", "inquiries"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold ${tab === t ? "bg-brand-600 text-white" : "bg-white text-slate-600 border"}`}>
                {t === "questions" ? `Questions (${questions.length})` : t === "students" ? `Students (${students.length})` : `Inquiries (${inquiries.length})`}
              </button>
            ))}
          </div>
          <button onClick={logout} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100">
            Log out
          </button>
        </div>
      </div>
      {msg && <p className="text-sm text-green-700">{msg}</p>}

      {tab === "questions" && (
        <>
          <form onSubmit={save} className="card space-y-4">
            <h2 className="text-lg font-bold">{editingId ? "Edit question" : "Add question"}</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="label">Subject</label>
                <select className="input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value, section: "" })}>
                  {SUBJECTS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Section</label>
                <select className="input" required value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })}>
                  <option value="">Select…</option>
                  {sections.map((sec) => <option key={sec.id} value={sec.id}>{sec.id} | {sec.title}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Difficulty</label>
                <select className="input" value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}>
                  {["easy", "medium", "hard"].map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="label">Short title <span className="font-normal text-slate-500">(shown in the section question list)</span></label>
              <input className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Average Rate of Change" />
            </div>
            <div>
              <label className="label">Image <span className="font-normal text-slate-500">(optional graph path, e.g. /wkst/1-1/g1.png)</span></label>
              <input className="input" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="/wkst/1-1/g1.png" />
            </div>
            <div>
              <label className="label">Prompt <span className="font-normal text-slate-500">{"(math: use LaTeX like \\(x^{2}\\), \\(\\frac{a}{b}\\), \\(\\sqrt{x}\\))"}</span></label>
              <textarea className="input min-h-24" required value={form.prompt} onChange={(e) => setForm({ ...form, prompt: e.target.value })} />
            </div>
            <div>
              <label className="label">Choices (one per line — leave empty for grid-in)</label>
              <textarea className="input min-h-20" value={form.choicesText} onChange={(e) => setForm({ ...form, choicesText: e.target.value })} placeholder={"10\n12\n14\n17"} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label">Correct choice (MCQ only)</label>
                <select
                  className="input"
                  value={form.correctIndex}
                  onChange={(e) => setForm({ ...form, correctIndex: e.target.value })}
                >
                  <option value="">Select…</option>
                  {form.choicesText.split("\n").map((s) => s.trim()).filter(Boolean).map((c, i) => (
                    <option key={i} value={String(i)}>
                      {String.fromCharCode(65 + i)} — {c.slice(0, 60)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Correct answer text (also used to grade grid-ins)</label>
                <input className="input" required value={form.correctText} onChange={(e) => setForm({ ...form, correctText: e.target.value })} placeholder="12" />
              </div>
            </div>
            <div>
              <label className="label">Explanation</label>
              <textarea className="input min-h-24" required value={form.explanation} onChange={(e) => setForm({ ...form, explanation: e.target.value })} />
            </div>
            <div className="flex gap-3">
              <button className="btn-primary">{editingId ? "Update" : "Add"} question</button>
              {editingId && <button type="button" className="btn-secondary" onClick={() => { setEditingId(null); setForm(emptyForm); }}>Cancel</button>}
            </div>
          </form>

          <div className="space-y-3">
            {questions.map((q) => (
              <div key={q.id} className="card !p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm">
                    <p className="font-semibold">{q.subject} · {q.section ? sectionLabel(q.subject, q.section) : "—"} · {q.difficulty}{q.title ? ` · ${q.title}` : ""}</p>
                    <p className="mt-1 text-slate-600">{plainText(q.prompt).slice(0, 140)}{q.prompt.length > 140 ? "…" : ""}</p>
                    <p className="mt-1 text-slate-500">Answer: {plainText(q.correctText)}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => fillForm(q)}>Edit</button>
                    {confirmDeleteQId === q.id ? (
                      <>
                        <button className="rounded-xl bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700" onClick={() => remove(q.id)}>Confirm</button>
                        <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => setConfirmDeleteQId(null)}>Cancel</button>
                      </>
                    ) : (
                      <button className="rounded-xl border border-red-200 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={() => setConfirmDeleteQId(q.id)}>Delete</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "students" && (
        <div className="space-y-3">
          <p className="text-sm text-slate-500">
            Only students marked <strong>enrolled</strong> can access practice. New signups start unenrolled.
          </p>
          {students.length === 0 && <p className="text-slate-500">No student accounts yet.</p>}
          {students.map((s) => (
            <div key={s.id} className="card !p-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold">{s.name} <span className="font-normal text-slate-500">&lt;{s.email}&gt;</span></p>
                  <p className="mt-1 text-xs text-slate-400">
                    Joined {new Date(s.createdAt).toLocaleDateString()} · {s._count.attempts} attempts
                  </p>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${s.isPaid ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                  {s.isPaid ? "Enrolled" : "Not enrolled"}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => toggleReport(s.id)}>
                  {reportStudentId === s.id ? "Hide report" : "View report"}
                </button>
                <button
                  className={`rounded-xl px-3 py-1.5 text-sm font-semibold ${s.isPaid ? "border border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-brand-600 text-white hover:bg-brand-700"}`}
                  onClick={() => setStudentPaid(s.id, !s.isPaid)}
                >
                  {s.isPaid ? "Revoke enrollment" : "Mark enrolled"}
                </button>
                {confirmDeleteStudentId === s.id ? (
                  <>
                    <button className="rounded-xl bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700" onClick={() => removeStudent(s.id)}>Confirm delete</button>
                    <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => setConfirmDeleteStudentId(null)}>Cancel</button>
                  </>
                ) : (
                  <button className="rounded-xl border border-red-200 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={() => setConfirmDeleteStudentId(s.id)}>Delete</button>
                )}
              </div>
              {reportStudentId === s.id && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  {reportLoadingId === s.id && <p className="text-sm text-slate-500">Loading report…</p>}
                  {reports[s.id] && (() => {
                    const r = reports[s.id];
                    return (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                          <span><strong>{r.summary.totalAttempts}</strong> answered</span>
                          <span><strong>{r.summary.accuracy !== null ? `${r.summary.accuracy}%` : "—"}</strong> overall accuracy</span>
                          <span className="text-slate-500">
                            Last active {r.summary.lastAt ? new Date(r.summary.lastAt).toLocaleString() : "—"}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {r.units.map((u) => (
                            <div key={u.id} className="text-sm">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold">{u.short}</span>
                                <span className="text-slate-500">
                                  {u.attempts === 0 ? "No attempts yet" : `${u.correct}/${u.attempts} · ${u.accuracy}%`}
                                </span>
                              </div>
                              <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200">
                                <div
                                  className={`h-full rounded-full ${u.accuracy === null ? "" : u.accuracy >= 70 ? "bg-green-500" : u.accuracy >= 40 ? "bg-amber-400" : "bg-red-400"}`}
                                  style={{ width: `${u.accuracy ?? 0}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        {r.recent.length > 0 && (
                          <div>
                            <p className="mb-2 text-sm font-bold">Recent attempts</p>
                            <div className="max-h-64 space-y-1.5 overflow-y-auto">
                              {r.recent.map((a) => (
                                <div key={a.id} className="flex items-start gap-2 text-xs">
                                  <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 font-bold ${a.correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                                    {a.correct ? "✓" : "✗"}
                                  </span>
                                  <div className="min-w-0">
                                    <p className="truncate text-slate-700">{plainText(a.prompt)}</p>
                                    <p className="text-slate-400">
                                      {a.unitShort}{a.section ? ` · ${a.section}` : ""} · {new Date(a.createdAt).toLocaleString()}
                                      {a.timeMs != null ? ` · ${Math.round(a.timeMs / 1000)}s` : ""}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {(r.timedTests ?? []).length > 0 && (
                          <div>
                            <p className="mb-2 text-sm font-bold">Timed tests</p>
                            <div className="space-y-2">
                              {(r.timedTests ?? []).map((t) => (
                                <details key={t.id} className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
                                  <summary className="cursor-pointer font-semibold">
                                    {t.title}
                                    <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-bold ${t.final ? "bg-slate-100 text-slate-600" : "bg-amber-100 text-amber-800"}`}>
                                      {t.final ? "Submitted" : "In progress"}
                                    </span>
                                  </summary>
                                  <p className="mt-1 text-xs text-slate-400">
                                    Started {new Date(t.startedAt).toLocaleString()}
                                    {t.timeMs != null ? ` · time used ${Math.floor(t.timeMs / 60000)}:${String(Math.floor((t.timeMs % 60000) / 1000)).padStart(2, "0")}` : ""}
                                    {" · "}{t.answeredCount}/{t.questionCount} answered
                                  </p>
                                  <div className="mt-2 max-h-72 space-y-2 overflow-y-auto">
                                    {Array.from({ length: t.questionCount }, (_, i) => `q${i + 1}`).map((key) => (
                                      <div key={key} className="rounded-lg bg-slate-50 p-2.5">
                                        <p className="text-xs font-bold text-slate-500">Question {key.slice(1)}</p>
                                        <p className="mt-0.5 whitespace-pre-wrap text-slate-700">
                                          {t.answers?.[key]?.trim() ? t.answers[key] : <span className="italic text-slate-400">(no answer)</span>}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </details>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === "inquiries" && (
        <div className="space-y-3">
          {inquiries.length === 0 && <p className="text-slate-500">No inquiries yet. Share your /contact page!</p>}
          {inquiries.map((iq) => (
            <div key={iq.id} className="card !p-4 text-sm">
              <div className="flex items-center justify-between">
                <p className="font-bold">{iq.name} <span className="font-normal text-slate-500">&lt;{iq.email}&gt;</span></p>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{iq.test} · {iq.status}</span>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-slate-600">{iq.message}</p>
              <p className="mt-2 text-xs text-slate-400">{new Date(iq.createdAt).toLocaleString()}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {iq.status === "new" && (
                  <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => setInquiryStatus(iq.id, "contacted")}>Mark contacted</button>
                )}
                {iq.status === "contacted" && (
                  <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => setInquiryStatus(iq.id, "closed")}>Mark closed</button>
                )}
                {iq.status === "closed" && (
                  <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => setInquiryStatus(iq.id, "new")}>Reopen</button>
                )}
                {confirmDeleteId === iq.id ? (
                  <>
                    <button className="rounded-xl bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700" onClick={() => removeInquiry(iq.id)}>Confirm delete</button>
                    <button className="btn-secondary !px-3 !py-1.5 text-sm" onClick={() => setConfirmDeleteId(null)}>Cancel</button>
                  </>
                ) : (
                  <button className="rounded-xl border border-red-200 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={() => setConfirmDeleteId(iq.id)}>Delete</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
