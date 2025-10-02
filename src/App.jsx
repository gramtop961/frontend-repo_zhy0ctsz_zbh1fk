import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent" />
      <Header />
      <main className="relative">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
