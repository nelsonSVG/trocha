import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instantes',
  description: 'Fotografías y videos de los viajes en bicicleta por Colombia. Paisajes de páramos, retratos de la gente del campo y momentos de silencio entre montañas.',
  openGraph: {
    title: 'Instantes | Agarrando Trocha',
    description: 'Lo que veo cuando pedaleo. Fragmentos de tiempo capturados entre montañas y trochas.',
    url: 'https://agarrandotrocha.com/galeria',
    type: 'website',
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
