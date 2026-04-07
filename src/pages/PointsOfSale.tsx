import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone, Star } from 'lucide-react';

const STORES = [
  {
    name: "Boutique Bastille",
    address: "12 rue de la Fraîcheur, 75011 Paris",
    hours: "Mar - Dim : 12h - 20h",
    phone: "+33 1 23 45 67 89",
    type: "Boutique Officielle",
    rating: 4.9
  },
  {
    name: "Kiosque Canal St-Martin",
    address: "45 Quai de Valmy, 75010 Paris",
    hours: "Tous les jours : 14h - 22h",
    phone: "+33 1 98 76 54 32",
    type: "Kiosque Saisonner",
    rating: 4.8
  },
  {
    name: "Corner Bio C'Bon",
    address: "88 rue de Rivoli, 75004 Paris",
    hours: "Lun - Sam : 10h - 20h",
    phone: "+33 1 44 55 66 77",
    type: "Revendeur Partenaire",
    rating: 4.7
  }
];

export default function PointsOfSale() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
          Où nous <span className="text-brand-green">trouver</span> ?
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Retrouvez nos glaces dans nos boutiques officielles, nos kiosques saisonniers 
          et chez nos revendeurs partenaires engagés.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          {STORES.map((store, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-3xl border border-brand-light-green shadow-sm hover:shadow-xl transition-all space-y-4 group cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-light-green px-2 py-1 rounded-full">
                    {store.type}
                  </span>
                  <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-green transition-colors">
                    {store.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  {store.rating}
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-green shrink-0" />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-green shrink-0" />
                  <span>{store.phone}</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-light-green text-brand-green font-bold hover:bg-brand-green hover:text-white transition-all">
                <Navigation className="w-4 h-4" />
                Y aller
              </button>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-2 relative h-[600px] rounded-[3rem] overflow-hidden border border-brand-light-green shadow-inner bg-gray-100">
          <img 
            src="https://picsum.photos/seed/paris-map/1200/800" 
            alt="Carte des points de vente" 
            className="w-full h-full object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-green/5 pointer-events-none" />
          
          {/* Mock Map Markers */}
          <div className="absolute top-1/4 left-1/3">
            <div className="relative group cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl border border-brand-light-green text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Boutique Bastille
              </div>
              <div className="w-8 h-8 bg-brand-green rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2">
            <div className="relative group cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl border border-brand-light-green text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Kiosque Canal St-Martin
              </div>
              <div className="w-8 h-8 bg-brand-green rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 right-1/4">
            <div className="relative group cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl border border-brand-light-green text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Corner Bio C'Bon
              </div>
              <div className="w-8 h-8 bg-brand-green rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
