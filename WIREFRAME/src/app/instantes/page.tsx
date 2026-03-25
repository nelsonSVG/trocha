"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Play, 
  Camera, 
  Video, 
  Filter,
  Grid3X3,
  LayoutGrid,
  Heart,
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2
} from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

// Categories for photos and videos
const photoCategories = ["Todos", "Montañas", "Caminos", "Gente", "Detalles", "Amaneceres"];
const videoCategories = ["Todos", "Documentales", "Cortos", "Experiencias", "Tutoriales"];

// All photos
const allPhotos = [
  { id: 1, type: "photo", category: "Montañas", title: "Amanecer en el Cocuy", location: "Sierra Nevada del Cocuy", date: "Mar 2026", description: "El sol pinta de oro las cumbres nevadas mientras el frío cala los huesos." },
  { id: 2, type: "photo", category: "Caminos", title: "Trocha del Quindío", location: "Salento, Quindío", date: "Feb 2026", description: "Un camino que parece no tener fin entre la niebla de la montaña." },
  { id: 3, type: "photo", category: "Gente", title: "Doña Carmen", location: "Pueblo antiguo, Boyacá", date: "Ene 2026", description: "85 años de historias guardadas en su mirada." },
  { id: 4, type: "photo", category: "Montañas", title: "Páramo de las Águilas", location: "Puracé, Cauca", date: "Ene 2026", description: "Donde el cielo toca la tierra y las águilas reinan." },
  { id: 5, type: "photo", category: "Amaneceres", title: "Primera luz", location: "Nevado del Ruiz", date: "Dic 2025", description: "Ese momento donde todo cobra sentido." },
  { id: 6, type: "photo", category: "Detalles", title: "Bicicleta al amanecer", location: "Monguí, Boyacá", date: "Dic 2025", description: "Mi compañera de miles de kilómetros." },
  { id: 7, type: "photo", category: "Gente", title: "Niños del camino", location: "La Guajira", date: "Nov 2025", description: "Sus risas aún resuenan en mis recuerdos." },
  { id: 8, type: "photo", category: "Montañas", title: "Nevado del Ruiz", location: "Parque Nacional Los Nevados", date: "Nov 2025", description: "La montaña que me enseñó a respetar la naturaleza." },
  { id: 9, type: "photo", category: "Detalles", title: "Rueda en el barro", location: "Trocha olvidada", date: "Oct 2025", description: "Las marcas del camino cuentan su propia historia." },
  { id: 10, type: "photo", category: "Caminos", title: "Carretera olvidada", location: "Antioquia", date: "Oct 2025", description: "Caminos que nadie transita, historias que nadie cuenta." },
  { id: 11, type: "photo", category: "Montañas", title: "Valle de los Cóndores", location: "Tolima", date: "Sep 2025", description: "Donde los cóndores encuentran refugio." },
  { id: 12, type: "photo", category: "Gente", title: "Encuentro en la tienda", location: "Pueblo perdido", date: "Sep 2025", description: "Una taza de café y una conversación inolvidable." },
  { id: 13, type: "photo", category: "Amaneceres", title: "Oro en el páramo", location: "Sumapaz", date: "Ago 2025", description: "El momento mágico antes de que el mundo despierte." },
  { id: 14, type: "photo", category: "Caminos", title: "Sendero de neblina", location: "Cloud Forest", date: "Ago 2025", description: "Caminando entre las nubes." },
  { id: 15, type: "photo", category: "Detalles", title: "Café del camino", location: "Finca cafetera", date: "Jul 2025", description: "El mejor café es el que te ofrecen con una sonrisa." },
  { id: 16, type: "photo", category: "Montañas", title: "Cumbre solitaria", location: "Pico desconocido", date: "Jul 2025", description: "A veces el mejor destino es uno sin nombre en el mapa." },
  { id: 17, type: "photo", category: "Gente", title: "Arriero moderno", location: "Trocha real", date: "Jun 2025", description: "Los últimos guardianes de los caminos antiguos." },
  { id: 18, type: "photo", category: "Amaneceres", title: "Despertar en la montaña", location: "Campamento", date: "Jun 2025", description: "No hay alarma mejor que el sol en la tienda." },
  { id: 19, type: "photo", category: "Detalles", title: "Huellas", location: "Camino rural", date: "May 2025", description: "Lo que dejo atrás y lo que me espera adelante." },
  { id: 20, type: "photo", category: "Caminos", title: "Curva perfecta", location: "Carretera al mar", date: "May 2025", description: "Cada curva es una promesa de algo nuevo." },
];

// All videos
const allVideos = [
  { id: 1, title: "Agarrando Trocha - Documental", duration: "24:35", category: "Documentales", date: "Mar 2026", description: "La historia completa del proyecto y los viajes más significativos.", featured: true },
  { id: 2, title: "El arte de perderse", duration: "12:18", category: "Cortos", date: "Feb 2026", description: "A veces perderse es la mejor forma de encontrarse.", featured: false },
  { id: 3, title: "Noche en el páramo", duration: "8:42", category: "Experiencias", date: "Ene 2026", description: "Una noche bajo las estrellas a 4.000 metros de altura.", featured: false },
  { id: 4, title: "La Trocha del Silencio", duration: "18:20", category: "Documentales", date: "Dic 2025", description: "Un camino donde el único sonido es el viento.", featured: false },
  { id: 5, title: "Amaneceres que sanan", duration: "5:15", category: "Cortos", date: "Nov 2025", description: "Colección de los mejores amaneceres en el camino.", featured: false },
  { id: 6, title: "Rumbo a la Guajira", duration: "32:10", category: "Documentales", date: "Oct 2025", description: "Viaje completo al extremo norte de Colombia.", featured: false },
  { id: 7, title: "Cómo empacar para bikepacking", duration: "15:30", category: "Tutoriales", date: "Sep 2025", description: "Mi sistema minimalista para viajes largos.", featured: false },
  { id: 8, title: "Conversaciones en el camino", duration: "20:45", category: "Documentales", date: "Ago 2025", description: "Las mejores historias de la gente que he conocido.", featured: false },
  { id: 9, title: "LLuvia y barro", duration: "7:20", category: "Experiencias", date: "Jul 2025", description: "Cuando el camino se pone difícil, la recompensa es mayor.", featured: false },
  { id: 10, title: "Mecánica básica en ruta", duration: "12:00", category: "Tutoriales", date: "Jun 2025", description: "Lo esencial para no quedarse varado.", featured: false },
  { id: 11, title: "El último arriero", duration: "22:15", category: "Documentales", date: "May 2025", description: "Historia de don Eusebio, el último arriero de la región.", featured: true },
  { id: 12, title: "Amanecer en el Cocuy", duration: "6:30", category: "Cortos", date: "Abr 2025", description: "El momento más mágico del viaje más difícil.", featured: false },
];

export default function InstantesPage() {
  const [activeTab, setActiveTab] = useState<"fotos" | "videos">("fotos");
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState("Todos");
  const [selectedVideoCategory, setSelectedVideoCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<typeof allPhotos[0] | typeof allVideos[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPhotos = selectedPhotoCategory === "Todos"
    ? allPhotos
    : allPhotos.filter(item => item.category === selectedPhotoCategory);

  const filteredVideos = selectedVideoCategory === "Todos"
    ? allVideos
    : allVideos.filter(item => item.category === selectedVideoCategory);

  const handlePrevious = () => {
    if (activeTab === "fotos") {
      const newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedItem(filteredPhotos[newIndex]);
    }
  };

  const handleNext = () => {
    if (activeTab === "fotos") {
      const newIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedItem(filteredPhotos[newIndex]);
    }
  };

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
                Instantes
              </p>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                Lo que veo cuando pedaleo
              </h1>
              <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada foto es un momento que no volverá. Cada video, una historia 
                que merece ser contada. Esto es lo que mis ojos han tenido el 
                privilegio de presenciar.
              </p>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "fotos" | "videos")}>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <TabsList className="grid w-full md:w-auto grid-cols-2">
                    <TabsTrigger value="fotos" className="font-dm-sans gap-2">
                      <Camera className="w-4 h-4" />
                      Fotos ({allPhotos.length})
                    </TabsTrigger>
                    <TabsTrigger value="videos" className="font-dm-sans gap-2">
                      <Video className="w-4 h-4" />
                      Videos ({allVideos.length})
                    </TabsTrigger>
                  </TabsList>

                  {/* Filters */}
                  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {activeTab === "fotos" ? (
                      photoCategories.map((cat) => (
                        <Button
                          key={cat}
                          variant={selectedPhotoCategory === cat ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedPhotoCategory(cat)}
                          className="font-dm-sans whitespace-nowrap"
                        >
                          {cat}
                        </Button>
                      ))
                    ) : (
                      videoCategories.map((cat) => (
                        <Button
                          key={cat}
                          variant={selectedVideoCategory === cat ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedVideoCategory(cat)}
                          className="font-dm-sans whitespace-nowrap"
                        >
                          {cat}
                        </Button>
                      ))
                    )}
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Photos Grid */}
              {activeTab === "fotos" && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPhotos.map((photo, index) => (
                    <div
                      key={photo.id}
                      onClick={() => {
                        setCurrentIndex(index);
                        setSelectedItem(photo);
                      }}
                      className={`wireframe-placeholder rounded-lg cursor-pointer overflow-hidden group relative ${
                        index === 0 || index === 5 ? "aspect-square md:col-span-2 md:row-span-2" : "aspect-square"
                      }`}
                    >
                      <div className="w-full h-full relative">
                        <span className="text-xs">[Foto: {photo.title}]</span>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-end p-4">
                          <Badge variant="outline" className="border-white text-white font-dm-sans text-xs mb-2">
                            {photo.category}
                          </Badge>
                          <p className="font-playfair text-white font-medium text-sm md:text-base">{photo.title}</p>
                          <p className="font-dm-sans text-white/70 text-xs flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {photo.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Videos Grid */}
              {activeTab === "videos" && (
                <div className="space-y-8">
                  {/* Featured Videos */}
                  {filteredVideos.filter(v => v.featured).length > 0 && (
                    <div>
                      <h2 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Destacados
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {filteredVideos.filter(v => v.featured).map((video) => (
                          <Card 
                            key={video.id} 
                            className="overflow-hidden bento-item transition-all cursor-pointer group"
                            onClick={() => setSelectedItem(video)}
                          >
                            <div className="wireframe-placeholder aspect-video relative">
                              <span>[Video Thumbnail]</span>
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                  <Play className="w-6 h-6 ml-1" fill="black" />
                                </div>
                              </div>
                              <Badge className="absolute top-4 left-4 font-dm-sans">
                                ★ Destacado
                              </Badge>
                              <span className="absolute bottom-4 right-4 font-dm-sans text-sm bg-black/50 text-white px-2 py-1 rounded">
                                {video.duration}
                              </span>
                            </div>
                            <CardContent className="p-4">
                              <Badge variant="outline" className="font-dm-sans text-xs mb-2">
                                {video.category}
                              </Badge>
                              <h3 className="font-playfair text-lg font-semibold mb-1 group-hover:underline">
                                {video.title}
                              </h3>
                              <p className="font-lora text-sm text-muted-foreground line-clamp-2 mb-2">
                                {video.description}
                              </p>
                              <p className="font-dm-sans text-xs text-muted-foreground">{video.date}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All Videos */}
                  <div>
                    <h2 className="font-playfair text-xl font-semibold mb-4">
                      Todos los videos
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredVideos.filter(v => !v.featured).map((video) => (
                        <Card 
                          key={video.id} 
                          className="overflow-hidden bento-item transition-all cursor-pointer group"
                          onClick={() => setSelectedItem(video)}
                        >
                          <div className="wireframe-placeholder aspect-video relative">
                            <span>[Thumbnail]</span>
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
                            <h4 className="font-playfair font-semibold group-hover:underline">
                              {video.title}
                            </h4>
                            <p className="font-dm-sans text-xs text-muted-foreground mt-2">{video.date}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Photo Lightbox Dialog */}
        <Dialog open={selectedItem !== null && 'type' in selectedItem && selectedItem.type === 'photo'} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/95">
            <div className="relative w-full h-full flex flex-col">
              {/* Close button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button 
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <div className="wireframe-placeholder w-full h-full max-h-[70vh]">
                  <span>[Foto ampliada: {selectedItem?.title}]</span>
                </div>
              </div>

              {/* Info */}
              {selectedItem && 'type' in selectedItem && selectedItem.type === 'photo' && (
                <div className="bg-black/80 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="border-white text-white font-dm-sans text-xs mb-2">
                        {selectedItem.category}
                      </Badge>
                      <h3 className="font-playfair text-2xl font-semibold mb-2">{selectedItem.title}</h3>
                      <p className="font-lora text-white/80 mb-4">{selectedItem.description}</p>
                      <div className="flex gap-4 font-dm-sans text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {selectedItem.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {selectedItem.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Video Dialog */}
        <Dialog open={selectedItem !== null && 'duration' in selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl w-full p-0">
            <div className="wireframe-placeholder aspect-video">
              <span>[Reproductor de video: {selectedItem?.title}]</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer">
                  <Play className="w-8 h-8 ml-1" fill="black" />
                </div>
              </div>
            </div>
            {selectedItem && 'duration' in selectedItem && (
              <div className="p-6">
                <Badge variant="outline" className="font-dm-sans text-xs mb-2">
                  {selectedItem.category}
                </Badge>
                <h3 className="font-playfair text-xl font-semibold mb-2">{selectedItem.title}</h3>
                <p className="font-lora text-muted-foreground">{selectedItem.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}
