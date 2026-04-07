import { motion } from 'motion/react';
import { ArrowRight, Leaf, MapPin, Star, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import IceCreamCard from '@/src/components/IceCreamCard';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/icecream-hero/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">
              <Star className="w-4 h-4 text-brand-pastel-yellow fill-brand-pastel-yellow" />
              <span>Élu meilleur artisan glacier bio 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1]">
              La fraîcheur <br />
              <span className="text-brand-pastel-yellow italic">100% Bio</span> <br />
              & locale.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
              Découvrez des glaces artisanales confectionnées avec amour, 
              respectant la nature et les saisons. Le vrai goût du fruit, 
              sans compromis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/produits"
                className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green/90 transition-all flex items-center gap-2 group"
              >
                Découvrir nos saveurs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/points-de-vente"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Où nous trouver ?
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-brand-pastel-pink/30 border border-brand-pastel-pink space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-pastel-pink flex items-center justify-center text-pink-600">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900">100% Bio</h3>
            <p className="text-gray-600 leading-relaxed">
              Tous nos ingrédients sont certifiés Agriculture Biologique. 
              Pas de pesticides, pas d'OGM, juste du naturel.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-brand-pastel-yellow/30 border border-brand-pastel-yellow space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-pastel-yellow flex items-center justify-center text-yellow-600">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900">Artisanal</h3>
            <p className="text-gray-600 leading-relaxed">
              Nos glaces sont turbinées chaque matin dans notre atelier parisien 
              selon des méthodes traditionnelles.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-brand-pastel-blue/30 border border-brand-pastel-blue space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-pastel-blue flex items-center justify-center text-blue-600">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900">Local</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous privilégions les circuits courts en travaillant directement 
              avec des producteurs passionnés de nos régions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Nos Incontournables
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Découvrez les saveurs qui font craquer nos clients. 
              Des classiques revisités aux créations originales.
            </p>
          </div>
          <Link
            to="/produits"
            className="text-brand-green font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Voir tout le catalogue
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <IceCreamCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-brand-green overflow-hidden py-24 px-8 md:px-16">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Leaf className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
          </div>
          
          <div className="relative z-10 max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Prêt pour une pause <br />
              <span className="text-brand-pastel-yellow">gourmande & éthique ?</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Rejoignez la communauté Glaglace et redécouvrez le plaisir 
              d'une glace authentique, respectueuse de votre santé et de l'environnement.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-white text-brand-green px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-pastel-yellow transition-all"
              >
                Nous contacter
              </Link>
              <Link
                to="/points-de-vente"
                className="bg-transparent text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Trouver une boutique
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
