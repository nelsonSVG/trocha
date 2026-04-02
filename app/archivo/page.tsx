'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Play, X, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

const ARCHIVO_ITEMS = [
  // Videos (Instantes/Videos)
  { 
    id: 101, 
    type: 'video', 
    title: 'TRAILER: AGARRANDO TROCHA', 
    thumbnail: '/images/archivo/27.jpg', 
    duration: '2:15', 
    category: 'Documental',
    description: 'Un viaje por las entrañas de Colombia, donde la trocha es el camino y el silencio es el refugio. Detrás de las montañas hay historias que merecen ser contadas.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 102, 
    type: 'video', 
    title: 'RELATOS DEL CAMINO: BOYACÁ', 
    thumbnail: '/images/archivo/23.jpg', 
    duration: '12:40', 
    category: 'Serie',
    description: 'Recorriendo los pueblos de Boyacá, buscando la memoria colectiva en cada pedalazo. Un encuentro con la ruralidad y sus protagonistas.',
    link: '/blog/boyaca-tierra-de-libertad'
  },
  { 
    id: 103, 
    type: 'video', 
    title: 'INSTANTE: EL PÁRAMO', 
    thumbnail: '/images/archivo/3.jpg', 
    duration: '0:45', 
    category: 'Instante',
    description: 'El misticismo del páramo colombiano. Un lugar de altura donde el tiempo se detiene y la niebla lo abraza todo.',
    link: '/blog/paramo-y-niebla'
  },

  // Illustrations
  { 
    id: 1, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-1.png', 
    alt: 'Ilustración Agarrando Trocha 1',
    description: 'Interpretación visual de la libertad en dos ruedas. Cargar solo lo necesario, tanto en la bicicleta como en la vida.',
    link: '/comunidad'
  },
  { 
    id: 2, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-2.png', 
    alt: 'Ilustración Agarrando Trocha 2',
    description: 'El mapa de los sueños. Rutas que se dibujan mientras se pedalean, sin respuestas, dejando que el camino se resuelva andando.',
    link: '/tienda'
  },
  { 
    id: 3, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-3.png', 
    alt: 'Ilustración Agarrando Trocha 3',
    description: 'Conectar con la montaña y con uno mismo. El bikepacking como terapia y como terapeuta.',
    link: '/comunidad'
  },
  { 
    id: 4, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-4.png', 
    alt: 'Ilustración Agarrando Trocha 4',
    description: 'La esencia de Agarrando Trocha: minimalismo, aventura y el coraje de hacer menos para alcanzar mayor profundidad.',
    link: '/tienda'
  },
  { 
    id: 2, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-2.png', 
    alt: 'Ilustración Agarrando Trocha 2',
    description: 'El mapa de los sueños. Rutas que se dibujan mientras se pedalean, sin respuestas, dejando que el camino se resuelva andando.',
    link: '/tienda'
  },
  { 
    id: 3, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-3.png', 
    alt: 'Ilustración Agarrando Trocha 3',
    description: 'Conectar con la montaña y con uno mismo. El bikepacking como terapia y como terapeuta.',
    link: '/comunidad'
  },
  { 
    id: 4, 
    type: 'illustration', 
    src: '/images/archivo/ilustracion-4.png', 
    alt: 'Ilustración Agarrando Trocha 4',
    description: 'La esencia de Agarrando Trocha: minimalismo, aventura y el coraje de hacer menos para alcanzar mayor profundidad.',
    link: '/tienda'
  },
  { 
    id: 2, 
    type: 'illustration', 
    src: '/images/archivo/Sin título-4 (1).png', 
    alt: 'Ilustración Agarrando Trocha 2',
    description: 'El mapa de los sueños. Rutas que se dibujan mientras se pedalean, sin respuestas, dejando que el camino se resuelva andando.',
    link: '/tienda'
  },
  { 
    id: 3, 
    type: 'illustration', 
    src: '/images/archivo/Sin título-5 (1).png', 
    alt: 'Ilustración Agarrando Trocha 3',
    description: 'Conectar con la montaña y con uno mismo. El bikepacking como terapia y como terapeuta.',
    link: '/comunidad'
  },
  { 
    id: 4, 
    type: 'illustration', 
    src: '/images/archivo/Sin título-6 (1).png', 
    alt: 'Ilustración Agarrando Trocha 4',
    description: 'La esencia de Agarrando Trocha: minimalismo, aventura y el coraje de hacer menos para alcanzar mayor profundidad.',
    link: '/tienda'
  },
  
  // Documentary Photos
  { 
    id: 5, 
    type: 'photo', 
    src: '/images/archivo/3.jpg', 
    alt: 'Páramo y niebla',
    description: 'El silencio de la alta montaña. En el páramo, el aire es distinto y la quietud es el lenguaje del alma.',
    link: '/blog/paramo-y-niebla'
  },
  { 
    id: 6, 
    type: 'photo', 
    src: '/images/archivo/5.jpg', 
    alt: 'Frailejones',
    description: 'Guardianes del agua. Los frailejones nos enseñan la paciencia del crecimiento lento y la resistencia en la adversidad.',
    link: '/blog/paramo-y-niebla'
  },
  { 
    id: 7, 
    type: 'photo', 
    src: '/images/archivo/18.jpg', 
    alt: 'Camilo Medina',
    description: 'Camilo Medina, cineasta y realizador audiovisual, encontrando en la bicicleta el medio perfecto para documentar la Colombia rural.',
    link: '/historia'
  },
  { 
    id: 8, 
    type: 'photo', 
    src: '/images/archivo/21.jpg', 
    alt: 'Ascenso en bicicleta',
    description: 'La dureza de la trocha es proporcional a la belleza de la recompensa. Cada ascenso es un diálogo con el cansancio y la voluntad.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 9, 
    type: 'photo', 
    src: '/images/archivo/22.jpg', 
    alt: 'Compañero de ruta',
    description: 'Historias compartidas en el camino. Los encuentros fortuitos son los que realmente le dan sentido a agarrar trocha.',
    link: '/comunidad'
  },
  { 
    id: 10, 
    type: 'photo', 
    src: '/images/archivo/23.jpg', 
    alt: 'Paisaje de Boyacá',
    description: 'Las montañas boyacenses, un laberinto de verdes y caminos veredales donde el tiempo parece haberse detenido.',
    link: '/blog/boyaca-tierra-de-libertad'
  },
  { 
    id: 11, 
    type: 'photo', 
    src: '/images/archivo/26.jpg', 
    alt: 'Descanso en la trocha',
    description: 'Bajar la velocidad en medio del caos. El descanso es parte del viaje, un momento para contemplar lo que hay detrás.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 12, 
    type: 'photo', 
    src: '/images/archivo/27.jpg', 
    alt: 'Pedaleando bajo el sol',
    description: 'La exposición total a los elementos. Sol, lluvia, viento; todo es parte de la experiencia de vivir el territorio.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 13, 
    type: 'photo', 
    src: '/images/archivo/30.jpg', 
    alt: 'Parque Chingaza',
    description: 'Chingaza, un territorio 93% sin pavimentar. El lugar perfecto para perderse y encontrarse en el silencio de sus lagunas.',
    link: '/blog/chingaza-el-corazon-del-agua'
  },

  // Route Photos: Los Olvidados
  { 
    id: 14, 
    type: 'route', 
    src: '/images/rutas/los-olvidados/1.jpg', 
    alt: 'Los Olvidados - Inicio',
    description: 'Inicio de la expedición "La Ruta de los Olvidados". 10 departamentos, 3 meses y la búsqueda incansable de lo que hay detrás de las montañas.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 15, 
    type: 'route', 
    src: '/images/rutas/los-olvidados/6.jpg', 
    alt: 'Los Olvidados - Montañas',
    description: 'La inmensidad del relieve colombiano. Un recordatorio de nuestra pequeñez y de la grandeza de la naturaleza que nos rodea.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 16, 
    type: 'route', 
    src: '/images/rutas/los-olvidados/13.jpg', 
    alt: 'Los Olvidados - Paisaje',
    description: 'Horizontes infinitos en la ruralidad. Cada montaña superada revela una nueva pregunta y un nuevo paisaje por explorar.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 21, 
    type: 'route', 
    src: '/images/rutas/los-olvidados/2.jpg', 
    alt: 'Camino profundo',
    description: 'Adentrándose en lo desconocido. La trocha como metáfora de vida: incierta, exigente, pero profundamente gratificante.',
    link: '/blog/los-olvidados'
  },
  { 
    id: 22, 
    type: 'route', 
    src: '/images/rutas/los-olvidados/7.jpg', 
    alt: 'Trocha',
    description: 'El terreno que amamos. Donde el asfalto termina, empieza la verdadera aventura y la conexión real con el territorio.',
    link: '/blog/los-olvidados'
  },
  
  // Route Photos: Paramillo
  { 
    id: 17, 
    type: 'route', 
    src: '/images/rutas/paramillo-quindio/Paramillo-4.jpg', 
    alt: 'Paramillo del Quindío - Cumbre',
    description: 'Alcanzando la cumbre del Paramillo del Quindío. Un desafío físico y mental que nos enseña a sostener lo que anhelamos.',
    link: '/blog/paramillo-del-quindio'
  },
  { 
    id: 18, 
    type: 'route', 
    src: '/images/rutas/paramillo-quindio/Paramillo-3.jpg', 
    alt: 'Paramillo del Quindío - Páramo',
    description: 'Atravesando el ecosistema de páramo en el Quindío. La fragilidad y la fuerza de la vida en las alturas.',
    link: '/blog/paramillo-del-quindio'
  },
  { 
    id: 23, 
    type: 'route', 
    src: '/images/rutas/paramillo-quindio/Paramillo-1.jpg', 
    alt: 'Cima',
    description: 'La vista desde arriba. Cuando el esfuerzo se convierte en perspectiva y el miedo se atraviesa con cada pedalazo.',
    link: '/blog/paramillo-del-quindio'
  },
  
  // Route Photos: El Empiezo
  { 
    id: 19, 
    type: 'route', 
    src: '/images/rutas/el-empiezo/18032023-_MG_2379.jpg', 
    alt: 'El Empiezo - Ruta',
    description: 'Donde todo comenzó. Los primeros viajes cuando improvisar fue la forma de volver a moverse.',
    link: '/blog/el-empiezo'
  },
  { 
    id: 20, 
    type: 'route', 
    src: '/images/rutas/el-empiezo/17032023-IMG_2218.jpg', 
    alt: 'El Empiezo - Cañón',
    description: 'La profundidad de los cañones colombianos. Un viaje sensorial por las grietas de nuestra geografía.',
    link: '/blog/el-empiezo'
  },
  { 
    id: 24, 
    type: 'route', 
    src: '/images/rutas/el-empiezo/11032023-IMG_1515.jpg', 
    alt: 'Salida Bogotá',
    description: 'Escapando del caos de la ciudad hacia el refugio de la montaña. La transición necesaria para sanar el espíritu.',
    link: '/blog/el-empiezo'
  },
];

const FILTERS = [
  { label: 'Todo', value: 'all' },
  { label: 'Videos', value: 'video' },
  { label: 'Fotografía', value: 'photo' },
  { label: 'Rutas', value: 'route' },
  { label: 'Ilustración', value: 'illustration' },
];

export default function ArchivoPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return ARCHIVO_ITEMS;
    return ARCHIVO_ITEMS.filter(item => item.type === activeFilter);
  }, [activeFilter]);

  const selectedItem = useMemo(() => {
    if (selectedIndex === null) return null;
    return filteredItems[selectedIndex];
  }, [selectedIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [selectedIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">ARCHIVO COMPLETO</span>
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12 uppercase">EL ARCHIVO</h1>
            <p className="text-2xl font-serif italic text-black/60 max-w-2xl mx-auto">
              "Fragmentos de memoria, instantes de trocha y relatos visuales. Todo lo que hemos visto detrás de las montañas."
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-12 mb-24 border-y border-black/5 py-12">
            {FILTERS.map((filter) => (
              <button 
                key={filter.value} 
                onClick={() => {
                  setActiveFilter(filter.value);
                  setSelectedIndex(null);
                }}
                className={`group flex flex-col items-center gap-2 transition-all ${activeFilter === filter.value ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.2em]">{filter.label}</span>
                {activeFilter === filter.value && (
                  <motion.div layoutId="underline" className="h-[1px] w-8 bg-black" />
                )}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="break-inside-avoid cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="group relative overflow-hidden bg-black/5">
                    {item.type === 'video' ? (
                      <div className="relative aspect-video w-full overflow-hidden bg-black">
                         <Image 
                           src={item.thumbnail || ''} 
                           alt={item.title || ''} 
                           fill
                           className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                         />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white p-6">
                          <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                            <Play fill="currentColor" size={24} className="ml-1" />
                          </div>
                          <div className="text-center">
                            <span className="text-[8px] font-mono uppercase tracking-[0.4em] mb-2 block opacity-60">{item.category} / {item.duration}</span>
                            <h3 className="text-lg font-display uppercase tracking-tight">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                         <Image 
                           src={item.src || ''} 
                           alt={item.alt || ''} 
                           width={800}
                           height={1000}
                           className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white space-y-2">
                             <span className="text-[8px] font-mono uppercase tracking-[0.4em] opacity-60">{item.type}</span>
                             <p className="text-[10px] font-mono uppercase tracking-widest leading-tight">
                                {item.alt}
                             </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Lightbox / Slider Full Page View */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={handleClose}
                  className="absolute top-8 right-8 z-[110] p-4 bg-black text-white rounded-full hover:scale-110 transition-transform"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>

                {/* Navigation Arrows (Desktop) */}
                <div className="hidden md:block">
                  <button 
                    onClick={handlePrev}
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-[110] p-4 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all duration-300"
                  >
                    <ArrowLeft size={32} strokeWidth={1} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="absolute right-[calc(33.33%+2rem)] top-1/2 -translate-y-1/2 z-[110] p-4 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all duration-300"
                  >
                    <ArrowRight size={32} strokeWidth={1} />
                  </button>
                </div>

                {/* Media Container */}
                <div className="flex-[2] bg-black/5 flex items-center justify-center p-6 md:p-12 relative group/media">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={selectedItem.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="relative w-full h-full max-w-5xl"
                    >
                      {selectedItem.type === 'video' ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl">
                             <Image 
                               src={selectedItem.thumbnail || ''} 
                               alt={selectedItem.title || ''} 
                               fill
                               className="object-cover opacity-40"
                             />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <div className="p-8 border border-white/20 rounded-full text-white flex flex-col items-center gap-4">
                                <Play size={48} fill="white" />
                                <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Próximamente</span>
                             </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                         <Image 
                           src={selectedItem.src || ''} 
                           alt={selectedItem.alt || ''} 
                           fill
                           className="object-contain"
                           priority
                         />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Position Indicator */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} de {filteredItems.length}
                  </div>

                  {/* Mobile Nav */}
                  <div className="md:hidden absolute bottom-8 left-0 right-0 px-8 flex justify-between">
                     <button onClick={handlePrev} className="p-4 bg-black text-white rounded-full"><ArrowLeft size={20} /></button>
                     <button onClick={handleNext} className="p-4 bg-black text-white rounded-full"><ArrowRight size={20} /></button>
                  </div>
                </div>

                {/* Info Sidebar */}
                <div className="flex-1 bg-white p-12 md:p-24 flex flex-col justify-center border-l border-black/5 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedItem.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 mb-8 block">
                        {selectedItem.type} / {selectedItem.id}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-display uppercase leading-tight mb-8">
                        {selectedItem.title || selectedItem.alt}
                      </h2>
                      <p className="text-xl font-serif italic text-black/60 mb-12 leading-relaxed">
                        "{selectedItem.description}"
                      </p>
                      
                      {selectedItem.link && (
                        <Link 
                          href={selectedItem.link}
                          className="group inline-flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] border-b border-black pb-2 hover:gap-8 transition-all"
                        >
                          Ver Relato Relacionado 
                          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                      )}

                      <div className="mt-24 pt-12 border-t border-black/5 flex flex-col gap-6">
                         <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-black/30">
                            © 2026 Agarrando Trocha - Documentando la Colombia profunda.
                         </p>
                         <button 
                          onClick={handleClose}
                          className="text-[10px] font-mono uppercase tracking-widest text-black/60 hover:text-black flex items-center gap-2"
                         >
                           <ArrowRight size={12} className="rotate-180" /> Volver al archivo
                         </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer CTA */}
          <div className="mt-40 border-t border-black/5 pt-24 text-center">
            <h2 className="text-4xl font-display uppercase mb-12 italic">¿Quieres ver más?</h2>
            <div className="flex justify-center gap-12">
              <a href="https://youtube.com/@agarrandotrocha" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all flex items-center gap-2">
                YouTube <ExternalLink size={10} />
              </a>
              <a href="https://instagram.com/agarrandotrochacol" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all flex items-center gap-2">
                Instagram <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
