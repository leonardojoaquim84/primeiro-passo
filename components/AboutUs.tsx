import React from 'react';
import { Sparkles, Star, ShieldCheck, ArrowRight, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-[#fafafa] pb-20">
      {/* Imagem de Topo - Exibição da Foto Inteira */}
      <section className="w-full bg-slate-900 flex justify-center items-center overflow-hidden">
        <img 
          src="https://i.postimg.cc/bYCGm71Q/Whats_App_Image_2026_01_07_at_20_03_24_(1).jpg" 
          alt="Ambiente Paulo Goes Concept Hair" 
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </section>

      {/* Título e Introdução - Movidos para baixo da foto para não atrapalhar a visão */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-amber-600/10 text-amber-600 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-amber-600/20">
            Desde 2015
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Nossa Essência</h1>
          <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed">
            Um refúgio de sofisticação onde cada detalhe é pensado para <span className="text-slate-900 font-medium italic underline decoration-amber-500 decoration-2">revelar sua identidade única.</span> 
            Acreditamos que o ambiente é o primeiro passo para uma experiência de beleza inesquecível.
          </p>
        </div>
      </section>

      {/* Main Specialist Profile */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          
          {/* COLUNA DA IMAGEM DO ESPECIALISTA */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-[800px] bg-slate-800">
            <img 
              src="https://i.postimg.cc/HWZJ6qby/Whats_App_Image_2026_01_07_at_20_03_24_(2).jpg" 
              alt="Paulo Goes - O Especialista" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1503467913725-8484b65b0715?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-12 left-12 right-12">
               <div className="flex items-center gap-3 text-amber-400 mb-2">
                 <Sparkles size={20} />
                 <span className="text-xs font-bold uppercase tracking-widest">Master Visagista</span>
               </div>
               <p className="text-white text-sm opacity-70 italic font-light">
                 "A beleza é a harmonia entre o que você é e o que você transmite."
               </p>
            </div>
          </div>

          {/* Coluna de Texto */}
          <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white">
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                  Paulo Goes <br/>
                  <span className="text-amber-500">Concept Hair</span>
                </h2>
                <div className="w-24 h-1 bg-amber-600 mb-10"></div>
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Com uma carreira construída na precisão e no luxo, <span className="text-white font-medium">Paulo Goes</span> é mais que um cabeleireiro; é um consultor de imagem dedicado a esculpir a autoestima de seus clientes.
                </p>
                <p>
                  Especialista formado pelas maiores academias internacionais, Paulo trouxe para o Rio de Janeiro um conceito exclusivo de <strong>atendimento privativo</strong>. No seu studio, cada cliente é único, e cada serviço é uma consultoria de visagismo completa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-widest">Excelência</h4>
                    <p className="text-slate-500 text-xs">Padrão Internacional</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-widest">Privacidade</h4>
                    <p className="text-slate-500 text-xs">Atendimento Individual</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-6 items-center">
                <Link 
                  to="/agendamento" 
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-3 group shadow-xl shadow-amber-900/20"
                >
                  Agendar com Paulo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://www.instagram.com/paulogoes__/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
                >
                  <Instagram size={20} />
                  @paulogoes__
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">Nossa Filosofia</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Trabalhamos para que sua visita seja o ponto alto da sua semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Visagismo",
                desc: "Analisamos suas proporções e estilo de vida para criar um look que seja funcional e deslumbrante.",
                icon: <Sparkles className="text-amber-600" size={32} />
              },
              {
                title: "Saúde Capilar",
                desc: "Beleza sem saúde não existe. Usamos apenas as melhores marcas para tratar seus fios de dentro para fora.",
                icon: <ShieldCheck className="text-amber-600" size={32} />
              },
              {
                title: "Localização",
                desc: "Localizado no DOM Office, oferecemos segurança, estacionamento e conforto para sua total tranquilidade.",
                icon: <MapPin className="text-amber-600" size={32} />
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;