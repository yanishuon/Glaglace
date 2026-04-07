export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'sorbet' | 'creme-glacee';
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vanille Bourbon Bio',
    description: 'Une onctueuse crème glacée à la vanille Bourbon de Madagascar, 100% bio.',
    price: 4.5,
    image: 'https://picsum.photos/seed/vanilla/600/400',
    category: 'creme-glacee',
    tags: ['classique', 'bio', 'sans-gluten'],
  },
  {
    id: '2',
    name: 'Fraise de Saison',
    description: 'Sorbet plein fruit réalisé avec des fraises locales cueillies à maturité.',
    price: 4.5,
    image: 'https://picsum.photos/seed/strawberry/600/400',
    category: 'sorbet',
    tags: ['fruit', 'vegan', 'bio'],
  },
  {
    id: '3',
    name: 'Chocolat Noir 70%',
    description: 'Intense et fondant, notre chocolat provient de coopératives équitables.',
    price: 4.5,
    image: 'https://picsum.photos/seed/chocolate/600/400',
    category: 'creme-glacee',
    tags: ['intense', 'bio'],
  },
  {
    id: '4',
    name: 'Citron Basilic',
    description: 'Un sorbet rafraîchissant mariant le peps du citron et la douceur du basilic frais.',
    price: 4.5,
    image: 'https://picsum.photos/seed/lemon/600/400',
    category: 'sorbet',
    tags: ['original', 'vegan', 'bio'],
  },
  {
    id: '5',
    name: 'Caramel Beurre Salé',
    description: 'Le mariage parfait du sucre caramélisé et d\'une pointe de sel de Guérande.',
    price: 4.5,
    image: 'https://picsum.photos/seed/caramel/600/400',
    category: 'creme-glacee',
    tags: ['gourmand', 'bio'],
  },
  {
    id: '6',
    name: 'Pistache d\'Iran',
    description: 'Une crème glacée authentique à la pistache grillée, sans colorant.',
    price: 5.0,
    image: 'https://picsum.photos/seed/pistachio/600/400',
    category: 'creme-glacee',
    tags: ['premium', 'bio'],
  },
];
