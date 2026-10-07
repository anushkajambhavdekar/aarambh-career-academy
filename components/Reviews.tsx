import Reveal from "./Reveal";
import { testimonials } from "@/data/site";

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad bg-[var(--paper)]">
      <div className="container-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--blue)]">What people say</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.035em] text-[var(--navy)] sm:text-5xl">A reputation built around teaching.</h2>
          <p className="mt-5 text-sm leading-6 text-slate-500">These are carefully phrased summaries of themes in the supplied public review information — not fabricated customer quotes.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, i) => <Reveal key={item.quote} delay={i * .07}><article className="h-full rounded-[1.6rem] border border-[var(--line)] bg-white p-7 shadow-sm"><div className="text-4xl font-black text-[var(--yellow)]">“</div><p className="mt-2 text-lg font-bold leading-7 text-[var(--navy)]">{item.quote}</p><div className="mt-7 text-xs font-black uppercase tracking-[.16em] text-slate-400">{item.label}</div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
