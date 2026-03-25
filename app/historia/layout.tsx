import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Camino',
  description: 'La historia de Camilo Medina y Agarrando Trocha. Desde un niño preguntando "¿Qué hay detrás de las montañas?" hasta recorrer 60+ pueblos en 13 departamentos de Colombia en bicicleta.',
  openGraph: {
    title: 'El Camino | Agarrando Trocha',
    description: 'La historia de Camilo Medina: de cineasta a ciclista que recorre Colombia documentando historias de la ruralidad.',
    url: 'https://agarrandotrocha.com/historia',
    type: 'profile',
  },
};

export default function HistoriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
