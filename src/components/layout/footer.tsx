"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mountain, Instagram, Youtube } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/#camino", label: "El Camino" },
  { href: "/blog", label: "Diarios de Ruta" },
  { href: "/instantes", label: "Instantes" },
  { href: "/tienda", label: "La Tienda" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Mountain className="w-6 h-6" />
                <span className="font-playfair text-xl font-bold">Agarrando Trocha</span>
              </Link>
              <p className="font-lora text-muted-foreground max-w-sm">
                Viajes lentos, trochas olvidadas y las historias que solo se revelan 
                cuando decides pedalear hacia lo desconocido.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-dm-sans font-semibold mb-4">Navegación</h4>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block font-lora text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-dm-sans font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 font-lora text-muted-foreground">
                <p>hola@agarrandotrocha.com</p>
                <p>Colombia</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="ghost" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-dm-sans text-muted-foreground">
            <p>© 2026 Agarrando Trocha. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Privacidad</a>
              <a href="#" className="hover:text-foreground">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
