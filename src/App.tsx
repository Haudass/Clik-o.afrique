import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Features'; // Features renamed to Services internally
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Offers from './components/Offers';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Basic smooth scroll setup for GSAP
    ScrollTrigger.defaults({
      markers: false,
    });
    
    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Protocol />
        <Offers />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
