import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Nos Glaces', path: '/produits' },
  { name: 'À Propos', path: '/a-propos' },
  { name: 'Engagements', path: '/engagements' },
  { name: 'Points de Vente', path: '/points-de-vente' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-green p-2 rounded-full group-hover:rotate-12 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-brand-green tracking-tight">
              Glaglace
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-green",
                  location.pathname === link.path ? "text-brand-green" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="relative p-2 text-gray-600 hover:text-brand-green transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-brand-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2 text-gray-600">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-green transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-light-green overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-lg transition-colors",
                    location.pathname === link.path 
                      ? "bg-brand-light-green text-brand-green" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-brand-green"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
