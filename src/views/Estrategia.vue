<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannerestrategia">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-7">
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Estrategia</h1>
                <div class="hr-header" />
                <h3 class="font-weight-300 font-poppins" style="color:#35547c">Diseñamos metodologías efectivas e innovadoras para alcanzar los objetivos de manera exitosa.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />

          <card-service :title="'Planeación estratégica colaborativa'" :button-text="'Quiero saber más'" :imageSquare="'persona1.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Estructura organizacional'" :button-text="'Quiero saber más'" :imageSquare="'persona2.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Responsabilidad social'" :button-text="'Quiero saber más'" :imageSquare="'persona3.webp'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Estrategia/Estrategia 3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Objetivos y Resultados Clave (ORCs)'" :button-text="'Quiero saber más'" :imageSquare="'persona4.webp'"
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
  .containerheader{
    margin-left: 120px;
  }
  @media(max-width: 1199px ){
  #bannerestrategia {
    background-image: url('../assets/js/services/Estrategia/Estrategiaresponsive.svg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 180px;
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

