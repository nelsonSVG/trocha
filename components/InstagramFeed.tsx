'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  thumbnail: string;
  caption: string;
  link: string;
  size: 'large' | 'medium' | 'small';
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram');
        const result = await response.json();
        if (result.success) {
          setPosts(result.data);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="bg-black py-32 overflow-hidden w-full">
      {/* Header section */}
      <div className="container-boxed mb-24 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 block mb-6">06 / VENTANA AL CAMINO</span>
            <h2 className="text-5xl md:text-8xl font-display leading-none tracking-tighter uppercase mb-4 text-white">
              INSTANTES DE RUTA<br />EN INSTAGRAM
            </h2>
            <p className="text-xl font-serif italic text-white/50 max-w-xl">
              "Fragmentos vivos de la expedición. Sigue el rastro de mi trocha mientras sucede en tiempo real."
            </p>
          </motion.div>
          
          <motion.a 
            href="https://instagram.com/agarrandotrochacol" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.4em] border border-white/30 px-10 py-5 hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
          >
            <Instagram size={16} />
            SEGUIR EL RASTRO
          </motion.a>
        </div>
      </div>

      {/* Full Width Gallery Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px]">
        <AnimatePresence mode="wait">
          {loading ? (
            // Skeleton state while loading
            Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={`skeleton-${i}`} 
                className="bg-white/5 border border-white/5 animate-pulse col-span-1 md:col-span-3" 
              />
            ))
          ) : (
            posts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className={`group relative overflow-hidden bg-white/5 block border-[0.5px] border-white/10
                  ${post.size === 'large' ? 'col-span-2 md:col-span-8 md:row-span-2' : ''}
                  ${post.size === 'medium' ? 'col-span-2 md:col-span-4 md:row-span-1' : ''}
                  ${post.size === 'small' ? 'col-span-1 md:col-span-2 md:row-span-1' : ''}
                `}
              >
                <Image 
                  src={post.thumbnail} 
                  alt="Instante de ruta real" 
                  fill 
                  className="object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-10 backdrop-blur-md">
                  <div className="flex justify-between items-start text-white/40">
                     <Instagram size={20} strokeWidth={1} />
                     <ExternalLink size={18} strokeWidth={1} className="group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-white text-lg font-serif italic leading-relaxed line-clamp-4">
                      "{post.caption}"
                    </p>
                    <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30">
                        Ver en Instagram
                      </span>
                      <span className="text-[8px] font-mono text-white/20">@agarrandotrochacol</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Social Bar */}
      <div className="w-full py-16 border-y border-white/5 mt-20 flex justify-center overflow-hidden">
        <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
           className="flex gap-24 whitespace-nowrap text-[14px] font-mono uppercase tracking-[1em] text-white/5"
        >
          <span>Agarrando Trocha</span>
          <span>Bikepacking Documental</span>
          <span>Detrás de las montañas</span>
          <span>Camilo Medina</span>
          <span>Agarrando Trocha</span>
          <span>Bikepacking Documental</span>
          <span>Detrás de las montañas</span>
          <span>Camilo Medina</span>
        </motion.div>
      </div>
    </section>
  );
}
