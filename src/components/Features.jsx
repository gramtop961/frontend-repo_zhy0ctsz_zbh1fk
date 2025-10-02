import { Star, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-5 w-5 text-yellow-400" />,
    title: 'Instant HMR',
    desc: 'Lightning-fast dev server powered by Vite with hot module replacement.',
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Typed & Secure Ready',
    desc: 'Clean structure ready for adding types and backend integration.',
  },
  {
    icon: <Star className="h-5 w-5 text-sky-400" />,
    title: 'Beautiful UI',
    desc: 'Tailwind, Radix, and shadcn/ui conventions for rapid, accessible interfaces.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">Features</h2>
      <p className="text-white/70 mt-2 max-w-2xl">
        Everything you need to kickstart your project, organized and production-minded.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 border border-white/10">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
            </div>
            <p className="text-white/70 mt-3 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
