import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Archivo',
  description: 'Documentales de bikepacking por Colombia: "Relatos del Camino" en colaboración con Semana, "La Ruta de los Olvidados" y detrás de cámara. Historias que merecen ser contadas.',
  openGraph: {
    title: 'El Archivo - Documentales | Agarrando Trocha',
    description: 'Documentales de bikepacking: Relatos del Camino (con Semana), La Ruta de los Olvidados y más.',
    url: 'https://agarrandotrocha.com/videos',
    type: 'website',
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
