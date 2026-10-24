const plans = [
  {
    name: "Starter",
    price: "Rs 5,000",
    period: "/month",
    text: "Perfect for beginners starting their fitness journey.",
    features: [
      "Access to 1 program",
      "3 sessions per week",
      "Group training",
      "Locker facility",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "Rs 9,000",
    period: "/month",
    text: "Our most popular plan for serious athletes.",
    features: [
      "Access to all programs",
      "Unlimited sessions",
      "Personal diet plan",
      "1-on-1 coaching session",
      "Locker + shower facility",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "Rs 15,000",
    period: "/month",
    text: "Complete professional training package.",
    features: [
      "Everything in Pro",
      "Personal coach",
      "Competition preparation",
      "Monthly fitness assessment",
      "Priority booking",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-lime-400">
            MEMBERSHIP
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            No hidden charges. Cancel anytime. First trial session is free.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-lime-400 bg-zinc-950 shadow-lg shadow-lime-400/10 lg:scale-105"
                  : "border-zinc-800 bg-zinc-950"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-zinc-950">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{plan.text}</p>

              <p className="mt-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-sm text-zinc-400">{plan.period}</span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-zinc-300">
                    <span className="font-bold text-lime-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                  plan.popular
                    ? "bg-lime-400 text-zinc-950 hover:bg-lime-300"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
