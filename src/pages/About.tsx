import { motion } from 'motion/react';
import { Heart, Users, Leaf, Award, History, Globe, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/about-hero/1920/1080"
            alt="About background"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
              Notre <span className="text-brand-pastel-yellow italic">Histoire</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              De l'atelier familial à l'artisanat engagé, découvrez le parcours 
              de Glaglace et notre passion pour le goût authentique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-light-green px-4 py-2 rounded-full text-brand-green text-sm font-bold uppercase tracking-widest">
              <History className="w-4 h-4" />
              <span>Depuis 2018</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              Une aventure née de la passion du <span className="text-brand-green italic">vrai goût</span>.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Glaglace a commencé dans une petite cuisine parisienne, avec une turbine d'occasion 
                et une envie simple : retrouver le goût des fruits mûrs et de la crème onctueuse 
                de notre enfance, sans additifs ni colorants artificiels.
              </p>
              <p>
                Aujourd'hui, notre équipe s'est agrandie, mais notre philosophie reste la même : 
                travailler main dans la main avec des producteurs locaux, respecter le rythme 
                des saisons et offrir une expérience gustative pure et responsable.
              </p>
              <p>
                Chaque pot de Glaglace raconte une histoire, celle d'un terroir, d'un savoir-faire 
                artisanal et d'un engagement indéfectible pour l'Agriculture Biologique.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pastel-yellow rounded-full -z-10 opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-pastel-pink rounded-full -z-10 opacity-50" />
            <img
              src="https://picsum.photos/seed/workshop/800/1000"
              alt="Notre atelier"
              className="w-full rounded-[3rem] shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-light-green/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce qui nous anime chaque jour pour vous offrir le meilleur de la glace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion Artisanale",
                desc: "Chaque recette est élaborée avec soin, testée et ajustée jusqu'à atteindre l'équilibre parfait.",
                color: "bg-brand-pastel-pink text-pink-600"
              },
              {
                icon: Leaf,
                title: "Éco-Responsabilité",
                desc: "Du sourcing des ingrédients au packaging biodégradable, nous minimisons notre empreinte.",
                color: "bg-brand-pastel-green text-green-600"
              },
              {
                icon: Users,
                title: "Proximité Locale",
                desc: "Nous soutenons l'économie locale en privilégiant les producteurs de nos régions.",
                color: "bg-brand-pastel-blue text-blue-600"
              },
              {
                icon: Globe,
                title: "Transparence Totale",
                desc: "Vous savez exactement ce qu'il y a dans votre pot. Pas de secrets, juste de bons ingrédients.",
                color: "bg-brand-pastel-yellow text-yellow-600"
              },
              {
                icon: Award,
                title: "Qualité Premium",
                desc: "Nous ne faisons aucun compromis sur la qualité des matières premières sélectionnées.",
                color: "bg-brand-pastel-pink text-pink-600"
              },
              {
                icon: Star,
                title: "Innovation Gustative",
                desc: "Nous aimons surprendre vos papilles avec des associations de saveurs audacieuses.",
                color: "bg-brand-pastel-blue text-blue-600"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl border border-brand-light-green shadow-sm space-y-4"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", value.color)}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
