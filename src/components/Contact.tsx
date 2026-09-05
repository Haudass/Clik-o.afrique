import { useState } from 'react';
import { Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    besoin: ''
  });

  // Le formulaire utilise maintenant formsubmit.co pour l'envoi d'email

  return (
    <section id="contact" className="py-24 relative bg-[#040605] border-t border-surfaceLight">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-textPrimary">Parlons de votre projet</h2>
            <p className="text-xl text-textSecondary mb-10 leading-relaxed">
              Prêt à accélérer votre croissance ? Remplissez ce formulaire court pour démarrer la discussion sur WhatsApp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-textSecondary">
                <MapPin className="text-primary mr-4" size={24} />
                <span className="text-lg">Disponible pour accompagner les entreprises partout en Côte d'Ivoire.</span>
              </div>
              <div className="flex items-center text-textSecondary">
                <Phone className="text-primary mr-4" size={24} />
                <span className="text-lg font-medium text-textPrimary">+225 05 44 81 67 71</span>
              </div>
            </div>
          </div>

          <form action="https://formsubmit.co/winac07@gmail.com" method="POST" className="bg-surface p-8 md:p-10 rounded-[2rem] border border-surfaceLight shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2rem] pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <input type="hidden" name="_subject" value="Nouvelle demande de contact - Clikéo!" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-textSecondary mb-2">Votre nom</label>
                <input 
                  type="text" 
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  className="w-full px-5 py-4 bg-[#0a0f0d] border border-surfaceLight rounded-xl text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Ex: Jean Dupont"
                />
              </div>
              
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-textSecondary mb-2">Téléphone WhatsApp</label>
                <input 
                  type="tel" 
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  className="w-full px-5 py-4 bg-[#0a0f0d] border border-surfaceLight rounded-xl text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="+225 00 00 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="besoin" className="block text-sm font-medium text-textSecondary mb-2">Votre besoin</label>
                <textarea 
                  id="besoin"
                  name="besoin"
                  required
                  rows={4}
                  value={formData.besoin}
                  onChange={(e) => setFormData({...formData, besoin: e.target.value})}
                  className="w-full px-5 py-4 bg-[#0a0f0d] border border-surfaceLight rounded-xl text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Décrivez brièvement votre projet ou votre problème actuel..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 text-base font-semibold text-background bg-primary rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group"
              >
                Envoyer ma demande
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
