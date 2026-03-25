"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Heart,
  Share2,
  Bookmark,
  ArrowRight,
  Tag,
  MapPin,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Quote
} from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

// Categories
const categories = ["Todos", "Aventuras", "Reflexiones", "Encuentros", "Equipo", "Tutoriales"];

// All blog posts
const allPosts = [
  {
    id: 1,
    title: "Amanecer en el Páramo de Sumapaz",
    excerpt: "Cuando el frío cala los huesos pero el alma se llena de luz, entiendes que cada sacrificio tiene su recompensa.",
    content: `El camino comenzó a las 3 de la mañana. La oscuridad era absoluta, solo rota por el haz de mi linterna frontal que rebotaba contra la niebla. Cada pedalada era un esfuerzo, cada respiración un recordatorio de la altitud.

Llegar al Páramo de Sumapaz siempre es un reto, pero hacerlo de noche tiene algo especial. Es como si la montaña te reservara sus secretos para quienes están dispuestos a madrugar.

Cuando el sol comenzó a asomar, entendí por qué vale la pena. Los frailejones se tiñeron de oro, el cielo se convirtió en una paleta de naranjas y púrpuras, y el silencio... el silencio era absoluto.

En ese momento, pedaleando a más de 3.500 metros, entendí algo fundamental: no buscamos las montañas para escapar del mundo, sino para encontrarnos con nosotros mismos.`,
    category: "Aventuras",
    date: "15 Mar 2026",
    readTime: "8 min",
    location: "Páramo de Sumapaz, Cundinamarca",
    featured: true,
    tags: ["páramo", "amanecer", "altitud"],
  },
  {
    id: 2,
    title: "Conversaciones con el viejo Gabriel",
    excerpt: "En medio de la trocha encontré a un hombre que guardaba historias de tiempos que ya no existen.",
    content: `Gabriel tiene 87 años y vive solo en una casa de barro y piedra, a mitad de camino entre dos pueblos que la mayoría de colombianos no sabrían ubicar en un mapa.

Lo encontré descansando bajo un árbol, con mi bicicleta apoyada al lado. Él salía de ordeñar sus vacas. "¿Para dónde va, mijo?" me preguntó con una voz que parecía salida de otro tiempo.

Horas después, seguíamos ahí. Gabriel me contó de cuando este camino era la única conexión con el mundo exterior, de cómo la gente viajaba días enteros para vender sus productos, de los arrieros que ya no existen, de las fiestas que duraban tres días.

"No se preocupe por la prisa", me dijo al final. "El que va despacio, va lejos. El que va rápido, se pierde la vista."

Esa noche acampé cerca de su casa, pensando en todas las historias que se pierden cuando vamos demasiado rápido para escuchar.`,
    category: "Encuentros",
    date: "10 Mar 2026",
    readTime: "12 min",
    location: "Trocha antigua, Boyacá",
    featured: false,
    tags: ["gente", "historias", "tradición"],
  },
  {
    id: 3,
    title: "Lo que aprendí pedaleando solo",
    excerpt: "La soledad no es ausencia, es presencia de uno mismo. Esta es una reflexión sobre el silencio y la compañía interior.",
    content: `Llevaba pedaleando 6 horas cuando me di cuenta de que llevaba 6 horas sin pronunciar una sola palabra. No porque no tuviera con quién hablar, sino porque simplemente no había nada que necesitara decirse.

En el mundo cotidiano, llenamos cada silencio con ruido. Notificaciones, podcasts, música, conversaciones vacías. Pero en la montaña, el silencio es un compañero, no un enemigo.

Aprendí que estar solo no es lo mismo que sentirse solo. La soledad en el camino se convierte en una forma de meditación activa. Cada pedalada es un mantra, cada respiración un retorno al presente.

He tenido las conversaciones más profundas de mi vida conmigo mismo, en medio de trochas olvidadas. Y curiosamente, nunca me he sentido más acompañado.`,
    category: "Reflexiones",
    date: "5 Mar 2026",
    readTime: "6 min",
    location: "Varios",
    featured: false,
    tags: ["soledad", "meditación", "conexión interior"],
  },
  {
    id: 4,
    title: "La trocha que no estaba en el mapa",
    excerpt: "A veces el mejor camino es el que nadie ha marcado. Una historia sobre perderse para encontrarse.",
    content: `El GPS decía que estaba perdido. Yo sentía que estaba exactamente donde debía estar.

Todo comenzó con un desvío "curioso". Vi un sendero que bajaba hacia un valle que no aparecía en ninguna aplicación, y algo me dijo que lo siguiera. Cinco horas después, había encontrado el pueblo más hermoso que he visto en Colombia.

No tiene nombre en Google Maps. No hay reseñas en TripAdvisor. Solo hay unas 20 familias que viven como hace 100 años, con agua del manantial y luz de velas cuando el sol se pone.

Me recibieron como a un hijo perdido. Me dieron café de su cosecha, me contaron sus historias, me dejaron dormir en su escuela. Y al día siguiente, cuando pregunté cómo llegar al pueblo más cercano, me miraron con sorpresa: "Pero si acaba de llegar, ¿ya se va?"

Algunos lugares se revelan solo a quienes se atreven a perderse.`,
    category: "Aventuras",
    date: "28 Feb 2026",
    readTime: "10 min",
    location: "Valle secreto, Antioquia",
    featured: false,
    tags: ["descubrimiento", "pueblos", "perderse"],
  },
  {
    id: 5,
    title: "Equipaje minimalista: 10kg de libertad",
    excerpt: "Cargar menos es vivir más en cada kilómetro. Mi sistema para viajar con lo esencial.",
    content: `Cuando comencé este viaje, llevaba 25 kilos de equipo. Después de 5.000 kilómetros, he reducido todo a 10 kilos. Y curiosamente, no me falta nada.

El secreto no está en comprar el equipo más liviano (aunque ayuda), sino en cuestionar cada cosa que decides cargar. ¿Realmente lo necesitas? ¿O solo te da una falsa sensación de seguridad?

Mi kit actual incluye: una muda de ropa, un juego de herramientas básicas, un botiquín minimalista, una tienda de 900 gramos, y un sleeping bag comprimible. Todo cabe en dos alforjas laterales y una pequeña bolsa de manubrio.

Lo más difícil de dejar ir no fue el equipo, sino la idea de que necesito más de lo que tengo. Esa es la verdadera libertad del bikepacking: descubrir que eres suficiente con mucho menos de lo que creías.`,
    category: "Equipo",
    date: "20 Feb 2026",
    readTime: "7 min",
    location: "N/A",
    featured: false,
    tags: ["minimalismo", "equipo", "consejos"],
  },
  {
    id: 6,
    title: "Café, pan y una sonrisa",
    excerpt: "Las paradas improvisadas suelen ser las más memorables. Una historia sobre la generosidad del camino.",
    content: `Iba pedaleando cuando olí café recién hecho. El aroma me guió hacia una casa pequeña con un letrero hecho a mano: "Se vende café".

Doña Rosa, de 72 años, atendió ella misma. Mientras preparaba el mejor tinto de mi vida, me contó que sus hijos se fueron a la ciudad hace años, pero ella prefirió quedarse. "¿Para qué voy a irme si aquí tengo todo lo que necesito?"

Me dio café, pan recién horneado, y algo más valioso: una lección de vida sin pretensiones. "La gente corre mucho para llegar a lugares que no le gustan, para ganar dinero que no disfruta, para comprar cosas que no necesita."

Pagué lo que me pidió (muy poco, por cierto) y seguí mi camino. Pero esa parada de 30 minutos se convirtió en uno de los recuerdos más valiosos del viaje.`,
    category: "Encuentros",
    date: "15 Feb 2026",
    readTime: "5 min",
    location: "Carretera secundaria, Tolima",
    featured: false,
    tags: ["gente", "café", "generosidad"],
  },
  {
    id: 7,
    title: "La primera noche bajo las estrellas",
    excerpt: "Dormir a la intemperie cambia tu relación con el mundo. Una reflexión sobre el cielo nocturno.",
    content: `La primera vez que dormí sin tienda fue por accidente. El clima era tan perfecto que decidí arriesgarme. Y fue la mejor decisión de ese viaje.

Acostado en mi sleeping bag, mirando las estrellas, entendí por qué los ancestros adoraban el cielo. Allí estaba toda la historia del universo, contada en puntos de luz que tardaron millones de años en llegar a mis ojos.

La Tierra se sentía viva debajo de mí. Oía cada sonido del bosque, sentía el viento cambiar, percibía la temperatura bajar gradualmente. No había barrera entre yo y el mundo.

Ahora, cada vez que el clima lo permite, prefiero las estrellas a la tienda. Porque al final, la naturaleza no es algo que debemos temer, sino algo de lo que somos parte.`,
    category: "Reflexiones",
    date: "10 Feb 2026",
    readTime: "6 min",
    location: "Varios",
    featured: false,
    tags: ["noche", "estrellas", "naturaleza"],
  },
  {
    id: 8,
    title: "Cómo planificar una ruta de bikepacking",
    excerpt: "Guía práctica para diseñar tu primera aventura sobre ruedas, desde la investigación hasta la ejecución.",
    content: `Planificar una ruta de bikepacking es un arte que combina investigación, intuición y flexibilidad. Aquí te comparto mi proceso:

1. **Investigación previa**: Uso Google Maps para trazar rutas aproximadas, pero siempre busco alternativas en blogs locales y grupos de ciclismo.

2. **Evaluación del terreno**: Verifico elevaciones, tipo de superficie y disponibilidad de agua. Una ruta de 50km en pavimento es muy diferente a 50km en trocha.

3. **Puntos de reabastecimiento**: Identifico dónde puedo conseguir agua y comida. Siempre llevo capacidad extra de agua por si acaso.

4. **Opciones de descanso**: Busco pueblos con hospedajes o lugares aptos para acampar. Tener un plan B es fundamental.

5. **Flexibilidad**: El mejor plan es el que puede adaptarse. El clima, el estado del camino o un encuentro inesperado pueden cambiar todo.

Recuerda: el objetivo no es llegar rápido, sino disfrutar el camino.`,
    category: "Tutoriales",
    date: "5 Feb 2026",
    readTime: "9 min",
    location: "N/A",
    featured: false,
    tags: ["planificación", "rutas", "consejos"],
  },
  {
    id: 9,
    title: "Cuando la bicicleta se rompió en medio de la nada",
    excerpt: "Aprender a reparar tu bicicleta no es opcional, es esencial. Esta es la historia de mi primera avería seria.",
    content: `A 30km del pueblo más cercano, en una trocha que solo conocen los arrieros locales, mi cadena se partió. Y yo, que había postergado aprender mecánica básica, me enfrenté al vacío.

Afortunadamente, llevaba un eslabón de emergencia. Desafortunadamente, no tenía idea de cómo usarlo. 45 minutos después, con las manos negras de grasa y los nervios destrozados, logré repararla.

Ese día aprendí la lección más importante del bikepacking: tu seguridad depende de tu conocimiento, no de tu equipo. Ahora dedico tiempo cada mes a practicar reparaciones básicas: cambiar cadenas, ajustar frenos, reparar llantas.

La montaña no perdona la inexperiencia, pero tampoco es cruel. Te enseña lo que necesitas saber, a veces de la manera más dura.`,
    category: "Equipo",
    date: "1 Feb 2026",
    readTime: "8 min",
    location: "Trocha olvidada, Santander",
    featured: false,
    tags: ["mecánica", "reparaciones", "aprendizaje"],
  },
  {
    id: 10,
    title: "El sonido del silencio",
    excerpt: "En un mundo lleno de ruido, el silencio se ha convertido en un lujo. Buscando la quietud en los páramos.",
    content: `El otro día leí que el 97% de la población de EE.UU. vive en lugares donde nunca experimenta un verdadero silencio. No silencio absoluto (que no existe), sino silencio sin contaminación sonora humana.

En los páramos de Colombia he encontrado ese silencio. No es vacío, es plenitud. Puedes oír el viento entre los frailejones, el agua corriendo bajo tierra, tu propia respiración.

El primer día de silencio real, me sentí incómodo. Mi mente buscaba ruido, distracción. Pero después de horas pedaleando sin sonidos artificiales, algo cambió. Mis pensamientos se calmaron, mi cuerpo se relajó, mis sentidos se agudizaron.

Creo que el silencio es una de las medicinas más potentes que hemos olvidado. Y está ahí, esperando en las montañas, para quienes se atreven a buscarlo.`,
    category: "Reflexiones",
    date: "25 Ene 2026",
    readTime: "5 min",
    location: "Páramo de Ocetá, Boyacá",
    featured: false,
    tags: ["silencio", "páramo", "paz interior"],
  },
  {
    id: 11,
    title: "Regreso a la Guajira",
    excerpt: "Después de dos años, volví al lugar donde todo comenzó. Lo que encontré me sorprendió.",
    content: `La primera vez que viajé a la Guajira en bicicleta, hace dos años, fue el viaje que cambió todo. Esta vez, regresé con los ojos de alguien que ha pedalado miles de kilómetros desde entonces.

Algunas cosas siguen igual: el viento implacable, el calor que te derrite, la generosidad de los wayuu, los atardeceres que parecen sacados de otro planeta.

Pero algo cambió. No el lugar, sino yo. Donde antes veía obstáculos, ahora veo retos. Donde antes sentía miedo, ahora siento curiosidad. Los kilómetros me enseñaron que las montañas no son muros, sino invitaciones.

Regresar a un lugar conocido con ojos nuevos es una de las experiencias más reveladoras del viaje. Es como reencontrarse con un viejo amigo y descubrir que aún tienes mucho de qué hablar.`,
    category: "Aventuras",
    date: "20 Ene 2026",
    readTime: "11 min",
    location: "La Guajira",
    featured: false,
    tags: ["guajira", "regreso", "transformación"],
  },
  {
    id: 12,
    title: "La bicicleta como terapia",
    excerpt: "El pedal no solo mueve ruedas, también mueve emociones. Sobre el poder sanador del bikepacking.",
    content: `No soy psicólogo, pero he pasado más horas en terapia con mi bicicleta que en cualquier consultorio. Y los resultados han sido igual de válidos.

Hay algo en el movimiento constante, en la exigencia física, en el contacto con la naturaleza, que procesa emociones de manera diferente. Problemas que parecían insalvables se reducen a su tamaño real cuando estás en la cima de una montaña.

He llorado en subidas imposibles, he reído en bajadas vertiginosas, he perdonado en largos tramos planos. Cada emoción encuentra su lugar en el camino.

Si estás pasando por un momento difícil, te invito a subirte a una bicicleta. No prometo que resolverá todo, pero te garantizo que te dará una perspectiva nueva. Y a veces, eso es todo lo que necesitamos.`,
    category: "Reflexiones",
    date: "15 Ene 2026",
    readTime: "7 min",
    location: "Varios",
    featured: false,
    tags: ["terapia", "salud mental", "sanación"],
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof allPosts[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);
  
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const paginatedPosts = regularPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
                Diarios de Ruta
              </p>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                Pensamientos del camino
              </h1>
              <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto">
                Lo que escribo cuando el cuerpo descansa y la mente sigue pedaleando. 
                Historias, reflexiones y recuerdos de los caminos que he recorrido.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar en los diarios..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 font-dm-sans"
                  />
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 flex-1 md:flex-none justify-end">
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
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Featured Post */}
              {featuredPost && (
                <Card 
                  className="overflow-hidden mb-12 group cursor-pointer bento-item transition-all"
                  onClick={() => setSelectedPost(featuredPost)}
                >
                  <div className="grid md:grid-cols-2">
                    <div className="wireframe-placeholder aspect-video md:aspect-auto md:min-h-[400px]">
                      <span>[Imagen destacada del artículo]</span>
                    </div>
                    <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="font-dm-sans">★ Destacado</Badge>
                        <Badge variant="outline" className="font-dm-sans">{featuredPost.category}</Badge>
                      </div>
                      <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:underline">
                        {featuredPost.title}
                      </h2>
                      <p className="font-lora text-lg text-muted-foreground mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-dm-sans text-muted-foreground mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {featuredPost.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-dm-sans text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}

              {/* Quote */}
              <div className="bg-secondary/50 p-8 rounded-lg mb-12 text-center">
                <Quote className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                <blockquote className="font-lora text-xl md:text-2xl italic text-muted-foreground max-w-2xl mx-auto">
                  "El camino no es el destino. El camino es el maestro."
                </blockquote>
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden group cursor-pointer bento-item transition-all"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="wireframe-placeholder aspect-[4/3]">
                      <span>[Imagen del artículo]</span>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="font-dm-sans text-xs">
                          {post.category}
                        </Badge>
                        <span className="font-dm-sans text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-playfair text-lg font-semibold mb-2 group-hover:underline line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-lora text-sm text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-dm-sans text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {post.location}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="font-dm-sans w-10"
                    >
                      {page}
                    </Button>
                  ))}
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-playfair text-xl mb-2">No encontramos artículos</h3>
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
                    Ver todos los artículos
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                ¿Quieres recibir los diarios en tu correo?
              </h2>
              <p className="font-lora opacity-90 mb-6">
                Cada semana envío un pensamiento del camino, exclusivo para quienes 
                forman parte de la comunidad de caminantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="font-dm-sans bg-primary-foreground text-primary max-w-xs"
                />
                <Button variant="outline" className="font-dm-sans bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Suscribirme
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Article Dialog */}
      <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <article>
              {/* Image */}
              <div className="wireframe-placeholder aspect-video mb-6 -mx-6 -mt-6">
                <span>[Imagen del artículo: {selectedPost.title}]</span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="font-dm-sans">{selectedPost.category}</Badge>
                <span className="font-dm-sans text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </span>
                <span className="font-dm-sans text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
                <span className="font-dm-sans text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedPost.location}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
                {selectedPost.title}
              </h1>

              {/* Excerpt */}
              <p className="font-lora text-lg text-muted-foreground mb-6 italic border-l-2 border-primary pl-4">
                {selectedPost.excerpt}
              </p>

              {/* Content */}
              <div className="font-lora text-lg leading-relaxed space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <Separator className="my-8" />
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-dm-sans">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="font-dm-sans">
                    <Heart className="w-4 h-4 mr-2" />
                    Me gusta
                  </Button>
                  <Button variant="outline" size="sm" className="font-dm-sans">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Guardar
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="font-dm-sans">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
