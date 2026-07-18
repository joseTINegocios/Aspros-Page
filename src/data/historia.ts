export interface HistoriaSection {
  titulo: string
  parrafos: string[]
  icono?: string
}

export interface Capacidad {
  icono: string
  titulo: string
  descripcion: string
}

export const historiaPage = {
  heroTitle: 'Nuestra Historia',
  heroDesc: 'Más de 40 años trabajando codo a codo con los productores mexicanos.',
  sections: [
    {
      titulo: 'Nuestro Origen',
      parrafos: [
        'ASPROS® Semillas nació hace más de cuatro décadas con la visión de llevar genética de maíz de alta calidad al campo mexicano. Fundada por un grupo de agrónomos apasionados por la innovación agrícola, la empresa inició sus operaciones en el Bajío, una de las regiones más productivas de México.',
        'Desde sus inicios, la filosofía de ASPROS® ha sido clara: desarrollar híbridos que se adapten a las condiciones reales de los productores mexicanos, combinando tecnología de punta con el conocimiento profundo del campo.',
      ],
      icono: 'seedling',
    },
    {
      titulo: 'Propósito',
      parrafos: [
        'Nuestra razón de ser es el campo mexicano, los agricultores y el maíz. Trabajamos cada día para ofrecer semillas que maximicen el rendimiento y la rentabilidad de los productores, contribuyendo a la seguridad alimentaria de México.',
        'Creemos en una agricultura sostenible, donde la tecnología y la tradición se complementan para generar valor en cada hectárea cultivada.',
      ],
      icono: 'bullseye',
    },
    {
      titulo: 'Trayectoria',
      parrafos: [
        'A lo largo de más de 40 años, hemos desarrollado más de 13 híbridos de maíz de alta calidad, cada uno diseñado para condiciones específicas de las principales zonas agrícolas del país.',
        'Nuestra red de distribución cubre desde el Norte hasta el Sur de México, pasando por el Pacífico, Occidente, Bajío y Centro, lo que nos permite estar cerca de los productores y entender sus necesidades.',
      ],
      icono: 'road',
    },
  ],
  capacidades: [
    {
      icono: 'flask',
      titulo: 'Investigación',
      descripcion: 'Programa de mejoramiento genético con tecnologías como Dobles Haploides y Marcadores Moleculares.',
    },
    {
      icono: 'seedling',
      titulo: 'Producción',
      descripcion: 'Semilla de alta calidad producida bajo estrictos estándares de control de calidad.',
    },
    {
      icono: 'handshake',
      titulo: 'Acompañamiento',
      descripcion: 'Asesoría técnica personalizada para cada productor durante todo el ciclo del cultivo.',
    },
    {
      icono: 'map-marked-alt',
      titulo: 'Cobertura',
      descripcion: 'Presencia en las 6 principales zonas agrícolas de México con distribución eficiente.',
    },
  ],
  cobertura: [
    { zona: 'Norte', estados: 'Chihuahua, Durango, Coahuila' },
    { zona: 'Pacífico', estados: 'Sinaloa, Sonora, Nayarit' },
    { zona: 'Occidente', estados: 'Jalisco, Nayarit, Colima' },
    { zona: 'Bajío', estados: 'Guanajuato, Querétaro, Michoacán' },
    { zona: 'Centro', estados: 'Estado de México, Hidalgo, Puebla, Tlaxcala' },
    { zona: 'Sur', estados: 'Chiapas, Oaxaca, Tabasco' },
  ],
}
