export interface SocialLink {
  nombre: string
  url: string
  icono: string
}

export interface HeroSlide {
  imagen: string
  logo?: string
  titulo?: string
  colorTexto: string
  colorHighlight: string
  bullets: string[]
  link: string
  linkText: string
}

export const siteConfig = {
  nombre: 'Aspros Semillas',
  slogan: 'México sembrando grandeza',
  frase: '"Más de 40 años trabajando codo a codo con nuestros productores"',
  telefono: '7222192122',
  email: 'contacto@asprossemillas.com',
  direccion: 'México',
  logoUrl: '/images/logo-aspros.svg',
  logoStickyUrl: '/images/logo-aspros-sticky.svg',
  stats: {
    anos: 40,
    hibridos: 13,
    zonas: 5,
  },
  heroSlides: [
    {
      imagen: '',
      colorTexto: '#ffffff',
      colorHighlight: '#FFEC00',
      titulo: 'México sembrando grandeza',
      bullets: ['40+ años de experiencia junto al productor mexicano', '13 híbridos de maíz de alta calidad', '5 regiones con genética adaptada a cada clima'],
      link: '/hibridos',
      linkText: 'Encuentra tu híbrido ideal',
    },
    {
      imagen: '/images/hero/hero-slide-2.webp',
      logo: '/images/logos-hybrids/predator-logo.svg',
      colorTexto: '#1f422c',
      colorHighlight: '#C9D300',
      bullets: ['De mazorca grande y excelente calidad de grano', 'Ideal para 60 mil semillas por ha', 'Gran tolerancia al Fusarium'],
      link: '/hibridos/predator',
      linkText: 'Ver predator',
    },
    {
      imagen: '/images/hero/hero-slide-3.webp',
      logo: '/images/logos-hybrids/sargento-logo.svg',
      colorTexto: '#ffffff',
      colorHighlight: '#C9D300',
      titulo: 'El protector de la cosecha',
      bullets: ['Mazorcas uniformes de alto peso específico', 'Hasta 94% de plantas productivas', 'Sanidad de planta sobresaliente'],
      link: '/hibridos/sargento',
      linkText: 'Ver sargento',
    },
    {
      imagen: '/images/hero/hero-slide-4.png',
      logo: '/images/logos-hybrids/comanche-logo.svg',
      colorTexto: '#ffffff',
      colorHighlight: '#C9D300',
      titulo: 'Valles Altos es Nación Comanche',
      bullets: ['Gran sanidad de planta foliar', 'Ideal para Valles Altos', 'Cuateo hasta del 80%'],
      link: '/hibridos/comanche',
      linkText: 'Ver comanche',
    },
    {
      imagen: '/images/hero/hero-slide-5.png',
      logo: '/images/logos-hybrids/espartaco-logo.svg',
      colorTexto: '#ffffff',
      colorHighlight: '#C9D300',
      titulo: 'La semilla de la excelencia',
      bullets: ['Excelente estabilidad de planta', 'Máximo vigor inicial', 'Tallos y raíces resistentes hasta la cosecha'],
      link: '/hibridos/espartaco',
      linkText: 'Ver espartaco',
    },
  ],
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/SemillasAspros/', icono: 'facebook' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/asprossemillasmx/', icono: 'instagram' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/channel/UCagPf_51VowDaaam44l6r2w', icono: 'youtube' },
    { nombre: 'TikTok', url: 'https://www.tiktok.com/@aspros.semillas', icono: 'tiktok' },
  ],
}
