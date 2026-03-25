'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Play, Filter } from 'lucide-react';
import Placeholder from '@/components/Placeholder';

export default function VideosPage() {
  const series = [
    {
      title: 'RELATOS DEL CAMINO',
      desc: 'En colaboración con Semana. Documentales cortos sobre historias que merecen ser contadas.',
      videos: [
        { title: 'Episodio 1: Guasca', duration: '6:12', img: 'Video: Paisaje de Guasca, primer plano de Don Abelino' },
        { title: 'Episodio 2: Próximamente', duration: '--:--', img: 'Video: Pantalla en negro con texto "Próximamente"' }
      ]
    },
    {
      title: 'LA RUTA DE LOS OLVIDADOS',
      desc: 'Nuestra serie documental principal. Un viaje profundo por 10 departamentos.',
      videos: [
        { title: 'Trailer Oficial', duration: '2:15', img: 'Video: Montaje rápido de paisajes, rostros y pedaleo' },
        { title: 'Making Of', duration: '4:30', img: 'Video: Camilo ajustando la cámara en medio de la lluvia' },
        { title: 'Capítulo 1: El Inicio', duration: '18:45', img: 'Video: Salida de Bogotá, primeras trochas hacia el norte' }
      ]
    },
    {
      title: 'DETRÁS DE LA CÁMARA',
      desc: 'Momentos íntimos y reflexiones personales durante los viajes.',
      videos: [
        { title: '¿Por qué viajo solo?', duration: '3:20', img: 'Video: Camilo hablando a cámara frente a una fogata' },
        { title: 'Mi primer viaje', duration: '5:10', img: 'Video: Fotos antiguas de la primera bicicleta' },
        { title: 'El silencio del páramo', duration: '2:45', img: 'Video: Plano fijo de la niebla moviéndose entre los frailejones' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">ARCHIVO / DOCUMENTAL</span>
            <h1 className="text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12">EL ARCHIVO</h1>
            <p className="text-2xl font-serif italic text-black/60 max-w-2xl mx-auto">
              &quot;Documentales, relatos y reflexiones. La memoria visual de miles de kilómetros recorridos.&quot;
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-24 border-b border-black/10 pb-12 gap-8">
            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-mono uppercase tracking-[0.3em]">
              <button className="text-black border-b border-black pb-12 -mb-12">Todos</button>
              <button className="text-black/30 hover:text-black transition-colors">Documentales</button>
              <button className="text-black/30 hover:text-black transition-colors">Reflexiones</button>
              <button className="text-black/30 hover:text-black transition-colors">Tutoriales</button>
            </div>
            <button className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">
              <Filter size={14} strokeWidth={1} /> Filtrar por fecha
            </button>
          </div>

          <div className="space-y-40">
            {series.map((s, i) => (
              <div key={i}>
                <div className="mb-16 max-w-2xl">
                  <span className="text-[9px] font-mono text-black/20 block mb-4">SERIE_0{i+1}</span>
                  <h2 className="text-4xl md:text-5xl font-display mb-4 tracking-tight">{s.title}</h2>
                  <p className="text-xl text-black/60 italic font-serif leading-relaxed">{s.desc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {s.videos.map((v, j) => (
                    <div key={j} className="group cursor-pointer">
                      <div className="relative mb-6">
                        <Placeholder 
                          label={v.img} 
                          aspectRatio="video"
                          className="border-black/5"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 backdrop-blur-[2px]">
                          <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center bg-white/10">
                            <Play size={24} strokeWidth={1} className="text-black fill-black ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black text-white text-[9px] font-mono px-3 py-1 uppercase tracking-widest">
                          {v.duration}
                        </div>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-2xl font-display leading-tight group-hover:underline decoration-1 underline-offset-4">{v.title}</h3>
                        <span className="text-[9px] font-mono text-black/20 mt-2">MP4_H264</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
