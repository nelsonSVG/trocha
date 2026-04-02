'use client';

import React, { use, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChevronLeft, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const BLOG_POSTS: Record<string, any> = {
  'los-olvidados': {
    title: 'LOS OLVIDADOS',
    date: '15.04.24',
    coord: 'Antioquia - Putumayo',
    category: 'Rutas',
    heroImage: '/images/rutas/los-olvidados/1.JPG',
    excerpt: '¿Qué hay detrás de las montañas? Esa pregunta me acompaña desde hace años. Vuelve cada vez que pedaleo, cuando el aire frío golpea la cara y el camino se vuelve cuesta arriba.',
    content: [
      {
        type: 'text',
        text: '¿Qué hay detrás de las montañas? Esa pregunta me acompaña desde hace años. Vuelve cada vez que pedaleo, cuando el aire frío golpea la cara y el camino se vuelve cuesta arriba. Quizás detrás de esas montañas esté lo que hemos dejado de ver, lo que el país olvidó mientras avanzaba por otros rumbos.',
      },
      {
        type: 'gallery',
        layout: 'vento',
        images: [
          { src: '/images/rutas/los-olvidados/2.jpg', alt: 'Adentrándose en el silencio de la trocha', size: 'large' },
          { src: '/images/rutas/los-olvidados/6.jpg', alt: 'La inmensidad de la cordillera colombiana', size: 'small' },
          { src: '/images/rutas/los-olvidados/7.jpg', alt: 'Terreno incierto, alma libre', size: 'small' },
          { src: '/images/rutas/los-olvidados/8.jpg', alt: 'Detalles que solo se ven a ritmo de pedal', size: 'wide' },
        ]
      },
      {
        type: 'text',
        text: 'El viaje será una forma de escuchar, de pedalear hacia el silencio para que hablen las voces que el ruido ha borrado. Entre curvas y trochas, el país se revela distinto. Un territorio que resiste desde lo cotidiano, desde la siembra, desde la fe. Cada encuentro en el camino será una historia, un fragmento de esa Colombia que resiste en silencio y sostiene, con las manos agrietadas, el peso de la memoria.',
      },
      {
        type: 'gallery',
        layout: 'full',
        images: [
          { src: '/images/rutas/los-olvidados/13.jpg', alt: 'Horizontes infinitos detrás de las montañas', size: 'full' },
        ]
      },
      {
        type: 'gallery',
        layout: 'portfolio',
        images: [
          { src: '/images/rutas/los-olvidados/10.jpg', alt: 'Encuentros fortuitos con la gente del campo', size: 'tall' },
          { src: '/images/rutas/los-olvidados/11.jpg', alt: 'La vida rural late en cada vereda', size: 'normal' },
          { src: '/images/rutas/los-olvidados/14.jpg', alt: 'Arquitectura que cuenta historias de antaño', size: 'normal' },
        ]
      },
      {
        type: 'text',
        text: '“La Ruta de los Olvidados” es una historia que se documentará en solitario, pero no está hecha de soledad. En cada pedalazo viajan las voces que he escuchado en los pueblos, las risas compartidas bajo la lluvia, las manos que ofrecen café sin preguntar de dónde vengo. Cada kilómetro es una conversación con el pasado, una manera de mirar de frente lo que el país ha querido olvidar.',
      },
      {
        type: 'gallery',
        layout: 'grid',
        images: [
          { src: '/images/rutas/los-olvidados/28.jpg', alt: 'Reflexión necesaria en la quietud del camino', size: 'normal' },
          { src: '/images/rutas/los-olvidados/MAPA.JPG.jpg', alt: 'El mapa de una expedición por la Colombia profunda', size: 'normal' },
        ]
      }
    ]
  },
  'paramillo-del-quindio': {
    title: 'PARAMILLO DEL QUINDÍO',
    date: '20.03.24',
    coord: '4.6333° N, 75.4167° W',
    category: 'Rutas',
    heroImage: '/images/rutas/paramillo-quindio/Paramillo 4.jpg',
    excerpt: 'Nada desaparece, todo cambia. El Paramillo del Quindío me lo recordó cuando escuché que ya no quedaba nieve allí y, sin embargo, mis ojos la vieron resistiendo.',
    content: [
      {
        type: 'text',
        text: 'Nada desaparece, todo cambia. El Paramillo del Quindío me lo recordó cuando escuché que ya no quedaba nieve allí y, sin embargo, mis ojos la vieron resistiendo, brillando sobre la montaña.',
      },
      {
        type: 'gallery',
        layout: 'wide',
        images: [
          { src: '/images/rutas/paramillo-quindio/Paramillo 1.jpg', alt: 'Alcanzando la cumbre del Paramillo', size: 'wide' },
          { src: '/images/rutas/paramillo-quindio/Paramillo 2.jpg', alt: 'Resistencia blanca sobre la roca volcánica', size: 'wide' },
        ]
      },
      {
        type: 'text',
        text: 'En ese instante entendí que la vida es transformation, como el páramo que respira con la neblina y como la naturaleza que se adapta una y otra vez para seguir viva. La eternidad no está en los años, sino en la capacidad de reconocer que todo sigue aunque cambie de forma.',
      },
      {
        type: 'gallery',
        layout: 'vento',
        images: [
          { src: '/images/rutas/paramillo-quindio/Paramillo 3.jpg', alt: 'Frailejones: guardianes del agua en la alta montaña', size: 'large' },
          { src: '/images/rutas/paramillo-quindio/Paramillo 5.jpg', alt: 'La inmensidad del ecosistema de páramo', size: 'small' },
        ]
      }
    ]
  },
  'el-empiezo': {
    title: 'EL EMPIEZO',
    date: '11.03.23',
    coord: 'Bogotá - Toledo',
    category: 'Rutas',
    heroImage: '/images/rutas/el-empiezo/18032023-_MG_2379.jpg',
    excerpt: 'Dicen en el campo que todo camino comienza con el empiezo. El mío arrancó saliendo de Bogotá con una idea clara: llegar al pueblo de mi papá.',
    content: [
      {
        type: 'text',
        text: 'Dicen en el campo que todo camino comienza con el empiezo. El mío arrancó saliendo de Bogotá con una idea clara: llegar al pueblo de mi papá. No era solo montar bici por montar, era apostarle a algo que llevaba años rondándome la cabeza.',
      },
      {
        type: 'gallery',
        layout: 'portfolio',
        images: [
          { src: '/images/rutas/el-empiezo/11032023-IMG_1515.jpg', alt: 'Primeros pedalazos dejando atrás la capital', size: 'large' },
          { src: '/images/rutas/el-empiezo/16032023-presidente.jpg', alt: 'Llegada a Presidente, el frío de la montaña se siente', size: 'normal' },
        ]
      },
      {
        type: 'text',
        text: 'El primer tramo fue duro. Tomé la vía hacia Tunja, una carretera larga, con bastante tráfico. Seguí avanzando hasta Soatá, pasando por Duitama, Belén y Susacón. Ahí el entorno empezó a cambiar de verdad. La carretera se volvió más seca, más polvorienta, y el viaje empezó a marcar otro ritmo.',
      },
      {
        type: 'gallery',
        layout: 'full',
        images: [
          { src: '/images/rutas/el-empiezo/17032023-IMG_2218.jpg', alt: 'La imponente profundidad del cañón del Chicamocha', size: 'full' },
        ]
      },
      {
        type: 'gallery',
        layout: 'grid',
        images: [
          { src: '/images/rutas/el-empiezo/23032023-IMG_3064.jpg', alt: 'Atravesando el páramo del Almorzadero', size: 'normal' },
        ]
      }
    ]
  }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS[slug];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Get all images from content for the lightbox
  const allImages = useMemo(() => {
    if (!post) return [];
    const images: any[] = [];
    post.content.forEach((item: any) => {
      if (item.type === 'gallery') {
        images.push(...item.images);
      }
    });
    return images;
  }, [post]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < allImages.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, allImages.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allImages.length - 1));
  }, [lightboxIndex, allImages.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev, handleClose]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-display mb-8 uppercase">Relato no encontrado</h1>
        <Link href="/blog" className="text-sm font-mono uppercase tracking-widest border-b border-black pb-2">
          Volver a la bitácora
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <article className="pt-32 pb-40">
        {/* Post Hero */}
        <div className="container-boxed mb-24">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors mb-16">
            <ChevronLeft size={14} />
            Volver a la bitácora
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] mb-8">
              <span>{post.date}</span>
              <span className="w-8 h-[1px] bg-black/10" />
              <span>{post.coord}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display leading-[0.9] tracking-tighter uppercase mb-12">
              {post.title}
            </h1>
            <p className="text-2xl font-serif italic text-black/60 leading-relaxed max-w-2xl">
              "{post.excerpt}"
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[80vh] relative mb-32 group cursor-pointer">
          <Image 
            src={post.heroImage} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="container-boxed">
          <div className="max-w-5xl mx-auto space-y-32">
            {post.content.map((item: any, i: number) => {
              if (item.type === 'text') {
                return (
                  <div key={i} className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-serif leading-relaxed text-black/80">
                      {item.text}
                    </p>
                  </div>
                );
              }
              if (item.type === 'gallery') {
                return (
                  <div key={i} className={cn(
                    "w-full py-12",
                    item.layout === 'vento' && "grid grid-cols-1 md:grid-cols-12 gap-6",
                    item.layout === 'portfolio' && "grid grid-cols-1 md:grid-cols-2 gap-12",
                    item.layout === 'grid' && "grid grid-cols-1 md:grid-cols-2 gap-6",
                    item.layout === 'wide' && "flex flex-col gap-12",
                    item.layout === 'full' && "w-full"
                  )}>
                    {item.images.map((img: any, idx: number) => {
                        const globalIdx = allImages.findIndex((ai: any) => ai.src === img.src);
                        return (
                          <div 
                            key={idx} 
                            onClick={() => setLightboxIndex(globalIdx)}
                            className={cn(
                                "group cursor-pointer relative overflow-hidden bg-black/5",
                                item.layout === 'vento' && (
                                    img.size === 'large' ? "md:col-span-8 aspect-[4/5]" :
                                    img.size === 'small' ? "md:col-span-4 aspect-square" :
                                    img.size === 'wide' ? "md:col-span-12 aspect-[16/7]" : ""
                                ),
                                item.layout === 'full' && "aspect-[21/9] w-full",
                                item.layout === 'portfolio' && (
                                    img.size === 'tall' ? "aspect-[3/4]" : "aspect-square"
                                ),
                                item.layout === 'grid' && "aspect-square",
                                item.layout === 'wide' && "aspect-[16/9]"
                            )}
                          >
                            <Image 
                              src={img.src} 
                              alt={img.alt} 
                              fill 
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white text-[10px] font-mono uppercase tracking-[0.2em]">{img.alt}</p>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="container-boxed mt-40">
          <div className="border-t border-black/10 pt-24 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/40 block mb-8">POR CAMILO MEDINA</span>
            <h3 className="text-2xl font-display uppercase mb-12">AGARRANDO TROCHA</h3>
            <Link href="/blog" className="inline-flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] border border-black px-12 py-5 hover:bg-black hover:text-white transition-all">
              Explorar más relatos
            </Link>
          </div>
        </div>
      </article>

      {/* Lightbox Slider */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-6 md:p-24"
          >
            <button 
              onClick={handleClose}
              className="absolute top-8 right-8 z-[210] p-4 bg-black text-white rounded-full hover:scale-110 transition-transform"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Navigation Arrows */}
            <button 
                onClick={handlePrev}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-[210] p-4 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all duration-300"
            >
                <ArrowLeft size={32} strokeWidth={1} />
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-[210] p-4 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all duration-300"
            >
                <ArrowRight size={32} strokeWidth={1} />
            </button>

            <div className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={lightboxIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-[70vh]"
                    >
                        <Image 
                            src={allImages[lightboxIndex].src}
                            alt={allImages[lightboxIndex].alt}
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                
                <div className="mt-12 text-center max-w-2xl">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 mb-4 block">
                        {lightboxIndex + 1} / {allImages.length}
                    </span>
                    <p className="text-xl font-serif italic text-black/80">
                        {allImages[lightboxIndex].alt}
                    </p>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
