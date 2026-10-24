const programs = [
  {
    title: "Football Academy",
    level: "All Levels",
    age: "Age 8+",
    sessions: "4 Sessions / Week",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",
    text: "Dribbling, passing, shooting and match tactics with professional football coaches.",
  },
  {
    title: "Cricket Training",
    level: "Beginner to Advanced",
    age: "Age 10+",
    sessions: "5 Sessions / Week",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
    text: "Batting, bowling, fielding and fitness training on professional cricket grounds.",
  },
  {
    title: "Fitness & Gym",
    level: "All Levels",
    age: "Age 16+",
    sessions: "6 Sessions / Week",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    text: "Strength training, cardio and personal workout plans with certified trainers.",
  },
  {
    title: "Basketball",
    level: "Beginner to Advanced",
    age: "Age 9+",
    sessions: "3 Sessions / Week",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    text: "Shooting, defense, teamwork and game strategy on indoor basketball courts.",
  },
  {
    title: "Swimming",
    level: "Beginner to Advanced",
    age: "Age 6+",
    sessions: "4 Sessions / Week",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop",
    text: "Learn freestyle, backstroke and water safety from certified swimming instructors.",
  },
  {
    title: "Martial Arts",
    level: "All Levels",
    age: "Age 7+",
    sessions: "3 Sessions / Week",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
    text: "Boxing, karate and self-defense training that builds strength and discipline.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-lime-400">
              OUR PROGRAMS
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Choose Your Sport
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Six professional programs — pick one, or combine fitness with
              your favourite sport.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-bold transition hover:border-lime-400 hover:text-lime-400"
          >
            Book Free Trial →
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-lime-400/60"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-zinc-950">
                  {program.level}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {program.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-zinc-300">
                  <span className="rounded-full bg-zinc-800 px-3 py-1.5">
                    {program.age}
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1.5">
                    {program.sessions}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-6 block rounded-full bg-zinc-800 py-3 text-center text-sm font-bold transition hover:bg-lime-400 hover:text-zinc-950"
                >
                  Join This Program
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
