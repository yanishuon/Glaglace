import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-light-green/30 border-t border-brand-light-green pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-green p-1.5 rounded-full">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-brand-green">
                Glaglace
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Artisan glacier bio engagé pour le goût et la planète. 
              Des ingrédients locaux, une production éthique et beaucoup de passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-light-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-light-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-light-green flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-gray-900 mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/produits" className="text-gray-600 hover:text-brand-green transition-colors">Nos Glaces</Link></li>
              <li><Link to="/a-propos" className="text-gray-600 hover:text-brand-green transition-colors">Notre Histoire</Link></li>
              <li><Link to="/engagements" className="text-gray-600 hover:text-brand-green transition-colors">Nos Engagements</Link></li>
              <li><Link to="/points-de-vente" className="text-gray-600 hover:text-brand-green transition-colors">Où nous trouver ?</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-gray-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                <span>12 rue de la Fraîcheur,<br />75011 Paris, France</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <span>bonjour@glaglace.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-gray-900 mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">Inscrivez-vous pour recevoir nos nouvelles saveurs et actualités.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-4 py-3 rounded-lg bg-white border border-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
              />
              <button className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-green/90 transition-all">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-light-green flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Glaglace. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-green">Mentions Légales</a>
            <a href="#" className="hover:text-brand-green">CGV</a>
            <a href="#" className="hover:text-brand-green">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
