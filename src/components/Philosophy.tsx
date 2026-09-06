import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!textRef.current || !listRef.current) return;
    
    // Split text into words for animation
    const words = textRef.current.innerText.split(' ');
    textRef.current.innerHTML = '';
    
    words.forEach(word => {
      const span = document.createElement('span');
      span.innerText = word;
      span.style.opacity = '0.1';
      span.style.display = 'inline-block';
      span.style.marginRight = '0.25em';
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll('span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'center 40%',
        scrub: 1,
      }
    });

    tl.to(spans, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
    });

    // Reveal list items
    const items = listRef.current.querySelectorAll('li');
    gsap.fromTo(items, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
        }
      }
    );

  }, []);

  const advantages = [
    "Expertise digitale adaptée aux PME africaines",
    "Sites rapides et professionnels",
    "Stratégies publicitaires orientées résultats",
    "Accompagnement personnalisé"
  ];

  return (
    <section ref={containerRef} id="pourquoi" className="py-32 relative bg-[#020408] overflow-hidden border-t border-surfaceLight/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-8">Pourquoi Clikéo</h2>
          
          <div 
            ref={textRef}
            className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white tracking-tight"
          >
            Nous ne vendons pas seulement des sites web. Nous construisons des moteurs de croissance.
          </div>
        </div>

        <ul ref={listRef} className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 mt-12">
          {advantages.map((adv, idx) => (
            <li key={idx} className="flex items-center gap-4 bg-surfaceLight/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-lg">
              <CheckCircle2 className="text-accent flex-shrink-0" size={28} strokeWidth={1.5} />
              <span className="text-lg text-textPrimary font-medium">{adv}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Subtle organic noise/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
    </section>
  );
}

