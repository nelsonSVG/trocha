import { NextResponse } from 'next/server';

/**
 * API Route para simular el scraping y preparación de datos de Instagram.
 * Instagram bloquea el scraping directo sin proxies, por lo que esta ruta
 * asegura que el frontend siempre reciba datos válidos y estructurados,
 * facilitando la conexión automática cuando se disponga del Access Token real.
 */

const FALLBACK_POSTS = [
  {
    id: '1',
    thumbnail: '/images/archivo/3.jpg',
    caption: 'El misticismo del páramo colombiano. Un lugar de altura donde el tiempo se detiene y la niebla lo abraza todo. #AgarrandoTrocha',
    link: 'https://www.instagram.com/p/DFp-X8_xu5t/',
    size: 'large',
  },
  {
    id: '2',
    thumbnail: '/images/archivo/5.jpg',
    caption: 'Guardianes del agua. Los frailejones nos enseñan la paciencia del crecimiento lento y la resistencia en la adversidad.',
    link: 'https://www.instagram.com/p/DFisZfXRP1p/',
    size: 'small',
  },
  {
    id: '3',
    thumbnail: '/images/archivo/21.jpg',
    caption: 'La dureza de la trocha es proporcional a la belleza de la recompensa. Cada ascenso es un diálogo con el cansancio y mi voluntad.',
    link: 'https://www.instagram.com/p/DFda6-pRu63/',
    size: 'small',
  },
  {
    id: '4',
    thumbnail: '/images/archivo/23.jpg',
    caption: 'Las montañas boyacenses, un laberinto de verdes y caminos veredales donde el tiempo parece haberse detenido.',
    link: 'https://www.instagram.com/p/DFV_C9UR_jJ/',
    size: 'small',
  },
  {
    id: '5',
    thumbnail: '/images/archivo/27.jpg',
    caption: 'La exposición total a los elementos. Sol, lluvia, viento; todo es parte de la experiencia de vivir el territorio.',
    link: 'https://www.instagram.com/p/DFG-f3eRP4_/',
    size: 'small',
  },
  {
    id: '6',
    thumbnail: '/images/archivo/30.jpg',
    caption: 'Chingaza: territorio 93% sin pavimentar. El lugar perfecto para perderme y encontrarme en el silencio de sus lagunas.',
    link: 'https://www.instagram.com/p/DE8-N9mR9K_/',
    size: 'medium',
  },
  {
    id: '7',
    thumbnail: '/images/archivo/18.jpg',
    caption: 'Documentar mi camino es una forma de honrar la memoria de los pueblos y las historias que habitan detrás de las montañas.',
    link: 'https://www.instagram.com/p/DEyw_qoxFk3/',
    size: 'medium',
  },
  {
    id: '8',
    thumbnail: '/images/archivo/22.jpg',
    caption: 'No es una donación. Es compañía en mi camino. Gracias por pedalear conmigo y creer en este proyecto de vida.',
    link: 'https://www.instagram.com/agarrandotrochacol',
    size: 'medium',
  },
];

export async function GET() {
  try {
    // Aquí se implementaría la lógica de scraping o fetch a la API oficial.
    // Por ahora, devolvemos los datos reales identificados como "live data".
    
    return NextResponse.json({
      success: true,
      username: '@agarrandotrochacol',
      data: FALLBACK_POSTS,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Error al conectar con Instagram',
      data: FALLBACK_POSTS 
    }, { status: 500 });
  }
}
