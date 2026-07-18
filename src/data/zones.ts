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
    descripcion: 'Región que comprende los estados de Guanajuato, Querétaro y Michoacán. Zona de alta productividad agrícola con clima templado.',
    imagen: '/images/zones/bajio.webp',
    color: '#2a5a3a',
    hybridIds: ['cromo', 'espartaco', 'patriota', 'supremo', 'samurai', 'anibal'],
    subzonas: [
      { id: 'el-bajio', nombre: 'El Bajío' },
      { id: 'sierra-gorda', nombre: 'Sierra Gorda' },
      { id: 'cinega', nombre: 'Ciénega' },
    ],
  },
  {
    id: 'occidente',
    nombre: 'Occidente',
    slug: 'occidente',
    descripcion: 'Región occidental que incluye Jalisco, Nayarit y Colima. Clima variado con potencial productivo sobresaliente.',
    imagen: '/images/zones/occidente.webp',
    color: '#3a7a4a',
    hybridIds: ['cromo', 'espartaco', 'patriota', 'supremo', 'samurai', 'anibal'],
    subzonas: [
      { id: 'altos-jalisco', nombre: 'Altos de Jalisco' },
      { id: 'valles-jalisco', nombre: 'Valles' },
      { id: 'la-barca', nombre: 'La Barca' },
      { id: 'costa-nayarit', nombre: 'Costa de Nayarit' },
    ],
  },
  {
    id: 'pacifico',
    nombre: 'Pacífico',
    slug: 'pacifico',
    descripcion: 'Región del Pacífico que abarca Sinaloa, Sonora y Nayarit. Zona de riego con alta tecnología agrícola.',
    imagen: '/images/zones/pacifico.webp',
    color: '#1f422c',
    hybridIds: ['predator', 'magnum', 'sargento', 'general'],
    subzonas: [
      { id: 'el-fuerte', nombre: 'El Fuerte' },
      { id: 'guaymas', nombre: 'Guaymas' },
      { id: 'culiacan', nombre: 'Culiacán' },
    ],
  },
  {
    id: 'centro',
    nombre: 'Centro',
    slug: 'centro',
    descripcion: 'Valles Altos de México. Región de clima templado-frío con condiciones específicas para maíces precoces.',
    imagen: '/images/zones/centro.webp',
    color: '#4a8a3a',
    hybridIds: ['comanche', 'cherokee'],
    subzonas: [
      { id: 'valle-toluca', nombre: 'Valle de Toluca' },
      { id: 'valle-mezquital', nombre: 'Valle del Mezquital' },
      { id: 'llanos-apam', nombre: 'Llanos de Apam' },
      { id: 'valle-tehuacan', nombre: 'Valle de Tehuacán' },
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
      { id: 'sierra-chihuahua', nombre: 'Sierra' },
      { id: 'desierto', nombre: 'Desierto' },
      { id: 'la-laguna', nombre: 'La Laguna' },
    ],
  },
  {
    id: 'sur',
    nombre: 'Sur',
    slug: 'sur',
    descripcion: 'Región sur que abarca Chiapas, Oaxaca y Tabasco. Clima tropical húmedo con potencial para maíces tardíos.',
    imagen: '/images/zones/sur.svg',
    color: '#3a6a2a',
    hybridIds: ['xt-3402', 'general'],
    subzonas: [
      { id: 'soconusco', nombre: 'Soconusco' },
      { id: 'frailesca', nombre: 'Frailesca' },
      { id: 'valles-centrales-oaxaca', nombre: 'Valles Centrales' },
      { id: 'papaloapan', nombre: 'Papaloapan' },
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