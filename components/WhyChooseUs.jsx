const features = [
  {
    icon: "🏆",
    title: "Expert Coaches",
    text: "Certified coaches with 10+ years of experience in national and club-level training.",
  },
  {
    icon: "🏋️",
    title: "Modern Facilities",
    text: "Professional grounds, indoor courts, gym equipment and safe training environment.",
  },
  {
    icon: "🕐",
    title: "Flexible Timings",
    text: "Morning and evening batches for students, professionals and kids — 7 days a week.",
  },
  {
    icon: "🤝",
    title: "All Levels Welcome",
    text: "From complete beginners to advanced athletes, every program has a level for you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-lime-400">
            WHY APEX ATHLETICS
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Why Train With Us?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            We focus on real progress — proper coaching, safe training and a
            community that keeps you motivated.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-lime-400/60"
            >
              <p className="text-4xl">{feature.icon}</p>
              <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
