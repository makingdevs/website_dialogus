<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannerestrategia">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left" class="font-weight-700 font-poppins" style="color:#35547c">Estrategia</h1>
                <div class="hr-header" />
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#35547c">Diseñamos metodologías efectivas e innovadoras para alcanzar los objetivos de manera exitosa.</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="bannerestrategiaresponsive">
          <div class="containerresponsive">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left" class="font-weight-700 font-poppins" style="color:#35547c; text-align:center;">Estrategia</h1>
                <div class="hr-headerresponsive" />
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#35547c; text-align:center;">Diseñamos metodologías efectivas e innovadoras para alcanzar los objetivos de manera exitosa.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />

          <card-service :title="'Planeación estratégica colaborativa'" :button-text="'Quiero saber más'" :imageSquare="'persona1.png'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Estructura organizacional'" :button-text="'Quiero saber más'" :imageSquare="'persona2.jpg'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Responsabilidad social'" :button-text="'Quiero saber más'" :imageSquare="'persona3.jpg'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Objetivos y Resultados Clave (ORCs)'" :button-text="'Quiero saber más'" :imageSquare="'persona4.jpg'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 4.svg" alt="" class="img4">
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
  #bannerestrategia{
    display: none;
  }
  #bannerestrategiaresponsive {
    background-image: url('../assets/js/services/Estrategia/Estrategiaresponsive.svg');
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

