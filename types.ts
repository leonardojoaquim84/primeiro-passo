export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'Cabelo' | 'Unhas' | 'Maquiagem' | 'Estética';
  image: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

// Reward interface for the loyalty program
export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  type: 'Desconto' | 'Produto' | 'Serviço';
}