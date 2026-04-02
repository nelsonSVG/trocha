'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Heart, Bike, Coffee, Star } from 'lucide-react';

export default function CommunityPage() {
  const tiers = [
    { 
      name: "CAMINANTE", 
      price: "$35.000/MES", 
      icon: <Bike size={32} strokeWidth={1} />,
      benefits: ["Acceso anticipado a videos", "Sticker exclusivo", "Chat de comunidad"]
    },
    { 
      name: "ALMA DE TROCHA", 
      price: "$100.000/MES", 
      icon: <Heart size={32} strokeWidth={1} />,
      benefits: ["Todo de Caminante", "Fotografía impresa mensual", "Tu nombre en mis créditos", "10% descuento en tienda"],
      featured: true
    }
  ];

  const oneTime = [
    { name: "Una tasa de café", price: "$15.000", desc: "Para el termo de siempre", icon: <Coffee size={24} strokeWidth={1} /> },
    { name: "Un pedaleo", price: "$50.000", desc: "Para la siguiente montaña", icon: <Bike size={24} strokeWidth={1} /> },
    { name: "Una trocha", price: "$150.000", desc: "Para un tramo del camino", icon: <Star size={24} strokeWidth={1} /> },
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">COMUNIDAD / APOYO</span>
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12 uppercase">LOS CAMINANTES</h1>
            <p className="text-2xl font-serif italic text-black/60 max-w-2xl mx-auto">
              "No viajes solo. Únete a los que ya entendieron. Los Caminantes somos una comunidad de quienes creen que hay algo más detrás de las montañas."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
            {tiers.map((tier, i) => (
              <div 
                key={i} 
                className={`p-16 border ${tier.featured ? 'bg-black text-white border-black' : 'bg-white border-black/10'} relative overflow-hidden group`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-white text-black text-[9px] font-mono uppercase tracking-[0.3em] px-8 py-3 -rotate-45 translate-x-8 translate-y-4">
                    Recomendado
                  </div>
                )}
                
                <div className={`${tier.featured ? 'text-white/40' : 'text-black/20'} mb-12 group-hover:text-black transition-colors`}>
                  {tier.icon}
                </div>
                <h2 className="text-5xl font-display mb-4 tracking-tight uppercase">{tier.name}</h2>
                <p className="text-3xl font-display mb-12 opacity-60">{tier.price}</p>
                
                <ul className="space-y-6 mb-16">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-4 text-lg italic opacity-80 font-serif">
                      <div className={`w-1 h-1 rounded-full ${tier.featured ? 'bg-white/40' : 'bg-black/20'}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-6 text-[10px] font-mono uppercase tracking-[0.4em] transition-all ${tier.featured ? 'bg-white text-black hover:invert' : 'bg-black text-white hover:invert'}`}>
                  Unirme ahora
                </button>
              </div>
            ))}
          </div>

          <div className="mb-40">
            <div className="flex items-center gap-8 mb-20">
              <div className="h-[1px] flex-grow bg-black/10" />
              <h2 className="text-4xl font-display tracking-tight uppercase">Aportes Únicos</h2>
              <div className="h-[1px] flex-grow bg-black/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {oneTime.map((item, i) => (
                <div key={i} className="bg-white p-12 border border-black/5 text-center group hover:border-black transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 wireframe-grid opacity-[0.02] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-black/10 group-hover:text-black transition-colors mb-8 flex justify-center">{item.icon}</div>
                    <h3 className="text-2xl font-display mb-4 tracking-tight uppercase">{item.name}</h3>
                    <p className="text-3xl font-display mb-6 opacity-60">{item.price}</p>
                    <p className="text-lg italic text-black/40 mb-12 font-serif">{item.desc}</p>
                    <button className="w-full py-4 border border-black/10 text-[9px] font-mono uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                      Aportar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-20 border border-black/5 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute inset-0 wireframe-grid opacity-[0.05] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-12">DATOS DE TRANSFERENCIA</span>
              <div className="space-y-8 text-[11px] font-mono uppercase tracking-[0.3em]">
                <div className="flex flex-col md:flex-row justify-between border-b border-black/5 pb-6">
                  <span className="text-black/30">NEQUI</span>
                  <span className="font-bold">3XX XXX XXXX (Camilo M.)</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between border-b border-black/5 pb-6">
                  <span className="text-black/30">BANCOLOMBIA</span>
                  <span className="font-bold">Ahorros XXX-XXXXXX</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between pb-6">
                  <span className="text-black/30">PAYPAL</span>
                  <span className="font-bold">paypal.me/agarrandotrocha</span>
                </div>
              </div>
              <p className="mt-20 text-xl italic text-black/40 font-serif">
                "No es una donación. Es compañía en mi camino."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
