<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section class="parallax page-title-section top-position bg-img cover-background" id="bannerservicios">

          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left" class="font-weight-700 font-poppins">Capital Humano</h1><div class="m-top-28" />
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#ffffff">Generamos soluciones para la gestión de talento,</h3>
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#ffc107">y buscamos estrategias de bienestar para tu organización.</h3>
                <div class="m-top-28" />
              </div>
              <div class="col-lg-4">
                <img src="../assets/js/services/Capital/Capital TT.svg" alt=""  align="left">
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />

          <card-service :title="'Semillero de talento'" :button-text="'Quiero saber más'" :imageSquare="'persona1.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat.'">
            <img src="../assets/js/services/Capital/Capital 1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Estrategia de capacitación'" :button-text="'Quiero saber más'" :imageSquare="'persona2.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Formación gamificada'" :button-text="'Quiero saber más'" :imageSquare="'persona3.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Integración de equipos de trabajo'" :button-text="'Quiero saber más'" :imageSquare="'persona4.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 4.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Gestión de personas'" :button-text="'Quiero saber más'" :imageSquare="'persona5.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 5.svg" alt="" class="icon-service">
          </card-service>
        </section>
                
        
  </div>
</template>
<style>
  #bannerservicios {
    background-color: #35547c;

  }
  .pb-8, .py-8 {
    padding-bottom: 1.5rem;
}
  #conteo {
    background-image: url('../assets/img4.jpeg');

  }
  #servic{
    background-image: url('../assets/serv1.jpg');
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

  .image-tamaño {
    height: 302px;
  }

  .tamañoNosotros {
    height: 310px;
  }

  .tamañoEventos {
    height: 260px;
  }

  .imagenCarruse {
    width: 80%;
  }

  .v--vtt-test,
  .v--vtt-test_odd {
    will-change: transform, opacity;
    transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
  }

  .v--vtt-test_visible,
  .v--vtt-test_odd_visible {
    opacity: 1;
    transform: translateY(0);
  }

  .v--vtt-test_hidden {
    opacity: 0;
    transform: translateY(20px);
  }

  .v--vtt-test_odd_hidden {
    opacity: 0;
    transform: translateY(-20px);
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

