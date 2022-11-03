<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-2           
      .col-lg-2.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.svg', alt='')   
      .col-lg-10.my-3
        p(data-aos="fade-down").mb-0 El análisis del Buyer Persona les permite a las marcas comprender a quién se le debe hablar y cuáles son las técnicas correctas para conquistar a los clientes. Es por esta razón que se hace vital encontrar la manera en que se debe captar la atención de los prospectos, más aún, en un mundo saturado de información publicitaria, tanto tradicional como digital. 

    .row.justify-content-center.align-items-center.bg3.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure.p-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)              
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
