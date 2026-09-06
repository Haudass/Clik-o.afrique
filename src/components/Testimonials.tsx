import { Star, Quote } from 'lucide-react';
import clsx from 'clsx';

const testimonials = [
  {
    name: "Marc Antoine",
    company: "Directeur, BuildTech CI",
    content: "Depuis que Clikéo a refait notre site et gère nos campagnes, nous avons multiplié nos demandes de devis par trois. Une équipe réactive et très pro.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sarah Koné",
    company: "Fondatrice, Élégance & Co",
    content: "Je n'avais aucune connaissance technique, mais ils ont su m'accompagner pas à pas. Le design est magnifique et le site se charge très vite.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Yannick Touré",
    company: "Gérant, Resto Le Phare",
    content: "Leur stratégie sur Facebook Ads a complètement changé la donne pour notre restaurant. Les résultats étaient visibles dès la première semaine.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-background border-t border-surfaceLight/30 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-surfaceLight bg-surface text-sm font-medium text-textSecondary uppercase tracking-widest">
            Témoignages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Ce que disent nos clients.</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg font-light">
            La satisfaction de nos partenaires est notre meilleure publicité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div 
              key={idx}
              className="bg-surface/50 backdrop-blur-sm p-8 rounded-3xl border border-surfaceLight relative group hover:border-primary/50 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-8 text-surfaceLight group-hover:text-primary/20 transition-colors duration-300" size={60} />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-accent" size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-textSecondary text-lg font-light mb-8 leading-relaxed relative z-10">
                "{testi.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 border-t border-surfaceLight/50 pt-6">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-14 h-14 rounded-full object-cover border border-surfaceLight"
                />
                <div>
                  <div className="text-white font-medium">{testi.name}</div>
                  <div className="text-textSecondary text-sm">{testi.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent z-0 pointer-events-none"></div>
    </section>
  );
}
