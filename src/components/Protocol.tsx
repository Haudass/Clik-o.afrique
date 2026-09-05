import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const services = [
  {
    id: 1,
    title: "Sites vitrines professionnels",
    description: "Des sites modernes qui présentent votre entreprise, rassurent vos clients et facilitent les demandes de contact.",
    points: ["Design moderne", "Optimisé mobile", "Livraison rapide", "Formulaire et WhatsApp intégrés"],
    cta: "Créer mon site",
    color: "primary" // Green
  },
  {
    id: 2,
    title: "Campagnes publicitaires",
    description: "Nous créons et optimisons vos publicités Facebook Ads et Google Ads pour toucher les bons clients.",
    points: ["Ciblage local", "Création des campagnes", "Optimisation du budget", "Suivi des performances"],
    cta: "Lancer ma publicité",
    color: "accent" // Gold
  },
  {
    id: 3,
    title: "Nos Réalisations",
    description: "Découvrez comment nous avons transformé la présence digitale d'entreprises locales.",
    projects: [
      { name: "Restaurant moderne", cat: "Site vitrine + acquisition clients" },
      { name: "Centre de formation", cat: "Site web + publicité Facebook" },
      { name: "Entreprise locale", cat: "Présence digitale complète" }
    ],
    cta: "Voir les projets",
    color: "surfaceLight"
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

  const whatsappMsg = "Bonjour Clikéo, je souhaite en savoir plus sur vos services.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="services" ref={sectionRef} className="py-24 relative bg-background">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-textPrimary">Notre Protocole</h2>
        <p className="text-textSecondary mt-4 text-lg">De la création à l'acquisition, une méthode éprouvée.</p>
      </div>

      <div ref={containerRef} className="relative container mx-auto px-6 pb-24">
        
        {services.map((svc, index) => (
          <div 
            key={svc.id}
            className={clsx(
              "stack-card w-full min-h-[70vh] rounded-[3rem] p-8 md:p-16 mb-8 md:mb-24 flex flex-col justify-center border shadow-2xl relative overflow-hidden",
              svc.color === 'primary' ? 'bg-surface border-primary/20' : 
              svc.color === 'accent' ? 'bg-[#0f1411] border-accent/20' : 'bg-surface border-surfaceLight'
            )}
            style={{ 
              boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.5)',
              zIndex: index
            }}
          >
            {/* Background noise/glow per card */}
            <div className={clsx(
              "absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20",
              svc.color === 'primary' ? 'bg-primary' : svc.color === 'accent' ? 'bg-accent' : 'bg-textSecondary'
            )}></div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              
              <div>
                <div className="text-sm font-bold tracking-widest text-textSecondary uppercase mb-4">Étape 0{svc.id}</div>
                <h3 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">{svc.title}</h3>
                <p className="text-xl text-textSecondary mb-8 leading-relaxed">
                  {svc.description}
                </p>
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 group",
                    svc.color === 'primary' ? 'bg-primary text-background hover:bg-emerald-400' : 
                    svc.color === 'accent' ? 'bg-accent text-background hover:bg-yellow-400' : 'bg-surfaceLight text-textPrimary border border-surfaceLight hover:border-textSecondary/30'
                  )}
                >
                  {svc.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <div className="flex flex-col justify-center">
                {svc.points && (
                  <div className="space-y-4">
                    {svc.points.map((point, i) => (
                      <div key={i} className="flex items-center p-4 bg-surfaceLight/50 rounded-2xl border border-surfaceLight backdrop-blur-sm">
                        <CheckCircle2 className={clsx("mr-4", svc.color === 'primary' ? 'text-primary' : 'text-accent')} size={24} />
                        <span className="text-lg text-textPrimary font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {svc.projects && (
                  <div className="space-y-4" id="réalisations">
                    {svc.projects.map((proj, i) => (
                      <div key={i} className="group flex items-center justify-between p-4 bg-surfaceLight/50 rounded-2xl border border-surfaceLight hover:border-primary/50 transition-colors cursor-pointer">
                        <div>
                          <div className="text-lg text-textPrimary font-medium">{proj.name}</div>
                          <div className="text-sm text-textSecondary">{proj.cat}</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary transition-colors">
                           <ArrowRight size={18} className="text-textSecondary group-hover:text-background" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}
