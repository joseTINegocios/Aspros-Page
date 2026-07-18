export interface Vacante {
  id: string
  titulo: string
  ubicacion: string
  tipo: 'Tiempo completo' | 'Medio tiempo' | 'Prácticas'
  area: string
  descripcion: string
  requisitos: string[]
  activa: boolean
}

export const vacantes: Vacante[] = [
  {
    id: 'v1',
    titulo: 'Representante Técnico de Ventas',
    ubicacion: 'Bajío (Guanajuato, Querétaro, Michoacán)',
    tipo: 'Tiempo completo',
    area: 'Ventas',
    descripcion: 'Buscamos un representante técnico para promover nuestros híbridos con productores de la región Bajío. El candidato ideal tiene experiencia en ventas agrícolas y conocimiento técnico de maíz.',
    requisitos: [
      'Ingeniero Agrónomo o afín',
      'Experiencia mínima de 2 años en ventas agrícolas',
      'Conocimiento del cultivo de maíz',
      'Disponibilidad para viajar',
      'Licencia de conducir vigente',
    ],
    activa: true,
  },
  {
    id: 'v2',
    titulo: 'Especialista en Mejoramiento Genético',
    ubicacion: 'Jalisco',
    tipo: 'Tiempo completo',
    area: 'Investigación',
    descripcion: 'Nos unimos al programa de mejoramiento genético utilizando tecnologías de Dobles Haploides y Marcadores Moleculares para el desarrollo de nuevos híbridos.',
    requisitos: [
      'Maestría o Doctorado en Fitomejoramiento',
      'Experiencia en programas de mejoramiento de maíz',
      'Conocimiento de técnicas de DH y marcadores moleculares',
      'Manejo de software estadístico',
      'Inglés técnico',
    ],
    activa: true,
  },
  {
    id: 'v3',
    titulo: 'Coordinador de Campo',
    ubicacion: 'Sinaloa',
    tipo: 'Tiempo completo',
    area: 'Producción',
    descripcion: 'Coordinación de parcelas de validación y producción de semilla en la región del Pacífico. Responsable de supervisar equipos de campo y reportar resultados.',
    requisitos: [
      'Ingeniero Agrónomo',
      'Experiencia en producción de semilla',
      'Capacidad para liderar equipos',
      'Conocimiento de la región Pacífico',
    ],
    activa: true,
  },
  {
    id: 'v4',
    titulo: 'Practicante de Marketing Digital',
    ubicacion: 'Remoto',
    tipo: 'Prácticas',
    area: 'Marketing',
    descripcion: 'Apoyo en la gestión de redes sociales, creación de contenido digital y análisis de métricas para fortalecer la presencia digital de ASPROS.',
    requisitos: [
      'Estudiante de Marketing, Comunicación o afín',
      'Conocimiento de redes sociales y herramientas de diseño',
      'Creatividad e iniciativa',
      'Disponibilidad de 6 meses',
    ],
    activa: true,
  },
]

export function listarVacantesActivas(): Vacante[] {
  return vacantes.filter(v => v.activa)
}
