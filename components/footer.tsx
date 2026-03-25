import React from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-snow-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-display mb-6">AGARRANDO TROCHA</h2>
          <p className="text-snow-white/60 max-w-md mb-8 font-serif italic">
            &quot;Conocer para amar y amar para preservar. La respuesta está en el camino.&quot;
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-paramo-gold transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-paramo-gold transition-colors"><Youtube size={20} /></Link>
            <Link href="#" className="hover:text-paramo-gold transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-paramo-gold transition-colors"><MessageCircle size={20} /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-accent uppercase tracking-widest mb-6 text-paramo-gold">Explora</h3>
          <ul className="space-y-4 text-sm font-accent">
            <li><Link href="/historia" className="hover:underline">El Camino</Link></li>
            <li><Link href="/videos" className="hover:underline">El Archivo</Link></li>
            <li><Link href="/blog" className="hover:underline">Diarios de Ruta</Link></li>
            <li><Link href="/galeria" className="hover:underline">Instantes</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-accent uppercase tracking-widest mb-6 text-paramo-gold">Contacto</h3>
          <ul className="space-y-4 text-sm font-accent">
            <li><Link href="/tienda" className="hover:underline">La Tienda</Link></li>
            <li><Link href="/comunidad" className="hover:underline">Los Caminantes</Link></li>
            <li><a href="mailto:hola@agarrandotrocha.com" className="hover:underline">hola@agarrandotrocha.com</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-snow-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-snow-white/40">
        <p>© 2026 AGARRANDO TROCHA. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="mt-4 md:mt-0 italic">CON AMOR, DESDE LAS MONTAÑAS DE COLOMBIA</p>
      </div>
    </footer>
  );
}
