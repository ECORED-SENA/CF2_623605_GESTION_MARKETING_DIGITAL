export default {
  global: {
    componenteFormativo: 'Analítica de <i>Buyer</i> Persona',
    descripcionCurso:
      'Es muy importante que las estrategias de la empresa con base en el <i>buyer</i> Persona puedan ser analizadas para observar claramente si las metas se están cumpliendo o, se deben hacer ajustes. Para ello, existen métricas y herramientas que pueden ser de utilidad para que los especialistas en mercadeo puedan desarrollar un análisis correcto sobre los procesos de creación del <i>buyer</i> Persona.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Experiencia de cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mapa de experiencia de cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comunicación estratégica con clientes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Los clientes y el ecosistema digital',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Perfilamiento del <i>Buyer</i> Persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de perfiles',
            hash: 't_2_1',
          },

          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elaboración de arquetipos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diseño de reportes de <i>Buyer</i> Persona',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'KPI y acciones de mejoramiento',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Experiencia de cliente',
      referencia:
        'Zepeda, C. (2021). <i>¿Qué es la Experiencia del Cliente (CX)?</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4qzq0vEa_k4',
    },
    {
      tema: 'Mapa de experiencia de cliente (<i>Customer Journey Map</i>)',
      referencia:
        'Aguilar, A. (2018). <i>Como hacer un CUSTOMER JOURNEY MAP o MAPA DE EXPERIENCIA CLIENTE | Las 7 ETAPAS</i>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=__5oH-POHe4',
    },
    {
      tema: 'La propuesta de valor de la organización',
      referencia:
        'Iturralde, C. (2015). <i>La evolución del Cliente digital</i>.',
      tipo: 'Artículo',
      link:
        'https://cdn5.icemd.com/app/uploads/2018/12/evolucion_cliente_digital.pdf',
    },
    {
      tema: 'El ecosistema digital',
      referencia:
        'Heredia Jerez, R.  (2019). <i>Ecosistemas Digitales, la revolución de todas las industrias</i>.',
      tipo: 'Libro',
      link:
        'https://kioscoganamas.com.pe/wp-content/uploads/2020/07/Libro-Ecosistemas-Digitales.pdf',
    },
    {
      tema: 'KPI’s y acciones de mejoramiento',
      referencia:
        'Cabello, E. [Encuestacom]. (2021). <i>Análisis del Buyer Persona. Métricas de Customer Experience</i>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-hQNp7xh_8c',
    },
  ],
  glosario: [
    {
      termino: 'Analítica web',
      significado:
        'Es un grupo de técnicas que se relacionan con el análisis de información relacionada con las acciones desarrolladas por una marca en internet, desde herramientas o medios como el sitio web, las redes sociales, el correo electrónico, entre otros.',
    },
    {
      termino: 'Comunicación estratégica',
      significado:
        'Es el proceso donde se planean acciones comunicacionales para dar cumplimiento a las metas trazadas por una marca. Estas acciones pueden servir para hacer promoción, promoción de ventas, lanzamiento de productos, posicionamiento o entregar algún tipo de información relevante para el cliente.',
    },
    {
      termino: '<i>Customer Journey</i>',
      significado:
        'Traducido como “Viaje del Cliente” es el grupo de fases por las que cruza un cliente para hacer la acción de compra.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'Es un proceso óptimo para el posicionamiento de una idea, para dar comienzo a una campaña publicitaria o para hacer promoción de algún producto, a través de Tecnologías de la Información y la Comunicación (TIC), tales como redes sociales, correo electrónico, sitio web, blog y chat, entre otras.',
    },
    {
      termino: 'Experiencia de cliente',
      significado:
        'Es la imagen que un cliente tiene luego de tener interacciones con una marca. Sin percepciones que afectan las conductas del cliente y generan recuerdos pueden impulsar la fidelidad por parte del cliente y, posteriormente, generar rentabilidad en la empresa. También se le conoce como CX <i>(Customer Experience)</i>.',
    },
    {
      termino: '<i>Insight</i>',
      significado:
        'Es una verdad o un conocimiento clave que una marca puede tener sobre los clientes. Si se interpreta de la manera correcta puede brindar datos lucrativos sobre la forma en el que consumidor se comporta, sobre sus necesidades y el porqué de sus acciones.',
    },
    {
      termino: '<i>KPIs (key performance indicator)</i>',
      significado:
        'Son indicadores clave de gestión o rendimiento usados para estudiar el éxito de las actividades desarrolladas por una marca para establecer si están logrando los objetivos pactados o si se requiere de realizar algún ajuste o corrección.',
    },
    {
      termino: 'Métrica',
      significado:
        'En mercadeo son una manera cuantificable de detallar un rastreo del rendimiento empresarial y una herramienta vital para calcular la efectividad de las acciones y los esfuerzos publicitarios, de comunicación y promoción emprendidas por una marca.',
    },
    {
      termino: 'Momento de la verdad',
      significado:
        'Es el punto de interacción o contacto de mayor relevancia que existe entre la marca y el cliente. Es vital para la experiencia de cliente porque es en un momento que debe ser tan significativo que logre la fidelización por parte del público objetivo.',
    },
    {
      termino: 'Perfilamiento de clientes',
      significado:
        'Reside en la identificación de características del consumidor para brindarle la asesoría correcta y tener la mejor interacción posible con él. Se deben reunir la mayor cantidad de datos posibles para poder comprender cuál es su personalidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, M. (2016). <i>Customer Experience</i>. La fórmula del éxito para enamorar a los clientes. Edición Kindle, Profit Editorial',
    },
    {
      referencia:
        'Beltrán, M., Ledesma, J., & Parrales, V. (2019). El Buyer Persona Como Factor Clave Entre Las Tendencias En Gestión Empresarial. <i>Revista Científica De La Investigación Y El Conocimiento</i>, p.p. 659-681.',
    },
    {
      referencia: 'Castañeda, C. (2016). <i>Acertá</i>.',
      link:
        'http://acertacomunicaciones.com/8-pasos-para-construir-una-estrategia-de-comunicacion/',
    },
    {
      referencia:
        'Castañeda, V. (2022). <i>Las Tres Claves Del Futuro De La Experiencia Del Cliente. Expansión</i>. Digital.',
    },
    {
      referencia:
        'Haeske, U., & Raabe De Fonrodona, U. (2016). <i>Comunicación Con Clientes : El Camino Correcto</i>. Panamericana Editorial.',
    },
    {
      referencia:
        'Pozo, J. (2018). <i>Cuáles son los kpis de experiencia de clientes más utilizados</i>.',
      link:
        'https://elviajedelcliente.com/cuales-son-los-kpis-de-experiencia-de-clientes-mas-utilizados/',
    },
    {
      referencia:
        'Quijano, V. (2018). <i>Servicio Al Cliente 2.0 : Del Enfoque Reactivo Del Siglo XX , Al Proactivo Necesario. En: El XXI</i>. Publicación independiente.',
    },
    {
      referencia:
        'Vásquez, N. (2021). <i>Arquetipos, Personalidad y Marca Personal: Transforma el poder de tu marca. Tienda Kindle,</i> Publicación Independiente.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Experto temático',
        centro: 'Regional Cauca - Centro de Comercio',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
