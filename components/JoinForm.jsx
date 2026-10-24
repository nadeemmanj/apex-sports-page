"use client";

import { useState } from "react";

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-zinc-900 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-lime-400">
            FREE TRIAL
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Book Your Free Trial Session
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Fill the form and our team will call you within 24 hours to
            confirm your free trial session. No payment, no commitment.
          </p>

          <div className="mt-8 space-y-4 text-zinc-300">
            <p>
              <span className="font-bold text-white">Location: </span>
              Main Boulevard, Lahore, Pakistan
            </p>
            <p>
              <span className="font-bold text-white">Timings: </span>
              Monday to Sunday, 6:00 AM - 10:00 PM
            </p>
            <p>
              <span className="font-bold text-white">Email: </span>
              hello@apexathletics.com
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <p className="text-5xl">✓</p>
              <h3 className="mt-4 text-2xl font-bold">
                Thank You! Your Request Is Received.
              </h3>
              <p className="mt-3 text-zinc-400">
                Our team will contact you within 24 hours to confirm your
                free trial session.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-zinc-600 px-6 py-3 text-sm font-bold transition hover:border-lime-400 hover:text-lime-400"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-lime-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="03xx-xxxxxxx"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-lime-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Select Program
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                >
                  <option value="" disabled>
                    Choose a program
                  </option>
                  <option>Football Academy</option>
                  <option>Cricket Training</option>
                  <option>Fitness & Gym</option>
                  <option>Basketball</option>
                  <option>Swimming</option>
                  <option>Martial Arts</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-lime-400 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-lime-300"
              >
                Book Free Trial
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
