import React, { useState } from 'react';
import { SERVICES } from '../constants.tsx';
import { Calendar as CalendarIcon, Clock, CheckCircle, ChevronRight, User, Mail, Phone } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white p-12 rounded-[2rem] shadow-xl border border-slate-50 animate-in zoom-in duration-500">
          <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Agendamento Realizado!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Olá {formData.name}, enviamos um e-mail de confirmação para {formData.email}.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-2xl text-left mb-10 border border-slate-100">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500">Serviço:</span>
              <span className="font-bold text-slate-800">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500">Data:</span>
              <span className="font-bold text-slate-800">{formData.date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Horário:</span>
              <span className="font-bold text-slate-800">{formData.time}</span>
            </div>
          </div>
          <button 
            onClick={() => window.location.hash = '#/'}
            className="w-full bg-slate-900 text-white py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">Agendamento Online</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-slate-600">Reserve sua experiência PAULO GOES em poucos cliques.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-50 overflow-hidden flex flex-col md:flex-row">
        {/* Progress Sidebar */}
        <div className="bg-slate-900 md:w-1/3 p-10 text-white flex flex-col justify-between">
          <div className="space-y-8">
            <div className={`flex items-center gap-4 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'bg-amber-600 border-amber-600' : 'border-white/30'}`}>1</div>
              <span className="font-semibold text-sm">Serviço</span>
            </div>
            <div className={`flex items-center gap-4 ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'bg-amber-600 border-amber-600' : 'border-white/30'}`}>2</div>
              <span className="font-semibold text-sm">Data e Hora</span>
            </div>
            <div className={`flex items-center gap-4 ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'bg-amber-600 border-amber-600' : 'border-white/30'}`}>3</div>
              <span className="font-semibold text-sm">Seus Dados</span>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="md:w-2/3 p-10 md:p-14">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            {step === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Qual serviço deseja?</h3>
                <div className="grid gap-3">
                  {SERVICES.map(service => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setFormData({...formData, serviceId: service.id})}
                      className={`flex justify-between items-center p-5 rounded-2xl border-2 transition-all ${
                        formData.serviceId === service.id 
                        ? 'border-amber-600 bg-amber-50 shadow-sm' 
                        : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="text-left">
                        <p className="font-bold text-slate-800">{service.name}</p>
                        <p className="text-xs text-slate-500">{service.duration}</p>
                      </div>
                      <span className="font-bold text-slate-800">R$ {service.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in slide-in-from-right duration-300">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Quando podemos te receber?</h3>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <CalendarIcon size={16} className="text-amber-600" /> Selecione a Data
                  </label>
                  <input 
                    type="date" 
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <Clock size={16} className="text-amber-600" /> Selecione o Horário
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['09:00', '10:30', '13:00', '14:30', '16:00', '17:30'].map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({...formData, time: time})}
                        className={`p-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                          formData.time === time 
                          ? 'bg-slate-900 text-white border-slate-900' 
                          : 'bg-white text-slate-600 border-slate-100 hover:border-slate-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Só mais alguns detalhes</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Seu Nome Completo" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="email" 
                      placeholder="Seu E-mail" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="tel" 
                      placeholder="Seu WhatsApp (opcional)" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mt-6">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    Política de cancelamento: por favor, nos avise com pelo menos 24h de antecedência caso não possa comparecer.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-auto pt-10 flex gap-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  Voltar
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={step === 1 ? !formData.serviceId : !formData.date || !formData.time}
                  className="flex-[2] bg-slate-900 text-white py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Próximo <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="flex-[2] bg-amber-600 text-white py-4 rounded-xl font-bold hover:bg-amber-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processando...
                    </span>
                  ) : (
                    <>Confirmar Agendamento <CheckCircle size={18} /></>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;