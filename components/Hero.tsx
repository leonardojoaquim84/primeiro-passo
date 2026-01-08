import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image - Wallpaper Atualizado conforme solicitado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/vH44k0v0/Whats_App_Image_2026_01_07_at_20_24_55.jpg" 
          alt="Paulo Goes Concept Hair Wallpaper" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl animate-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-2 mb-6 text-amber-400 font-semibold tracking-widest text-sm uppercase">
            <Sparkles size={18} />
            <span>Onde a beleza encontra a arte</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Descubra sua <br />
            <span className="text-amber-400">Melhor Versão</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            Experiência premium em beleza e bem-estar no coração da cidade. 
            Ambiente exclusivo, técnicas internacionais e atendimento sob medida para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/agendamento" 
              className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-center transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Agendar Experiência
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/servicos" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-center transition-all"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;