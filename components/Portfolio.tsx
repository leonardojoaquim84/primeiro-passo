import React from 'react';
import { PORTFOLIO } from '../constants.tsx';
import { Instagram } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do Portfólio Estilizado */}
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Box do Ícone solicitado pelo usuário */}
            <a 
              href="https://www.instagram.com/paulogoes__/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-20 h-20 md:w-24 md:h-24 border-2 border-amber-600 flex items-center justify-center rounded-2xl hover:bg-amber-600 hover:text-white transition-all duration-500 group"
            >
              <Instagram size={40} className="text-amber-600 group-hover:text-white transition-colors" />
            </a>
            
            <div className="flex flex-col">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 tracking-tight">Portfólio</h2>
              <div className="w-24 h-1 bg-amber-600 mt-4 rounded-full"></div>
            </div>
          </div>
          
          <p className="text-slate-500 max-w-2xl text-center text-lg md:text-xl font-light italic animate-in fade-in duration-1000 delay-300">
            Inspire-se com as transformações realizadas por nossos especialistas.
          </p>
        </div>

        {/* Galeria Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden rounded-[2rem] aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 animate-in fade-in slide-in-from-bottom-8`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  {item.category}
                </span>
                <h3 className="text-white text-3xl font-serif font-bold transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  {item.title}
                </h3>
                <div className="w-12 h-0.5 bg-amber-600 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left delay-200"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="mt-24 text-center">
          <a 
            href="https://www.instagram.com/paulogoes__/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white px-10 py-5 rounded-full text-slate-900 font-bold border border-slate-200 shadow-sm hover:shadow-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-500 group"
          >
            <Instagram size={20} className="text-amber-600 group-hover:text-white" />
            <span>Siga @paulogoes__ no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;