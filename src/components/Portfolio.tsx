import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

const projects = [
  {
    name: "Optima Finance",
    category: "Site vitrine & SEO",
    objective: "Générer des leads B2B",
    solution: "Site vitrine sur-mesure, optimisation SEO, et tunnel de conversion",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  {
    name: "Lumina Studio",
    category: "Acquisition & Social Ads",
    objective: "Augmenter les ventes",
    solution: "Campagnes Facebook Ads ciblées et landing page optimisée",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
  },
  {
    name: "Nexus Tech",
    category: "Stratégie Digitale 360°",
    objective: "Lancement de produit",
    solution: "Site web, stratégie d'acquisition multi-canal et suivi ROI",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2340"
  }
];

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 relative bg-background border-t border-surfaceLight/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-surfaceLight bg-surface text-sm font-medium text-textSecondary uppercase tracking-widest">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Nos Réalisations.</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg font-light">
            Découvrez comment nous aidons nos clients à transformer leur présence en ligne en opportunités réelles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-surface cursor-pointer shadow-xl"
            >
              <div className="absolute inset-0 bg-background z-0">
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-accent text-sm font-medium mb-2 tracking-wide uppercase">{proj.category}</div>
                  <h3 className="text-3xl font-bold text-white mb-2">{proj.name}</h3>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    <p className="text-textSecondary text-sm mb-1 mt-4">
                      <span className="text-white font-medium">Objectif :</span> {proj.objective}
                    </p>
                    <p className="text-textSecondary text-sm mb-6">
                      <span className="text-white font-medium">Solution :</span> {proj.solution}
                    </p>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
