<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannerestrategia" class="banners-services">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-6">
                <div class="m-top-28" />
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Estrategia</h1>
                <div class="hr-header" />
                <div class="m-top-28" />
                <h3 class="font-weight-300 font-poppins" style="color:#35547c">Transformamos a las organizaciones para que logren un alto desempeño a través de soluciones eficientes e innovadoras.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />
          <card-service :title="'Planeación Estratégica Colaborativa'" :button-text="'Quiero saber más'" :imageSquare="'EstrategiaImg1.jpg'" :urlservice="'https://bit.ly/2UaQ6Sf'"
            :bodyText="'Nuestra metodología es un proceso colaborativo que incorpora el pensar y sentir de todos los colaboradores en distintos niveles, dando como resultado una alineación real en la definición y rumbo de la organización.'">
            <img src="../assets/js/services/Estrategia/E1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Estructura Organizacional'" :button-text="'Quiero saber más'" :imageSquare="'EstrategiaImg2.jpg'" :urlservice="'https://bit.ly/3lYUnnA'"
            :bodyText="'Definimos un modelo operacional de alto desempeño para el futuro y diseñamos la estructura organizacional alineada con la estrategia de tu negocio. Establecemos las capacidades necesarias en la fuerza de trabajo y proponemos las mejores prácticas para garantizar que la organización cuente con las personas correctas en los lugares correctos.'">
            <img src="../assets/js/services/Estrategia/E2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Responsabilidad Social'" :button-text="'Quiero saber más'" :imageSquare="'EstrategiaImg3.jpg'" :urlservice="'https://bit.ly/3fWaiiq'"
            :bodyText="'Acompañamos el cambio de paradigma en el ser, pensar y hacer de las organizaciones en su proceso de certificación como Empresa Socialmente Responsable por parte del CEMEFI*, con la intención de demostrar la congruencia entre sus actividades y su impacto social y ambiental. * Centro Mexicano para la Filantropía (CEMEFI)'">
            <img src="../assets/js/services/Estrategia/E3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Objetivos y Resultados Clave (ORCs) / Balanced Scorecard (BSC)'" :button-text="'Quiero saber más'" :imageSquare="'EstrategiaImg4.jpg'" :urlservice="'https://bit.ly/3sc7z9p'"
            :bodyText="'Ayudamos a las organizaciones a aterrizar sus grandes metas e ideas a través de metodologías como Objetivos y Resultados Clave (ORCs) o Balanced Scorecard (BSC). Por medio de la creatividad, colaboración y planeación, las llevamos a un siguiente nivel para que conozcan cómo materializar y alcanzar sus fines.'">
            <img src="../assets/js/services/Estrategia/E4.svg" alt="" class="icon-service">
          </card-service>
        </section>
                
        
  </div>
</template>
<style>
  #bannerestrategia {
    background-image: url('../assets/js/services/Estrategia/Estrategiahead.svg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    margin-left: 120px;
  }
  #bannerestrategiaresponsive {
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
    font-size: 28px;
    color: #ffc107;
  }
  .content-wrapper{
    color: rgb(0, 0, 0);
    font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
  }
  .card-style4 .date-wrapper {
    background: #35547c!important;
  }
  .team-wrapper .team-wrapper-inner .team-social-links{
    background: #35547c!important;
  }
  .box:hover {
    background: #ff7b29;
    border-radius: 50%;
  }
  @media(max-width: 1000px ){
  #bannerestrategia {
    background-image: url('../assets/js/services/Estrategia/Estrategiaresponsive.svg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50%;
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

