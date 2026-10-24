"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-zinc-950/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="text-xl font-black tracking-tight">
          APEX<span className="text-lime-400">.</span>
          <span className="ml-2 hidden text-sm font-bold tracking-widest text-zinc-300 sm:inline">
            ATHLETICS
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-300 transition hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-lime-300"
          >
            Join Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-5 pb-6 pt-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-zinc-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-lime-400 py-3 text-center text-sm font-bold text-zinc-950"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
}
