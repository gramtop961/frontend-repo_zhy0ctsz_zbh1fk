import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Rocket className="h-6 w-6 text-indigo-400" />
          <span className="font-semibold tracking-tight">Vibe Starter</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#cta">Get Started</a>
          <a className="hover:text-white transition" href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a>
        </nav>
      </div>
    </header>
  );
}
