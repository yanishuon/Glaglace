import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
          Contactez-<span className="text-brand-green">nous</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Une question sur nos parfums ? Une envie de partenariat ? 
          Ou simplement pour nous dire que vous adorez nos glaces ? 
          On adore vous lire !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] border border-brand-light-green shadow-xl shadow-brand-green/5 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-display font-bold text-gray-900">Envoyez un message</h2>
            <p className="text-gray-500">Nous vous répondrons sous 24h à 48h.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Nom</label>
                <input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full px-6 py-4 rounded-2xl bg-brand-light-green/20 border border-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full px-6 py-4 rounded-2xl bg-brand-light-green/20 border border-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Sujet</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-brand-light-green/20 border border-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all appearance-none">
                <option>Question générale</option>
                <option>Commande e-commerce</option>
                <option>Partenariat / Revendeur</option>
                <option>Presse</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
              <textarea 
                rows={5}
                placeholder="Comment pouvons-nous vous aider ?" 
                className="w-full px-6 py-4 rounded-2xl bg-brand-light-green/20 border border-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-brand-green text-white font-bold py-5 rounded-2xl hover:bg-brand-green/90 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-brand-green/20">
              Envoyer le message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12 lg:pt-12"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-gray-900">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-pastel-pink flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-gray-900">Siège Social</h3>
                  <p className="text-gray-600 leading-relaxed">
                    12 rue de la Fraîcheur,<br />
                    75011 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-pastel-yellow flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600 leading-relaxed">+33 1 23 45 67 89</p>
                  <p className="text-xs text-gray-400">Lun - Ven, 9h - 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-pastel-blue flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600 leading-relaxed">bonjour@glaglace.fr</p>
                  <p className="text-xs text-gray-400">Réponse sous 24h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-gray-900">Suivez-nous</h2>
            <div className="flex gap-4">
              <a href="#" className="w-16 h-16 rounded-2xl bg-white border border-brand-light-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm hover:shadow-lg">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="w-16 h-16 rounded-2xl bg-white border border-brand-light-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm hover:shadow-lg">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="w-16 h-16 rounded-2xl bg-white border border-brand-light-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm hover:shadow-lg">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-64 rounded-[2rem] overflow-hidden border border-brand-light-green shadow-inner">
            <img 
              src="https://picsum.photos/seed/map/800/400" 
              alt="Map" 
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-brand-light-green flex items-center gap-2 text-brand-green font-bold">
                <MapPin className="w-5 h-5" />
                Voir sur Google Maps
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
