<template>
  <div class="Services py-5">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannercapital" class="banners-services">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-6">
                <div class="m-top-28" />
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Capital Humano</h1>
                <div class="hr-header" />
                <div class="m-top-28" />
                <h3 class="font-weight-300 font-poppins" style="color:#35547c">Generamos soluciones para la gestión de talento, y buscamos estrategias de bienestar para tu organización.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />
          <card-service :title="'Semillero de Talento (becarios y trainees)'" :button-text="'Quiero saber más'" :imageSquare="'CapitalImg1.jpg'" :urlservice="'https://bit.ly/3CF8fJo'"
            :bodyText="'Nos apasiona descubrir el talento emergente de nuestras nuevas generaciones, involucrarlos en proyectos desafiantes y objetivos retadores que permiten el fortalecimiento de sus competencias, aptitudes y emociones preparándolos para convertirse en colaboradores de alto desempeño.'">
            <img src="../assets/js/services/Capital/CH1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Gestión de Personas'" :button-text="'Quiero saber más'" :imageSquare="'CapitalImg2.jpg'" :urlservice="'https://bit.ly/3savlCR'"
            :bodyText="'Diseñamos estrategias para la gestión integral del talento, acompañándolos durante todo el journey por la organización desde la selección y on-boarding, pasando por el desarrollo hasta la desvinculación del colaborador mediante metodologías y estrategias que propician ambientes de confianza que faciliten la innovación y productividad de los colaboradores.'">
            <img src="../assets/js/services/Capital/CH2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Estrategia de Formación Organizacional'" :button-text="'Quiero saber más'" :imageSquare="'CapitalImg3.jpg'" :urlservice="'https://bit.ly/3iDUrH9'"
            :bodyText="'Entendemos la estrategia, el ADN y los estilos de aprendizaje de las organizaciones para transformarlo en un programa formativo alineado a la estrategia general que los prepare para los desafíos del entorno cambiante.'">
            <img src="../assets/js/services/Capital/CH3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Formación Gamificada'" :button-text="'Quiero saber más'" :imageSquare="'CapitalImg4.jpg'" :urlservice="'https://bit.ly/3sorwu5'"
            :bodyText="'Buscamos métodos disruptivos de formar a las organizaciones, aplicando herramientas y dinámicas de juego en el contexto laboral y en su cotidianidad, demostrando que a través de nuestros métodos se obtienen beneficios y conocimientos de alto impacto con aplicación al instante.'">
            <img src="../assets/js/services/Capital/CH4.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Integración de Equipos Ejecutivos'" :button-text="'Quiero saber más'" :imageSquare="'CapitalImg5.jpg'" :urlservice="'https://bit.ly/3yHaedX'"
            :bodyText="'Habilitamos la interacción, comunicación y colaboración de los equipos ejecutivos partiendo de la consciencia individual y su impacto en la interacción con los equipos.'">
            <img src="../assets/js/services/Capital/CH5.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Gestión del Cambio'" :button-text="'Quiero saber más'" :imageSquare="'CapitalImg6.jpg'" :urlservice="'https://bit.ly/3iD5KiS'"
            :bodyText="'Acompañamos a las organizaciones en sus procesos de transformación y cambio mediante metodologías centradas en la persona que sigue de cerca a los involucrados con el fin gestionar impactos en la tecnología, estructura, operación, cultura y liderazgo, logrando la adopción del futuro deseado.'">
            <img src="../assets/js/services/Capital/CH6.svg" alt="" class="icon-service">
          </card-service>
        </section>
                
        
  </div>
</template>
<style>
  #bannercapital {
    background-image: url('../assets/js/services/H5.jpg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    margin-left: 120px;
  }
  #bannercapitalresponsive {
    display: none;
  }
  .pb-8, .py-8 {
    padding-bottom: 1.5rem;
}

  .servi{
    background-color: #ffffff!important;
  }

  body {
    color: #fff;
    font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
  }
  .flechaCarus {
    width : 100px
  }
  .ns{
    text-align: left;
  }
  .box {
    background: #2db34a;
    border-radius: auto;
    cursor: pointer;
    height: auto;
    line-height: auto;
    text-align: center;
    transition-property: background, border-radius;
    transition-duration: .2s, 1s;
    transition-timing-function: linear;
    width: auto;
  }
  .Ti1{
    text-align: left;
    font-size: 28px;
  }
  .Ti2{
    text-align: left;
  }

  @media(max-width: 1000px ){
  #bannercapital {
    background-image: url('../assets/js/services/Capital/Capitalresponsive.svg');
    background-size:100%;
    background-repeat: no-repeat !important;
  }
  .containerheader{
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 60% !important;
    margin-bottom: -50px;
  }
  .hr-header {
    border-style: Solid;
    border-color: rgb(255, 212, 31);
    background-color: rgb(255, 212, 31);
    border-width: 3px;
    width: 20%;
    margin-left: 40%;
  }
  }
  @media(max-width: 700px ){
    .containerheader{
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50%;
    margin-bottom: -50px;
  }
  }
</style>

<script>
import CardService from '../components/CardService.vue';
export default {
  name: "Services",
  data: () => {
    return {}
    },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
  components: {
    CardService
  }
};
</script>

