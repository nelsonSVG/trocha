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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isHome = pathname === '/';
  const showWhiteHeader = scrolled || !isHome;

  return (
    <>
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
            className={cn(
              "md:hidden p-2 z-[70] transition-colors",
              isOpen ? "text-black" : (showWhiteHeader ? "text-black" : "text-white")
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav - Full Page (Outside Header hierarchy to avoid opacity inheritance) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col md:hidden overflow-hidden"
          >
            {/* Mobile Header Inside Menu */}
            <div className="p-8 border-b border-black/5 flex justify-between items-center bg-white">
              <div className="flex items-center gap-4">
                <img src="/logo-black.svg" alt="Logo" className="w-10 h-10" />
                <div className="text-sm font-bold uppercase flex flex-col leading-none text-black">
                  <span>AGARRANDO</span>
                  <span className="ml-4">TROCHA</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center flex-grow p-8 space-y-10 text-center bg-white">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-4xl font-display tracking-tight uppercase transition-colors",
                      pathname === link.href ? "text-black font-bold" : "text-black/60 hover:text-black"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12 border-t border-black/5 w-full flex flex-col items-center gap-8 bg-white"
              >
                <a 
                  href="https://instagram.com/agarrandotrochacol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] uppercase text-black hover:opacity-70 transition-opacity"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                  Instagram
                </a>
                <p className="text-[9px] font-mono text-black/40 uppercase tracking-[0.2em] max-w-[200px] leading-relaxed">
                  Documentando lo que hay detrás de las montañas
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
