
import React, { useState } from 'react';
import { MessageSquare, X, MessageCircle, ExternalLink } from 'lucide-react';

const AIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/5521991496983', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Help Card (Replaces the Chat Window) */}
      {isOpen && (
        <div className="w-[320px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden mb-4 animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-300">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-amber-600 p-2 rounded-xl">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Canal de Ajuda</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Paulo Goes Concept Hair</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8 text-center space-y-6">
            <div className="space-y-2">
              <h5 className="text-slate-800 font-bold text-lg font-serif">Como podemos ajudar?</h5>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossa equipe está pronta para tirar suas dúvidas sobre serviços, produtos ou agendamentos.
              </p>
            </div>

            <button 
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 text-white rounded-2xl text-sm font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
              <ExternalLink size={14} className="opacity-50" />
            </button>

            <p className="text-[10px] text-slate-400">
              Atendimento disponível de Terça a Sábado.
            </p>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 flex items-center gap-2 group ${
          isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-amber-600 text-white'
        }`}
        aria-label="Ajuda"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <>
            <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 whitespace-nowrap text-sm font-bold pl-2">
              Dúvidas? Fale Conosco
            </span>
            <MessageSquare size={28} />
          </>
        )}
      </button>
    </div>
  );
};

export default AIConsultant;
