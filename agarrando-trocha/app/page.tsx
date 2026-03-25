'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Play, ArrowRight, Heart, Coffee, Bike, ChevronDown } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Placeholder from '@/components/Placeholder';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section - Cinematic Wireframe */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 wireframe-grid opacity-20 pointer-events-none" />
        
        <div className="relative z-20 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-4">
              COLOMBIA / BIKETRIP / DOCUMENTARY
            </span>
            <div className="h-[1px] w-12 bg-black/20 mx-auto" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[120px] font-display leading-[0.9] tracking-tighter mb-12"
          >
            &quot;¿QUÉ HAY DETRÁS DE LAS MONTAÑAS?&quot;
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl font-serif italic text-black/60 mb-16 max-w-2xl mx-auto"
          >
            La respuesta está en el camino.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <Link 
              href="/historia" 
              className="group relative px-12 py-5 text-[10px] font-mono uppercase tracking-[0.3em] overflow-hidden"
            >
              <div className="absolute inset-0 border border-black group-hover:bg-black transition-colors duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Empieza tu propia trocha</span>
            </Link>
            <Link 
              href="/videos" 
              className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] hover:opacity-50 transition-opacity"
            >
              <span className="w-10 h-[1px] bg-black/20 group-hover:w-16 transition-all duration-500" />
              Ver documentales
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/30 rotate-90 origin-left translate-x-1">Scroll</span>
          <ChevronDown size={16} strokeWidth={1} className="text-black/20" />
        </motion.div>

        {/* Technical Data Overlays */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-[9px] font-mono text-black/20 uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-1">
            <span>Lat: 4.5709° N</span>
            <span>Lon: 74.2973° W</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Elev: 2,640m</span>
            <span>Temp: 14°C</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Editorial Layout */}
      <section className="py-40 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-12">01 / FILOSOFÍA</span>
              <h2 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tighter mb-12">
                CONOCER PARA AMAR Y AMAR PARA PRESERVAR
              </h2>
              <div className="space-y-8 text-xl text-black/70 leading-relaxed font-serif italic">
                <p>
                  Agarrando Trocha no nació como un proyecto. Nació cuando no tenía todo claro. Cuando improvisar fue la forma de volver a moverme. De subirme a la bicicleta sin respuestas y dejar que el camino se resolviera andando.
                </p>
                <p>
                  Es mi forma de encontrarme. De encontrar Colombia. De encontrarte a ti también, porque quizás buscabas algo sin saber qué.
                </p>
              </div>
              <Link href="/historia" className="group flex items-center gap-6 mt-16 text-[10px] font-mono uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">
                Nuestra historia 
                <div className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500" />
              </Link>
            </div>
            
            <div className="lg:col-span-7 relative">
              <Placeholder 
                label="Imagen: Camilo en la trocha, plano cinematográfico, luz de atardecer en el páramo" 
                aspectRatio="portrait"
                className="w-full max-w-2xl ml-auto"
              />
              {/* Technical annotation */}
              <div className="absolute -bottom-8 right-0 text-[9px] font-mono text-black/30 uppercase tracking-[0.2em]">
                Shot on 35mm / 24fps / Anamorphic
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Section - Cinematic Focus */}
      <section className="py-40 px-6 md:px-12 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 block mb-8">02 / ESTRENO</span>
            <h2 className="text-5xl md:text-8xl font-display leading-none tracking-tighter mb-8">LA RUTA DE LOS OLVIDADOS</h2>
            <p className="text-xl font-serif italic text-white/60 max-w-2xl">Un documental sobre las historias que existen detrás de las montañas</p>
          </div>

          <div className="relative group cursor-none">
            <Placeholder 
              label="Video: Trailer oficial - Paisajes de 10 departamentos, rostros de campesinos, sonido de viento y pedaleo" 
              aspectRatio="video"
              className="border-white/10"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xl">
                <Play className="text-white fill-white ml-2" size={32} strokeWidth={1} />
              </div>
            </div>
            
            {/* Custom Cursor Indicator */}
            <div className="hidden lg:block absolute pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
              {/* This would be handled by a custom cursor component in a real app */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
            <div className="max-w-md">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] mb-6 text-white/40">Sinopsis</p>
              <p className="text-white/80 text-lg italic leading-relaxed">
                10 departamentos. 3 meses. Historias que merecen ser contadas. Un viaje al corazón de la Colombia profunda.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-end justify-end">
               <button className="w-full md:w-auto px-12 py-5 bg-white text-black text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-white/90 transition-colors">
                 Ver completo
               </button>
               <button className="w-full md:w-auto px-12 py-5 border border-white/20 text-white text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-white/10 transition-colors">
                 Apoyar proyecto
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Logbook Style */}
      <section className="py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">03 / BITÁCORA</span>
              <h2 className="text-5xl md:text-7xl font-display leading-[0.95] tracking-tighter mb-8">DIARIOS DE RUTA</h2>
              <p className="text-xl font-serif italic text-black/60">
                &quot;No solo escribo sobre dónde fui. Escribo sobre quién encontré. Sobre lo que me enseñaron. Sobre lo que me quedé.&quot;
              </p>
            </div>
            <Link href="/blog" className="text-[10px] font-mono uppercase tracking-[0.3em] border-b border-black pb-2 hover:opacity-50 transition-opacity">
              Ver todos los relatos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "La noche oscura del alma", location: "Reflexión", date: "12.04.25", img: "Noche en el páramo, carpa iluminada desde adentro" },
              { title: "Don Abelino, el paramero", location: "Guasca", date: "08.04.25", img: "Retrato de Don Abelino, manos curtidas, mirada profunda" },
              { title: "Lo que encontré en la Cuchilla", location: "Viaje", date: "02.04.25", img: "Vista panorámica del Páramo de la Cuchilla, niebla" }
            ].map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer border-l border-black/5 pl-8"
              >
                <div className="mb-8">
                  <Placeholder 
                    label={`Imagen: ${post.img}`} 
                    aspectRatio="portrait"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/40">{post.location}</span>
                  <span className="text-[9px] font-mono text-black/20">{post.date}</span>
                </div>
                <h3 className="text-2xl font-display leading-tight group-hover:underline decoration-1 underline-offset-4">{post.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section - Minimal Grid */}
      <section className="py-40 px-6 md:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 block mb-8">04 / EQUIPAMIENTO</span>
            <h2 className="text-5xl md:text-7xl font-display leading-none tracking-tighter mb-8">LLEVA LA TROCHA CONTIGO</h2>
            <p className="text-xl font-serif italic text-white/60">No necesitas mucho. Solo lo necesario.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {/* Bento Grid Layout - Wireframe Style */}
            <div className="md:col-span-2 md:row-span-2 bg-black p-12 flex flex-col justify-between group">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/40 mb-8 block">Producto Estrella</span>
                <h3 className="text-4xl font-display mb-4">El Broche del Camino</h3>
                <p className="text-white/60 text-lg italic mb-12">Pocillo de peltre grabado a mano, compañero de amaneceres.</p>
                <p className="text-3xl font-display mb-12">$45.000 COP</p>
              </div>
              <div className="mb-12">
                <Placeholder label="Imagen: Pocillo de peltre sobre una roca, textura metálica" aspectRatio="square" className="max-w-[300px] mx-auto border-white/5" />
              </div>
              <button className="w-full py-5 border border-white/20 text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                Pedir por WhatsApp
              </button>
            </div>

            <div className="bg-black p-8 flex flex-col group">
              <div className="mb-8">
                <Placeholder label="Imagen: Camiseta negra con logo minimalista" aspectRatio="square" className="border-white/5" />
              </div>
              <h4 className="font-display text-xl mb-2">Camiseta &quot;Trocha&quot;</h4>
              <p className="text-white/40 font-mono text-xs">$65.000</p>
            </div>

            <div className="bg-black p-8 flex flex-col group">
              <div className="mb-8">
                <Placeholder label="Imagen: Termo de acero inoxidable, rayado por el uso" aspectRatio="square" className="border-white/5" />
              </div>
              <h4 className="font-display text-xl mb-2">Termo Camilo</h4>
              <p className="text-white/40 font-mono text-xs">$85.000</p>
            </div>

            <div className="md:col-span-2 bg-white text-black p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-display mb-6 tracking-tight">¿BUSCAS ALGO ESPECIAL?</h3>
              <p className="text-black/60 text-lg italic mb-12 max-w-xs">Fotografías de edición limitada impresas en papel fine art.</p>
              <Link href="/tienda" className="px-12 py-5 border border-black text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                Ver catálogo de arte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - Minimalist Call to Action */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">05 / COMUNIDAD</span>
              <h2 className="text-5xl md:text-8xl font-display leading-[0.9] tracking-tighter mb-12">LOS CAMINANTES</h2>
              <p className="text-2xl font-serif italic text-black/70 mb-12 leading-relaxed">
                &quot;No soy el único que busca. Somos muchos los que caminamos buscando. Los Caminantes somos una comunidad de quienes creen que hay algo más detrás de las montañas.&quot;
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 text-black/40">
                  <div className="w-12 h-[1px] bg-black/20" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Aportes desde $20.000 COP</span>
                </div>
                <div className="flex items-center gap-6 text-black/40">
                  <div className="w-12 h-[1px] bg-black/20" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Membresías con beneficios</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { name: "Aporte al Viaje", price: "Desde $20k", desc: "Para aportes puntuales", icon: <Coffee size={20} strokeWidth={1} /> },
                { name: "Compañero de Ruta", price: "$35k/mes", desc: "Acceso anticipado y chat exclusivo", icon: <Bike size={20} strokeWidth={1} /> },
                { name: "Alma de Trocha", price: "$100k/mes", desc: "Foto impresa y mención en créditos", icon: <Heart size={20} strokeWidth={1} /> }
              ].map((tier, i) => (
                <div key={i} className="group border border-black/10 p-10 hover:border-black transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-black/40 group-hover:text-black transition-colors">{tier.icon}</div>
                    <span className="text-2xl font-display">{tier.price}</span>
                  </div>
                  <h3 className="text-3xl font-display mb-2">{tier.name}</h3>
                  <p className="text-black/40 text-sm italic mb-10">{tier.desc}</p>
                  <button className="w-full py-5 border border-black/10 text-[10px] font-mono uppercase tracking-[0.3em] group-hover:bg-black group-hover:text-white transition-all">
                    Unirme ahora
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
