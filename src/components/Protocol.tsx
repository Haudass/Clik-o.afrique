import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const steps = [
  {
    id: 1,
    title: "Analyse & Stratégie",
    description: "Nous étudions votre marché et définissons un plan d'action précis, sur-mesure pour votre PME.",
    points: ["Analyse approfondie du besoin", "Audit de votre présence actuelle", "Proposition stratégique détaillée", "Validation du plan d'action"],
    cta: "Démarrer mon projet",
    color: "primary" // Blue
  },
  {
    id: 2,
    title: "Création & Lancement",
    description: "Conception de votre plateforme et déploiement de vos campagnes avec une exigence de qualité maximale.",
    points: ["Design UI/UX premium", "Développement web performant", "Création des visuels publicitaires", "Mise en ligne et lancement Ads"],
    cta: "Voir notre méthode",
    color: "accent" // Cyan
  },
  {
    id: 3,
    title: "Optimisation Continue",
    description: "Le lancement n'est que le début. Nous analysons les données pour améliorer constamment votre retour sur investissement.",
    points: ["Suivi précis des conversions", "A/B Testing des annonces", "Rapports de performance mensuels", "Ajustements stratégiques"],
    cta: "Atteindre vos objectifs",
    color: "light"
  }
];

export default function Protocol() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
    
    // Stack effect configuration
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 100px', // When card reaches 100px from top
        endTrigger: containerRef.current,
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        id: `card-pin-${i}`
      });
    });

  }, []);

  const whatsappMsg = "Bonjour Clikéo, je souhaite démarrer l'analyse de mon projet.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="processus" ref={sectionRef} className="py-24 relative bg-background">
      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-surfaceLight bg-surface text-sm font-medium text-textSecondary uppercase tracking-widest">
          Processus de travail
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Notre Méthodologie.</h2>
        <p className="text-textSecondary mt-6 text-lg font-light max-w-2xl mx-auto">De l'analyse initiale à l'optimisation continue, une méthode éprouvée orientée résultats.</p>
      </div>

      <div ref={containerRef} className="relative container mx-auto px-6 pb-24">
        
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={clsx(
              "stack-card w-full min-h-[70vh] rounded-[3rem] p-8 md:p-16 mb-8 md:mb-24 flex flex-col justify-center border shadow-2xl relative overflow-hidden",
              step.color === 'primary' ? 'bg-[#080d1a] border-primary/20' : 
              step.color === 'accent' ? 'bg-[#05111a] border-accent/20' : 'bg-surface border-surfaceLight'
            )}
            style={{ 
              boxShadow: '0 -20px 50px -20px rgba(0,0,0,0.8)',
              zIndex: index
            }}
          >
            {/* Background noise/glow per card */}
            <div className={clsx(
              "absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20",
              step.color === 'primary' ? 'bg-primary' : step.color === 'accent' ? 'bg-accent' : 'bg-white'
            )}></div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              
              <div className="flex flex-col justify-center">
                <div className="text-sm font-bold tracking-widest text-textSecondary uppercase mb-4">Étape 0{step.id}</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{step.title}</h3>
                <p className="text-xl text-textSecondary mb-10 font-light leading-relaxed">
                  {step.description}
                </p>
                
                <div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl transition-all duration-300 group",
                      step.color === 'primary' ? 'bg-primary text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 
                      step.color === 'accent' ? 'bg-accent text-background hover:bg-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'bg-white text-background hover:bg-gray-200'
                    )}
                  >
                    {step.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-center p-5 bg-background/40 rounded-2xl border border-white/5 backdrop-blur-md">
                      <CheckCircle2 className={clsx("mr-4 flex-shrink-0", step.color === 'primary' ? 'text-primary' : step.color === 'accent' ? 'text-accent' : 'text-white')} size={24} strokeWidth={1.5} />
                      <span className="text-lg text-textPrimary font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}

