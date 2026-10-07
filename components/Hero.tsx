"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { business } from "@/data/site";
import { ArrowUpRight, PhoneIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--navy)] pt-32 text-white sm:pt-36">
      <div className="grid-noise absolute inset-0 opacity-80" />
      <div className="absolute -right-36 top-20 size-96 rounded-full bg-[var(--blue)]/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-[var(--yellow)]/10 blur-3xl" />
      <div className="container-shell relative grid min-h-[720px] items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.02fr_.98fr] lg:pb-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-blue-100">
            <span className="size-1.5 rounded-full bg-[var(--yellow)]" /> Established {business.established} · Nanded
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .05 }} className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl lg:text-[78px]">
            Build the <span className="text-[var(--yellow)]">concepts.</span><br /> Chase the <span className="font-display italic text-white">future.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .16 }} className="mt-7 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
            Akshay Sir&apos;s AARAMBH Career Academy helps students prepare for IIT-JEE, NEET and CET through classroom coaching, foundation learning, regular practice and academic guidance.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .24 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={business.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--yellow)] px-5 py-3.5 font-black text-[var(--navy)] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/20">Start an enquiry <ArrowUpRight /></a>
            <a href={business.callUrl} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-5 py-3.5 font-bold text-white transition hover:bg-white/15"><PhoneIcon /> Call {business.phoneDisplay}</a>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[.14em] text-blue-200/80">
            <span>IIT-JEE</span><span>NEET</span><span>CET</span><span>Foundation</span>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .97, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .1 }} className="relative mx-auto w-full max-w-[590px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-800 shadow-2xl shadow-black/40 sm:aspect-[5/6]">
            <Image src="/gallery/classroom.png" alt="Students in a classroom at Aarambh Career Academy" fill priority sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-sm rounded-2xl border border-white/15 bg-[var(--navy)]/70 p-5 backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-[.18em] text-[var(--yellow)]">The Aarambh approach</div>
                <div className="mt-2 text-2xl font-black leading-tight">Understand first. Practice next. Perform with confidence.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
