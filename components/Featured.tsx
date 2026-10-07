import Image from "next/image";
import Reveal from "./Reveal";

const featured = [
  {
    title: "Physics Group Tutions",
    text: "A dedicated Physics learning focus for students preparing through school academics and competitive exam pathways.",
    image: "/gallery/physics-poster.png"
  },
  {
    title: "Competitive Exam Preparation",
    text: "IIT-JEE, NEET and CET oriented classroom preparation with a strong emphasis on concepts and practice.",
    image: "/gallery/classroom.png"
  },
  {
    title: "Foundation Learning",
    text: "Foundation programs for school students who want to strengthen core concepts early.",
    image: "/gallery/students.png"
  }
] as const;

export default function Featured() {
  return (
    <section className="section-pad bg-[var(--navy)] text-white">
      <div className="container-shell">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--yellow)]">Featured focus</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-.035em] sm:text-5xl">A closer look at the learning priorities.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.title} delay={i * .06}>
              <article className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[.055]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 90vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-100/70">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
