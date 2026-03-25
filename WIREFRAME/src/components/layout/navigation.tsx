"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio", description: "El viaje comienza aquí" },
  { href: "/#camino", label: "El Camino", description: "La historia de Camilo" },
  { href: "/blog", label: "Diarios de Ruta", description: "Blog personal" },
  { href: "/instantes", label: "Instantes", description: "Galería visual" },
  { href: "/tienda", label: "La Tienda", description: "Productos esenciales" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Mountain className="w-6 h-6" />
            <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight">
              Agarrando Trocha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link font-dm-sans text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex flex-col items-start p-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <span className="font-playfair font-medium">{item.label}</span>
                    <span className="text-xs font-dm-sans mt-0.5">{item.description}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
