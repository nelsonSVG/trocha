"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Heart, 
  Search, 
  ShoppingCart, 
  Filter,
  Grid3X3,
  LayoutGrid,
  Package,
  Truck,
  Shield
} from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

// Product categories
const categories = ["Todos", "Ropa", "Guías", "Accesorios", "Ediciones Especiales"];

// All products for the store
const allProducts = [
  { 
    id: 1, 
    name: "Camiseta Agarrando Trocha", 
    price: "$65.000",
    description: "100% algodón orgánico. Diseñada para aventuras, cómoda para el camino.",
    category: "Ropa", 
    featured: true, 
    inStock: true,
    sizes: ["S", "M", "L", "XL"]
  },
  { 
    id: 2, 
    name: "Guía de Rutas Secretas - Volumen 1", 
    price: "$35.000",
    description: "15 rutas poco conocidas con mapas detallados y consejos locales.",
    category: "Guías", 
    featured: false, 
    inStock: true,
    sizes: []
  },
  { 
    id: 3, 
    name: "Parche Bordado - Logo Original", 
    price: "$15.000",
    description: "Parche bordado de alta calidad para personalizar tu equipo.",
    category: "Accesorios", 
    featured: false, 
    inStock: true,
    sizes: []
  },
  { 
    id: 4, 
    name: "Mapa de Páramos de Colombia", 
    price: "$25.000",
    description: "Mapa ilustrado con los páramos más impresionantes del país.",
    category: "Guías", 
    featured: false, 
    inStock: true,
    sizes: []
  },
  { 
    id: 5, 
    name: "Gorra Expedición", 
    price: "$45.000",
    description: "Protección solar para el camino. Ajustable y transpirable.",
    category: "Ropa", 
    featured: false, 
    inStock: true,
    sizes: ["Única"]
  },
  { 
    id: 6, 
    name: "Cuaderno de Viaje", 
    price: "$30.000",
    description: "Cuaderno de papel reciclado para anotar tus propias historias.",
    category: "Accesorios", 
    featured: false, 
    inStock: true,
    sizes: []
  },
  { 
    id: 7, 
    name: "Sudadera Mountain Pass", 
    price: "$95.000",
    description: "Para las noches frías del páramo. Forro polar suave.",
    category: "Ropa", 
    featured: false, 
    inStock: true,
    sizes: ["S", "M", "L", "XL"]
  },
  { 
    id: 8, 
    name: "Set de Postales - Instantes", 
    price: "$20.000",
    description: "6 postales con las mejores fotos de los viajes de Camilo.",
    category: "Accesorios", 
    featured: false, 
    inStock: true,
    sizes: []
  },
  { 
    id: 9, 
    name: "Guía de Rutas Secretas - Volumen 2", 
    price: "$35.000",
    description: "12 nuevas rutas inexploradas con fotografías y relatos.",
    category: "Guías", 
    featured: false, 
    inStock: true,
    sizes: []
  },
  { 
    id: 10, 
    name: "Pack Explorador", 
    price: "$120.000",
    description: "Camiseta + Guía Vol.1 + Cuaderno + Parche. El kit completo.",
    category: "Ediciones Especiales", 
    featured: true, 
    inStock: true,
    sizes: ["S", "M", "L", "XL"]
  },
  { 
    id: 11, 
    name: "Bufanda Trocha", 
    price: "$40.000",
    description: "Bufanda multifunción para el viento y el frío.",
    category: "Ropa", 
    featured: false, 
    inStock: true,
    sizes: ["Única"]
  },
  { 
    id: 12, 
    name: "Lona Ilustrada - Amanecer en el Páramo", 
    price: "$85.000",
    description: "Lona de 40x60cm con ilustración original del amanecer.",
    category: "Ediciones Especiales", 
    featured: false, 
    inStock: false,
    sizes: []
  },
];

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"bento" | "grid">("bento");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = filteredProducts.filter(p => p.featured);
  const regularProducts = filteredProducts.filter(p => !p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back link */}
              <Link 
                href="/"
                className="inline-flex items-center gap-2 font-dm-sans text-sm text-muted-foreground hover:text-foreground mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
              
              <p className="font-dm-sans text-sm uppercase tracking-widest text-muted-foreground mb-4">
                La Tienda
              </p>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                Lo esencial para el camino
              </h1>
              <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada producto ha sido elegido con el mismo cuidado con el que selecciono 
                mi equipaje. Solo lo necesario, solo lo que realmente importa.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 font-dm-sans"
                  />
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                  {/* Categories */}
                  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 flex-1 md:flex-none">
                    {categories.map((cat) => (
                      <Button
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(cat)}
                        className="font-dm-sans whitespace-nowrap"
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>

                  {/* View Toggle */}
                  <div className="hidden md:flex border border-border rounded-lg p-1">
                    <Button
                      variant={viewMode === "bento" ? "secondary" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("bento")}
                      className="h-8 w-8"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="h-8 w-8"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Featured Products - Bento Style */}
              {viewMode === "bento" && featuredProducts.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-playfair text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Destacados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProducts.map((product, index) => (
                      <Card 
                        key={product.id} 
                        className={`overflow-hidden bento-item transition-all cursor-pointer group ${
                          index === 0 ? "md:row-span-2" : ""
                        }`}
                      >
                        <div className={`wireframe-placeholder relative ${
                          index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-video"
                        }`}>
                          <span>[Foto: {product.name}]</span>
                          <Badge className="absolute top-4 left-4 font-dm-sans">
                            ★ Destacado
                          </Badge>
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                              <span className="font-dm-sans text-muted-foreground">Agotado</span>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <Badge variant="outline" className="font-dm-sans text-xs mb-3">
                            {product.category}
                          </Badge>
                          <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:underline">
                            {product.name}
                          </h3>
                          <p className="font-lora text-sm text-muted-foreground mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-playfair text-2xl font-bold">{product.price}</span>
                            <Button size="sm" className="font-dm-sans" disabled={!product.inStock}>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              {product.inStock ? "Agregar" : "Agotado"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Products Grid */}
              <div>
                {viewMode === "bento" && regularProducts.length > 0 && (
                  <h2 className="font-playfair text-2xl font-semibold mb-6">
                    Todos los productos
                  </h2>
                )}
                
                <div className={`grid gap-6 ${
                  viewMode === "bento" 
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                }`}>
                  {(viewMode === "grid" ? filteredProducts : regularProducts).map((product) => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden bento-item transition-all cursor-pointer group"
                    >
                      <div className="wireframe-placeholder aspect-square relative">
                        <span className="text-xs">[Foto]</span>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                            <span className="font-dm-sans text-sm text-muted-foreground">Agotado</span>
                          </div>
                        )}
                        {product.featured && viewMode === "grid" && (
                          <Badge className="absolute top-2 left-2 font-dm-sans text-xs">
                            ★
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="font-dm-sans text-xs text-muted-foreground mb-1">
                          {product.category}
                        </p>
                        <h4 className="font-playfair font-semibold text-sm mb-1 line-clamp-1 group-hover:underline">
                          {product.name}
                        </h4>
                        <p className="font-lora text-xs text-muted-foreground line-clamp-2 mb-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-playfair font-bold">{product.price}</span>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="h-8 w-8 p-0"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-playfair text-xl mb-2">No encontramos productos</h3>
                  <p className="font-lora text-muted-foreground mb-4">
                    Intenta con otra búsqueda o categoría
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedCategory("Todos");
                      setSearchQuery("");
                    }}
                  >
                    Ver todos los productos
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-10 h-10 mx-auto mb-6 opacity-70" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Cada compra es un aporte al proyecto
              </h2>
              <p className="font-lora text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Los ingresos de la tienda ayudan a financiar nuevos viajes, 
                documentales y la conservación de las trochas que recorro.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <Truck className="w-6 h-6 opacity-70" />
                  <span className="font-dm-sans text-sm">Envíos a todo Colombia</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-6 h-6 opacity-70" />
                  <span className="font-dm-sans text-sm">Pago seguro</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Heart className="w-6 h-6 opacity-70" />
                  <span className="font-dm-sans text-sm">Hecho con amor</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
