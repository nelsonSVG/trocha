import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Tienda',
  description: 'Lleva la trocha contigo. Pocillo de peltre "El Broche del Camino", camisetas, termos y fotografías de edición limitada impresas en papel fine art.',
  openGraph: {
    title: 'La Tienda | Agarrando Trocha',
    description: 'Pocillo de peltre, camisetas, termos y fotografías fine art. Objetos que cuentan historias.',
    url: 'https://agarrandotrocha.com/tienda',
    type: 'website',
  },
};

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
