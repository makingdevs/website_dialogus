<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannercapital">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-7">
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Capital Humano</h1>
                <div class="hr-header" />
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

          <card-service :title="'Semillero de talento'" :button-text="'Quiero saber más'" :imageSquare="'persona1.png'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat.'">
            <img src="../assets/js/services/Capital/Capital 1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Estrategia de capacitación'" :button-text="'Quiero saber más'" :imageSquare="'persona2.jpg'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Formación gamificada'" :button-text="'Quiero saber más'" :imageSquare="'persona3.jpg'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Integración de equipos de trabajo'" :button-text="'Quiero saber más'" :imageSquare="'persona4.jpg'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 4.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Gestión de personas'" :button-text="'Quiero saber más'" :imageSquare="'persona5-min.png'"
            :bodyText="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- per suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo-'">
            <img src="../assets/js/services/Capital/Capital 5.svg" alt="" class="icon-service">
          </card-service>
        </section>
                
        
  </div>
</template>
<style>
  #bannercapital {
    background-image: url('../assets/js/services/Capital/Capitalhead.svg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    margin-left: 120px;
    text-align: left;
  }

  @media(max-width: 1199px ){
  #bannercapital {
    background-image: url('../assets/js/services/Capital/Capitalresponsive.svg');
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

