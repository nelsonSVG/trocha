'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Placeholder from '@/components/Placeholder';

export default function ShopPage() {
  const products = [
    { id: 1, name: 'Camiseta "Trocha"', price: '$65.000', category: 'Ropa', img: 'Imagen: Camiseta negra con logo minimalista en el pecho' },
    { id: 2, name: 'Termo Camilo', price: '$85.000', category: 'Accesorios', img: 'Imagen: Termo de acero inoxidable, grabado láser' },
    { id: 3, name: 'Fotografía Edición Limitada', price: '$250.000', category: 'Arte', img: 'Imagen: Foto enmarcada de un páramo, blanco y negro' },
    { id: 4, name: 'Gorra Páramo', price: '$45.000', category: 'Ropa', img: 'Imagen: Gorra tipo trucker, parche bordado' },
    { id: 5, name: 'Calcetines Trocha', price: '$25.000', category: 'Ropa', img: 'Imagen: Calcetines técnicos de ciclismo, patrón geométrico' },
    { id: 6, name: 'Libro "Detrás de las Montañas"', price: 'Por definir', category: 'Arte', img: 'Imagen: Portada de libro de fotografía, tapa dura' },
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-48 pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-8">EQUIPO / ARTE</span>
            <h1 className="text-6xl md:text-9xl font-display leading-none tracking-tighter mb-12 uppercase">LA TIENDA</h1>
            <p className="text-2xl font-serif italic text-black/60 max-w-2xl">
              &quot;No necesitas mucho. Solo lo necesario. Objetos que cuentan historias y arte que captura instantes.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Featured Product */}
            <div className="md:col-span-2 md:row-span-2 bg-white p-16 flex flex-col justify-between border border-black/10 relative overflow-hidden group">
              <div className="absolute inset-0 wireframe-grid opacity-[0.03] pointer-events-none" />
              <div className="relative z-10">
                <span className="text-black/40 font-mono uppercase tracking-[0.3em] text-[10px] mb-8 block">PRODUCTO_DESTACADO_01</span>
                <h2 className="text-5xl md:text-7xl font-display mb-6 tracking-tighter uppercase">EL BROCHE DEL CAMINO</h2>
                <p className="text-xl text-black/60 italic font-serif mb-12 max-w-md leading-relaxed">
                  Nuestro pocillo de peltre clásico. Resistente a las trochas más duras, compañero de todos los amaneceres. Grabado a mano con la esencia de Agarrando Trocha.
                </p>
                <p className="text-4xl font-display mb-12">$45.000 COP</p>
              </div>
              <div className="relative w-full max-w-md mx-auto mb-12 z-10">
                <Placeholder 
                  label="Imagen: Pocillo de peltre con desgaste natural, fondo neutro" 
                  aspectRatio="square"
                  className="border-black/5"
                />
              </div>
              <button className="relative z-10 w-full bg-black text-white py-6 text-[10px] font-mono uppercase tracking-[0.4em] hover:invert transition-all">
                Pedir por WhatsApp
              </button>
            </div>

            {/* Other Products */}
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 border border-black/5 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute inset-0 wireframe-grid opacity-[0.01] pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-8">
                    <Placeholder 
                      label={product.img} 
                      aspectRatio="square"
                      className="border-black/5"
                    />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/20 mb-4 block">{product.category}</span>
                  <h3 className="text-2xl font-display mb-4 tracking-tight uppercase group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
                  <p className="text-xl font-display mb-8 opacity-60">{product.price}</p>
                  <button className="w-full border border-black/10 py-4 text-[9px] font-mono uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                    Ver detalles
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 p-20 border border-black/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 wireframe-grid opacity-[0.05] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-black/40 block mb-12">SISTEMA DE COMPRA</span>
              <h2 className="text-4xl md:text-6xl font-display mb-8 tracking-tighter uppercase">¿CÓMO COMPRAR?</h2>
              <p className="text-xl font-serif italic text-black/60 mb-12 max-w-xl mx-auto leading-relaxed">
                &quot;No usamos tarjetas. Hablamos directo. Es más humano. Selecciona lo que te gusta y escríbenos por WhatsApp para coordinar el pago y el envío.&quot;
              </p>
              <div className="flex justify-center">
                <button className="bg-black text-white px-16 py-6 text-[10px] font-mono uppercase tracking-[0.4em] hover:invert transition-all">
                  Ir a WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
