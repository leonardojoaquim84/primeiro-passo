
import { Service, Product, PortfolioItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Corte Designer & Visagismo',
    description: 'Transformação completa baseada no seu formato de rosto.',
    price: 180,
    duration: '60 min',
    category: 'Cabelo',
    image: 'https://picsum.photos/seed/hair1/800/600'
  },
  {
    id: 's2',
    name: 'Mechas Lumière Platinum',
    description: 'Técnica exclusiva de clareamento preservando a saúde dos fios.',
    price: 450,
    duration: '240 min',
    category: 'Cabelo',
    image: 'https://picsum.photos/seed/hair2/800/600'
  },
  {
    id: 's3',
    name: 'Manicure & Pedicure Premium',
    description: 'Cutilagem russa e esmaltação em gel de longa duração.',
    price: 120,
    duration: '90 min',
    category: 'Unhas',
    image: 'https://picsum.photos/seed/nails1/800/600'
  },
  {
    id: 's4',
    name: 'Maquiagem Social Deluxe',
    description: 'Para eventos especiais, com cílios inclusos e alta durabilidade.',
    price: 250,
    duration: '75 min',
    category: 'Maquiagem',
    image: 'https://picsum.photos/seed/makeup1/800/600'
  },
  {
    id: 's5',
    name: 'Limpeza de Pele Profunda',
    description: 'Remoção de impurezas com peeling de diamante.',
    price: 200,
    duration: '90 min',
    category: 'Estética',
    image: 'https://picsum.photos/seed/skin1/800/600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Máscara Reconstrutora Luxe',
    brand: 'Kérastase',
    price: 320,
    image: 'https://picsum.photos/seed/prod1/400/400',
    description: 'Reparação profunda para fios danificados.'
  },
  {
    id: 'p2',
    name: 'Sérum Iluminador Vitamina C',
    brand: 'La Roche-Posay',
    price: 245,
    image: 'https://picsum.photos/seed/prod2/400/400',
    description: 'Antioxidante potente para uma pele radiante.'
  },
  {
    id: 'p3',
    name: 'Óleo de Argan Pure Gold',
    brand: 'Moroccanoil',
    price: 185,
    image: 'https://picsum.photos/seed/prod3/400/400',
    description: 'Finalizador nutritivo para brilho intenso.'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Blonde Balayage', category: 'Cabelo', imageUrl: 'https://picsum.photos/seed/port1/600/800' },
  { id: '2', title: 'Bridal Glow', category: 'Maquiagem', imageUrl: 'https://picsum.photos/seed/port2/600/800' },
  { id: '3', title: 'Modern Bob', category: 'Cabelo', imageUrl: 'https://picsum.photos/seed/port3/600/800' },
  { id: '4', title: 'Red Carpet Glam', category: 'Maquiagem', imageUrl: 'https://picsum.photos/seed/port4/600/800' },
  { id: '5', title: 'Nail Art Minimalista', category: 'Unhas', imageUrl: 'https://picsum.photos/seed/port5/600/800' },
  { id: '6', title: 'Penteado de Luxo', category: 'Cabelo', imageUrl: 'https://picsum.photos/seed/port6/600/800' },
];
