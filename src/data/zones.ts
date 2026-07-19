export interface SubZone {
  id: string
  nombre: string
}

export interface Zone {
  id: string
  nombre: string
  slug: string
  descripcion: string
  imagen: string
  color: string
  hybridIds: string[]
  subzonas?: SubZone[]
}

export const zones: Zone[] = [
  {
    id: 'bajio',
    nombre: 'Bajío',
    slug: 'bajio',
    descripcion: 'Región que comprende Zacatecas, San Luis Potosí, Aguascalientes, Guanajuato, Querétaro e Hidalgo. Zona de alta productividad agrícola con clima templado.',
    imagen: '/images/zones/bajio.webp',
    color: '#2a5a3a',
    hybridIds: ['cromo', 'espartaco', 'patriota', 'supremo', 'samurai', 'anibal'],
    subzonas: [
      { id: 'zacatecas', nombre: 'Zacatecas' },
      { id: 'san-luis-potosi', nombre: 'San Luis Potosí' },
      { id: 'aguascalientes', nombre: 'Aguascalientes' },
      { id: 'guanajuato', nombre: 'Guanajuato' },
      { id: 'queretaro', nombre: 'Querétaro' },
      { id: 'hidalgo', nombre: 'Hidalgo' },
    ],
  },
  {
    id: 'occidente',
    nombre: 'Occidente',
    slug: 'occidente',
    descripcion: 'Región occidental que incluye Nayarit, Jalisco y Michoacán. Clima variado con potencial productivo sobresaliente.',
    imagen: '/images/zones/occidente.webp',
    color: '#3a7a4a',
    hybridIds: ['cromo', 'espartaco', 'patriota', 'supremo', 'samurai', 'anibal'],
    subzonas: [
      { id: 'nayarit', nombre: 'Nayarit' },
      { id: 'jalisco', nombre: 'Jalisco' },
      { id: 'michoacan', nombre: 'Michoacán' },
    ],
  },
  {
    id: 'pacifico',
    nombre: 'Pacífico',
    slug: 'pacifico',
    descripcion: 'Región del Pacífico que abarca Baja California, Baja California Sur, Sonora y Sinaloa. Zona de riego con alta tecnología agrícola.',
    imagen: '/images/zones/pacifico.webp',
    color: '#1f422c',
    hybridIds: ['predator', 'magnum', 'sargento', 'general'],
    subzonas: [
      { id: 'baja-california', nombre: 'Baja California' },
      { id: 'baja-california-sur', nombre: 'Baja California Sur' },
      { id: 'sonora', nombre: 'Sonora' },
      { id: 'sinaloa', nombre: 'Sinaloa' },
    ],
  },
  {
    id: 'centro',
    nombre: 'Centro',
    slug: 'centro',
    descripcion: 'Región que abarca Estado de México, CDMX, Morelos, Tlaxcala y Puebla. Clima templado-frío con condiciones específicas para maíces precoces.',
    imagen: '/images/zones/centro.webp',
    color: '#4a8a3a',
    hybridIds: ['comanche', 'cherokee'],
    subzonas: [
      { id: 'estado-de-mexico', nombre: 'Estado de México' },
      { id: 'cdmx', nombre: 'CDMX' },
      { id: 'morelos', nombre: 'Morelos' },
      { id: 'tlaxcala', nombre: 'Tlaxcala' },
      { id: 'puebla', nombre: 'Puebla' },
    ],
  },
  {
    id: 'norte',
    nombre: 'Norte',
    slug: 'norte',
    descripcion: 'Región norte que incluye Chihuahua, Durango y Coahuila. Clima extremoso con agricultura de temporal y riego.',
    imagen: '/images/zones/norte.webp',
    color: '#8a7a3a',
    hybridIds: ['samurai', 'supremo', 'espartaco', 'cromo'],
    subzonas: [
      { id: 'chihuahua', nombre: 'Chihuahua' },
      { id: 'durango', nombre: 'Durango' },
      { id: 'coahuila', nombre: 'Coahuila' },
    ],
  },
]

export function getZoneById(id: string): Zone | undefined {
  return zones.find(z => z.id === id)
}

const hybridToZones = new Map<string, string[]>()
for (const z of zones) {
  for (const hId of z.hybridIds) {
    const existing = hybridToZones.get(hId) || []
    existing.push(z.id)
    hybridToZones.set(hId, existing)
  }
}

export function getZoneIdsByHybridId(hybridId: string): string[] {
  return hybridToZones.get(hybridId) || []
}

export function getZonesByHybridId(hybridId: string): Zone[] {
  const ids = getZoneIdsByHybridId(hybridId)
  return ids.map(id => zones.find(z => z.id === id)).filter(Boolean) as Zone[]
}