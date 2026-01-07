
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

export interface Appointment {
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
}
