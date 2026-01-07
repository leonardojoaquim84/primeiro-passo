
import React, { useState } from 'react';
import { SERVICES } from '../constants.tsx';
import { Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const categories = ['Todos', 'Cabelo', 'Unhas', 'Maquiagem', 'Estética'];

  const filteredServices = activeCategory === 'Todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Nossos Serviços</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-slate-600 max-w-2xl mx-auto italic">
          Cada procedimento é realizado com produtos de alta performance e profissionais altamente qualificados.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
              ? 'bg-slate-900 text-white shadow-lg' 
              : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-600 uppercase tracking-wider">
                {service.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800 leading-snug">{service.name}</h3>
                <span className="text-amber-600 font-bold text-lg">R$ {service.price}</span>
              </div>
              <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Clock size={14} />
                  <span>{service.duration}</span>
                </div>
                <Link 
                  to="/agendamento" 
                  className="text-slate-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600 transition-colors"
                >
                  Agendar <Tag size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
