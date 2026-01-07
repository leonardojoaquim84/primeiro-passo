import { Service, Product, PortfolioItem, Reward } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Corte Designer & Visagismo',
    description: 'Transformação completa baseada no seu formato de rosto.',
    price: 180,
    duration: '60 min',
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    name: 'Mechas Lumière Platinum',
    description: 'Técnica exclusiva de clareamento preservando a saúde dos fios.',
    price: 450,
    duration: '240 min',
    category: 'Cabelo',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    name: 'Manicure & Pedicure Premium',
    description: 'Cutilagem russa e esmaltação em gel de longa duração.',
    price: 120,
    duration: '90 min',
    category: 'Unhas',
    image: 'https://images.unsplash.com/photo-1604654894610-df490982570d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    name: 'Maquiagem Social Deluxe',
    description: 'Para eventos especiais, com cílios inclusos e alta durabilidade.',
    price: 250,
    duration: '75 min',
    category: 'Maquiagem',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's5',
    name: 'Limpeza de Pele Profunda',
    description: 'Remoção de impurezas com peeling de diamante.',
    price: 200,
    duration: '90 min',
    category: 'Estética',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Máscara Reconstrutora Luxe',
    brand: 'Kérastase',
    price: 320,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=400',
    description: 'Reparação profunda para fios danificados.'
  },
  {
    id: 'p2',
    name: 'Sérum Iluminador Vitamina C',
    brand: 'La Roche-Posay',
    price: 245,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
    description: 'Antioxidante potente para uma pele radiante.'
  },
  {
    id: 'p3',
    name: 'Óleo de Argan Pure Gold',
    brand: 'Moroccanoil',
    price: 185,
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935ccbb2?auto=format&fit=crop&q=80&w=400',
    description: 'Finalizador nutritivo para brilho intenso.'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Blonde Balayage', category: 'Cabelo', imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600' },
  { id: '2', title: 'Bridal Glow', category: 'Maquiagem', imageUrl: 'https://images.unsplash.com/photo-1512496011931-a2c78a06573b?auto=format&fit=crop&q=80&w=600' },
  { id: '3', title: 'Modern Bob', category: 'Cabelo', imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600' },
  { id: '4', title: 'Red Carpet Glam', category: 'Maquiagem', imageUrl: 'https://images.unsplash.com/photo-1457972851104-4fd469440bf9?auto=format&fit=crop&q=80&w=600' },
  { id: '5', title: 'Nail Art Minimalista', category: 'Unhas', imageUrl: 'https://images.unsplash.com/photo-1604654894610-df490982570d?auto=format&fit=crop&q=80&w=600' },
  { id: '6', title: 'Penteado de Luxo', category: 'Cabelo', imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=600' },
];

// List of available rewards for the loyalty program
export const REWARDS: Reward[] = [
  {
    id: 'r1',
    title: 'Cupom de R$ 50 OFF',
    description: 'Válido para qualquer serviço acima de R$ 150.',
    pointsCost: 1000,
    type: 'Desconto'
  },
  {
    id: 'r2',
    title: 'Kit Nutrição Home Care',
    description: 'Produtos profissionais para manter o brilho do seu cabelo em casa.',
    pointsCost: 2500,
    type: 'Produto'
  },
  {
    id: 'r3',
    title: 'Corte Designer Cortesia',
    description: 'Renove seu visual com um corte exclusivo Paulo Goes.',
    pointsCost: 3500,
    type: 'Serviço'
  },
  {
    id: 'r4',
    title: 'Dia de Beleza VIP',
    description: 'Experiência completa com Cabelo, Unhas e Maquiagem.',
    pointsCost: 5000,
    type: 'Serviço'
  }
];