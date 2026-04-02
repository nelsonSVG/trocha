'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'El Camino', href: '/historia' },
  { name: 'El Archivo', href: '/archivo' },
  { name: 'Diarios de Ruta', href: '/blog' },
  { name: 'Los Caminantes', href: '/comunidad' },
  { name: 'La Tienda', href: '/tienda' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // Increased threshold to match reference aesthetic
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const showWhiteHeader = scrolled || !isHome;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
        showWhiteHeader 
          ? "bg-white/90 backdrop-blur-md py-4 border-b border-black/5 text-black" 
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px] py-6 text-white"
      )}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <img 
            src={showWhiteHeader ? "/logo-black.svg" : "/logo-white.svg"} 
            alt="Agarrando Trocha Logo" 
            className="w-12 h-12 transition-all duration-500 group-hover:rotate-12"
          />
          <div className="text-xl font-bold tracking-[-0.05em] uppercase flex flex-col">
            <span className="leading-[0.8] tracking-[-0.9px]">AGARRANDO</span>
            <span className="leading-[0.8] ml-6 tracking-[-0.9px]">TROCHA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.3em] transition-all duration-300 relative group",
                showWhiteHeader 
                  ? (pathname === link.href ? "text-black" : "text-black/50 hover:text-black")
                  : (pathname === link.href ? "text-white" : "text-white/60 hover:text-white")
              )}
            >
              {link.name}
              <motion.div 
                className={cn(
                  "absolute -bottom-1 left-0 h-[1px] transition-all duration-300",
                  showWhiteHeader ? "bg-black" : "bg-white",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
          <a 
            href="https://instagram.com/agarrandotrochacol" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "transition-all duration-300 hover:scale-110 ml-4",
              showWhiteHeader ? "text-black" : "text-white"
            )}
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-black/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-display tracking-tight",
                    pathname === link.href ? "text-black" : "text-black/40"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-black/5">
                <a 
                  href="https://instagram.com/agarrandotrochacol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-xl font-display tracking-tight text-black"
                >
                  <Instagram size={24} strokeWidth={1.5} />
                  INSTAGRAM
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
