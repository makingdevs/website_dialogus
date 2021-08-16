<template>
  <div class="Services">
        <!-- PAGE SERVICES CARD
        ================================================== -->

        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannerdiagnostico" class="banners-services">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-6">
                <div class="m-top-28" />
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Diagnóstico</h1>
                <div class="hr-header" />
                <div class="m-top-28" />
                <h3 class="font-weight-300 font-poppins" style="color:#35547c">Identificamos áreas de oportunidad de las empresas por medio de herramientas de monitoreo y análisis.</h3>
              </div>
            </div>
          </div>
        </section>
         <!-- Tarjetas
        ================================================== -->
        <section class="servi" style="color: black;">

         <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span align="center" class="color_34 font-weight-500 font-poppins">NUESTROS SERVICIOS </span></h1><div class="m-top-28" />

          <card-service :title="'Padrón de Proveedores CIE'" :button-text="'Quiero saber más'" :imageSquare="'DiagnosticoImg1.jpg'" :urlservice="'https://bit.ly/37RKfVr'"
            :bodyText="'Las evaluaciones de la Certificación Integral de Empresas (CIE) identifican a los mejores proveedores en el mercado mexicano, a través de análisis especializado en diferentes ramas como legal, cumplimiento, financiera y de responsabilidad social, entre otros. Garantizando así una mejora continúa en sus respectivas cadenas de valor.'">
            <img src="../assets/js/services/Diagnostico/D1.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Comunidad CIE'" :button-text="'Quiero saber más'" :imageSquare="'DiagnosticoImg2.jpg'" :urlservice="'https://bit.ly/3CFzQKt'"
            :bodyText="'Acceso exclusivo a las empresas evaluadas y certificadas a eventos y cursos gratuitos sobre temas enfocados al desarrollo y formalización de las empresas para mantener actualizada a sus cadenas de valor en temas de interés empresarial. Cada participante puede llevar a sus equipos de trabajo.'">
            <img src="../assets/js/services/Diagnostico/D2.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Diseño y Aplicación de Evaluaciones Especializadas'" :button-text="'Quiero saber más'" :imageSquare="'DiagnosticoImg3.jpg'" :urlservice="'https://bit.ly/3sdtxJl'"
            :bodyText="'A través de nuestra red de especialistas y herramientas digitales, generamos e implementamos evaluaciones dedicadas y específicas a las necesidades de cada empresa para generar informes de valor que permita a los grupos directivos y líderes empresariales tomar decisiones informadas y efectivas en su empresa.'">
            <img src="../assets/js/services/Diagnostico/D3.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Identificación e Interpretación de Riesgos en la Empresa'" :button-text="'Quiero saber más'" :imageSquare="'DiagnosticoImg4.jpg'" :urlservice="'https://bit.ly/3xBaV7a'"
            :bodyText="'Contamos con acceso a herramientas poderosas que nos permiten revisar los antecedentes legales de personas físicas y morales, así como una medición de cumplimiento de normativas nacionales.'">
            <img src="../assets/js/services/Diagnostico/D4.svg" alt="" class="icon-service">
          </card-service>
          <card-service :title="'Retroalimentación especializada para áreas de mejora detectadas'" :button-text="'Quiero saber más'" :imageSquare="'DiagnosticoImg5.jpg'" :urlservice="'https://bit.ly/2VQ09wp'"
            :bodyText="'A partir de las diversas evaluaciones que podemos aplicar, se entregan resultados puntuales con retroalimentación y definición de riesgos a corto, mediano o largo plazo en temas reputacionales, patrimoniales o de operación, permitiendo a nuestros clientes a tomar decisiones puntuales y en tiempo.'">
            <img src="../assets/js/services/Diagnostico/D5.svg" alt="" class="icon-service">
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
  .containerheader{
    margin-left: 120px;
  }
  #bannerdiagnosticoresponsive {
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
  #bannerdiagnostico {
    background-image: url('../assets/js/services/Diagnostico/Diagnosticoresponsive.svg');
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