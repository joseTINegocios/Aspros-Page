import { testimonials } from './testimonials'
import { hybrids } from './hybrids'
import { getZoneIdsByHybridId } from './zones'
import type { Testimonial } from './testimonials'

export interface VideoProductor {
  id: number
  titulo: string
  productor: string
  zona: string
  url: string
}

function getHybridZone(hybridName: string): string {
  const h = hybrids.find(
    x => x.nombre.toLowerCase() === hybridName.toLowerCase()
  )
  if (!h) return ''
  const ids = getZoneIdsByHybridId(h.id)
  return ids[0] || ''
}

export function getTestimonialsByZone(zonaId: string): Testimonial[] {
  if (!zonaId || zonaId === 'todas') return testimonials
  return testimonials.filter(t => {
    if (!t.hybrid) return false
    return getHybridZone(t.hybrid) === zonaId
  })
}

export function getZonasConTestimonios(): { id: string; nombre: string; count: number }[] {
  const map = new Map<string, number>()
  for (const t of testimonials) {
    if (!t.hybrid) continue
    const z = getHybridZone(t.hybrid)
    if (z) map.set(z, (map.get(z) || 0) + 1)
  }
  return Array.from(map.entries()).map(([id, count]) => ({ id, nombre: id.charAt(0).toUpperCase() + id.slice(1), count }))
}

export const videoPrincipal = {
  titulo: 'Aspros: asesoramiento técnico y semillas de maíz híbrido',
  descripcion: 'El equipo de Aspros está listo para brindarte asesoría y seguimiento de principio a fin en tu cultivo.',
  url: 'https://www.youtube-nocookie.com/embed/moSt3sL-Tis',
}

export const videosProductores: VideoProductor[] = [
  {
    id: 1,
    titulo: 'La importancia de Comanche en la producción de maíz',
    productor: 'Productores del Centro',
    zona: 'centro',
    url: 'https://www.youtube-nocookie.com/embed/CsC-5LKqQWQ',
  },
  {
    id: 2,
    titulo: 'Agricultura preventiva con Aspros',
    productor: 'Productores del Pacífico',
    zona: 'pacifico',
    url: 'https://www.youtube-nocookie.com/embed/z6obokpY8QQ',
  },
  {
    id: 3,
    titulo: 'Aumenta rentabilidad en tu cultivo con Aspros',
    productor: 'Productores del Bajío',
    zona: 'bajio',
    url: 'https://www.youtube-nocookie.com/embed/G1j6RSt9HqI',
  },
  {
    id: 4,
    titulo: 'Conservación de humedad',
    productor: 'Productores de Occidente',
    zona: 'occidente',
    url: 'https://www.youtube-nocookie.com/embed/jSKqbDRur4k',
  },
  {
    id: 5,
    titulo: 'Anticipa tu fecha de siembra con Aspros',
    productor: 'Productores del Norte',
    zona: 'norte',
    url: 'https://www.youtube-nocookie.com/embed/w5AFpkCuGqc',
  },
  {
    id: 6,
    titulo: 'Preparación del terreno antes de la siembra de maíz',
    productor: 'Productores del Sur',
    zona: 'sur',
    url: 'https://www.youtube-nocookie.com/embed/aaGOfcPnaV0',
  },
]

export interface VideoAgrotip {
  id: number
  titulo: string
  url: string
  categoria?: string
}

export const videosAgrotips: VideoAgrotip[] = [
  { id: 1, titulo: '¿Cómo funciona un sistema de conservación de humedad?', url: 'https://www.youtube-nocookie.com/embed/MLHyR3tPaxQ', categoria: 'Suelo' },
  { id: 2, titulo: 'Impacto de la quema de suelos', url: 'https://www.youtube-nocookie.com/embed/nGnTIk1s4NQ', categoria: 'Suelo' },
  { id: 3, titulo: '¿Cómo realizar una adecuada compactación de suelo?', url: 'https://www.youtube-nocookie.com/embed/JmF4iUsfBgU', categoria: 'Suelo' },
  { id: 4, titulo: 'La importancia de la conservación de la humedad', url: 'https://www.youtube-nocookie.com/embed/PjLNhugbZ-A', categoria: 'Suelo' },
  { id: 5, titulo: 'Agricultura ecológica', url: 'https://www.youtube-nocookie.com/embed/cr2u09kRZl8', categoria: 'Sustentabilidad' },
  { id: 6, titulo: 'Proceso de acondicionamiento y envasado', url: 'https://www.youtube-nocookie.com/embed/pEKmxOpgWmA', categoria: 'Aspros' },
  { id: 7, titulo: 'Consecuencia de una mala conservación de humedad', url: 'https://www.youtube-nocookie.com/embed/L3D9qtynIrM', categoria: 'Suelo' },
  { id: 8, titulo: 'Preparación oportuna de suelo', url: 'https://www.youtube-nocookie.com/embed/M8qw2kgBBTk', categoria: 'Suelo' },
  { id: 9, titulo: 'Así funciona un drone agrícola', url: 'https://www.youtube-nocookie.com/embed/B3kqP-bUTtA', categoria: 'Tecnología' },
  { id: 10, titulo: 'Densidad de siembra en el maíz', url: 'https://www.youtube-nocookie.com/embed/boZ7DHtxhmo', categoria: 'Siembra' },
  { id: 11, titulo: 'Usamos drone agrícola, ve los beneficios', url: 'https://www.youtube-nocookie.com/embed/pnUVNDkfW4w', categoria: 'Tecnología' },
  { id: 12, titulo: 'Presencia de gusano cogollero, ¿sabes cómo detectarlo a tiempo?', url: 'https://www.youtube-nocookie.com/embed/9ax7HxYNfbs', categoria: 'Plagas' },
  { id: 13, titulo: 'Maíz libre de malezas', url: 'https://www.youtube-nocookie.com/embed/VNcCkNeXfto', categoria: 'Siembra' },
  { id: 14, titulo: 'Esta plaga puede causar pérdida de rendimiento', url: 'https://www.youtube-nocookie.com/embed/8gD5jHTZpLw', categoria: 'Plagas' },
  { id: 15, titulo: 'Aspros: asesoramiento técnico y semillas de maíz híbrido', url: 'https://www.youtube-nocookie.com/embed/moSt3sL-Tis', categoria: 'Aspros' },
  { id: 16, titulo: 'Acércate a un ingeniero de Aspros', url: 'https://www.youtube-nocookie.com/embed/mJJMGdM2Ox4', categoria: 'Aspros' },
  { id: 17, titulo: 'Mejora el establecimiento de tu cultivo con Aspros', url: 'https://www.youtube-nocookie.com/embed/TWOFktCxuGs', categoria: 'Aspros' },
  { id: 18, titulo: 'Aumenta rentabilidad en tu cultivo con Aspros', url: 'https://www.youtube-nocookie.com/embed/G1j6RSt9HqI', categoria: 'Aspros' },
  { id: 19, titulo: 'Controla plagas y fertiliza con drone agrícola', url: 'https://www.youtube-nocookie.com/embed/ajW4NGOvCEY', categoria: 'Tecnología' },
  { id: 20, titulo: 'Agricultura preventiva con Aspros', url: 'https://www.youtube-nocookie.com/embed/z6obokpY8QQ', categoria: 'Aspros' },
  { id: 21, titulo: 'La agricultura es un buen negocio', url: 'https://www.youtube-nocookie.com/embed/b-f3hN2kDu8', categoria: 'Aspros' },
  { id: 22, titulo: '¿Cómo mantener la humedad del suelo para la siembra de maíz?', url: 'https://www.youtube-nocookie.com/embed/aS4dW6_KzsY', categoria: 'Suelo' },
  { id: 23, titulo: 'Anticipa tu fecha de siembra con Aspros', url: 'https://www.youtube-nocookie.com/embed/w5AFpkCuGqc', categoria: 'Siembra' },
  { id: 24, titulo: 'Preparación del terreno antes de la siembra de maíz', url: 'https://www.youtube-nocookie.com/embed/aaGOfcPnaV0', categoria: 'Siembra' },
  { id: 25, titulo: 'Tratamiento a semilla para disminuir el riesgo de plagas', url: 'https://www.youtube-nocookie.com/embed/iQHebCcyhug', categoria: 'Siembra' },
  { id: 26, titulo: 'El análisis de suelo en el cultivo de maíz', url: 'https://www.youtube-nocookie.com/embed/-h7JrCbHtQ4', categoria: 'Suelo' },
  { id: 27, titulo: 'Conservación de humedad', url: 'https://www.youtube-nocookie.com/embed/jSKqbDRur4k', categoria: 'Suelo' },
  { id: 28, titulo: 'Análisis de suelo: ¿cómo hacer un buen muestreo?', url: 'https://www.youtube-nocookie.com/embed/NYWNXnmzzqU', categoria: 'Suelo' },
  { id: 29, titulo: 'Sembradora de maíz y tips para calidad en la siembra', url: 'https://www.youtube-nocookie.com/embed/pTMvo2QW9ds', categoria: 'Siembra' },
  { id: 30, titulo: 'Tips de siembra y sembradora de precisión (neumática)', url: 'https://www.youtube-nocookie.com/embed/VKReI456g6k', categoria: 'Siembra' },
  { id: 31, titulo: 'Sembrando maíz: siembra de precisión con neumática', url: 'https://www.youtube-nocookie.com/embed/54xODXHKQJY', categoria: 'Siembra' },
  { id: 32, titulo: 'Lo que no sabías del trillado', url: 'https://www.youtube-nocookie.com/embed/0phEg1PnoaE', categoria: 'Cosecha' },
  { id: 33, titulo: 'Descubre la importancia de la humedad al cosechar', url: 'https://www.youtube-nocookie.com/embed/Xfm0XA430oU', categoria: 'Cosecha' },
  { id: 34, titulo: 'Nivel de presas de uso agrícola con Aspros', url: 'https://www.youtube-nocookie.com/embed/jK5cIlVcTwI', categoria: 'Aspros' },
  { id: 35, titulo: 'Control y manejo de Gusano Cogollero del maíz', url: 'https://www.youtube-nocookie.com/embed/jzdBBtAt3x0', categoria: 'Plagas' },
  { id: 36, titulo: '¿Cómo funciona un sistema de riego por aspersión?', url: 'https://www.youtube-nocookie.com/embed/YMx4oAga_vs', categoria: 'Tecnología' },
  { id: 37, titulo: 'La importancia de Comanche en la producción de maíz', url: 'https://www.youtube-nocookie.com/embed/CsC-5LKqQWQ', categoria: 'Híbridos' },
]

export function getCategoriasAgrotips(): string[] {
  const cats = new Set<string>()
  for (const v of videosAgrotips) {
    if (v.categoria) cats.add(v.categoria)
  }
  return Array.from(cats).sort()
}
