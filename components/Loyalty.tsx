
import React, { useState, useEffect } from 'react';
import { REWARDS } from '../constants.tsx';
import { Award, Sparkles, ChevronRight, Gift, Zap, Crown } from 'lucide-react';

const Loyalty = () => {
  const [points, setPoints] = useState(0);
  const [activeTier, setActiveTier] = useState('Bronze');

  useEffect(() => {
    const stored = localStorage.getItem('lumiere_points');
    const p = stored ? parseInt(stored) : 0;
    setPoints(p);

    if (p >= 5000) setActiveTier('Diamond');
    else if (p >= 2500) setActiveTier('Gold');
    else if (p >= 1000) setActiveTier('Silver');
    else setActiveTier('Bronze');
  }, []);

  const handleRedeem = (rewardId: string, cost: number) => {
    if (points < cost) return;
    
    const newPoints = points - cost;
    localStorage.setItem('lumiere_points', newPoints.toString());
    setPoints(newPoints);
    window.dispatchEvent(new Event('pointsUpdated'));
    alert('Recompensa resgatada com sucesso! O voucher foi enviado para seu e-mail.');
  };

  const getTierIcon = (tier: string) => {
    switch(tier) {
      case 'Diamond': return <Crown className="text-blue-400" size={24} />;
      case 'Gold': return <Crown className="text-amber-400" size={24} />;
      case 'Silver': return <Crown className="text-slate-300" size={24} />;
      default: return <Award className="text-amber-700" size={24} />;
    }
  };

  const nextTierPoints = activeTier === 'Bronze' ? 1000 : activeTier === 'Silver' ? 2500 : activeTier === 'Gold' ? 5000 : 5000;
  const progress = Math.min((points / nextTierPoints) * 100, 100);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Dashboard Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Status PAULO GOES</p>
                  <h3 className="text-2xl font-serif font-bold flex items-center gap-2">
                    Tier {activeTier} {getTierIcon(activeTier)}
                  </h3>
                </div>
                <div className="bg-amber-600 p-3 rounded-2xl shadow-lg shadow-amber-600/20">
                  <Sparkles size={24} />
                </div>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{points}</span>
                <span className="text-slate-400 ml-2 text-sm uppercase">Pontos Disponíveis</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Progresso até o próximo Tier</span>
                  <span className="text-amber-400 font-bold">{points} / {nextTierPoints}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Zap size={18} className="text-amber-500" /> Como Acumular
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-amber-600">R$1</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ganhe **1 ponto** a cada R$ 1,00 gasto em qualquer serviço ou produto.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                  <Gift size={14} className="text-amber-600" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bônus de **100 pontos** ao realizar seu primeiro agendamento pelo app.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Column */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-800">Vitrine de Recompensas</h2>
            <div className="hidden sm:flex gap-2">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] font-bold uppercase tracking-wider">PAULO GOES Loyalty</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REWARDS.map((reward) => (
              <div key={reward.id} className={`bg-white rounded-[2rem] p-6 border-2 transition-all group ${
                points >= reward.pointsCost ? 'border-amber-100 hover:border-amber-400 hover:shadow-xl' : 'border-slate-50 opacity-70'
              }`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${points >= reward.pointsCost ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {reward.type === 'Desconto' ? <Zap size={24} /> : reward.type === 'Produto' ? <Gift size={24} /> : <Award size={24} />}
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Custo</span>
                    <span className={`text-xl font-bold ${points >= reward.pointsCost ? 'text-amber-600' : 'text-slate-400'}`}>{reward.pointsCost} pts</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">{reward.title}</h3>
                <p className="text-xs text-slate-500 mb-8 line-clamp-2">{reward.description}</p>

                <button
                  disabled={points < reward.pointsCost}
                  onClick={() => handleRedeem(reward.id, reward.pointsCost)}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    points >= reward.pointsCost 
                    ? 'bg-slate-900 text-white hover:bg-amber-600' 
                    : 'bg-slate-50 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {points >= reward.pointsCost ? 'Resgatar Agora' : `Faltam ${reward.pointsCost - points} pts`}
                  {points >= reward.pointsCost && <ChevronRight size={16} />}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Loyalty;
