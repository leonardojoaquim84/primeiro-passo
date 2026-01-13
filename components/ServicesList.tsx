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
    <div className="pb-20">
      {/* Hero Banner Section for Services */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/pL1qxcNq/Whats_App_Image_2026_01_08_at_11_54_18.jpg" 
            alt="Serviços Paulo Goes" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Título e divisor removidos conforme solicitado */}
          <p className="text-slate-200 max-w-2xl mx-auto italic text-lg md:text-xl font-light">
            Cada procedimento é realizado com produtos de alta performance e profissionais altamente qualificados.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-slate-900 text-white shadow-xl scale-105' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400 hover:text-amber-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col">
              <div className="relative h-72 overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] shadow-sm">
                  {service.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 leading-tight group-hover:text-amber-600 transition-colors">{service.name}</h3>
                  {service.price && (
                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-lg text-xs font-black whitespace-nowrap mt-1">
                      {service.price}
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-sm mb-8 whitespace-pre-line flex-grow leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Clock size={16} className="text-amber-500" />
                    <span>{service.duration}</span>
                  </div>
                  <Link 
                    to="/agendamento" 
                    className="bg-slate-50 text-slate-900 px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-amber-600 hover:text-white transition-all group/btn"
                  >
                    Agendar <Tag size={14} className="group-hover/btn:rotate-12 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;