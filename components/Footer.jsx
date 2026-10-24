export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-xl font-black tracking-tight">
            APEX<span className="text-lime-400">.</span>
            <span className="ml-2 text-sm font-bold tracking-widest text-zinc-300">
              ATHLETICS
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Professional sports club and academy. Train hard, play harder,
            and become the best version of yourself.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li><a href="#home" className="hover:text-lime-400">Home</a></li>
            <li><a href="#programs" className="hover:text-lime-400">Programs</a></li>
            <li><a href="#trainers" className="hover:text-lime-400">Trainers</a></li>
            <li><a href="#pricing" className="hover:text-lime-400">Pricing</a></li>
            <li><a href="#contact" className="hover:text-lime-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Programs</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li><a href="#programs" className="hover:text-lime-400">Football Academy</a></li>
            <li><a href="#programs" className="hover:text-lime-400">Cricket Training</a></li>
            <li><a href="#programs" className="hover:text-lime-400">Fitness & Gym</a></li>
            <li><a href="#programs" className="hover:text-lime-400">Basketball</a></li>
            <li><a href="#programs" className="hover:text-lime-400">Swimming</a></li>
            <li><a href="#programs" className="hover:text-lime-400">Martial Arts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li>Main Boulevard, Lahore, Pakistan</li>
            <li>Monday - Sunday</li>
            <li>6:00 AM - 10:00 PM</li>
            <li>hello@apexathletics.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © 2026 APEX Athletics. All rights reserved.
      </div>
    </footer>
  );
}
