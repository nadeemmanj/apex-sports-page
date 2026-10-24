const testimonials = [
  {
    name: "Bilal Ahmed",
    program: "Football Academy",
    text: "I joined as a complete beginner. In 6 months my fitness, stamina and game sense improved completely. The coaches really care about every player.",
  },
  {
    name: "Fatima Noor",
    program: "Fitness & Gym",
    text: "Best gym environment I have trained in. Clean equipment, flexible timings and trainers who actually guide you on diet and form.",
  },
  {
    name: "Hassan Tariq",
    program: "Cricket Training",
    text: "Professional nets, proper match practice and honest feedback after every session. My batting average improved in one season.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-lime-400">
            MEMBER STORIES
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            What Our Members Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7"
            >
              <p className="text-lg font-bold text-lime-400">★★★★★</p>
              <p className="mt-4 leading-relaxed text-zinc-300">
                "{item.text}"
              </p>
              <div className="mt-6 border-t border-zinc-800 pt-5">
                <p className="font-bold">{item.name}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.program}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
