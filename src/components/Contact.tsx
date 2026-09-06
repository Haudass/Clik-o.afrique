import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import clsx from 'clsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    besoin: ''
  });

  return (
    <section id="contact" className="py-24 relative bg-[#020408] border-t border-surfaceLight/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-surfaceLight bg-surface text-sm font-medium text-textSecondary uppercase tracking-widest">
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
              Prêt à développer votre activité en ligne ?
            </h2>
            <p className="text-xl text-textSecondary mb-10 leading-relaxed font-light">
              Remplissez ce court formulaire ou contactez-nous directement. Nous serons ravis d'étudier votre projet.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-surfaceLight/50 flex items-center justify-center border border-white/5 mr-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <MapPin className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <span className="text-lg text-textSecondary font-light">Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-surfaceLight/50 flex items-center justify-center border border-white/5 mr-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <Phone className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <span className="text-lg font-medium text-white">+225 05 44 81 67 71</span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-surfaceLight/50 flex items-center justify-center border border-white/5 mr-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <span className="text-lg font-medium text-white">contact@clikeo.afrique</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-surfaceLight text-textSecondary hover:text-white hover:border-white/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form action="https://formsubmit.co/winnock07@gmail.com" method="POST" className="bg-surface/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-surfaceLight shadow-2xl relative">
            <div className="space-y-6 relative z-10">
              <input type="hidden" name="_subject" value="Nouvelle demande de contact - Clikéo!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-textSecondary mb-2">Votre nom complet</label>
                <input 
                  type="text" 
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  className="w-full px-5 py-4 bg-background border border-surfaceLight rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-light"
                  placeholder="Jean Dupont"
                />
              </div>
              
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-textSecondary mb-2">Numéro WhatsApp / Téléphone</label>
                <input 
                  type="tel" 
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  className="w-full px-5 py-4 bg-background border border-surfaceLight rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-light"
                  placeholder="+225 00 00 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="besoin" className="block text-sm font-medium text-textSecondary mb-2">Parlez-nous de votre projet</label>
                <textarea 
                  id="besoin"
                  name="besoin"
                  required
                  rows={4}
                  value={formData.besoin}
                  onChange={(e) => setFormData({...formData, besoin: e.target.value})}
                  className="w-full px-5 py-4 bg-background border border-surfaceLight rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none font-light"
                  placeholder="J'aimerais créer un site web pour mon entreprise de..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] group mt-4"
              >
                Envoyer ma demande
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

