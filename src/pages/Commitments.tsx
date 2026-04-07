import { motion } from 'motion/react';
import { Leaf, Recycle, Droplets, Sun, ShieldCheck, Truck } from 'lucide-react';

export default function Commitments() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-brand-light-green px-4 py-2 rounded-full text-brand-green text-sm font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" />
          <span>Engagements Responsables</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900">
          Pour une glace <br />
          <span className="text-brand-green italic">plus verte</span>.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Chez Glaglace, nous croyons que la gourmandise ne doit pas se faire 
          au détriment de la planète. Voici comment nous agissons au quotidien.
        </p>
      </section>

      {/* Main Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-pastel-green rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform" />
            <div className="relative bg-white p-12 rounded-[3rem] border border-brand-light-green space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-pastel-green flex items-center justify-center text-green-600">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">Agriculture Biologique</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                100% de nos ingrédients agricoles sont issus de l'Agriculture Biologique. 
                Nous soutenons des pratiques qui respectent la biodiversité, 
                les sols et les cycles naturels.
              </p>
              <ul className="space-y-3 text-brand-green font-medium">
                <li className="flex items-center gap-2">✓ Zéro pesticide de synthèse</li>
                <li className="flex items-center gap-2">✓ Respect du bien-être animal</li>
                <li className="flex items-center gap-2">✓ Ingrédients non transformés</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand-pastel-blue rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform" />
            <div className="relative bg-white p-12 rounded-[3rem] border border-brand-light-green space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-pastel-blue flex items-center justify-center text-blue-600">
                <Recycle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">Zéro Plastique</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous avons banni le plastique à usage unique de notre chaîne. 
                Nos pots sont en carton biosourcé et nos cuillères sont 
                compostables ou en bois certifié FSC.
              </p>
              <ul className="space-y-3 text-blue-600 font-medium">
                <li className="flex items-center gap-2">✓ Packaging 100% recyclable</li>
                <li className="flex items-center gap-2">✓ Pots compostables</li>
                <li className="flex items-center gap-2">✓ Réduction des déchets à la source</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Actions */}
      <section className="bg-brand-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Nos Actions Concrètes</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Parce que chaque petit geste compte pour préserver notre environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sun,
                title: "Énergie Verte",
                desc: "Notre atelier est alimenté à 100% par des énergies renouvelables locales."
              },
              {
                icon: Droplets,
                title: "Gestion de l'Eau",
                desc: "Nous utilisons des systèmes de refroidissement en circuit fermé pour économiser l'eau."
              },
              {
                icon: Truck,
                title: "Logistique Douce",
                desc: "Livraisons en centre-ville effectuées en vélos-cargos électriques."
              },
              {
                icon: Users,
                title: "Commerce Équitable",
                desc: "Nos ingrédients exotiques (chocolat, vanille) sont certifiés Fairtrade."
              }
            ].map((action, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">{action.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Users = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
