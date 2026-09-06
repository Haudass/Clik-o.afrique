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

  const whatsappMsg = "Bonjour Clikéo, je souhaite parler à un expert.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  const menuItems = ['Accueil', 'Services', 'Réalisations', 'À propos', 'Contact'];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-xl py-4 border-surfaceLight shadow-lg shadow-black/20' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-textPrimary">
          Clikéo<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const anchor = item === 'À propos' ? 'a-propos' : item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return (
              <a
                key={item}
                href={`#${anchor}`}
                className="text-sm font-medium text-textSecondary hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            );
          })}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
        >
          Parler à un expert
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-textPrimary hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-surfaceLight py-6 px-6 flex flex-col gap-6 shadow-2xl">
          {menuItems.map((item) => {
            const anchor = item === 'À propos' ? 'a-propos' : item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return (
              <a
                key={item}
                href={`#${anchor}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-textSecondary hover:text-white transition-colors"
              >
                {item}
              </a>
            );
          })}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-blue-500 transition-colors mt-2"
          >
            Parler à un expert
          </a>
        </div>
      )}
    </header>
  );
}
