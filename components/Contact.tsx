"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import { business } from "@/data/site";
import { ArrowUpRight, PhoneIcon } from "./Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const classLevel = String(form.get("classLevel") || "");
    const program = String(form.get("program") || "");
    const message = String(form.get("message") || "");
    const text = `Hello Aarambh Career Academy, I would like to enquire about admission.\n\nName: ${name}\nClass: ${classLevel}\nProgram: ${program}\nMessage: ${message}`;
    setSent(true);
    window.open(`${business.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="section-pad bg-[var(--paper)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--blue)]">Start a conversation</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.035em] text-[var(--navy)] sm:text-5xl">Ready to ask about the next batch?</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">Share a few details and we&apos;ll open a pre-filled WhatsApp enquiry. For current batch dates, timings, fees and availability, please confirm directly with the academy.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={business.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--navy)] px-5 py-3.5 font-black text-white transition hover:-translate-y-1 hover:bg-[var(--blue)]">WhatsApp us <ArrowUpRight /></a>
            <a href={business.callUrl} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--line)] bg-white px-5 py-3.5 font-black text-[var(--navy)]"><PhoneIcon /> {business.phoneDisplay}</a>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <form onSubmit={submit} className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-premium sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="text-sm font-bold text-[var(--navy)]">Student / parent name</span><input required name="name" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-4 focus:ring-blue-100" placeholder="Your name" /></label>
              <label className="block"><span className="text-sm font-bold text-[var(--navy)]">Current class</span><input required name="classLevel" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-4 focus:ring-blue-100" placeholder="e.g. 11th / 12th" /></label>
              <label className="block sm:col-span-2"><span className="text-sm font-bold text-[var(--navy)]">Interested in</span><select required name="program" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-4 focus:ring-blue-100"><option value="">Select a program</option><option>IIT-JEE</option><option>NEET</option><option>CET</option><option>Foundation</option><option>Physics Group Tuition</option></select></label>
              <label className="block sm:col-span-2"><span className="text-sm font-bold text-[var(--navy)]">Message</span><textarea name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-4 focus:ring-blue-100" placeholder="Ask about batches, timings, admissions, etc." /></label>
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--yellow)] px-5 py-4 font-black text-[var(--navy)] transition hover:-translate-y-0.5">{sent ? "WhatsApp enquiry opened" : "Continue on WhatsApp"} <ArrowUpRight /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
