import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Los Caminantes',
  description: 'Únete a la comunidad de Agarrando Trocha. Los Caminantes somos quienes creen que hay algo más detrás de las montañas. Membresías y aportes desde $15.000 COP.',
  openGraph: {
    title: 'Los Caminantes | Agarrando Trocha',
    description: 'Comunidad de apoyo al proyecto. No es donación, es compañía en el camino.',
    url: 'https://agarrandotrocha.com/comunidad',
    type: 'website',
  },
};

export default function ComunidadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
