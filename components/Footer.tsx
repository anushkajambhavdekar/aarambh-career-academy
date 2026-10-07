import { business } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-[var(--yellow)] text-xl font-black text-[var(--navy)]">आ</span><div><div className="font-black tracking-[.15em]">AARAMBH</div><div className="text-[10px] uppercase tracking-[.14em] text-blue-200">Career Academy</div></div></div><p className="mt-5 max-w-md text-sm leading-6 text-blue-100/70">Classroom coaching for IIT-JEE, NEET, CET and foundation learning in Nanded.</p></div>
          <div><div className="text-xs font-black uppercase tracking-[.18em] text-[var(--yellow)]">Explore</div><div className="mt-4 grid gap-3 text-sm text-blue-100/80"><a href="#about" className="hover:text-white">About</a><a href="#programs" className="hover:text-white">Programs</a><a href="#gallery" className="hover:text-white">Gallery</a><a href="#location" className="hover:text-white">Location</a></div></div>
          <div><div className="text-xs font-black uppercase tracking-[.18em] text-[var(--yellow)]">Contact</div><div className="mt-4 grid gap-3 text-sm text-blue-100/80"><a href={business.callUrl}>{business.phoneDisplay}</a><a href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href={business.mapUrl} target="_blank" rel="noreferrer">Google Maps</a></div></div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-blue-100/50">© {new Date().getFullYear()} AARAMBH Career Academy. Website concept built for the academy.</div>
      </div>
    </footer>
  );
}
