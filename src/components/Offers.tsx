import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const packs = [
  {
    name: "Présence",
    description: "Pour les entreprises qui veulent être visibles en ligne avec une image professionnelle.",
    price: "Sur devis",
    features: [
      "Site vitrine professionnel",
      "Design responsive",
      "Optimisation SEO de base",
      "Intégration WhatsApp",
      "Hébergement & Domaine (1 an)"
    ],
    highlight: false,
    color: "surfaceLight"
  },
  {
    name: "Acquisition",
    description: "Le combo parfait : un site performant couplé à des campagnes pour attirer des clients.",
    price: "Sur devis",
    features: [
      "Tout le Pack Présence",
      "Stratégie d'acquisition",
      "Campagnes Facebook & Instagram",
      "Google Ads (Search)",
      "Rapport de performance mensuel"
    ],
    highlight: true,
    color: "primary"
  },
  {
    name: "Croissance",
    description: "Un accompagnement digital complet pour scaler votre activité sereinement.",
    price: "Sur devis",
    features: [
      "Tout le Pack Acquisition",
      "Refonte de l'identité visuelle",
      "A/B Testing avancé",
      "Consulting stratégique mensuel",
      "Support prioritaire 7j/7"
    ],
    highlight: false,
    color: "accent"
  }
];

export default function Offers() {
  const whatsappMsg = "Bonjour Clikéo, je souhaite avoir un devis pour l'une de vos offres.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="tarifs" className="py-24 relative bg-background border-t border-surfaceLight/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-surfaceLight bg-surface text-sm font-medium text-textSecondary uppercase tracking-widest">
            Offres Commerciales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">L'investissement juste.</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg font-light">
            Des packs conçus pour répondre à chaque stade de développement de votre entreprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packs.map((pack, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "relative flex flex-col p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2",
                pack.highlight 
                  ? "bg-gradient-to-b from-surface to-[#0a1526] border border-primary/30 shadow-[0_0_40px_rgba(37,99,235,0.15)]" 
                  : "bg-surface border border-surfaceLight"
              )}
            >
              {pack.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    Recommandé
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
                <p className="text-textSecondary text-sm min-h-[40px] font-light">{pack.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-surfaceLight/50">
                <div className="text-3xl font-bold text-white">{pack.price}</div>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {pack.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={clsx("flex-shrink-0 mt-0.5", pack.highlight ? "text-primary" : "text-textSecondary")} size={20} strokeWidth={2} />
                    <span className="text-textSecondary font-light">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "w-full py-4 rounded-xl text-center font-medium transition-all duration-300",
                  pack.highlight 
                    ? "bg-primary text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]" 
                    : "bg-surfaceLight text-white hover:bg-white hover:text-background"
                )}
              >
                Choisir cette offre
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
