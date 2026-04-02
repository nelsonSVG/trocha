'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Placeholder from '@/components/Placeholder';

export default function HistoryPage() {
  const milestones = [
    { year: '2021', title: 'EL PRINCIPIO', desc: 'Niño preguntando "¿Qué hay detrás de las montañas?". Sueño de ser explorador. Estudió realización audiovisual.', img: 'Imagen: Camilo de niño, cámara antigua, mirada curiosa' },
    { year: '2022', title: 'EL MOMENTO DECISIVO', desc: 'Primer viaje documentado "Destino Colombia". Primera trocha larga en Norte de Santander.', img: 'Imagen: Primera bicicleta cargada, mapa de Colombia desplegado' },
    { year: '2024', title: 'LA CONSOLIDACIÓN', desc: '60+ pueblos, 13+ departamentos recorridos. El proyecto toma forma como Agarrando Trocha.', img: 'Imagen: Paisaje de montaña, bicicleta en primer plano, equipo de grabación' },
    { year: '2026', title: 'HOY', desc: 'Colaboración con Semana ("Relatos del Camino"). "La Ruta de los Olvidados" en producción.', img: 'Imagen: Set de edición, fragmentos de video, logo de Agarrando Trocha' },
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">CRONOLOGÍA / MEMORIA</span>
            <h1 className="text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12 uppercase">EL CAMINO</h1>
            <p className="text-2xl font-serif italic text-black/60 leading-relaxed max-w-3xl mx-auto">
              "Agarrando Trocha no nació como un proyecto. Nació cuando no tenía todo claro. Cuando improvisar fue la forma de volver a moverme."
            </p>
          </div>

          <div className="space-y-48">
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-24 items-center`}
              >
                <div className="flex-1 w-full relative">
                  <Placeholder 
                    label={item.img} 
                    aspectRatio="landscape"
                    className="border-black/5"
                  />
                  <div className={`absolute -top-6 ${i % 2 === 0 ? '-left-6' : '-right-6'} text-[9px] font-mono text-black/20 uppercase tracking-[0.2em]`}>
                    Ref: {item.year}_LOG_0{i+1}
                  </div>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl md:text-8xl font-display text-black/5 leading-none">{item.year}</span>
                    <div className="h-[1px] flex-grow bg-black/5" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display tracking-tight uppercase">{item.title}</h2>
                  <p className="text-xl text-black/70 font-serif leading-relaxed italic">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-48 p-20 border border-black/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 wireframe-grid opacity-[0.05] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 block mb-8">PRÓXIMA PARADA</span>
              <h2 className="text-4xl md:text-6xl font-display mb-8 tracking-tighter uppercase">¿QUÉ SIGUE?</h2>
              <p className="text-xl font-serif italic text-black/60 mb-12 max-w-xl mx-auto">
                "El camino nunca termina. Siempre hay una montaña más, una historia por descubrir y una trocha que me espera."
              </p>
              <Link 
                href="/archivo"
                className="inline-block px-12 py-5 border border-black text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
              >
                Explora mi archivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
