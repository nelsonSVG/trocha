import type { Metadata } from "next";
import { Playfair_Display, Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agarrando Trocha - Bikepacking Colombia",
  description: "Portal oficial del proyecto de bikepacking de Camilo Medina. Exploración slow, autoconocimiento y conexión humana a través de los caminos de Colombia.",
  keywords: ["bikepacking", "Colombia", "Camilo Medina", "exploración", "trocha", "ciclismo"],
  authors: [{ name: "Camilo Medina" }],
  openGraph: {
    title: "Agarrando Trocha",
    description: "Viajes lentos, conscientes, profundos por los caminos de Colombia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lora.variable} ${dmSans.variable} antialiased bg-background text-foreground font-lora`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
