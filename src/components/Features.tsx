import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MonitorSmartphone, Target, LineChart } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal Cards
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    // Animation 2: Typewriter effect
    gsap.to(typewriterRef.current, {
      text: "Facebook Ads...",
      duration: 2,
      delay: 1,
      repeat: -1,
      yoyo: true,
      ease: "none",
      scrollTrigger: {
        trigger: card2Ref.current,
        start: 'top 80%',
      }
    });

    // Animation 3: Calendar / Partner animation
    gsap.to(calendarRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear"
    });

  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative z-10 bg-background border-t border-surfaceLight/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-surfaceLight bg-surface text-sm font-medium text-textSecondary uppercase tracking-widest">
            Expertises
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Nos Services.</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg font-light">
            Des solutions digitales sur-mesure pour propulser les PME et TPE africaines vers le succès.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Rotate Animation (Web) */}
          <div 
            ref={card1Ref}
            className="group bg-surface p-8 rounded-3xl border border-surfaceLight hover:border-primary/50 transition-colors duration-500 overflow-hidden relative shadow-xl"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500 pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-surfaceLight rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:rotate-[360deg] transition-transform duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              <MonitorSmartphone className="text-primary" size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-white">Création de sites web</h3>
            <ul className="text-textSecondary leading-relaxed space-y-2 mb-6 font-light">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Site vitrine professionnel</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Design responsive & mobile-first</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Optimisation SEO de base</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Intégration WhatsApp directe</li>
            </ul>
          </div>

          {/* Card 2: Typewriter Animation (Ads) */}
          <div 
            ref={card2Ref}
            className="group bg-surface p-8 rounded-3xl border border-surfaceLight hover:border-accent/50 transition-colors duration-500 overflow-hidden relative shadow-xl"
          >
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500 pointer-events-none"></div>
             
             <div className="w-16 h-16 bg-surfaceLight rounded-2xl flex items-center justify-center mb-8 border border-white/5">
              <Target className="text-accent" size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-white h-8 flex items-center">
              <span ref={typewriterRef}>Publicité digitale</span><span className="animate-pulse ml-1 text-accent">|</span>
            </h3>
            <ul className="text-textSecondary leading-relaxed space-y-2 mb-6 font-light">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>Facebook & Instagram Ads</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>Google Ads (Search & Display)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>Création de contenus impactants</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>Optimisation continue du ROI</li>
            </ul>
          </div>

          {/* Card 3: Calendar/Partner Animation (Analytics/Strategy) */}
          <div 
            ref={card3Ref}
            className="group bg-surface p-8 rounded-3xl border border-surfaceLight hover:border-primary/50 transition-colors duration-500 overflow-hidden relative shadow-xl"
          >
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500 pointer-events-none"></div>
             
             <div className="w-16 h-16 bg-surfaceLight rounded-2xl flex items-center justify-center mb-8 border border-white/5 relative">
              <div ref={calendarRef} className="absolute inset-0 border-2 border-dashed border-textSecondary/20 rounded-2xl"></div>
              <LineChart className="text-primary relative z-10" size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-white">Analyse & Stratégie</h3>
            <ul className="text-textSecondary leading-relaxed space-y-2 mb-6 font-light">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Audits de performance réguliers</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Suivi des conversions précis</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Rapports analytiques détaillés</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>Accompagnement personnalisé</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

