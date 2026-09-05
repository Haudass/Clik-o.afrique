import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap, Tag, Users } from 'lucide-react';

export default function Features() {
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

    // Animation 1: Rotate on hover (handled in CSS/Tailwind group-hover)
    
    // Animation 2: Typewriter effect
    gsap.to(typewriterRef.current, {
      text: "Prix adaptés...",
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
    <section ref={sectionRef} className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Pourquoi choisir Clikéo ?</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg">
            Nous avons conçu notre approche pour répondre exactement aux besoins des entreprises locales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Rotate Animation */}
          <div 
            ref={card1Ref}
            className="group bg-surface p-8 rounded-4xl border border-surfaceLight hover:border-primary/50 transition-colors duration-500 overflow-hidden relative"
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            
            <div className="w-16 h-16 bg-surfaceLight rounded-2xl flex items-center justify-center mb-8 border border-surfaceLight group-hover:rotate-[360deg] transition-transform duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              <Zap className="text-primary" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-textPrimary">Rapidité</h3>
            <p className="text-textSecondary leading-relaxed">
              Des solutions digitales livrées rapidement pour permettre à votre activité d'avancer sans friction.
            </p>
          </div>

          {/* Card 2: Typewriter Animation */}
          <div 
            ref={card2Ref}
            className="bg-surface p-8 rounded-4xl border border-surfaceLight hover:border-accent/50 transition-colors duration-500 overflow-hidden relative"
          >
             <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
             
             <div className="w-16 h-16 bg-surfaceLight rounded-2xl flex items-center justify-center mb-8 border border-surfaceLight">
              <Tag className="text-accent" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-textPrimary h-8">
              <span ref={typewriterRef}>Prix</span><span className="animate-pulse">|</span>
            </h3>
            <p className="text-textSecondary leading-relaxed">
              Des offres pensées spécifiquement pour les PME et entrepreneurs ivoiriens, avec un ROI mesurable.
            </p>
          </div>

          {/* Card 3: Calendar/Partner Animation */}
          <div 
            ref={card3Ref}
            className="bg-surface p-8 rounded-4xl border border-surfaceLight hover:border-primary/50 transition-colors duration-500 overflow-hidden relative"
          >
             <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
             
             <div className="w-16 h-16 bg-surfaceLight rounded-2xl flex items-center justify-center mb-8 border border-surfaceLight relative">
              <div ref={calendarRef} className="absolute inset-0 border-2 border-dashed border-textSecondary/30 rounded-2xl"></div>
              <Users className="text-primary relative z-10" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-textPrimary">Un seul partenaire pour tout</h3>
            <p className="text-textSecondary leading-relaxed">
              Création du site et acquisition de clients réunies au même endroit pour une stratégie cohérente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
