import type {Metadata} from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agarrandotrocha.com'),
  title: {
    default: 'Agarrando Trocha | ¿Qué hay detrás de las montañas?',
    template: '%s | Agarrando Trocha',
  },
  description: 'Bikepacking, documentales e historias de la Colombia profunda. Camilo Medina recorre en bicicleta 60+ pueblos y 13 departamentos buscando lo que existe detrás de las montañas. Conocer para amar y amar para preservar.',
  keywords: [
    'bikepacking Colombia',
    'ciclismo de aventura',
    'documentales colombianos',
    'turismo rural Colombia',
    'trochas Colombia',
    'Camilo Medina',
    'Agarrando Trocha',
    'páramos colombianos',
    'viajes en bicicleta',
    'slow travel Colombia',
    'Relatos del Camino Semana',
    'La Ruta de los Olvidados',
    'rutas en bicicleta Colombia',
    'pueblos de Colombia',
    'minimalismo y viajes',
  ],
  authors: [{ name: 'Camilo Medina', url: 'https://agarrandotrocha.com' }],
  creator: 'Camilo Medina',
  publisher: 'Agarrando Trocha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Agarrando Trocha | ¿Qué hay detrás de las montañas?',
    description: 'Bikepacking, documentales e historias de la Colombia profunda. 60+ pueblos, 13 departamentos, una pregunta que lo cambió todo: ¿Qué hay detrás de las montañas?',
    url: 'https://agarrandotrocha.com',
    siteName: 'Agarrando Trocha',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Camilo Medina pedaleando su bicicleta por una trocha en los páramos de Colombia, con niebla y montañas de fondo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agarrando Trocha | ¿Qué hay detrás de las montañas?',
    description: 'Bikepacking, documentales e historias de la Colombia profunda. Conocer para amar y amar para preservar.',
    creator: '@agarrandotrochacol',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://agarrandotrocha.com',
  },
  category: 'travel',
  classification: 'bikepacking, documentary, travel, Colombia',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://agarrandotrocha.com/#website',
  name: 'Agarrando Trocha',
  url: 'https://agarrandotrocha.com',
  description: 'Bikepacking, documentales e historias de la Colombia profunda.',
  inLanguage: 'es',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://agarrandotrocha.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://agarrandotrocha.com/#organization',
  name: 'Agarrando Trocha',
  url: 'https://agarrandotrocha.com',
  logo: 'https://agarrandotrocha.com/logo.png',
  description: 'Proyecto de bikepacking y documentales de Camilo Medina que recorre Colombia en bicicleta.',
  founder: {
    '@type': 'Person',
    name: 'Camilo Medina',
    jobTitle: 'Cineasta y Realizador Audiovisual',
    description: 'Cineasta bogotano que recorre Colombia en bicicleta documentando historias de la ruralidad.',
    url: 'https://agarrandotrocha.com/historia',
    sameAs: [
      'https://instagram.com/agarrandotrochacol',
      'https://youtube.com/channel/UCOqwHuvmf55X1rWaCENEJ-Q',
      'https://tiktok.com/@agarrandotrochacol',
      'https://threads.net/@agarrandotrochacol',
    ],
  },
  sameAs: [
    'https://instagram.com/agarrandotrochacol',
    'https://youtube.com/channel/UCOqwHuvmf55X1rWaCENEJ-Q',
    'https://tiktok.com/@agarrandotrochacol',
    'https://threads.net/@agarrandotrochacol',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hola@agarrandotrocha.com',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-black font-sans antialiased selection:bg-black selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
