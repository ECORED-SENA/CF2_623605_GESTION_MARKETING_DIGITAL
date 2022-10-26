<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Perfilamiento del #[i Buyer] Persona

    p(data-aos="fade-down").mb-5 Una de las principales estrategias en el marketing digital es el perfilamiento del <i>Buyer</i> persona, Beltrán, Ledesma y Parrales (2019) mencionan que se puede crear este perfilamiento en cinco (5) pasos así:
    .bg14 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .row.align-items-center.mb-3(data-aos="zoom-in")
            .col-auto.mb-2
              figure
                img(src="@/assets/curso/temas/img114.svg", alt="alt")
            .col
              h4.mb-0.bgtex Paso 1      
              h5.mb-0 Definir las necesidades.
              .col-md-3.borde
              
          p(data-aos="fade-down").mb-5 Se debe saber qué se requiere para definir al cliente ideal. Quien tiene la información, tiene el poder,  por eso, mientras más datos se recopilen es mejor, porque se podrá definir las necesidades del <i>Buyer</i> Persona. Se deben analizar datos generales de la persona, además de datos más personales,  como por ejemplo los que se encuentran en el siguiente recurso:

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Datos demográficos: 
                p(data-aos="fade-left") Cuál es la edad, sexo, ubicación, nivel educativo, ingresos mensuales, estrato socioeconómico, etc. 
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img116.svg', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img117.svg', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Situación personal:  
                p(data-aos="fade-right") Cuál es su estado civil (casado, separado o divorciado, vive solo, en pareja, comparte habitación con alguien más, vive con los padres, es padre natural).  
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Información laboral: 
                p(data-aos="fade-left") Dónde y que estudia, trabaja; si es desempleado, qué cargo, profesión, tiene; en qué empresa trabaja, su sector empresarial; qué perspectiva laboral tiene a futuro.  
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img118.svg', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img119.svg', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Objetivos y metas:  
                p(data-aos="fade-right") Cuáles son sus objetivos de vida. Se sugiere diferenciar los objetivos personales de los profesionales. A partir de ahí, se puede comprender cómo el producto puede una necesidad del cliente.  
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4(data-aos="fade-left") Retos y problemas:  
                p(data-aos="fade-left") Cuáles son sus más relevantes dificultades en el diario convivir, si tiene algún impedimento para el logro de los objetivos, o si tiene algún problema que lo aparte de la marca o el producto. 
              .col-lg-6
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img120.svg', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-6.order-1
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img121.svg', alt='')            
              .col-lg-6.text-start.order-lg-2
                h4(data-aos="fade-right") Actitudes y comportamientos:  
                p(data-aos="fade-right") Cuál es la actitud frente al producto, sus hábitos web, qué dispositivos usa para navegar en internet, qué sitios web visita generalmente y en qué redes sociales tiene perfil.

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .row.align-items-center.mb-3(data-aos="zoom-in")
            .col-auto.mb-2
              figure
                img(src="@/assets/curso/temas/img122.svg", alt="alt")
            .col
              h4.mb-0.bgtex Paso 2      
              h5.mb-0 Recopilar más datos sobre los clientes.
              .col-md-3.borde
              
          p(data-aos="fade-down").mb-5 Se debe comenzar con la recopilación (online y offline) de todo lo que se pueda sobre los clientes.

          TabsB.color-acento-contenido.mb-5.bg15(data-aos="fade") 
            .py-4.py-md-5(titulo="Consultar" :icono="require('@/assets/curso/temas/img123.svg')")
              .row.justify-content-center.align-items-start
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-3 Consultar todas las fuentes: 
                  p A través de internet o también en tiendas o sedes presenciales. En las bases de datos se pueden encontrar más datos de importancia y detalles sobre la situación personal de los clientes. Ayuda a hacer una mejor definición de los individuos que se interesan en el producto.
                .col-lg-4.col-6
                  figure
                    img(src="@/assets/curso/temas/img127.png", alt="alt")  
            .py-4.py-md-5(titulo="Contrastar" :icono="require('@/assets/curso/temas/img124.svg')")
              .row.justify-content-center.align-items-start
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-3 Contrastar con el equipo de ventas: 
                  p El equipo de mercadeo debe estar en contacto con el departamento de ventas para que el proyecto funcione de forma óptima. Deben estar encadenados y con la mira puesta en el mismo objetivo. Es simple, el contacto humano entrega un importante valor agregado, por encima de todos los demás datos que se pueda obtener.
                .col-lg-4.col-6
                  figure
                    img(src="@/assets/curso/temas/img128.png", alt="alt") 
            .py-4.py-md-5(titulo="<i>Traffic marketing</i>" :icono="require('@/assets/curso/temas/img125.svg')")
              .row.justify-content-center.align-items-start
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-3 Master en <i>traffic marketing</i>:  
                  p SEO, SEM, atracción y contenidos. Áreas en las que los empleados (estrategas o especialistas de mercadeo) deber ser expertos. Liderar el desarrollo de estrategias que deben dar respuesta a los indicadores y análisis generados, responder con lo que el cliente espera. 
                .col-lg-4.col-6
                  figure
                    img(src="@/assets/curso/temas/img129.png", alt="alt") 
            .py-4.py-md-5(titulo="Buscar" :icono="require('@/assets/curso/temas/img126.svg')")
              .row.justify-content-center.align-items-start
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-3 Buscar externamente:  
                  p También se pueden obtener datos de otras fuentes externas como grupos de LinkedIn o demás redes sociales, incluso blogs, webinars o demás recursos digitales donde pueda pasar más tiempo el cliente. Si la empresa es nueva y aún no posee clientes, se sugiere visitar el sitio web, redes sociales y blog de la competencia para hacer una investigación sobre las personas que en ellas participa. Es importante apuntar qué desean, qué marcas o personas siguen y qué comparten con sus contactos.
                .col-lg-4.col-6
                  figure
                    img(src="@/assets/curso/temas/img130.png", alt="alt")
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-10
              .row.align-items-center.mb-3(data-aos="zoom-in")
                .col-auto.mb-2
                  figure
                    img(src="@/assets/curso/temas/img136.svg", alt="alt")
                .col
                  h4.mb-0.bgtex Paso 3      
                  h5.mb-0 Construir el <i>Buyer</i> Persona
                  .col-md-3.borde
                  
          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-8
              p(data-aos="fade-down") Se debe diseñar de manera clara y práctica un retrato ficticio del cliente ideal, que se entienda por parte del equipo y el resto de empleados. Se le debe dar nombre y exponer la información ordenadamente, determinando con mucha claridad cómo el <i>Buyer</i> Persona se mueve a través del Embudo de Conversión.

              p(data-aos="fade-down") El Embudo de Conversión es el viaje realizado por el cliente desde Internet, hasta llegar a la acción de compra.                                   
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img131.png', alt='')  

          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-10
              .row.align-items-center.mb-3(data-aos="zoom-in")
                .col-auto.mb-2
                  figure
                    img(src="@/assets/curso/temas/img137.svg", alt="alt")
                .col
                  h4.mb-0.bgtex Paso 4      
                  h5.mb-0 Concretar la estrategia y los puntos clave.
                  .col-md-3.borde
                  
          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-8
              p(data-aos="fade-down") En el momento de concretar una estrategia, toda información es de utilidad, pero se deben enfocar los datos de manera que den respuesta a las preguntas realizadas durante el primer paso. Una vez obtenidas estas respuestas se debe generar una interacción entre el <i>Buyer</i> Persona y el producto. Señalar si el cliente puede tener desconfianza que lo separe de la propuesta comercial y encontrar las opciones que puedan llevarlo a la solución de sus necesidades. Es importante conocer fortalezas y debilidades para definir la estrategia, la Matriz DOFA puede aportar al proceso.                                   
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img132.png', alt='') 

          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-10
              .row.align-items-center.mb-3(data-aos="zoom-in")
                .col-auto.mb-2
                  figure
                    img(src="@/assets/curso/temas/img138.svg", alt="alt")
                .col
                  h4.mb-0.bgtex Paso 5      
                  h5.mb-0 Usar mecanismos de retroalimentación.
                  .col-md-3.borde
                  
          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-8
              p(data-aos="fade-down") El <i>Buyer</i> Persona es un referente para todo el negocio. Una vez esté definido se debe compartir con toda la empresa y analizar las sugerencias que se puedan recibir, porque en ellas hay oportunidad de mejora en su creación, especialmente si la sugerencia viene de alguien que se contacta habitualmente con el cliente.                                    
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img133.png', alt='')
              
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Tipos de perfiles

    p(data-aos="fade-down").mb-5 Los tipos de perfiles del <i>Buyer</i> Persona pueden ser agrupados según sea su participación en el proceso de una compra. Los siguientes tres perfiles se destacan por sus diferentes roles y comportamientos así:

    .row.justify-content-center.align-items-stretch.mb-3          
      .col-lg-4.my-3
        .bg16.p-4.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img139.png', alt='')
          .text-center
            h5(data-aos="fade-down").mb-3 <i>Buyer</i> Persona Principal
            p(data-aos="fade-down").mb-0 Es el prototipo de individuo con el que una marca desea conectarse y quien es el responsable de tomar la decisión de compra. De forma habitual, las marcas suelen poseer un único <i>Buyer</i> Persona Principal, pero, es posible que existan casos donde se diseñen varios prototipos, lo que dependerá del contexto empresarial.   
      .col-lg-4.my-3
        .bg16.p-4.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img140.png', alt='')
          .text-center
            h5(data-aos="fade-down").mb-3 <i>Buyer</i> Persona Secundario
            p(data-aos="fade-down") Influye de alguna manera sobre el <i>Buyer</i> Persona principal asi:

            p(data-aos="fade-down") #[b Prescriptores] tienen autoridad y que sugieren el producto, su opinión es concluyente y, por lo general, no se discute.

            p(data-aos="fade-down") #[b Influencers] y los consejeros pueden tener un efecto tanto positivo como negativo sobre una decisión en la compra de un producto, porque su opinión dependerá de la imagen percibida por cada persona o cliente. 

            p(data-aos="fade-down") #[b Recomendadores] que se limitan a recomendar el producto, pero no poseen la capacidad de influencia de las anteriores figuras.    
      .col-lg-4.my-3
        .bg16.p-4.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img141.png', alt='')
          .text-center
            h5(data-aos="fade-down").mb-3 <i>Buyer</i> Persona Negativo
            p(data-aos="fade-down").mb-0 Prototipo de individuo que no encarnan a los clientes inmediatos de los productos actuales de la marca, pero que en algún momento se pueden sentir atraídos por los contenidos o campañas publicitarias. También se puede tratar de prototipos de individuos que sí compran el producto, pero, no lo vuelven a hacer (porque no los satisfizo, porque no tuvieron una buena asesoría o servicio) y, por lo tanto, no entregan rentabilidad a la empresa. Se les puede conocer como "anti-<i>Buyer</i> Persona".

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2  Elaboración de arquetipos  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img142.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down") Según Vásquez (2021), la famosa frase "Tú eres lo más importante" ha sido usada hasta el cansancio por la publicidad tradicional, pero, en la actualidad, no basta con decirlo, hay que demostrarlo. Si así fuera los clientes vivirían experiencias de marca más significativas y con un alto índice de personalización. Empresas como Amazon, Disney y Spotify, consiguieron personalizar la CX con bastante éxito, debido al diseño de arquetipos, pero la realidad es que existen millones de empresas en las que este tema está pendiente.

    .row.justify-content-center.align-items-center.mb-5.pt-5           
      .col-lg-10.bg1.p-4.imgs-flotantes.my-3(data-aos="fade-left") 
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/img143.svg', alt='Imagen decorativa')
        p.p-4(data-aos="fade-down").my-3 Es importante mencionar que el arquetipo de cliente debe ser analizado desde el punto de vista de las CX, mientras que el <i>Buyer</i> Persona es el cliente ideal para la marca. Por esta razón, la elaboración de arquetipos se hace necesario para las empresas. 

    p(data-aos="fade-down").mb-5 A continuación, se encuentran las sugerencias para construir un arquetipo:

    .row.justify-content-center.align-items-center.bg3.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure.p-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3  Diseño de reportes de <i>Buyer</i> Persona

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img144.png', alt='')
      .col-lg-8
        p(data-aos="fade-down") Según Beltrán, Ledesma, y Parrales (2019) la estrategia de venta falla estrepitosamente cuando las empresas no definen su <i>Buyer</i> Persona. Es por esto que su definición puede lograr la diferencia entre una estrategia positiva y una fracasada. Uno de los errores del mercadeo digital consiste en pensar que el mensaje va a cautivar a todos los clientes, cuando realmente la efectividad se logra conociendo perfectamente los prospectos reales. 
        .row.justify-content-start.align-items-center    
          .col-lg-10.col-md-10.up.col-sm-12
            p(data-aos="fade-down").mb-0 El análisis realizado sobre el <i>Buyer</i> Persona admite comprender a quién se le habla y cuáles son los métodos precisos y oportunos para conquistarlos. En un mundo digital repleto de información (mucha de ella considerada fake news) es vital comprender cómo captar la atención de los prospectos, cómo hacer que elijan la marca y no la competencia.

        .tarjeta.position-relative(data-aos="flip-down")
          .imagen-absolute
            img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img145.svg', alt='') 

    p(data-aos="fade-down") Hay que establecer perfectamente cuáles son los prospectos a los que se desea cautivar, si se piensa en el embudo de ventas que precisa de la atracción de extraños, llevándolos a visitar un sitio #[i web o landing page], para convertirlos, inicialmente en prospectos, y a futuro en clientes actuales. Conquistar al prospecto perfecto es el comienzo del éxito de toda campaña de mercadeo digital,  es por esta razón que se utiliza el análisis de <i>Buyer</i> Persona, que permite hallar a esos “extraños” para conquistarlos, usando técnicas de conversión. En mercadeo digital se trabaja para la atracción, la conversión y luego conquista del prospecto.

    p(data-aos="fade-down").mb-5 Pero, para conocer en dónde están ubicados los prospectos, se debe comenzar por entender quiénes son, lo que involucra comprender el tipo de cliente buscado:

    .row.mb-5.justify-content-center
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img146.svg', alt='')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Quién es
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img147.svg', alt='')
          .col-9.align-items-center.p-2
            div
              p.mb-0 Dónde está
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img148.svg', alt='')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Qué dice
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img149.svg', alt='')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Qué desea             


      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img150.svg', alt='')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Qué no le gusta
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img151.svg', alt='')
          .col-9.align-items-center.p-2
            div
              p.mb-0 Cuál es su preocupación
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img152.svg', alt='')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Su insatisfacción
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg17
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img153.svg', alt='')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Qué contenidos usa 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img154.png', alt='')
      .col-lg-8
        p(data-aos="fade-down") Las respuestas van a permitir la compresión sobre cómo hacer la búsqueda y la atracción de los prospectos perfectos para nutrir el embudo de ventas. Existen distintas estrategias para responder estas preguntas y normalmente se usan plataformas de analítica, de investigación de palabras claves y de escucha social. Pero, lo más importante para comenzar es la definición de quién es el cliente, lo que no se soluciona con una plataforma tecnológica sino con un proceso de “lluvia de ideas” que se llama “análisis del <i>buying</i> Persona” que ayuda a representar y a modelar al potencial cliente.
        .row.justify-content-start.align-items-center.bg18.p-1    
          .col-lg-10.col-md-10.up.col-sm-12
            p(data-aos="fade-down").mb-0.px-4 Una vez creado el <i>Buyer</i> Persona, se puede continuar con una estrategia que integre campaña publicitaria, cimentación del sitio web y contenidos digitales. En mercadeo digital, estas tres labores deben dar tiene que ser espectaculares para que se puedan lograr los objetivos pactados.
          .col-lg-2.col-md-10.d-none.d-lg-block  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img155.svg', alt='') 

    p(data-aos="fade-down").mb-5 Pero, hay que entender que, si no se le habla a la persona correcta, los prospectos que visiten el sitio web nunca llegarán a ser clientes actuales. Por esta razón, el equipo de mercadeo debe tener muy claro quién es el <i>Buyer</i> Persona para orientar los esfuerzos de publicidad, sitio web y gestión de contenidos digitales de la forma más oportuna posible.

    .row.justify-content-center.align-items-center.mb-2           
      .col-lg-2.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.svg', alt='')   
      .col-lg-10.my-3
        p(data-aos="fade-down") Ahora bien, existen herramientas gratuitas de analítica, como, por ejemplo, #[b #[i Google Data Studio o Google Anatytics]], con las que se puede entender el perfil de los clientes reales que visitan y compran en el sitio web para luego crear el <i>Buyer</i> Persona. De esta manera su creación está basada en datos reales. 

    p(data-aos="fade-down").mb-5 Con estas herramientas se pueden observar puntos clave relativos a la audiencia según datos como: 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img156.svg', alt='')

    p(data-aos="fade-down").mb-5 Estas herramientas entregan una plantilla con los datos hallados, que en diseño, puede ser muy parecida a una infografía, es descriptiva y se puede personalizar el texto para añadir observaciones sobre la información y, obviamente, crear los perfiles de clientes. Estos reportes o informes, posteriormente servirán para la creación del <i>Buyer</i> Persona. Incluso, se puede deducir cuáles con las frases y palabras clave usadas para la búsqueda en Google y con ello, configurar y administrar campañas de Google <i>ads</i> y SEO. De esta forma, y tras buscar en Google, se puede lograr que el sitio web le brinde información que pueda resolver sus necesidades y, al invitarlo a visitar el sitio, se puede continuar con la conversión. El objetivo es atraer a ese “extraño” para convertirlo en cliente actual (Beltrán, Ledesma, & Parrales, 2019).

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 KPI y acciones de mejoramiento 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img157.png', alt='')
      .col-lg-8
        p(data-aos="fade-down") El análisis del <i>Buyer</i> Persona está claramente relacionado con la CX como lo afirma Pozo, José (2018). Por ejemplo, el 75% de los clientes acepta invertir más dinero para comprar en una marca que brinde una excelente experiencia de cliente. Por eso, hoy en día se invierte más dinero en plataformas que entreguen mejores experiencias en todo el proceso de compra. Pero, por otro lado, además de lo anterior, es vital poder medir y conocer los KPI (<i>Key Performance Indicators</i> o indicadores clave de rendimiento) de la CX, para poder conocer, gestionar y mejorar las estrategias diseñadas para el <i>Buyer</i> Persona.

        p(data-aos="fade-down") Las métricas CX se refieren a un valor medible que indica cuán eficiente está siendo una estrategia de experiencia de cliente para lograr los objetivos pactados. Es decir, con estos indicadores se pueden medir si las actividades de CX están logrando los objetivos propuestos por la marca o si, por el contrario, hay desviaciones.

    .row.justify-content-center.align-items-center.mb-5.pt-5           
      .col-lg-8.bg1.p-4.imgs-flotantes.my-4(data-aos="fade-left") 
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/img158.svg', alt='Imagen decorativa')
        p.p-4.px-5(data-aos="fade-down").mb-0 Existen muchas métricas CX a tener en cuenta y será cada negocio el que deba elegir las más importantes para la marca.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-down") Hoy en día, la diferencia competitiva no se logra con estrategias de precio, de producto a través de la publicidad;  la diferencia competitiva se logra con una excelente estrategia de experiencia de cliente, porque así se logra que el consumidor se involucre con la marca y esté más cercano a ella. Por eso, las empresas que logren generar CX significativas con los clientes podrán alcanzar ventajas competitivas relevantes. Entonces, es fundamental focalizarse en la misión de la CX ya que puede traer beneficios como por ejemplo: 
      .col-lg-4      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img159.svg', alt='')

    .row.mb-5.justify-content-center
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img160.svg', alt='')
          .col-9.align-items-center.p-3
            div
              h5.mb-0.text-small Aumentar de las ventas.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img161.svg', alt='')
          .col-9.align-items-center.p-2
            div
              h5.mb-0.text-small Incrementar en la satisfacción por parte del cliente.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img162.svg', alt='')
          .col-9.align-items-center.p-3
            div
              h5.mb-0.text-small Provocar la fidelización del cliente.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img163.svg', alt='')
          .col-9.align-items-center.p-3
            div
              h5.mb-0.text-small Mejorar el “voz a voz”.           


      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img164.svg', alt='')
          .col-9.align-items-center.p-3
            div
              h5.mb-0.text-small Reducir costos de personal.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img165.svg', alt='')
          .col-9.align-items-center.p-2
            div
              h5.mb-0.text-small Mejorar la imagen, identidad y reputación de marca.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img166.svg', alt='')
          .col-9.align-items-center.p-3
            div
              h5.mb-0.text-small Reducir las quejas y reclamos.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg19
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/temas/img167.svg', alt='')
          .col-9.align-items-center.p-3
            div
              h5.mb-0.text-small Disminuir la inversión en mercadeo y publicidad.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-6
        .list.bg2(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1 Ejemplos de KPIs para medir la Experiencia de Clientes

    p(data-aos="fade-down").mb-5 Existen diferentes KPI de CX, pero, algunos son más importantes que otros porque brindan datos valiosos para las marcas. Son métrica llamadas Customer Service que toda empresa debería considerar en su estrategia de análisis y medición:

    .tarjeta.tarjeta--gris.p-5.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start.p-3
          .col-lg-6.mb-4.mb-md-0
            h4 <i>Net Promoter Score (NPS).</i>
            p Se trata de uno de los CX KPI más relevantes, porque mide la probabilidad que tiene un cliente de recomendar una marca o sus productos a sus contactos. Se centra en la intención del cliente y no en una sensación o algo emocional (que puede variar).

            p.mb-4 El NPS se efectúa a través de una encuesta, en la que las respuestas obtenidas se recopilan en una escala de 1 al 10.              
 
            .bg20.p-4
              h5.mb-4 Ejemplo:
              p ¿Qué tan factible es que usted recomiende nuestra marca? 
              p.mb-0 Siendo 10 las más factible y 1 la menos factible. 
        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img169.png', alt='')  

        .row.justify-content-center.align-items-start.p-3
          .col-lg-6.mb-4.mb-md-0
            h4 <i>Customer Effort Score (CES).</i>  
            p.mb-4 Es el #[b “Indicador de Esfuerzo del Cliente”], es decir, el nivel de esfuerzo del cliente para tener una relación con la empresa. Con este indicador, los clientes califican su CX en relación al uso de los productos de una marca eligiendo variables ubicadas entre “muy difícil” a “muy fácil”. A través de esta asignación, la marca puede establecer cuál es el esfuerzo que requirió el cliente para comprar el producto y la probabilidad de que lo siga haciendo. 
            .bg20.p-4
              h5.mb-4 Ejemplo:
              p ¿Cuánto esfuerzo tuviste que hacer para utilizar nuestro servicio?   
              p.mb-0 Extremadamente difícil; muy difícil; difícil; aceptable; media; fácil; extremadamente fácil.
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img170.png', alt='') 

        .row.justify-content-center.align-items-start.p-3
          .col-lg-6.mb-4.mb-md-0
            h4 Satisfacción del cliente (CSAT). 
            p.mb-4 El #[b #[i “Customer Satisfaction Scores”]], mide el nivel de satisfacción que tiene el cliente con el producto. Usualmente es usado para valorar interacciones específicas como puede la atención al cliente vía telefónica o el proceso de devolución de un producto. En esta métrica se pide al cliente calificar su nivel de satisfacción en una escala que va de #[b “Totalmente satisfecho”] a #[b “Totalmente insatisfecho”]. 
            .bg20.p-4
              h5.mb-4 Ejemplo:
              p ¿Qué tan satisfecho estás con el servicio que acabas de recibir?
 
              p.mb-0 Totalmente satisfecho; satisfecho; indiferente; no muy satisfecho; totalmente insatisfecho. 
        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img171.png', alt='')

        .row.justify-content-center.align-items-start.p-3
          .col-lg-6.mb-4.mb-md-0
            h4 Valor de Vida del Cliente (CLV). 
            p.mb-4 El #[b #[i “Customer Lifetime Value”]] es otro importantísimo KPI de CX que todo negocio debe considerar porque se refiere al valor de un cliente para la marca durante su vida, o sea, el tiempo en el que es cliente actual. Con este indicador se puede saber la rentabilidad que el cliente ha dejado a la marca a lo largo del tiempo y determinar los ingresos totales que se pueden conseguir de él. 
            .bg20.p-4
              h5.mb-4 Ejemplo:
              p un atleta compra tenis 4 veces al año durante 8 años en la misma empresa de artículos deportivos, lo que puede valer:

              p.mb-0 $100 US por par de tenis, multiplicado por 4 pares al año, durante 8 años= 100 x 4 x 8 = $3.200 US 
        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img172.png', alt='')

        .row.justify-content-center.align-items-start.p-3
          .col-lg-6.mb-4.mb-md-0
            h4 Retención de clientes. 
            p Es más económico para una empresa retener los clientes actuales que conseguir clientes nuevos. Por eso, es vital estar pendientes de las métricas para calcular el nivel de fidelidad de los clientes y su tasa de retención. Este indicador mostrará el porcentaje de clientes que continúan con la marca luego de un periodo de tiempo. Poseer una tasa alta de retención da a entender que los clientes están satisfechos.

            p #[b Fórmula para calcular la retención de clientes:] [número de clientes al final del período menos el número de clientes nuevos adquiridos durante el período] dividido [número de clientes al comienzo del periodo] por 100. 
        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img173.png', alt='')

        .row.justify-content-center.align-items-start.p-3
          .col-lg-6.mb-4.mb-md-0
            h4 Satisfacción de los empleados. 
            p No se puede olvidar la experiencia y satisfacción de los empleados. Si ellos no están contentos, sería bastante difícil que la empresa pudiera brindar una buena CX. Por eso, para lograr este indicador, se debe preguntar directamente a cada empleado qué tan bien se siente trabajando en la empresa, si están orgullosos de pertenecer a su equipo de trabajo o qué mejorarían. En esta métrica se pide al empleado calificar su nivel de satisfacción laborando en la empresa en una escala que va de “Totalmente satisfecho” a “Totalmente insatisfecho”
            .bg20.p-4
              h5.mb-4
              p ¿Qué tan bien te sientes haciendo tu trabajo?

              p.mb-0 Totalmente satisfecho; satisfecho; indiferente; no muy satisfecho; totalmente insatisfecho. 
        
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img174.png', alt='')

    .row.justify-content-center.align-items-center.mb-2           
      .col-lg-2.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.svg', alt='')   
      .col-lg-10.my-3
        p(data-aos="fade-down") Como se puede observar, los KPI de CX son vitales para que una empresa crezca. Si no se tiene una idea clara de cómo están funcionando las estrategias, sus planes de acción y, en general, la empresa, de nada va a servir la implementación de nuevas tecnologías para la atención al cliente, para mejorar los servicios o para el diseño de una excelente estrategia de marketing. La aplicación de estos indicadores ayudará a la empresa a conocer si va en el camino correcto o si debe desarrollar un plan de mejoramiento. (Pozo, 2018) 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-7
        .list.bg2(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1 Acciones estratégicas de mejora de la experiencia del cliente
            
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img175.png', alt='')
      .col-lg-8
        p(data-aos="fade-down") En la actualidad, brindar una excelente CX es vital para que la marca conserve la satisfacción del cliente Castañeda (2022). Por lo tanto, es posible incrementar la retención y la fidelidad, mejorando los resultados. Por eso, se necesita entender que la CX está estrechamente relacionada con los nuevos hábitos de conducta del cliente. Entonces, los expertos deben establecer mejores estrategias de servicio y relaciones comerciales para la satisfacción del cliente. A continuación, se pueden observar diez (10) acciones de mejora que las marcas pueden elegir para brindar una significativa CX.
        
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg13")
      .row(titulo="Mapear el público")
        .col-md-10.mb-4.mb-md-0
          p Saber quién es el cliente y mapear su perfil es vital para conceptualizar estrategias que tengan más relación con las expectativas del cliente y que satisfagan mejor las particularidades que se han identificado. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img176.svg', alt='') 
      .row(titulo="Escuchar a los clientes")
        .col-md-10.mb-4.mb-md-0
          p La ejecución de encuestas de satisfacción del cliente logra que los especialistas conozcan la imagen que el cliente tiene sobre la calidad en la atención. Además, identifica las recomendaciones y diatribas que podrían ser usadas para una mejora en los procesos. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img177.svg', alt='') 
      .row(titulo="Personalizar la experiencia")
        .col-md-10.mb-4.mb-md-0
          p En la actualidad, éste es un tema vital a la hora de satisfacer al cliente. Por lo tanto, se deben descubrir las predilecciones de los clientes para incorporar estos conocimientos en las estrategias y actividades diseñadas. Esto ayudará a que la marca sea más asertiva en los puntos de contacto con el cliente y en su relación con él. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img178.svg', alt='') 
      .row(titulo="Calificar el equipo")
        .col-md-10.mb-4.mb-md-0
          p Un buen equipo de trabajo es decisivo en la experiencia que se pueda brindar en el servicio y asesoría al cliente. Por eso, se debe asegurar de los miembros tengan el manejo completo de: 
          .list.mb-3
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              p.mb-0 Tecnologías usadas.

          .list.mb-3
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v4.svg', alt='')
            .list__txt
              p.mb-0 Instrucciones para la resolución de demandas.

          .list.mb-3
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v5.svg', alt='')
            .list__txt
              p.mb-0 Actitud apropiada en el trabajo, con empatía y transparencia.

          .list.mb-3
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v6.svg', alt='')
            .list__txt
              p.mb-0 Buen contacto e interacción con el cliente.            
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img179.svg', alt='') 
      .row(titulo="Invierte en tecnología")
        .col-md-10.mb-4.mb-md-0
          p El uso de nuevas tecnologías ayuda a mejorar las relaciones con el cliente. Por eso, con esta inversión se hace posible la optimización en el funcionamiento de la empresa y la mejoría en la resolución de demandas, además de poseer particularidades que le admiten mejorar CX y el servicio al cliente. Por lo tanto, se sugiere invertir en tecnología, en especial, si la marca está atendiendo Millennials, Centennials o individuos de la generación Z, porque son muy exigentes en relación con la eficiencia y la rapidez de las interacciones. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img180.svg', alt='') 
      .row(titulo="Optimizar los procesos")
        .col-md-10.mb-4.mb-md-0
          p El mantenimiento ajustado de los procesos permite ser más veloz y tener más claridad a la hora de lograr la resolución de las demandas. De igual forma, suministra una disminución en los cuellos de botella operativos que complican a la empresa para tener equipos de trabajo productivos y satisfacer a los clientes. Por otro lado, también ayuda a disminuir los costos operativos. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img181.svg', alt='') 
      .row(titulo="Ser transparente")
        .col-md-10.mb-4.mb-md-0
          p Actualmente, los clientes se encuentran cada vez más comprometidos con las marcas (Engagement – compromiso de marca), por lo que desean tener una relación transparente y honesta. Por este motivo, es vital poseer políticas nítidas y cumplirlas, además de tener el servicio oportuno. Si en algún momento, un empleado no sabe cómo solucionar un problema mostrado por el cliente, le debe informar que buscará una resolución y que lo contactará más tarde, cuando tenga la solución a la mano. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img182.svg', alt='') 
      .row(titulo="Hacer el post-venta")
        .col-md-10.mb-4.mb-md-0
          p Los clientes de hoy se interesan por tener relaciones duraderas con las marcas afines. Por eso, valoran mucho el servicio postventa y el afianzamiento de la relación. Entonces, la empresa debe certificar una excelente CX antes del cierre, asegurándose de que todo funciona bien. Para identificarlo, se puede solicitar una evaluación, preguntando al cliente si la entrega estuvo bien y poniéndose a su disposición. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img183.svg', alt='') 
      .row(titulo="Monitorear resultados")
        .col-md-10.mb-4.mb-md-0
          p Hacer un seguimiento a la relación con el cliente y los resultados de su servicio, es una manera de comprobar si la marca cumplió con las expectativas y ha entregado una CX inolvidable. Como ejemplo, si la tasa de retención de clientes disminuye, es porque algo no funciona bien en los procesos y los especialistas deben hacer una revisión. 
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img184.svg', alt='') 
      .row(titulo="Adoptar una plataforma omnicanal")
        .col-md-10.mb-4.mb-md-0
          p Estas plataformas son una tecnología que incluye los medios disponibles para contactarse con el cliente y hacer que la interacción sea más efectiva y clara, lo que sirve para lograr una CX positiva. Esta estrategia se puede desarrollar a través de agentes digitales que asesoran a la empresa para que el contacto con los prospectos o clientes sea el mejor a través de canales como el correo electrónico, las redes sociales, el sitio web, etc., de tal forma que el servicio, la atención, la promoción y la resolución de problemas sean más rápidos y efectivos para el cliente.  
        .col-md-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img185.svg', alt='')

    p(data-aos="fade-down").mb-0 Finalmente, a través de la inteligencia de datos <i>(data intelligence)</i>, la tecnología puede analizar el historial del consumidor para reconocer sus predilecciones y ser usadas en futuras interacciones. Todo con el fin de hacer mejoras continuas sobre la marcha en cuestión del servicio y atención al cliente. Lo que brinda direcciones más apropiadas agregando valor para el cliente (Castañeda, 2022).          
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
