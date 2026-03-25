"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  ArrowRight, 
  Heart, 
  User, 
  Calendar, 
  Clock,
  Mail,
  Instagram,
  Youtube,
  Mountain,
  Bike,
  Compass,
  MapPin,
  ExternalLink
} from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

// Navigation items for one-page navigation
const onePageNavItems = [
  { id: "camino", label: "El Camino" },
  { id: "archivo", label: "El Archivo" },
  { id: "apoyo", label: "Apoyo" },
];

// Mock data for blog posts preview
const blogPreview = [
  {
    id: 1,
    title: "Amanecer en el Páramo de Sumapaz",
    excerpt: "Cuando el frío cala los huesos pero el alma se llena de luz...",
    category: "Aventuras",
    date: "15 Mar 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Conversaciones con el viejo Gabriel",
    excerpt: "En medio de la trocha encontré a un hombre que guardaba historias...",
    category: "Encuentros",
    date: "10 Mar 2026",
    readTime: "12 min",
    featured: false,
  },
  {
    id: 3,
    title: "Lo que aprendí pedaleando solo",
    excerpt: "La soledad no es ausencia, es presencia de uno mismo...",
    category: "Reflexiones",
    date: "5 Mar 2026",
    readTime: "6 min",
    featured: false,
  },
];

// Mock data for gallery preview
const galleryPreview = [
  { id: 1, category: "Montañas", title: "Amanecer en el Cocuy" },
  { id: 2, category: "Caminos", title: "Trocha del Quindío" },
  { id: 3, category: "Gente", title: "Doña Carmen" },
  { id: 4, category: "Montañas", title: "Páramo de las Águilas" },
  { id: 5, category: "Detalles", title: "Bicicleta al amanecer" },
  { id: 6, category: "Montañas", title: "Valle de los Cóndores" },
];

// Mock data for videos preview
const videoPreview = [
  { id: 1, title: "Agarrando Trocha - Documental", duration: "24:35", category: "Documentales" },
  { id: 2, title: "El arte de perderse", duration: "12:18", category: "Cortos" },
  { id: 3, title: "Noche en el páramo", duration: "8:42", category: "Experiencias" },
];

// Mock data for products preview
const productsPreview = [
  { id: 1, name: "Camiseta Agarrando Trocha", price: "$65.000", category: "Ropa", featured: true },
  { id: 2, name: "Guía de Rutas Secretas", price: "$35.000", category: "Guías" },
  { id: 3, name: "Parche Bordado", price: "$15.000", category: "Accesorios" },
  { id: 4, name: "Cuaderno de Viaje", price: "$30.000", category: "Accesorios" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("");

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = onePageNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* HERO Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Hero Background Placeholder */}
          <div className="absolute inset-0 wireframe-placeholder">
            <span className="text-lg">[Hero Image: Montaña al amanecer]</span>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Bikepacking · Exploración · Colombia
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              ¿Qué hay detrás de las montañas?
            </h1>
            <p className="font-lora text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Viajes lentos, trochas olvidadas y las historias que solo se revelan 
              cuando decides pedalear hacia lo desconocido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-dm-sans">
                <Play className="w-4 h-4 mr-2" />
                Ver Documental
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-dm-sans"
                onClick={() => scrollToSection("camino")}
              >
                Explorar el Camino
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-muted-foreground rounded-full" />
            </div>
          </div>
        </section>

        {/* EL CAMINO - About Section */}
        <section id="camino" className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  El Camino
                </p>
                <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                  La historia detrás de la trocha
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Photo Placeholder */}
                <div className="wireframe-placeholder aspect-[4/5] rounded-lg">
                  <span>[Foto: Camilo con su bicicleta]</span>
                </div>

                {/* Story */}
                <div className="space-y-6">
                  <p className="font-lora text-lg leading-relaxed">
                    Hace cinco años dejé todo lo que conocía para buscar respuestas 
                    en los caminos de Colombia. No buscaba destinos, buscaba 
                    transformarme.
                  </p>
                  <p className="font-lora text-lg leading-relaxed text-muted-foreground">
                    Cada trocha me ha enseñado algo diferente: que lo esencial cabe 
                    en una bicicleta, que las mejores conversaciones suceden con 
                    desconocidos, y que las montañas siempre tienen algo nuevo que 
                    revelar.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                    <div className="text-center">
                      <p className="font-playfair text-3xl md:text-4xl font-bold">15K+</p>
                      <p className="font-dm-sans text-sm text-muted-foreground">Kilómetros</p>
                    </div>
                    <div className="text-center">
                      <p className="font-playfair text-3xl md:text-4xl font-bold">23</p>
                      <p className="font-dm-sans text-sm text-muted-foreground">Departamentos</p>
                    </div>
                    <div className="text-center">
                      <p className="font-playfair text-3xl md:text-4xl font-bold">∞</p>
                      <p className="font-dm-sans text-sm text-muted-foreground">Historias</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {[
                  { icon: Compass, title: "Exploración Slow", desc: "Viajar lento para sentir profundo" },
                  { icon: User, title: "Autoconocimiento", desc: "El camino como espejo del alma" },
                  { icon: Heart, title: "Conexión Humana", desc: "Cada encuentro es un regalo" },
                ].map((item, i) => (
                  <Card key={i} className="p-6 text-center border-border">
                    <item.icon className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="font-lora text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIARIOS DE RUTA - Blog Preview */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Diarios de Ruta
                  </p>
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold">
                    Pensamientos del camino
                  </h2>
                </div>
                <Link href="/blog">
                  <Button variant="outline" className="font-dm-sans mt-4 md:mt-0">
                    Ver todos los diarios
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Featured Post */}
              {blogPreview.find(p => p.featured) && (
                <Card className="overflow-hidden mb-8 group cursor-pointer bento-item transition-all">
                  <div className="grid md:grid-cols-2">
                    <div className="wireframe-placeholder aspect-video md:aspect-auto">
                      <span>[Imagen destacada del post]</span>
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                      <Badge className="font-dm-sans w-fit mb-4">Aventuras</Badge>
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                        {blogPreview.find(p => p.featured)?.title}
                      </h3>
                      <p className="font-lora text-muted-foreground mb-6">
                        {blogPreview.find(p => p.featured)?.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm font-dm-sans text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blogPreview.find(p => p.featured)?.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blogPreview.find(p => p.featured)?.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPreview.filter(p => !p.featured).map((post) => (
                  <Card key={post.id} className="overflow-hidden group cursor-pointer bento-item transition-all">
                    <div className="wireframe-placeholder aspect-[3/2]">
                      <span>[Imagen del post]</span>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="font-dm-sans text-xs">
                          {post.category}
                        </Badge>
                        <span className="font-dm-sans text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="font-playfair font-semibold mb-2 group-hover:underline">
                        {post.title}
                      </h4>
                      <p className="font-lora text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="font-dm-sans text-xs text-muted-foreground mt-3">
                        {post.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INSTANTES - Gallery Preview */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Instantes
                  </p>
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold">
                    Lo que veo cuando pedaleo
                  </h2>
                </div>
                <Link href="/instantes">
                  <Button variant="outline" className="font-dm-sans mt-4 md:mt-0">
                    Ver galería completa
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryPreview.map((item, index) => (
                  <div
                    key={item.id}
                    className={`wireframe-placeholder rounded-lg cursor-pointer overflow-hidden group ${
                      index === 0 ? "aspect-square md:col-span-2 md:row-span-2" : "aspect-square"
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <span className="text-xs">[Foto: {item.title}]</span>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div>
                          <p className="font-dm-sans text-xs text-white/70">{item.category}</p>
                          <p className="font-playfair text-white font-medium">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EL ARCHIVO - Videos Preview */}
        <section id="archivo" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  El Archivo
                </p>
                <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
                  Documentales y videos
                </h2>
                <p className="font-lora text-muted-foreground max-w-xl mx-auto">
                  Historias en movimiento, capturadas en los caminos más remotos de Colombia.
                </p>
              </div>

              {/* Featured Video */}
              <div className="wireframe-placeholder aspect-video rounded-lg mb-8 relative group cursor-pointer">
                <span className="text-lg">[Video Principal: Agarrando Trocha - Documental]</span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-8 h-8 ml-1" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <Badge className="font-dm-sans mb-2">Documentales</Badge>
                    <h3 className="font-playfair text-xl font-semibold text-white drop-shadow-lg">
                      Agarrando Trocha - Documental
                    </h3>
                  </div>
                  <span className="font-dm-sans text-white bg-black/50 px-2 py-1 rounded text-sm">
                    24:35
                  </span>
                </div>
              </div>

              {/* Video Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPreview.slice(1).map((video) => (
                  <Card key={video.id} className="overflow-hidden group cursor-pointer bento-item transition-all">
                    <div className="wireframe-placeholder aspect-video relative">
                      <span>[Video Thumbnail]</span>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="w-5 h-5 ml-0.5" fill="black" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 font-dm-sans text-xs bg-black/50 text-white px-2 py-0.5 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="font-dm-sans text-xs mb-2">
                        {video.category}
                      </Badge>
                      <h4 className="font-playfair font-semibold">{video.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* View More Link */}
              <div className="text-center mt-8">
                <Link href="/instantes">
                  <Button variant="outline" className="font-dm-sans">
                    Ver más videos en Instantes
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LA TIENDA - Products Preview */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    La Tienda
                  </p>
                  <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
                    Lo esencial para el camino
                  </h2>
                  <p className="font-lora text-muted-foreground max-w-xl">
                    Productos seleccionados con el mismo cuidado con el que elijo cada pieza de mi equipaje.
                  </p>
                </div>
                <Link href="/tienda">
                  <Button variant="outline" className="font-dm-sans mt-4 md:mt-0">
                    Ver tienda completa
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Featured Product - Large */}
                <Card className="col-span-2 row-span-2 overflow-hidden bento-item transition-all cursor-pointer group">
                  <div className="wireframe-placeholder aspect-square relative">
                    <span>[Producto Estrella: Camiseta Agarrando Trocha]</span>
                    <Badge className="absolute top-4 left-4 font-dm-sans">
                      ★ Producto destacado
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-2">Camiseta Agarrando Trocha</h3>
                    <p className="font-lora text-sm text-muted-foreground mb-4">
                      100% algodón orgánico. Diseñada para aventuras.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-playfair text-2xl font-bold">$65.000</span>
                      <Link href="/tienda">
                        <Button size="sm" className="font-dm-sans">
                          Ver producto
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Small Products */}
                {productsPreview.filter(p => !p.featured).map((product) => (
                  <Card key={product.id} className="overflow-hidden bento-item transition-all cursor-pointer">
                    <div className="wireframe-placeholder aspect-square">
                      <span className="text-xs">[Foto producto]</span>
                    </div>
                    <CardContent className="p-4">
                      <p className="font-dm-sans text-xs text-muted-foreground mb-1">{product.category}</p>
                      <h4 className="font-playfair font-semibold text-sm mb-2 line-clamp-1">{product.name}</h4>
                      <p className="font-playfair font-bold">{product.price}</p>
                    </CardContent>
                  </Card>
                ))}

                {/* Support Card */}
                <Card className="col-span-2 p-6 flex flex-col justify-center items-center text-center bg-primary text-primary-foreground">
                  <Heart className="w-8 h-8 mb-4" />
                  <h3 className="font-playfair text-xl font-semibold mb-2">Apoya el proyecto</h3>
                  <p className="font-lora text-sm opacity-90 mb-4">
                    Tu compra ayuda a seguir documentando las trochas de Colombia
                  </p>
                  <Link href="/tienda">
                    <Button variant="outline" className="font-dm-sans bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Conocer más
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* COMUNIDAD Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Los Caminantes
              </p>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                Únete a la comunidad
              </h2>
              <p className="font-lora text-lg text-muted-foreground mb-12">
                Más de 2.000 caminantes ya forman parte de esta tribu. 
                Recibe historias exclusivas, rutas secretas y encuentra compañeros de ruta.
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="font-dm-sans"
                />
                <Button className="font-dm-sans whitespace-nowrap">
                  <Mail className="w-4 h-4 mr-2" />
                  Unirme
                </Button>
              </div>

              {/* Community Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div>
                  <p className="font-playfair text-3xl md:text-4xl font-bold">2.3K+</p>
                  <p className="font-dm-sans text-muted-foreground">Caminantes</p>
                </div>
                <div>
                  <p className="font-playfair text-3xl md:text-4xl font-bold">45</p>
                  <p className="font-dm-sans text-muted-foreground">Rutas compartidas</p>
                </div>
                <div>
                  <p className="font-playfair text-3xl md:text-4xl font-bold">12</p>
                  <p className="font-dm-sans text-muted-foreground">Encuentros reales</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* APOYO Section */}
        <section id="apoyo" className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Bike className="w-12 h-12 mx-auto mb-6 opacity-50" />
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                ¿Quieres apoyar el proyecto?
              </h2>
              <p className="font-lora text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Cada kilómetro tiene un costo. Tu apoyo permite seguir documentando 
                las trochas olvidadas de Colombia y compartir estas historias con el mundo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="font-dm-sans bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Heart className="w-4 h-4 mr-2" />
                  Hacer donación
                </Button>
                <Link href="/tienda">
                  <Button size="lg" className="font-dm-sans bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Ver tienda
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
