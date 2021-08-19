<template>
  <div class="Services py-5">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannercumplimiento" class="banners-services">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-6">
                <div class="m-top-28" />
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Cumplimiento</h1>
                <div class="hr-header" />
                <div class="m-top-28" />
                <h3 class="font-weight-300 font-poppins" style="color:#35547c">Buscamos impulsar y acompañar a las empresas en la construcción de una cultura de integridad y buenos valores que se alinee a la organización y su estrategia.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />

          <card-service :title="'Programa de Integridad y Comunicación Empresarial (PICE)'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg1.jpg'" :urlservice="'https://bit.ly/2VJY4CS'"
            :bodyText="'Con la implementación del PICE y la adecuada gestión de su metodología e indicadores lograremos cerrar brechas entre los colaboradores y la alta dirección para la detección oportuna de riesgos que puedan comprometer la cultura de integridad del negocio a la par que se fomenta la mejora continua de las políticas de cumplimiento.'">
            <img src="../assets/js/services/Cumplimiento/C1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Políticas para prevenir el acoso y hostigamiento sexual'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg2.jpg'" :urlservice="'https://bit.ly/2UgaoKi'"
            :bodyText="'Ayudamos a que todos los colaboradores cuenten con un entorno de trabajo en el que su dignidad sea respetada, asegurándonos que los negocios cumplan con mejores prácticas internacionales y así evitar cualquier riesgo reputacional o legal.'">
            <img src="../assets/js/services/Cumplimiento/C2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Certificación a investigadores'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg3.jpg'" :urlservice="'https://bit.ly/3CHDNOP'"
            :bodyText="'Contamos con un programa especializado en habilitar y formar a investigadores internos en la detección oportuna de actos que vulneren las políticas internas de tu negocio.'">
            <img src="../assets/js/services/Cumplimiento/C3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Auditoría interna'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg4.jpg'" :urlservice="'https://bit.ly/3lXUlfF'"
            :bodyText="'Te ayudamos a llevar a cabo auditorias, con el fin de corroborar la conformidad de los procesos de acuerdo a la información documentada en tu empresa e identificar las oportunidades de mejora existentes en tu Sistema de Gestión.'">
            <img src="../assets/js/services/Cumplimiento/C4.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Acompañamiento especializado en implementación de tu Sistema de Gestión.'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg5.jpg'" :urlservice="'https://bit.ly/3xHIswg'"
            :bodyText="'Desarrollamos un traje a la medida para cumplir los requerimientos del modelo que necesitas, siguiendo el ritmo de tu empresa, adoptando nuevas metodologías, mejorando la eficacia de los procesos y fomentando el trabajo en equipo.'">
            <img src="../assets/js/services/Cumplimiento/C5.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Sistemas de Gestión de Cumplimiento'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg6.jpg'" :urlservice="'https://bit.ly/3iDP4aX'"
            :bodyText="'Acompañamos a nuestros clientes en el establecimiento de un sistema de gestión de cumplimiento que se apegue a las buenas prácticas y permita entender el contexto de los negocios para poder blindarlo ante cualquier riesgo que pudiera enfrentar.'">
            <img src="../assets/js/services/Cumplimiento/C6.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Gestión de procesos de Negocios (BPM)'" :button-text="'Quiero saber más'" :imageSquare="'CumplimientoImg7.jpg'" :urlservice="'https://bit.ly/2UhIIoo'"
            :bodyText="'Somos especialistas en el diseño y mapeo de procesos de negocio, ayudando a tu empresa a tener los planos que permitan reforzar y automatizar la estructura, eliminar silos, incrementar la calidad de tus productos o servicios y estar preparados a los cambios del entorno.'">
            <img src="../assets/js/services/Cumplimiento/C7.svg" alt="" class="icon-service">
          </card-service>
        </section>
                
        
  </div>
</template>
<style>
  #bannercumplimiento {
    background-image: url('../assets/js/services/Cumplimiento/Cumplimientohead.svg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    margin-left: 120px;
  }
  #bannercumplimientoresponsive {
    display: none;
  }
  .pb-8, .py-8 {
    padding-bottom: 1.5rem;
}

  .servi{
    background-color: #dad6d6e1;
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
  #bannercumplimiento {
    background-image: url('../assets/js/services/Cumplimiento/Cumplimientoresponsive.svg');
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
  name: "Services1",
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

