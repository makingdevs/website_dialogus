<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannerdiagnostico">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left" class="font-weight-700 font-poppins" style="color:#35547c">Diagnóstico</h1>
                <div class="hr-header" />
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#35547c">Identificamos áreas de oportunidad de las empresas por medio de herramientas de monitoreo y análisis.</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="bannerdiagnosticoresponsive">
          <div class="containerresponsive">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left" class="font-weight-700 font-poppins" style="color:#35547c; text-align:center;">Diagnóstico</h1>
                <div class="hr-headerresponsive" />
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#35547c; text-align:center;">Identificamos áreas de oportunidad de las empresas por medio de herramientas de monitoreo y análisis.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span align="center" class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />

          <card-service :title="'Análisis para identificar fortalezas'" :button-text="'Quiero saber más'" :imageSquare="'persona1.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Diagnostico/Diagnostico 1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Identificación de riesgos'" :button-text="'Quiero saber más'" :imageSquare="'persona2.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Diagnostico/Diagnostico 2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Retroalimentación especializada'" :button-text="'Quiero saber más'" :imageSquare="'persona3.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Diagnostico/Diagnostico 3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Evaluación de proveedores'" :button-text="'Quiero saber más'" :imageSquare="'persona4.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Diagnostico/Diagnostico 4.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Comunidad CIE'" :button-text="'Quiero saber más'" :imageSquare="'persona5.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Diagnostico/Diagnostico 5.svg" alt="" class="icon-service">
          </card-service>
        </section>
                
        
  </div>
</template>
<style>
  #bannerdiagnostico {
    background-image: url('../assets/js/services/Diagnostico/Diagnosticohead.svg');
    background-size:100%;
    background-repeat: no-repeat;

  }
  #bannerdiagnosticoresponsive {
    display: none;

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

  @media(max-width: 1199px ){
  #bannerdiagnostico{
    display: none;
  }
  #bannerdiagnosticoresponsive {
    background-image: url('../assets/js/services/Diagnostico/Diagnosticoresponsive.svg');
    background-size:100%;
    background-repeat: no-repeat;
    display: block;
  }
  .containerresponsive{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 180px;
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