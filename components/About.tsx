import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[.86fr_1.14fr]">
        <Reveal>
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -bottom-6 -left-5 hidden h-28 w-28 rounded-2xl bg-[var(--yellow)] sm:block" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 shadow-premium">
              <Image src="/gallery/storefront.png" alt="Aarambh Career Academy storefront" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
            </div>
            <div className="absolute -right-3 -bottom-5 rounded-2xl bg-[var(--navy)] px-5 py-4 text-white shadow-xl sm:-right-7">
              <div className="text-3xl font-black">2017</div>
              <div className="text-xs font-semibold uppercase tracking-[.15em] text-blue-200">Established</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--blue)]">About Aarambh</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-.035em] text-[var(--navy)] sm:text-5xl">A focused classroom environment for ambitious learners.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">AARAMBH Career Academy is a classroom-based coaching institute in Nanded focused on engineering and medical entrance preparation, while supporting school-level academics through foundation programs.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Concept-first", "Clear explanations designed to strengthen fundamentals."],
              ["Exam-oriented", "Practice and preparation aligned to competitive exams."],
              ["Academic support", "Regular assessments, doubt support and study guidance."],
              ["Local classroom", "A dedicated learning environment in Vasant Nagar, Nanded."]
            ].map(([title, text]) => <div key={title} className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4"><div className="font-black text-[var(--navy)]">{title}</div><div className="mt-1 text-sm leading-6 text-slate-500">{text}</div></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
