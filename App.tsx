
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Calendar, Sparkles, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import Portfolio from './components/Portfolio';
import Shop from './components/Shop';
import Booking from './components/Booking';
import AIConsultant from './components/AIConsultant';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Produtos', path: '/produtos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-slate-800 tracking-wider">
              LUMIÈRE <span className="text-amber-600 font-light">STUDIO</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  location.pathname === link.path ? 'text-amber-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/agendamento" 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Calendar size={16} />
              Agendar
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-600 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/agendamento"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-amber-600"
            >
              AGENDAR HORÁRIO
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-serif font-bold mb-6 tracking-wider">LUMIÈRE</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Especialistas em realçar sua beleza natural com técnicas avançadas e atendimento personalizado de alto padrão.
          </p>
          <div className="flex gap-4">
            <Instagram className="text-slate-400 hover:text-amber-400 cursor-pointer transition-colors" size={20} />
            <Facebook className="text-slate-400 hover:text-amber-400 cursor-pointer transition-colors" size={20} />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
            <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
            <li><Link to="/agendamento" className="hover:text-white transition-colors">Agendamento</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> (11) 99999-9999</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0" /> Av. Paulista, 1000 - São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Horário</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>Terça - Sexta: 09h às 20h</li>
            <li>Sábado: 09h às 18h</li>
            <li>Domingo e Segunda: Fechado</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} Lumière Beauty Studio. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#fafafa]">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/servicos" element={<ServicesList />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/produtos" element={<Shop />} />
            <Route path="/agendamento" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <AIConsultant />
      </div>
    </HashRouter>
  );
}
