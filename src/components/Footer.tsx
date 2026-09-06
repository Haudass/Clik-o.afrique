import { MessageCircle, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = `https://wa.me/22500000000`;

  return (
    <footer className="bg-[#020408] border-t border-surfaceLight/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div>
            <a href="#" className="text-3xl font-bold tracking-tighter text-white inline-block mb-4">
              Clikéo<span className="text-primary">.</span>
            </a>
            <p className="text-textSecondary text-lg max-w-sm font-light">
              L'agence digitale premium qui transforme votre présence en ligne en opportunités réelles.
            </p>
          </div>

          <div className="flex md:justify-end items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-textSecondary hover:text-white hover:border-white/50 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-textSecondary hover:text-white hover:border-white/50 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-textSecondary hover:text-white hover:border-white/50 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-surfaceLight/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-textSecondary font-light">
            © 2026 Clikéo. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surfaceLight/50 border border-white/5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs text-textSecondary uppercase tracking-widest font-medium">Système Opérationnel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
