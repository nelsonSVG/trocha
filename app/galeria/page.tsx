'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Camera, Film, Maximize2 } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Placeholder from '@/components/Placeholder';

export default function GalleryPage() {
  const [filter, setFilter] = useState('todos');

  const items = [
    { id: 1, type: 'foto', title: 'AMANECER EN GUASCA', category: 'PAISAJE', img: 'Imagen: Luz dorada filtrándose entre la niebla, silueta de montaña' },
    { id: 2, type: 'video', title: 'RELATOS DEL CAMINO: EPISODIO 1', category: 'DOCUMENTAL', img: 'Video: Primer plano de Don Abelino hablando, fondo desenfocado' },
    { id: 3, type: 'foto', title: 'LA BICICLETA DE CAMILO', category: 'EQUIPO', img: 'Imagen: Bicicleta llena de barro apoyada en un poste de madera' },
    { id: 4, type: 'foto', title: 'DON ABELINO', category: 'GENTE', img: 'Imagen: Retrato en blanco y negro, ojos expresivos, sombrero' },
    { id: 5, type: 'video', title: 'REFLEXIÓN: EL SILENCIO', category: 'REFLEXION', img: 'Video: Plano fijo de un páramo desierto, solo se escucha el viento' },
    { id: 6, type: 'foto', title: 'TROCHA EN CHINGAZA', category: 'PAISAJE', img: 'Imagen: Camino de piedra serpenteando por el páramo' },
    { id: 7, type: 'foto', title: 'MANOS QUE TRABAJAN', category: 'GENTE', img: 'Imagen: Detalle de manos curtidas por el sol y el trabajo' },
    { id: 8, type: 'video', title: 'BEHIND THE SCENES: LOS NEVADOS', category: 'BTS', img: 'Video: Camilo cargando el equipo de cámara por una pendiente' },
    { id: 9, type: 'foto', title: 'NIEBLA EN EL PÁRAMO', category: 'PAISAJE', img: 'Imagen: Composición minimalista de frailejones en la niebla' },
  ];

  const filteredItems = filter === 'todos' ? items : items.filter(item => item.type === filter);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">INSTANTES / CAPTURAS</span>
            <h1 className="text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12 uppercase">INSTANTES</h1>
            <p className="text-2xl font-serif italic text-black/60 max-w-2xl mx-auto">
              &quot;Lo que veo cuando pedaleo. Fragmentos de tiempo capturados entre montañas y trochas.&quot;
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-12 mb-24 border-b border-black/5 pb-8">
            {['todos', 'foto', 'video'].map((f) => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all relative pb-8 ${filter === f ? 'text-black' : 'text-black/30 hover:text-black'}`}
              >
                {f}
                {filter === f && (
                  <motion.div layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-[1px] bg-black" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative aspect-square bg-white overflow-hidden cursor-pointer border border-black/5"
                >
                  <Placeholder 
                    label={item.img} 
                    aspectRatio="square"
                    className="border-none"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-12 backdrop-blur-[2px]">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/40">
                        {item.category}
                      </span>
                      {item.type === 'video' ? <Film size={18} strokeWidth={1} /> : <Camera size={18} strokeWidth={1} />}
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="max-w-[70%]">
                        <h3 className="text-2xl font-display text-black leading-tight tracking-tight uppercase">{item.title}</h3>
                        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40 mt-4">
                          {item.type === 'video' ? 'Reproducir archivo' : 'Ver en detalle'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/20">
                        {item.type === 'video' ? <Play size={16} strokeWidth={1} className="text-black fill-black ml-0.5" /> : <Maximize2 size={16} strokeWidth={1} className="text-black" />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
