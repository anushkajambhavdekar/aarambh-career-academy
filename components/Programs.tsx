import Reveal from "./Reveal";
import { programs } from "@/data/site";
import { ArrowUpRight } from "./Icons";

export default function Programs() {
  return (
    <section id="programs" className="section-pad bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--blue)]">Programs</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-.035em] text-[var(--navy)] sm:text-5xl">Preparation that grows with the student.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">Course structures and batch details can change. Contact the academy directly for current admissions, timings and syllabus information.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * .06}>
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:p-8">
                <div className="flex items-start justify-between"><span className="text-sm font-black text-slate-400">{program.eyebrow}</span><span className="grid size-10 place-items-center rounded-full bg-[var(--sky)] text-[var(--blue)] transition group-hover:bg-[var(--navy)] group-hover:text-white"><ArrowUpRight /></span></div>
                <h3 className="mt-12 text-2xl font-black text-[var(--navy)]">{program.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">{program.description}</p>
                <div className={`absolute -right-12 -bottom-16 size-36 rounded-full blur-2xl ${program.accent === "yellow" ? "bg-yellow-300/30" : program.accent === "orange" ? "bg-orange-300/25" : "bg-blue-300/25"}`} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
