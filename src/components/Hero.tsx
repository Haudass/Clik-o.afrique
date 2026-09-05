import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.8'
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(imgRef.current,
      { scale: 0.8, opacity: 0, rotationX: 15 },
      { scale: 1, opacity: 1, rotationX: 0, duration: 1.5, ease: 'expo.out' },
      '-=1'
    );
  }, []);

  const whatsappMsg = "Bonjour Clikéo, je souhaite discuter de mon projet digital.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" ref={heroRef}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="z-10">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-textPrimary"
          >
            Un site qui <span className="text-primary relative inline-block">
              vend.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
            <br />
            Une publicité qui convertit.
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-textSecondary mb-10 max-w-xl leading-relaxed"
          >
            Clikéo aide les PME et TPE à attirer plus de clients grâce à des sites web professionnels et des campagnes publicitaires efficaces sur Facebook et Google.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-background bg-primary rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] group"
            >
              Parler de mon projet
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-textPrimary bg-surfaceLight rounded-full hover:bg-surface border border-surfaceLight hover:border-textSecondary/30 transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div 
          ref={imgRef}
          className="relative z-10 w-full aspect-[4/3] rounded-4xl overflow-hidden shadow-2xl shadow-primary/10 border border-surfaceLight"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 to-transparent z-10 mix-blend-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" 
            alt="Dashboard de croissance et site web" 
            className="w-full h-full object-cover"
          />
          
          {/* Floating UI Elements for "Tech Organique" vibe */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4">
            <div className="bg-surface/90 backdrop-blur-md p-4 rounded-2xl border border-surfaceLight flex-1 transform -translate-y-4 shadow-lg shadow-black/50">
              <div className="text-sm text-textSecondary mb-1">Nouveaux clients</div>
              <div className="text-2xl font-bold text-primary">+ 142%</div>
            </div>
            <div className="bg-surface/90 backdrop-blur-md p-4 rounded-2xl border border-surfaceLight flex-1 shadow-lg shadow-black/50">
              <div className="text-sm text-textSecondary mb-1">Taux de conversion</div>
              <div className="text-2xl font-bold text-accent">8.4%</div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
