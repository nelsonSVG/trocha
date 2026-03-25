import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diarios de Ruta',
  description: 'Relatos, reflexiones e historias desde la trocha. Camilo Medina escribe sobre la gente, los paisajes y las lecciones que encuentra pedaleando por la Colombia profunda.',
  openGraph: {
    title: 'Diarios de Ruta | Agarrando Trocha',
    description: 'Relatos y reflexiones desde la trocha. Historias de gente, montañas y silencio.',
    url: 'https://agarrandotrocha.com/blog',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
