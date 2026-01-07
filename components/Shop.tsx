
import React from 'react';
import { PRODUCTS } from '../constants.tsx';
import { ShoppingCart, Star } from 'lucide-react';

const Shop = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Lumière Shop</h2>
          <p className="text-slate-600 max-w-md">
            Traga a experiência do salão para sua casa com nossa curadoria de produtos profissionais.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-amber-50 px-6 py-3 rounded-2xl border border-amber-100">
          <div className="text-amber-600">
            <Star fill="currentColor" size={20} />
          </div>
          <span className="text-amber-900 font-semibold text-sm">Qualidade Profissional Garantida</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white mb-6 border border-slate-100 shadow-sm transition-all group-hover:shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute bottom-6 right-6 bg-slate-900 text-white p-4 rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-600">
                <ShoppingCart size={24} />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{product.brand}</span>
                <span className="text-lg font-bold text-slate-900">R$ {product.price}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-6">Assine nossa Curadoria</h3>
          <p className="text-slate-400 mb-8">Receba mensalmente produtos selecionados para o seu tipo de cabelo e pele com 20% de desconto.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-amber-400"
            />
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap">
              Quero Participar
            </button>
          </div>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
      </div>
    </section>
  );
};

export default Shop;
