import Reveal from "./Reveal";
import { CheckIcon } from "./Icons";
import { supportPoints } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section className="section-pad overflow-hidden bg-[var(--navy)] text-white">
      <div className="container-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--yellow)]">Why choose Aarambh</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.035em] sm:text-5xl">Less noise. More clarity. Better preparation.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-blue-100/75">The academy&apos;s approach is built around classroom learning, strong fundamentals, practice and guidance — the pieces students need to stay consistent through demanding preparation.</p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {supportPoints.map((point, i) => <Reveal key={point} delay={i * .05}><div className="flex min-h-24 items-center gap-4 rounded-2xl border border-white/10 bg-white/[.055] px-5 transition hover:bg-white/[.09]"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--yellow)] text-[var(--navy)]"><CheckIcon /></span><span className="font-bold text-white/90">{point}</span></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
