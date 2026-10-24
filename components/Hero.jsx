const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Expert Coaches" },
  { value: "6", label: "Sports Programs" },
  { value: "10+", label: "Years of Excellence" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        alt="Athletes training at APEX Athletics"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 text-xs font-bold tracking-widest text-lime-400">
            SPORTS CLUB & ACADEMY
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Train Hard.
            <br />
            Play <span className="text-lime-400">Harder.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            World-class coaching, modern facilities, and programs for every
            age and level. Start your journey with a free trial session today.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-lime-400 px-8 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-lime-300"
            >
              Book Free Trial
            </a>
            <a
              href="#programs"
              className="rounded-full border border-zinc-500 px-8 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              Explore Programs
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-lime-400">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
