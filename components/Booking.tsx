
import React, { useState } from 'react';
import { SERVICES } from '../constants.tsx';
import { CheckCircle, User, Phone, Send, MessageCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    serviceId: '',
    name: '',
    phone: ''
  });

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !formData.name || !formData.phone) {
      alert('Por favor, preencha todos os campos e selecione um serviço.');
      return;
    }

    const message = `Olá! Gostaria de agendar um serviço no Paulo Goes Concept Hair.%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Serviço:* ${selectedService.name}`;
    const whatsappUrl = `https://wa.me/5521991496983?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Agendamento Rápido</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
        <p className="text-slate-600">Escolha seu serviço e entraremos em contato via WhatsApp para confirmar o horário.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-50 overflow-hidden">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row">
          
          {/* Service Selection Area */}
          <div className="lg:w-1/2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
              Selecione o Serviço
            </h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {SERVICES.map(service => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setFormData({...formData, serviceId: service.id})}
                  className={`w-full flex justify-between items-center p-4 rounded-2xl border-2 transition-all group ${
                    formData.serviceId === service.id 
                    ? 'border-amber-600 bg-amber-50' 
                    : 'border-slate-50 hover:border-amber-200 bg-slate-50/50'
                  }`}
                >
                  <div className="text-left">
                    <p className={`font-bold transition-colors ${formData.serviceId === service.id ? 'text-amber-700' : 'text-slate-700'}`}>
                      {service.name}
                    </p>
                    <p className="text-xs text-slate-500">{service.duration}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-800">R$ {service.price}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.serviceId === service.id ? 'bg-amber-600 border-amber-600' : 'border-slate-300'
                    }`}>
                      {formData.serviceId === service.id && <CheckCircle size={12} className="text-white" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* User Details Area */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-slate-50/30">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
              Seus Dados
            </h3>
            
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Como podemos te chamar?" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-slate-200 disabled:opacity-50 group"
                  disabled={!formData.serviceId || !formData.name || !formData.phone}
                >
                  <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                  Agendar via WhatsApp
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed px-4">
                  Ao clicar em agendar, você será redirecionado para o nosso WhatsApp oficial para finalizar a escolha de data e horário.
                </p>
              </div>
            </div>

            {/* Selection Summary */}
            {selectedService && (
              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 animate-in fade-in slide-in-from-top-2">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Resumo da Escolha</p>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">{selectedService.name}</span>
                  <span className="font-bold text-amber-600">R$ {selectedService.price}</span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
