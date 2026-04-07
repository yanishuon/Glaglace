import { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '@/src/constants';
import IceCreamCard from '@/src/components/IceCreamCard';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

type Category = 'all' | 'sorbet' | 'creme-glacee';

export default function Products() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                          product.description.toLowerCase().includes(search.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = category === 'all' || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
          Nos <span className="text-brand-green">Saveurs</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Découvrez notre collection de glaces et sorbets 100% bio. 
          Chaque parfum est une invitation au voyage et à la gourmandise responsable.
        </p>
      </div>

      {/* Search & Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-brand-light-green/20 p-4 rounded-2xl border border-brand-light-green">
        <div className="relative w-full md:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-green transition-colors" />
          <input
            type="text"
            placeholder="Rechercher un parfum, un ingrédient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-brand-light-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-green"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setCategory('all')}
            className={cn(
              "px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap",
              category === 'all' 
                ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                : "bg-white text-gray-600 border border-brand-light-green hover:border-brand-green"
            )}
          >
            Tout
          </button>
          <button
            onClick={() => setCategory('sorbet')}
            className={cn(
              "px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap",
              category === 'sorbet' 
                ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                : "bg-white text-gray-600 border border-brand-light-green hover:border-brand-green"
            )}
          >
            Sorbets
          </button>
          <button
            onClick={() => setCategory('creme-glacee')}
            className={cn(
              "px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap",
              category === 'creme-glacee' 
                ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                : "bg-white text-gray-600 border border-brand-light-green hover:border-brand-green"
            )}
          >
            Crèmes Glacées
          </button>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 rounded-xl bg-white border border-brand-light-green text-gray-600 hover:text-brand-green hover:border-brand-green transition-all"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <IceCreamCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 space-y-6"
        >
          <div className="w-24 h-24 bg-brand-light-green rounded-full flex items-center justify-center mx-auto text-brand-green">
            <Filter className="w-12 h-12" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-gray-900">Aucun résultat trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos filtres ou votre recherche.</p>
          </div>
          <button
            onClick={() => {
              setSearch('');
              setCategory('all');
            }}
            className="text-brand-green font-bold hover:underline"
          >
            Réinitialiser tous les filtres
          </button>
        </motion.div>
      )}
    </div>
  );
}
