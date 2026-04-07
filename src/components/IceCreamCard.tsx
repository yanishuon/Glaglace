import { ShoppingCart, Plus, Minus, Info } from 'lucide-react';
import { Product } from '@/src/constants';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

interface IceCreamCardProps {
  product: Product;
}

export default function IceCreamCard({ product }: IceCreamCardProps) {
  const [quantity, setQuantity] = useState(0);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-brand-light-green shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {product.category === 'sorbet' ? (
            <span className="bg-brand-pastel-blue text-blue-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Sorbet
            </span>
          ) : (
            <span className="bg-brand-pastel-pink text-pink-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Crème Glacée
            </span>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-green transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-display font-bold text-brand-green">
            {product.price.toFixed(2)}€
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between gap-4">
          {quantity === 0 ? (
            <button
              onClick={() => setQuantity(1)}
              className="flex-1 bg-brand-light-green text-brand-green font-bold py-3 rounded-xl hover:bg-brand-green hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Ajouter
            </button>
          ) : (
            <div className="flex-1 flex items-center justify-between bg-brand-light-green rounded-xl px-2 py-1">
              <button
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
                className="p-2 text-brand-green hover:bg-white rounded-lg transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-display font-bold text-brand-green">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-brand-green hover:bg-white rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}
          <button className="p-3 text-gray-400 hover:text-brand-green hover:bg-brand-light-green rounded-xl transition-all">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
