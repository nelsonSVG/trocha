'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Placeholder from '@/components/Placeholder';

export default function BlogPage() {
  const categories = [
    { name: 'Rutas', code: 'RUT' },
    { name: 'Gente', code: 'PER' },
    { name: 'Reflexiones', code: 'REF' },
    { name: 'Naturaleza', code: 'NAT' },
    { name: 'Equipo', code: 'EQP' },
  ];

  const posts = [
    { 
      title: 'LA NOCHE OSCURA DEL ALMA', 
      date: '15.03.26', 
      coord: '4.7110° N, 74.0721° W',
      category: 'Reflexiones', 
      excerpt: 'A veces el camino más difícil no es el que sube la montaña, sino el que atraviesa el silencio de uno mismo...', 
      img: 'Imagen: Silueta de Camilo frente a una fogata, cielo estrellado, soledad' 
    },
    { 
      title: 'DON ABELINO, EL ÚLTIMO PARAMERO', 
      date: '28.02.26', 
      coord: '4.8617° N, 73.8833° W',
      category: 'Gente', 
      excerpt: 'En las faldas del páramo de Guasca vive un hombre que conoce el lenguaje de la niebla y el secreto de los frailejones...', 
      img: 'Imagen: Retrato en primer plano de Don Abelino, manos curtidas, fondo de niebla' 
    },
    { 
      title: 'LO QUE APRENDÍ EN 60 PUEBLOS', 
      date: '10.02.26', 
      coord: 'VARIOUS_LOCATIONS',
      category: 'Reflexiones', 
      excerpt: 'Después de recorrer trece departamentos, me di cuenta que Colombia no es un mapa, es una conversación infinita...', 
      img: 'Imagen: Collage de rostros, plazas de pueblos, caminos de tierra' 
    },
    { 
      title: 'GUÍA: EQUIPAJE MINIMALISTA PARA BIKEPACKING', 
      date: '20.01.26', 
      coord: 'STUDIO_BASE',
      category: 'Equipo', 
      excerpt: 'Cargar solo lo necesario no es una técnica, es una filosofía de vida que se aprende pedaleando...', 
      img: 'Imagen: Equipo de bikepacking extendido sobre el suelo, ordenado, técnico' 
    },
    { 
      title: 'EL SILENCIO DE LOS PÁRAMOS', 
      date: '05.01.26', 
      coord: '3.9833° N, 74.3833° W',
      category: 'Naturaleza', 
      excerpt: 'Hay un tipo de silencio que solo existe por encima de los tres mil metros. Un silencio que te obliga a escuchar...', 
      img: 'Imagen: Paisaje de páramo a contraluz, frailejones, luz dorada' 
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">BITÁCORA / LOGBOOK</span>
            <h1 className="text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12 uppercase">DIARIOS DE RUTA</h1>
            <p className="text-2xl font-serif italic text-black/60 max-w-2xl mx-auto">
              &quot;Porque todo viaje merece ser contado. Relatos íntimos desde el corazón de las trochas colombianas.&quot;
            </p>
          </div>

          {/* Categories / Filter */}
          <div className="flex flex-wrap justify-center gap-12 mb-32 border-y border-black/5 py-12">
            {categories.map((cat) => (
              <button key={cat.name} className="group flex flex-col items-center gap-2">
                <span className="text-[9px] font-mono text-black/20 group-hover:text-black transition-colors">{cat.code}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] group-hover:underline underline-offset-8 decoration-1">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer relative">
                {/* Logbook binding simulation */}
                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block" />
                
                <div className="mb-8 relative">
                  <Placeholder 
                    label={post.img} 
                    aspectRatio="landscape"
                    className="border-black/5"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black text-white px-3 py-1 text-[9px] font-mono uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[9px] font-mono text-black/40 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span>{post.coord}</span>
                  </div>
                  <h2 className="text-3xl font-display group-hover:underline decoration-1 underline-offset-4 leading-tight tracking-tight uppercase">{post.title}</h2>
                  <p className="text-black/60 text-lg line-clamp-3 font-serif leading-relaxed italic">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-black/20" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 group-hover:text-black transition-colors">Leer relato completo</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-40 flex justify-center">
            <nav className="flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.4em]">
              <button className="text-black/20" disabled>Anterior</button>
              <div className="flex gap-8">
                <button className="text-black border-b border-black">01</button>
                <button className="text-black/40 hover:text-black">02</button>
                <button className="text-black/40 hover:text-black">03</button>
                <span className="text-black/10">...</span>
                <button className="text-black/40 hover:text-black">12</button>
              </div>
              <button className="text-black/40 hover:text-black">Siguiente</button>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
