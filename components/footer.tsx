import React from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Logo Symbol (No circles, larger size) */}
        <div className="mb-12 group transition-all duration-700">
          <img 
            src="/logo-white.svg" 
            alt="AT Símbolo" 
            className="w-64 h-64 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
          />
        </div>

        <h2 className="text-[30px] font-semibold uppercase tracking-tight mb-4">
          AGARRANDO TROCHA
        </h2>
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-16">
          CICLISMO DE AVENTURA & DOCUMENTAL
        </p>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
          <Link href="/historia" className="hover:text-white transition-colors">El Camino</Link>
          <Link href="/archivo" className="hover:text-white transition-colors">El Archivo</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Diarios de Ruta</Link>
          <Link href="/comunidad" className="hover:text-white transition-colors">Los Caminantes</Link>
          <Link href="/tienda" className="hover:text-white transition-colors">La Tienda</Link>
        </nav>

        <div className="flex space-x-12 mb-20">
          <Link 
            href="https://instagram.com/agarrandotrochacol" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/40 hover:text-white transition-colors"
          >
            <Instagram size={20} strokeWidth={1.2} />
          </Link>
          <Link 
            href="https://youtube.com/@agarrandotrochacol" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/40 hover:text-white transition-colors"
          >
            <Youtube size={20} strokeWidth={1.2} />
          </Link>
          <Link 
            href="https://wa.me/573016315579?text=Hola%20Camilo,%20me%20gustar%C3%ADa%20conectar%20contigo.%20He%20estado%20explorando%20lo%20que%20hay%20detr%C3%A1s%20de%20las%20monta%C3%B1as%20en%20Agarrando%20Trocha%20y%20quiero%20saber%20m%C3%A1s%20sobre%20este%20camino." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/40 hover:text-white transition-colors"
          >
            <MessageCircle size={20} strokeWidth={1.2} />
          </Link>
        </div>

        <div className="w-full pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/20 gap-4">
          <p>© 2026 AGARRANDO TROCHA. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="italic">CON AMOR, DESDE LAS MONTAÑAS DE COLOMBIA</p>
        </div>
      </div>
    </footer>
  );
}
