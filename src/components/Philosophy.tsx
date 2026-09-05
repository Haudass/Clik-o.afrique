import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
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

    gsap.to(spans, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
        end: 'bottom 80%',
        scrub: 1,
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="py-32 relative bg-[#040605] overflow-hidden">
      {/* Darker background for philosophy */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-8">Notre Manifeste</h2>
          
          <div 
            ref={textRef}
            className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-textPrimary"
          >
            Clikéo ne vend pas seulement des sites ou de la publicité. Nous aidons les entreprises à obtenir plus de visibilité, plus de contacts et plus de clients.
          </div>
        </div>
      </div>
      
      {/* Subtle organic noise/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none"></div>
    </section>
  );
}
