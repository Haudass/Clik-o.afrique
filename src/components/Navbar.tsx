import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = "Bonjour Clikéo, je souhaite discuter de mon projet digital.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-surfaceLight' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-textPrimary">
          Clikéo<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['Accueil', 'Services', 'Réalisations', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-background bg-primary rounded-full hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] magnetic-btn"
        >
          Discuter de mon projet
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-textPrimary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-md border-b border-surfaceLight py-6 px-6 flex flex-col gap-6 shadow-xl">
          {['Accueil', 'Services', 'Réalisations', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-textSecondary hover:text-textPrimary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-background bg-primary rounded-full hover:bg-emerald-400 transition-colors mt-2"
          >
            Discuter de mon projet
          </a>
        </div>
      )}
    </header>
  );
}
