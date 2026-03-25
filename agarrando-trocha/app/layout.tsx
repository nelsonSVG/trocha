import type {Metadata} from 'next';
import { Inter, Playfair_Display, Lora, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-accent',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Agarrando Trocha | Camilo Medina',
  description: 'Exploración slow, autoconocimiento y conexión humana a través del bikepacking en Colombia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${lora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-white text-black font-serif antialiased selection:bg-black selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
