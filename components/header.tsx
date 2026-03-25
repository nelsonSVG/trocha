'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'El Camino', href: '/historia' },
  { name: 'El Archivo', href: '/videos' },
  { name: 'Diarios de Ruta', href: '/blog' },
  { name: 'Los Caminantes', href: '/comunidad' },
  { name: 'La Tienda', href: '/tienda' },
  { name: 'Instantes', href: '/galeria' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-black/5" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-display tracking-tight hover:opacity-70 transition-opacity flex flex-col">
          <span className="leading-none">AGARRANDO</span>
          <span className="leading-none ml-4">TROCHA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-[10px] font-mono uppercase tracking-[0.2em] hover:text-black transition-colors relative group",
                pathname === link.href ? "text-black font-bold" : "text-black/40"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-black" />
              )}
            </Link>
          ))}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
