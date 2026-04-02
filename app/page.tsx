'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InstagramFeed } from '@/components/InstagramFeed';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <Image 
          src="/images/home/27.jpg" 
          alt="Camilo Medina pedaleando por una trocha de montaña" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-20 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] block mb-4">
              COLOMBIA / VIAJE EN BICI / DOCUMENTAL
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[120px] font-bold leading-[0.85] mb-8 uppercase"
          >
            AGARRANDO<br/>TROCHA
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl font-medium mb-12 tracking-[0.2em] uppercase"
          >
            PEDALEA!, YA APARECERÁ LA TROCHA
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <Link href="/historia" className="btn-monte bg-white text-black border-white hover:bg-transparent hover:text-white">
              Mi historia
            </Link>
            <Link href="/videos" className="btn-monte border-white text-white hover:bg-white hover:text-black">
              Ver documentales
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown size={24} strokeWidth={1} className="text-white/50" />
        </motion.div>
      </section>

      {/* Idea Inicial Section */}
      <section className="section-gap bg-white">
        <div className="container-boxed">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="lg:col-span-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 block mb-12">01 / IDEA INICIAL</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
                "¿QUÉ HAY DETRÁS DE LAS MONTAÑAS?"
              </h2>
              <div className="text-lg text-black/70 leading-relaxed font-medium space-y-8">
                <p>
                  "Desde niño me acompaña una pregunta que aún me mueve: ¿qué hay detrás de las montañas? Me subo a la bici y pedaleo con el corazón abierto, buscando en cada trocha las historias que susurran los caminos."
                </p>
                <p className="italic">
                  Cada viaje es una excusa para preguntarse: ¿Qué hay detrás de las montañas?
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[3/4]">
                <Image 
                  src="/images/home/21.jpg" 
                  alt="Camilo Medina en el páramo" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Description Section - Parallax Background */}
      <section ref={parallaxRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/home/26.jpg" 
            alt="Agarrando Trocha - Descanso en el camino" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="container-boxed relative z-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 block mb-12">02 / EL PROYECTO</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tight uppercase">DOCUMENTALISMO SOBRE DOS RUEDAS</h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-12">
                Agarrando Trocha es un proyecto de bikepacking documental nacido del deseo de narrar historias reales que habitan detrás de las montañas. Un puente para conectar realidades y despertar empatía a través del lente y el pedal.
              </p>
              <Link href="/archivo" className="btn-monte bg-white text-black border-white hover:bg-transparent hover:text-white">
                Explorar el archivo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Content Section */}
      <section className="section-gap bg-white">
        <div className="container-boxed">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
            className="max-w-3xl mx-auto text-center mb-24"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 block mb-12">03 / EL CAMINO</span>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic">
              "A través del lente y el pedal, documento paisajes, historias y emociones, creando piezas audiovisuales que buscan inspirar a otros a descubrir Colombia desde una mirada auténtica, sensible y respetuosa."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="space-y-12"
            >
              <div className="relative aspect-square">
                <Image src="/images/home/23.jpg" alt="Departamento de Boyaca" fill className="object-cover" />
              </div>
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                La bicicleta no es solo transporte, es un puente para conectar realidades y despertar empatía. Viajar por Colombia nace en el corazón de Agarrando Trocha. Un viaje que se despliega sobre dos ruedas, atravesando los vastos paisajes: llanos que se extienden como océanos de tierra, las sombras profundas del piedemonte amazónico y las cumbres imponentes de la cordillera oriental.
              </p>
            </motion.div>

            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="space-y-12 md:mt-24"
            >
              <div className="relative aspect-square">
                <Image src="/images/home/30.jpg" alt="Parque Chingaza" fill className="object-cover" />
              </div>
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                Desde la bicicleta, cada movimiento es un acto de memoria, un desafío al olvido. Es una ruta que corta páramos envueltos en niebla, penetra selvas que susurran secretos antiguos y cruza ríos que murmuran resistencias. Un camino donde la naturaleza es testigo y cómplice, y donde los kilómetros no solo miden distancia, sino historias de lucha, identidad y arraigo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Camilo Medina Section */}
      <section className="section-gap bg-black text-white">
        <div className="container-boxed">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="lg:col-span-5"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 block mb-12">04 / EL AUTOR</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-12">CAMILO MEDINA</h2>
              <p className="text-xl text-white/80 font-medium italic mb-12 leading-relaxed">
                Realizador audiovisual con experiencia en producción de campo para comerciales Colombia, recorriendo diferentes rincones del país. Contar historias a través de la bicicleta.
              </p>
              <div className="h-[1px] w-24 bg-white/20 mb-12" />
              <p className="text-white/60 leading-relaxed font-medium">
                Es un homenaje a los caminos trazados, al esfuerzo de quienes se niegan a desaparecer y a las ruedas que giran, eternas, sobre la tierra que aún guarda memorias vivas.
              </p>
            </motion.div>

            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[4/5]">
                <Image 
                  src="/images/home/18.jpg" 
                  alt="Camilo Medina Portrait" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Remaining Images */}
      <section className="section-gap bg-white">
        <div className="container-boxed">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 block mb-24 text-center">05 / GALERÍA DE RUTA</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/rutas/los-olvidados/6.jpg", alt: "Montañas de Los Olvidados", span: "md:col-span-2" },
              { src: "/images/rutas/paramillo-quindio/Paramillo 3.jpg", alt: "Frailejones en el Paramillo", span: "" },
              { src: "/images/rutas/el-empiezo/16032023-presidente.jpg", alt: "Ruta El Empiezo", span: "" },
              { src: "/images/home/3.jpg", alt: "Trocha y frailejones", span: "" },
              { src: "/images/home/22.jpg", alt: "Perro y bicicleta", span: "" },
            ].map((img, i) => (
              <motion.div 
                key={i} 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={fadeInUp.transition}
                className={`relative aspect-[4/3] ${img.span}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Final CTA */}
      <section className="py-48 bg-black text-white text-center">
        <div className="container-boxed">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-16 uppercase tracking-tight">¿Vienes conmigo?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <Link href="/comunidad" className="btn-monte border-white text-white hover:bg-white hover:text-black">
                Acompáñame en la ruta
              </Link>
              <Link href="/tienda" className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white pb-2 hover:opacity-50 transition-all">
                Visitar la tienda
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
