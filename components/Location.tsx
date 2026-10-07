import Reveal from "./Reveal";
import { business } from "@/data/site";
import { ArrowUpRight, PinIcon } from "./Icons";

export default function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="container-shell grid overflow-hidden rounded-[2rem] bg-[var(--navy)] text-white shadow-premium lg:grid-cols-[1.05fr_.95fr]">
        <Reveal className="p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--yellow)]">Find us</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.035em] sm:text-5xl">Easy to locate in Vasant Nagar, Nanded.</h2>
          <div className="mt-7 flex gap-3 text-blue-100"><PinIcon /><p className="max-w-md text-sm leading-6">{business.address}</p></div>
          <a href={business.mapUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--yellow)] px-5 py-3.5 font-black text-[var(--navy)] transition hover:-translate-y-1">Open in Google Maps <ArrowUpRight /></a>
        </Reveal>
        <div className="relative min-h-[360px] bg-[#0e2f5f]">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="mx-auto grid size-20 place-items-center rounded-full border-8 border-white/10 bg-[var(--yellow)] text-[var(--navy)] shadow-2xl"><PinIcon /></div>
            <div className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur">OM Arcade · Vasant Nagar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
