import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(titleRef.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.4, delay: 0.2 }
    )
    .fromTo(subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      '-=1'
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.8'
    )
    .fromTo(imgRef.current,
      { scale: 0.9, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' },
      '-=1.2'
    );
    
    // Slow pulse on glow
    gsap.to(glowRef.current, {
      opacity: 0.7,
      scale: 1.1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const whatsappMsg = "Bonjour Clikéo, je souhaite un devis pour mon projet digital.";
  const whatsappUrl = `https://wa.me/22500000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background" ref={heroRef}>
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ backgroundImage: 'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 mt-12">
        
        {/* Text Content */}
        <div className="lg:col-span-7 z-10 pr-0 lg:pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surfaceLight border border-surfaceLight/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-textSecondary uppercase tracking-widest">Agence Digitale Premium</span>
          </div>
          
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-textPrimary"
          >
            Transformez votre présence digitale en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              véritable machine
            </span> à attirer des clients.
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-textSecondary mb-10 max-w-2xl leading-relaxed font-light"
          >
            Clikéo crée des sites web professionnels et déploie des campagnes publicitaires performantes pour aider les PME à développer leur activité.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center">
                Demander un devis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            
            <a 
              href="#realisations"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-textPrimary bg-transparent border border-surfaceLight rounded-lg hover:bg-surfaceLight hover:border-textSecondary/50 transition-all duration-300 group"
            >
              <Play className="mr-3 text-accent group-hover:scale-110 transition-transform" size={18} fill="currentColor" />
              Découvrir nos réalisations
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div 
          ref={imgRef}
          className="lg:col-span-5 relative z-10 w-full h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl border border-surfaceLight/50"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
            alt="Interface analytique et développement" 
            className="w-full h-full object-cover object-left"
          />
          
          {/* Glassmorphism Floating Cards */}
          <div className="absolute bottom-10 left-8 z-20 bg-background/60 backdrop-blur-xl p-5 rounded-xl border border-white/10 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div>
                <div className="text-xs text-textSecondary uppercase tracking-wider">Acquisition</div>
                <div className="text-sm font-semibold text-white">Performances Ads</div>
              </div>
            </div>
            <div className="text-3xl font-light text-white tracking-tight mt-1">+240<span className="text-accent text-xl">%</span></div>
          </div>
        </div>
        
      </div>
      
      {/* Atmospheric Glows */}
      <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}

