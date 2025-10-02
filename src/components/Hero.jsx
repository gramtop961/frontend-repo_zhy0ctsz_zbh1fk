export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Ship faster with a beautiful Vite + React + Tailwind base
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Pre-wired components, modern tooling, and elegant styles so you can focus on building features, not boilerplate.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-500 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
