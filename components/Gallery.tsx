import Image from "next/image";
import Reveal from "./Reveal";
import { gallery } from "@/data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-shell">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--blue)]">Inside Aarambh</p>
          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black tracking-[-.035em] text-[var(--navy)] sm:text-5xl">Real classrooms. Real students. A real learning community.</h2>
            <p className="max-w-sm text-sm leading-6 text-slate-500">A visual glimpse of the academy and its learning environment, using the supplied reference photography.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:grid-cols-4 sm:gap-4">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * .04} className={item.span === "wide" ? "col-span-2" : item.span === "tall" ? "row-span-2" : "col-span-1"}>
              <div className="group relative h-full min-h-full overflow-hidden rounded-2xl bg-slate-100">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
