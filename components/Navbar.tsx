"use client";

import { useState } from "react";
import { business } from "@/data/site";
import { MenuIcon, XIcon } from "./Icons";

const links = ["About", "Programs", "Gallery", "Reviews", "Location"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="glass mx-auto flex max-w-[1180px] items-center justify-between rounded-2xl px-4 py-3 shadow-lg shadow-black/5 sm:px-5">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Aarambh Career Academy home">
          <span className="grid size-10 place-items-center rounded-xl bg-[var(--navy)] text-xl font-black text-[var(--yellow)]">आ</span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-[.18em] text-[var(--navy)]">AARAMBH</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.12em] text-slate-500">Career Academy</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-slate-600 transition hover:text-[var(--blue)]">{link}</a>)}
          <a href={business.whatsappUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-[var(--navy)] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue)]">Enquire</a>
        </div>
        <button type="button" className="rounded-xl p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <XIcon /> : <MenuIcon />}</button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-[1180px] rounded-2xl p-3 shadow-lg md:hidden">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-white">{link}</a>)}
          <a href={business.whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-[var(--navy)] px-4 py-3 text-center font-bold text-white">WhatsApp Enquiry</a>
        </div>
      )}
    </header>
  );
}
