const trainers = [
  {
    name: "Ahmed Raza",
    role: "Head Football Coach",
    experience: "12 Years Experience",
    specialty: "Football",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sarah Malik",
    role: "Fitness & Strength Coach",
    experience: "8 Years Experience",
    specialty: "Fitness",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Usman Ali",
    role: "Cricket Coach",
    experience: "10 Years Experience",
    specialty: "Cricket",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ayesha Khan",
    role: "Swimming Instructor",
    experience: "7 Years Experience",
    specialty: "Swimming",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-lime-400">
            MEET THE TEAM
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Train With The Best
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Certified coaches who know how to take you from beginner to
            competition level.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-lime-400/60"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-bold text-lime-400">
                  {trainer.specialty}
                </span>
                <h3 className="mt-3 text-xl font-bold">{trainer.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{trainer.role}</p>
                <p className="mt-3 text-xs font-semibold text-zinc-300">
                  {trainer.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
