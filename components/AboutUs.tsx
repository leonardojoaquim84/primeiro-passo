
import React from 'react';
import { Sparkles, Star, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="pb-20">
      {/* Header Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000" 
            alt="Interior do Salão" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Nossa Essência</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Mais do que um salão, um conceito em beleza onde a técnica encontra a sofisticação para revelar sua melhor versão.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">O Conceito</span>
              <h2 className="text-4xl font-serif font-bold text-slate-800 mt-2 mb-6">A Arte de Esculpir a Autoestima</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              No <strong>PAULO GOES Concept Hair</strong>, acreditamos que a beleza não é um padrão a ser seguido, mas uma singularidade a ser realçada. Localizado no coração do Rio de Janeiro, no condomínio DOM Office, nosso espaço foi projetado para oferecer uma experiência de imersão no bem-estar.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos as melhores marcas globais e técnicas exclusivas de visagismo para garantir que cada corte, coloração ou tratamento seja um reflexo autêntico da sua personalidade e estilo de vida.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Exclusividade</h4>
                  <p className="text-xs text-slate-500">Atendimento VIP personalizado</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Excelência</h4>
                  <p className="text-xs text-slate-500">Técnicas internacionais</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-in zoom-in duration-1000">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" 
                alt="Profissional em ação" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-[280px]">
              <div className="text-amber-600 mb-4">
                <Sparkles size={32} />
              </div>
              <p className="text-slate-800 font-serif italic text-lg leading-snug">
                "Beleza é o que você sente por dentro, e isso reflete nos seus olhos."
              </p>
              <p className="text-slate-400 text-xs mt-4 uppercase font-bold tracking-widest">— Paulo Goes</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Specialist Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Sobre Paulo Goes</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-slate-50 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                  alt="Paulo Goes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h3 className="text-3xl font-serif font-bold text-slate-800 italic">Especialista em Transformações de Alto Padrão</h3>
              <p className="text-slate-600 leading-relaxed">
                Com anos de experiência no mercado de luxo fluminense, Paulo Goes consolidou seu nome como um dos principais visagistas da região. Sua abordagem combina técnica apurada com uma sensibilidade única para entender os desejos de cada cliente.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Formado por academias de renome e em constante atualização com as tendências europeias, Paulo traz para o Méier um novo patamar de serviço capilar, onde a saúde dos fios é tão prioridade quanto o resultado estético.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">Mestre em Mechas</div>
                <div className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">Expert Visagista</div>
                <div className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">Consultor de Imagem</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-amber-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Pronta para viver essa experiência?</h2>
            <p className="text-amber-100 mb-10 text-lg opacity-90">
              Agende uma consultoria agora e descubra como podemos elevar sua beleza.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/agendamento" 
                className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                Agendar Horário
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
