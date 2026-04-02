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
    default: 'Agarrando Trocha | Bikepacking Colombia & Documentales',
    template: '%s | Agarrando Trocha',
  },
  description: 'Camilo Medina recorre Colombia en bicicleta documentando historias de la ruralidad. Bikepacking, páramos, pueblos olvidados y la pregunta: ¿Qué hay detrás de las montañas?',
  keywords: [
    // Short tail - Alto volumen
    'bikepacking Colombia',
    'ciclismo de aventura Colombia',
    'documentales colombianos',
    'turismo rural Colombia',
    'Camilo Medina',
    'Agarrando Trocha',

    // Long tail - Alta intención
    'rutas en bicicleta por trochas Colombia',
    'documentales sobre pueblos de Colombia',
    'bikepacking por páramos colombianos',
    'qué hay detrás de las montañas Colombia',
    'ciclismo de aventura por trochas',
    'viajes en bicicleta por Colombia rural',
    'Camilo Medina cineasta bogotano',
    'Relatos del Camino Semana',
    'La Ruta de los Olvidados documental',
    'slow travel Colombia',
    'minimalismo y viajes',
    'trochas Colombia',
    'páramos colombianos',
    'pueblos de Colombia',
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
    title: 'Agarrando Trocha | Bikepacking Colombia & Documentales',
    description: 'Camilo Medina recorre Colombia en bicicleta documentando historias de la ruralidad. Bikepacking, páramos, pueblos olvidados y la pregunta: ¿Qué hay detrás de las montañas?',
    url: 'https://agarrandotrocha.com',
    siteName: 'Agarrando Trocha',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo de Agarrando Trocha - Símbolo AT blanco sobre fondo negro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agarrando Trocha | Bikepacking Colombia',
    description: 'Camilo Medina recorre Colombia en bicicleta documentando historias de la ruralidad. Bikepacking, páramos y la pregunta: ¿Qué hay detrás de las montañas?',
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
