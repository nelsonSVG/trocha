# Agarrando Trocha - Wireframe y Especificación del Sitio Web

## Visión General del Proyecto

**Nombre del proyecto:** Agarrando Trocha - Sitio Web Oficial  
**Versión:** 2.0  
**Fecha:** Marzo 2026  
**Propósito:** Portal oficial del proyecto de bikepacking de Camilo Medina, incluyendo contenido, tienda, blog y sistema de apoyo

---

## Prototipo Funcional (Wireframe)

### URL del Prototipo (v2.0)
**https://pinme.eth.limo/#/preview/U2FsdGVkX19ZIK-_aje8ylTOsKwjhA9xjkA5QS_t5xelwRmnECFr3sXcpGAoHTPGEiQEP219bkgtXSLaKm7WYVKPCdYkkrvxDb34ZD1s0SVKAaqCVpEQ-_-Kq7s1jAaXeTF03r-pXoIvib10YynyAA**

### URL del Prototipo (v1.1 - anterior)
https://pinme.eth.limo/#/preview/U2FsdGVkX1_ZDfvZ0YybHomWkiHSJbl8iBJPXqNq_4rAhAYYzdafDx91yMZjjjwDPfr6SHiSif6a_ZFXguShs05IupafRViYxznM7Y42Ru0uUPduUL3yDMQ1lQL43UZgSSVoq_y5gCvGheSlED1pMw

### Páginas Incluidas
1. **Home (index.html)** - One-page profundo con toda la información principal
2. **La Tienda (tienda.html)** - Página propia con productos en estilo Bento Grid
3. **Blog - Diarios de Ruta (blog.html)** - Artículos y reflexiones
4. **Galería - Instantes (galeria.html)** - Fotos y videos

### Características del Prototipo (v2.0)
- ✅ **Diseño editorial full-width** — Todas las secciones aprovechan ancho completo en desktop
- ✅ **Estilo: diario de bitácora cinematográfico** — Mezcla field journal + documental
- ✅ **Tipografía editorial** — Playfair Display + Lora + DM Sans (Google Fonts)
- ✅ **Paleta cálida** — Tierra, Oro, Negro profundo, Blanco hueso
- ✅ **Film grain overlay** — Textura sutil sobre todo el sitio
- ✅ **Hero cinematográfico** — Full viewport con animaciones staggered
- ✅ **Scroll reveal animations** — IntersectionObserver en todas las secciones
- ✅ **Navegación glassmorphism** — backdrop-filter blur con efecto scroll
- ✅ **Instagram Feed** — Sección dedicada en galería (grid 4x2 con overlays)
- ✅ **Blog editorial** — Featured post + grid 2x2 + archivo numerado
- ✅ **Bento Grid full-width** — Producto estrella en tienda
- ✅ **Menú hamburguesa para móvil** — Totalmente responsive
- ✅ **Navegación completa entre páginas** — 4 páginas interconectadas
- ✅ **Videos organizados en grid con filtros**
- ✅ **Galería de fotos con grid variado y filtros**
- ✅ **Secciones de comunidad y apoyo** — Los Caminantes con opciones de membresía
- ✅ **Footer completo** — 4 columnas con redes y contacto

---

## 1. Identidad de Marca

### 1.1 Essence y Filosofía

Camilo representa:
- **Exploración slow** - Viajes lentos, conscientes, profundos
- **Autoconocimiento** - El viaje como terapia y método de introspección
- **Conexión humana** - Historias de la gente que encuentra en el camino
- **Amor por Colombia** - Descubrir y preservar la belleza natural y cultural
- **Minimalismo** - "Cargar solo lo necesario"

### 1.2 Paleta de Colores

Basada en los paisajes que Camilo recorre:

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Montaña | #2D4A3E | Primary - montañas, naturaleza |
| Café Tierra | #8B7355 | Secondary - caminos, trochas |
| Niebla Gris | #B8C5C9 | Acentos - niebla de los páramos |
| Blanco Nieve | #F5F5F0 | Fondos claros |
| Negro Carbón | #1A1A1A | Texto principal |
| Oro Páramos | #C9A962 | Acentos dorados - atardeceres |

### 1.3 Tipografía

- **Títulos:** "Playfair Display" - Elegante, con carácter
- **Texto:** "Lora" - Refleja, legible, con personalidad
- **Textos pequeños/etiquetas:** "DM Sans" - Limpia y moderna

### 1.4 Estética General

- **Sensación:** Silencio, contemplación, profundidad
- **Imágenes:** Fotografías panorámicas de montañas, trochas, amaneceres
- **Espacios:** Mucho white space, respiras
- **Micro-interacciones:** Suaves, orgánicas, nada aggressivas

### 1.5 Nombres de Secciones (Español)

| Nombre Propuesto | Descripción |
|-----------------|-------------|
| **"El Camino"** | Historia - La journey de Camilo |
| **"El Archivo"** | Videos - Documentales y contenido |
| **"Diarios de Ruta"** | Blog - Evoca un diario personal, íntimo |
| **"Los Caminantes"** | Comunidad - Evoca a quienes caminan/biciclean |
| **"La Tienda"** | Tienda - Simple, sin anglicismos |
| **"Instantes"** | Galería - Lo que veo cuando pedaleo |

---

## 2. Estructura del Sitio

### 1.1 Essence y Filosofía

Camilo representa:
- **Exploración slow** - Viajes lentos, conscientes, profundos
- **Autoconocimiento** - El viaje como terapia y método de introspección
- **Conexión humana** - Historias de la gente que encuentra en el camino
- **Amor por Colombia** - Descubrir y preservar la belleza natural y cultural
- **Minimalismo** - "Cargar solo lo necesario"

### 1.2 Paleta de Colores

Basada en los paisajes que Camilo recorre:

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Montaña | #2D4A3E | Primary - montañas, naturaleza |
| Café Tierra | #8B7355 | Secondary - caminos, trochas |
| Niebla Gris | #B8C5C9 | Acentos - niebla de los páramos |
| Blanco Nieve | #F5F5F0 | Fondos claros |
| Negro Carbón | #1A1A1A | Texto principal |
| Oro Páramos | #C9A962 | Acentos dorados - atardeceres |

### 1.3 Tipografía

- **Títulos:** "Playfair Display" - Elegante, con carácter
- **Texto:** "Lora" - Refleja, legible, con personalidad
- **Textos pequeños/etiquetas:** "DM Sans" - Limpia y moderna

### 1.4 Estética General

- **Sensación:** Silencio, contemplación, profundidad
- **Imágenes:** Fotografías panorámicas de montañas, trochas, amaneceres
- **Espacios:** Mucho white space, respiras
- **Micro-interacciones:** Suaves, orgánicas, nada aggressivas

### 1.5 Nombres de Secciones (Español)

| Nombre Propuesto | Descripción |
|-----------------|-------------|
| **"Diarios de Ruta"** | Blog - Evoca un diario personal, íntimo |
| **"Los Caminantes"** | Comunidad - Evoca a quienes caminan/biciclean |
| **"La Tienda"** | Tienda - Simple, sin anglicismos |
| **"Instantes"** | Galería - Lo que veo cuando pedaleo |
| **"El Archivo"** | Videos - Documentales y contenido |
| **"El Camino"** | Timeline - Historia del proyecto |

---

## 2. Estructura del Sitio

## 2. Público Objetivo

### 2.1 Segmentación Principal

| Segmento | Edad | Intereses | Cómo llega a Camilo |
|----------|------|-----------|---------------------|
| **Ciclistas Adventure** | 25-45 | Bikepacking, gravel, montaña | Comunidades de cycling, Instagram |
| **Viajeros Slow** | 28-50 | Viajes lentos, turismo rural, Colombia | Blogs de viaje, Semana |
| **Amantes de Colombia** | 22-55 | Cultura colombiana, paisajes, destinos | Instagram, redes de Camilo |
| **Cineastas/Content Creators** | 22-40 | Producción audiovisual, documentales | Trabajos en publicidad |
| **Buscadores de propósito** | 25-45 | Autodescubrimiento, terapia, cambio | Contenido de reflexión |

### 2.2 Insights del Público

- Quieren descubrir una Colombia que no conocen los turistas tradicionales
- Buscan experiencias auténticas, no destinos comercializados
- Valoran la introspección y el crecimiento personal
- Se identifican con el minimalismo y la vida simple
- Quieren apoyo/construir comunidad con proyectos como el de Camilo

---

## 3. Estructura del Sitio

### 3.1 Mapa del Sitio

```
/
├── Home (Landing Principal)
├── Historia / Sobre Camilo
├── Viajes / Rutas
├── Videos / Contenido
├── Blog (Diarios de Ruta)
│   └── Categorías: Rutas, Gente, Reflexiones, Fauna
├── Tienda (La Trocha Shop)
│   ├── Ropa
│   ├── Accesorios
│   ├── Fotografías / Arte
│   └── Experiencias
├── Comunidad (Los Caminantes)
│   ├── Cómo apoyar
│   ├── Membresías
│   └── Historias de fans
└── Contacto
```

---

## 4. Detalle de Página - Home

### 4.1 Hero Section

**Visual:** Video loop en alta calidad de Camilo pedaleando por una trocha con niebla, cámara lenta, 15 segundos. Alternativa: Fotografía panorámica de montaña con Camilo al fondo.

**Copy del Hero:**

> "¿Qué hay detrás de las montañas?"

> *La respuesta está en el camino.*

[Botón primario: "Empieza tu propia trocha"]  
[Botón secundario: "Ver documentales"]

**Animación:** Texto aparece suavemente, como sus videos.

### 4.2 Sección: "¿Qué es Agarrando Trocha?"

**Título:** "Conocer para amar y amar para preservar"

**Copy:**

> Agarrando Trocha no nació como un proyecto. Nació cuando no tenía todo claro. Cuando improvisar fue la forma de volver a moverme. De subirme a la bicicleta sin respuestas y dejar que el camino se resolviera andando.

> Es mi forma de encontrarme. De encontrar Colombia. De encontrarte a ti también, porque quizás buscabas algo sin saber qué.

**Visual:** Collage de fotos de viajes, estilo polaroid orgánica.

### 4.3 Sección: Último Documental / Video Principal

**Título:** "La Ruta de los Olvidados"

**Subtítulo:** *Un documental sobre las historias que existen detrás de las montañas*

**Visual:** Thumbnail grande del documental con botón de play

**Copy:**

> 10 departamentos. 3 meses. Historias que merecen ser contadas.

[Ver documental completo] [Apoyar el proyecto]

### 4.4 Sección: Serie de Videos (Lo que publica)

Organizado en tabs o carrusel:

#### "Relatos del Camino" (con Semana)
- 4-8 minutos por episodio
- Formato: documental corto
- Tema: Un lugar, una persona, una historia

#### "Detrás de la Cámara"
- 2-4 minutos
- Behind the scenes de los viajes
- Más íntimo, personal

#### "Reflexiones"
- 1-3 minutos
- Pensamientos, citas, filosofia
- Estilo: cámara fija, voz en off, música suave

#### "Rutas para ti"
- 5-10 minutos
- Cómo planificar rutas similares
- GPS, tips, qué llevar

### 4.5 Sección: Blog - "Diarios de Ruta"

> *Porque todo viaje merece ser contado*

**Título del blog:** **Diarios de Ruta**

**Copy de introducción:**

> No solo escribo sobre dónde fui. Escribo sobre quién encontré. Sobre lo que me enseñaron. Sobre lo que me quede.

**Muestra de últimos 3 artículos (cards):**

1. **"La noche oscura del alma"** - Reflexión personal
2. **"Don Abelino, el paramero"** - Historia de Guasca
3. **"Lo que encontré en el Páramo de la Cuchilla"** - Viaje

[Ver todos los relatos →]

### 4.6 Sección: Tienda - "La Trocha Shop"

**Título:** "Lleva la trocha contigo"

**Copy:**

> No necesitas mucho. Solo lo necesario.

**Productos destacados:**

| Producto | Descripción | Precio |
|----------|-------------|--------|
| Camiseta "Trocha" | Algodón orgánico, diseño minimalista | $65.000 COP |
| Termo Camilo | Acero inoxidable, frase grabada | $85.000 COP |
| Fotografía Edición Limitada | Impresa en papel fine art | $250.000 COP |
| Libro "Detrás de las Montañas" | Fotolibro de viaje (previo) | Por definir |

**Visual:** Productos en contexto, lifestyle

[Ver toda la tienda →]  
**Nota:** "Todo pedido se cierra por WhatsApp. Te contactedamos en 24 horas."

### 4.7 Sección: Comunidad - "Los Caminantes"

> *No viajes solo. Únete a los que ya entendieron.*

**Título:** "Los Caminantes"

**Copy:**

> No soy el único que busca. Somos muchos los que caminamos buscando. Los Caminantes somos una comunidad de quienes creen que hay algo más detrás de las montañas.

**Opciones de apoyo:**

#### "Aporte al Viaje" (Donación única)
- Desde $20.000 COP
- Para aportes puntuales

#### "Compañero de Ruta" (Membresía mensual)
- $35.000 COP/mes
- Beneficios:
  - Acceso anticipado a videos
  - Chat exclusivo de comunidad
  - Mención en créditos de documentales
  - sticker oficial

#### "Alma de Trocha" (Patrocinador)
- $100.000 COP/mes
- Beneficios:
  - Todo de Companero de Ruta
  - Fotografía impresa firmada
  - Tu nombre en los documentales
  - Descuento en tienda

**Datos de pago:**
- Nequi: 3XX XXX XXXX (Camilo)
- Bancolombia: XXXX-XXXXXX
- PayPal disponible

**Copy de cierre:**

> No es una donación. Es una forma de ser parte del camino.

### 4.8 Footer

- Logo Agarrando Trocha
- Redes sociales (Instagram, YouTube, TikTok, Threads)
- Links: Historia, Tienda, Blog, Comunidad, Contacto
- Email: hola@agarrandotrocha.com
- "Con amor, desde las montañas de Colombia"

---

## 5. Detalle de Páginas Secundarias

### 5.1 Página: Historia

**Título:** "Sobre Camilo"

**Secciones:**

1. **El principio**
   - Niño preguntando "¿Qué hay detrás de las montañas?"
   - Sueño de ser explorador
   - Estudió realización audiovisual

2. **El momento decisivo**
   - 2021: Primer viaje documentado "Destino Colombia"
   - 2022: Primera trocha larga (Norte de Santander)
   - 2024-2025: 60+ pueblos, 13+ departamentos

3. **Ahora**
   - Colaboración con Semana ("Relatos del Camino")
   - "La Ruta de los Olvidados" en producción
   - +3,700 seguidores

**Fotos:** Evolución a lo largo de los años

### 5.2 Página: Viajes / Rutas

**Título:** "Las Rutas"

Cada ruta con:

- Nombre
- Departamento(s)
- Distancia
- Dificultad (Fácil / Media / Alta / Extrema)
- Época recomendada
- Galería de fotos
- Video del viaje (si existe)

**Rutas destacadas:**

1. **Chingaza** - Cundinamarca (93% trocha)
2. **Jericó** - Boyacá
3. **San Bernardo de Batá** - Norte de Santander
4. **Páramo de la Cuchilla** - Guasca
5. **Los Nevados** - Tolima

### 5.3 Página: Videos

**Título:** "El Archivo"

Agrupados por serie:

#### "Relatos del Camino" (Semana)
- Episodio 1: Guasca
- Episodio 2: [próximo]
- ...

#### "La Ruta de los Olvidados"
- Trailer
- Making of
- Capítulo 1

#### "Detrás de la Cámara"
- [lista de videos]

#### "Microrreflexiones"
- Videos cortos de 30-90 segundos
- Citas, pensamientos, momentos

### 5.4 Página: Blog - "Diarios de Ruta"

**Nombre del blog:** **Diarios de Ruta**

**Por qué este nombre:**
- Evoca un diario personal, íntimo
- "Ruta" es la palabra que usa Camilo
- Suena a Bitácora de viaje
- Diferente a "blog" tradicional

**Categorías:**

| Categoría | Descripción | Color etiqueta |
|-----------|-------------|----------------|
| 🏔️ Rutas | Descripción de viajes | Verde |
| 👤 Gente | Historias de personas | Azul |
| 💭 Reflexiones | Pensamientos, filosofia | Dorado |
| 🌿 Fauna y Flora | Naturaleza, animales | Verde oscuro |
| 🎒 Equipo | Bicis, gear, техни这些问题 | Marrón |

**Formato de artículo:**

- Título evocador
- Fecha y ubicación
- Texto en estilo de Camilo (poético, reflexivo)
- Fotos grandes
- Video嵌入 (si aplica)
- Sección: "¿Te gustó? Comparte"

### 5.5 Página: Tienda

**Nombre de la tienda:** **La Trocha Shop**

**Por qué:**
- "La trocha" es el concepto central
- Suena a tienda artesanal, no a e-commerce
- Personal, no masivo

**Categorías:**

#### 👕 Ropa
- Camisetas
- Hoodies
- Gorras
- Calcetines

#### ☕ Accesorios
- Termos
- Botellas
- Bolsas / Morrales
- Luces

#### 🖼️ Arte
- Fotografías firmadas
- Impresiones en papel fine art
- Posters

#### 🎫 Experiencias (próximamente)
- Rutas guiadas
- Talleres de bikepacking
- Charlas

**Proceso de compra:**

```
1. Seleccionar producto
2. Elegir cantidad/talla
3. Click en "Pedir por WhatsApp"
4. Se abre WhatsApp con mensaje prellenado
5. Camilo confirma disponibilidad
6. Se согласует forma de pago (Nequi/Transferencia)
7. Envío
```

**Copy en página de checkout:**

> *"No usamos tarjetas. Hablamos directo. Es más humano."*

### 5.6 Página: Comunidad - "Los Caminantes"

**Nombre de la comunidad:** **Los Caminantes**

**Por qué:**
- Evoca a quienes caminan/biciclean
- Suena a comunidad, no a "donantes"
- Tiene peso, tiene historia
- Diferente a "suscriptores" o "patrocinadores"

**Opciones de apoyo:**

#### Aportes únicos

**"Una tasa de café"** - $15.000 COP
> Para el termo de siempre

**"Un pedaleo"** - $50.000 COP
> Para la siguiente montaña

**"Una trocha"** - $150.000 COP
> Para un tramo del camino

#### Membresías mensuales

**"Caminante"** - $35.000/mes
- Acceso anticipado a videos
- Sticker exclusivo
- Chat de comunidad

**"Alma de Trocha"** - $100.000/mes
- Todo de Caminante
- Fotografía impresa mensual
- Tu nombre en créditos
- 10% descuento en tienda

**Datos de pago visibles:**

```
💚 Nequi: 3XX XXX XXXX (Camilo M.)
🏦 Bancolombia: Cuenta de Ahorros XXX-XXXXXX
🅿️ PayPal: paypal.me/agarrandotrocha
```

**Copy importante:**

> *"No es donación. Es compañía en el camino."*

---

## 6. Componentes UI Reutilizables

### 6.1 Botones

**Primario:**
- Fondo: Verde Montaña (#2D4A3E)
- Texto: Blanco
- Radio: 0 (cuadrado sutil)
- Hover: Oscurecer 10%

**Secundario:**
- Borde: Verde Montaña
- Fondo: Transparente
- Texto: Verde Montaña
- Hover: Fondo verde suave

### 6.2 Cards

- Fondo: Blanco
- Sombra: Suave, difusa
- Imagen: 16:9
- Texto: Título + extracto
- Borde: Nínguno
- Hover: Elevación sutil

### 6.3 Video Player

- Custom controls (minimalista)
- Thumbnail con overlay oscuro
- Botón de play grande centrado
- Subtítulos disponibles

### 6.4 Formularios

- Estilo: Líneas mínimas, sin bordes
- Focus: Línea inferior verde
- Labels: Flotantes
- Botón: Ancho completo en mobile

---

## 7. Contenido y Videos Recomendados

### 7.1 Videos que debe tener el sitio

| Video | Tipo | Duración | Sección |
|-------|------|----------|---------|
| La Ruta de los Olvidados - Trailer | Documental | 2 min | Home |
| La Ruta de los Olvidados - Completo | Documental | 15-20 min | Videos |
| Relatos del Camino: Guasca | Episodio | 6 min | Videos |
| ¿Qué hay detrás de las montañas? | Reflexión | 1.5 min | Home/Videos |
| Mi primer viaje en bicicleta | Historia | 4 min | Historia |
| Detrás de cámaras: Chingaza | Behind scenes | 3 min | Videos |
| ¿Por qué viajo solo? | Reflexión | 2 min | Blog video |
| Cómo preparar tu primera trocha | Tutorial | 8 min | Rutas |

### 7.2 Artículos del Blog recomendados

1. **"La noche oscura del alma"** - Ya publicado en Instagram, convertir a blog
2. **"Don Abelino, el último paramero"** - De Relatos del Camino
3. **"Lo que aprendí en 60 pueblos"** - Recopilación
4. **"Mi bicicleta: lo único que necesito"** - Sobre gear
5. **"Por qué cargar solo lo necesario"** - Filosofía
6. **"El silencio de los páramos"** - Reflexión
7. **"Gente que me cambió la vida"** - Historias

---

## 8. Datos de Contacto (Placeholder)

### Camilo Medina
- **Instagram:** @agarrandotrochacol
- **YouTube:** Agarrando Trocha
- **TikTok:** @agarrandotrochacol
- **Threads:** @agarrandotrochacol
- **Email:** hola@agarrandotrocha.com
- **WhatsApp:** +57 3XX XXX XXXX
- **Nequi:** [Por confirmar]
- **Bancolombia:** [Por confirmar]

---

## 9. Fases de Desarrollo

### Fase 1 (MVP) - ✅ COMPLETADO (Prototipo v1.1)
- [x] Home con hero: "¿Qué hay detrás de las montañas?"
- [x] Página de Historia - "El Camino"
- [x] Videos embebidos (YouTube) - placeholders - "El Archivo"
- [x] Blog básico - "Diarios de Ruta"
- [x] Tienda con Bento Grid y producto estrella
- [x] Sección de apoyo básica - "Los Caminantes"
- [x] Footer completo
- [x] Menú responsive para móvil
- [x] Header limpio sin logo redundante

### Fase 2 (Próxima) - Mejoras visuales con frontend-design skill
- [ ] Tipografía distintiva (Playfair Display + Lora)
- [ ] Animaciones staggered y motion
- [ ] Textura grain/noise sutil
- [ ] Composiciones asimétricas
- [ ] Micro-interacciones en hover
- [ ] Rutas interactivas con mapa
- [ ] Comunidad con chat
- [ ] Sistema de membresías automático

### Fase 3 (Futuro)
- [ ] Integración de pagos (Wompi/Epayco)
- [ ] Tienda completa con checkout
- [ ] Rutas guiadas booking
- [ ] App móvil

---

## 10. Inspiraciones y Referencias

### Sitios similares

1. **@josbikealone** (José Javier Ayllón) - Inspiración directa
2. **Merrell** - Estética outdoor
3. **Patagonia** - Filosofía de marca, activism
4. **Amanita Design** (juegos) - Estética contemplativa
5. **Low Information Diet** - Blog de Nicolas Cage - Estilo minimalista

### Cuentas de Instagram para benchmark
- @agarrandotrochacol (principal)
- @josbikealone
- @bikepackingcom
- @exploringtheglobe

---

## 11. Pendientes y Decisiones

### Datos que Camilo debe proporcionar:
- [ ] Número de WhatsApp para tienda y contacto
- [ ] Número de Nequi para aportes
- [ ] Número de cuenta Bancolombia para aportes
- [ ] Correo electrónico de contacto
- [ ] Fotos de Camilo (perfil, en bicicleta, etc.)
- [ ] Videos en alta calidad para el sitio
- [ ] Fotografías de productos para la tienda
- [ ] Lista de productos con precios

### Decisiones de diseño aprobadas:
- [x] Nombres de secciones en español (El Camino, El Archivo, Diarios de Ruta, Los Caminantes, La Tienda, Instantes)
- [x] Hero con pregunta central: "¿Qué hay detrás de las montañas?"
- [x] Header limpio sin logo redundante
- [x] Tienda con estilo Bento Grid
- [x] Producto estrella: "El Broche del Camino" - Pocillo Peltre ($45.000 COP)
- [ ] Paleta de colores final
- [ ] Tipografías definitivas

---

## 12. Nota sobre el Prototipo

**Este es un prototipo funcional en versión Beta pública (v1.1).**

El sitio web actual usa:
- **Estilo:** Escala de grises (blanco, negro, grises) - sin colores definitivos
- **Imágenes:** Placeholders (rectángulos grises) - faltan fotos reales
- **Videos:** Links placeholder - faltan videos embebidos
- **Links:** Algunos botones van a "#" - faltan enlaces reales

**Cambios realizados en v1.1:**
- ✅ Hero con pregunta central: "¿Qué hay detrás de las montañas?"
- ✅ Header limpio sin logo redundante
- ✅ Nombres creativos en todo el menú
- ✅ Tienda estilo Bento Grid con producto estrella

**Próximos pasos (Fase 2):**
1. Obtener fotos y videos de Camilo
2. Integrar videos reales de YouTube
3. Agregar fotos de productos
4. Configurar botones de WhatsApp con número real
5. Añadir datos bancarios reales
6. Aplicar colores y tipografías definitivas
7. Agregar animaciones y motion (usando frontend-design skill)

---

*Documento creado para el desarrollo del sitio web de Agarrando Trocha*
*Versión 1.1 - Marzo 2026*

---

## Para enviar a Camilo

**Prototipo (Wireframe funcional v2.0):**
https://pinme.eth.limo/#/preview/U2FsdGVkX19ZIK-_aje8ylTOsKwjhA9xjkA5QS_t5xelwRmnECFr3sXcpGAoHTPGEiQEP219bkgtXSLaKm7WYVKPCdYkkrvxDb34ZD1s0SVKAaqCVpEQ-_-Kq7s1jAaXeTF03r-pXoIvib10YynyAA

**Documento completo (este archivo):**
En la misma carpeta: `/Users/user/Documents/SVG DEVS/Agarrando Trocha/02-wireframe-sitio-web.md`

**PDF del Wireframe:**
`/Users/user/Documents/SVG DEVS/Agarrando Trocha/Agarrando-Trocha-Wireframe-v2.pdf`
