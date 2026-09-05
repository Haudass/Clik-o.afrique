import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = `https://wa.me/22500000000`;

  return (
    <footer className="bg-[#020302] border-t border-surfaceLight pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div>
            <a href="#" className="text-3xl font-bold tracking-tighter text-textPrimary inline-block mb-4">
              Clikéo<span className="text-primary">.</span>
            </a>
            <p className="text-textSecondary text-lg max-w-sm">
              Sites web et publicité digitale pour entreprises ambitieuses.
            </p>
          </div>

          <div className="flex md:justify-end items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-surfaceLight flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-surfaceLight flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-surface border border-surfaceLight flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-surfaceLight flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/50 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-surfaceLight flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-textSecondary">
            © 2026 Clikéo. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-textSecondary uppercase tracking-widest font-medium">Système Opérationnel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
