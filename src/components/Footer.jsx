export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Vibe Starter. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="hover:text-white transition">React</a>
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:text-white transition">Tailwind</a>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="hover:text-white transition">Vite</a>
        </div>
      </div>
    </footer>
  );
}
