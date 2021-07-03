<template>
  <div>

    <section
      class="parallax bg-img cover-background  bg-img cover-background full-screen pt-16 pb-8 p-lg-0 top-position min-md-height-auto"
      data-overlay-dark="55" id="banner">

      <div class="container d-flex flex-column ">
        <div class="row align-items-center min-lg-vh-100">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <h1 class="text-white display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 text-shadow font-weight-800">
              El mejor caso de éxito es cuando existe una transformación</h1>
            <p class="mb-2-2 w-95 w-md-75 display-29 display-md-28 text-white font-weight-800">En Dialogus nos hemos preocupado y
              enfocado en el desarrollo del activo más valioso con el que contamos: nuestra gente.</p>
            <a href="#!" class="butn  me-2-4 mb-2-4 mb-sm-0"><span class="text-dark" >Descargar guia de Dialogüs</span></a>
            <div class="d-block d-sm-inline-block">
              <a class="popup-social-video video_btn small" href="https://www.youtube.com/watch?v=-ESQmzDbnL8"><i
                  class="fas fa-play"></i></a>
              <div class="d-inline-block align-middle ps-2-5 text-white text-start font-weight-600">Ver<span
                  class="text-uppercase d-block text-white">Video</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SERVICE================================================== -->

    <section>
      <div class="container">
        <h2 class="h1"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="text-secondary">NUESTRAS DIVISIONES </span></h2><br><br><br>
          <div class="d-flex justify-content-between bg-divisions d-flex-column">
            <div class="d-flex flex-column bg-card">
              <img align="right" class="img3" src="../assets/js/services/Recurso 17.svg" style="position: absolute; margin: -100px;"><br>
              <span class="text-title">Estrategia</span>
              <div class="hr-border"/><br>
              <span class="h5">Definimos el camino para alcanzar tus objetivos de manera exitosa.</span>
              <br><br>
              <div class="d-flex justify-content-center">
                <button class="butn btn-circle  border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Conoce más</span></button>
              </div>
            </div>
            
            <div class="d-flex flex-column bg-card">
              <img class="img3" src="../assets/js/services/Recurso 1.svg" style="position: absolute; margin: -100px;"><br>
              <span class="text-title">Capital Humano</span>
              <div class="hr-border"/><br>
              <span class="h5">Generamos soluciones para el desarrollo del talento humano y el desarrollo organizacional.</span>
              <br>
              <div class="d-flex justify-content-center">
                <button class="butn btn-circle  border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Conoce más</span></button>
              </div>
            </div>

            <div class="d-flex flex-column bg-card">
              <img class="img3" src="../assets/js/services/Recurso 2.svg" style="position: absolute; margin: -100px;"><br>
              <span class="text-title">Cumplimiento</span>
              <div class="hr-border"/><br>
              <span class="h5">Blindamos a las empresas con sistemas de integridad, ética y gestión de riesgos.</span>
              <br>
              <div class="d-flex justify-content-center">
                <button class="butn btn-circle  border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Conoce más</span></button>
              </div>
            </div>

            <div class="d-flex flex-column bg-card">
              <img class="img3" src="../assets/js/services/Recurso 25.svg" style="position: absolute; margin: -100px;"><br>
              <span class="text-title">Diagnostico</span>
              <div class="hr-border"/><br>
              <span class="h5">Identificamos fortalezas y debilidades de empresas reforzando el ecosistema mexicano.</span>
              <br>
              <div class="d-flex justify-content-center">
                <button class="butn btn-circle  border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Conoce más</span></button>
              </div>
            </div>
          </div>

      </div>

    </section>

    <!-- ABOUTUS
        ================================================== -->
    <section class="bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-6 mb-md-8 mb-lg-0">
            <div class="pe-lg-1-9 pe-xl-2-5 text-center">
              <img class="box-custom" src="../assets/que es.jpg" alt="...">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="h1 color_34">Te presentamos</div><br>
            <img class="img2" src="../assets/js/services/Recurso 6.svg" alt="..."><br><br>
            <div class="h4 color_34">Somos una consultora que ofrece una amplia gama de servicios disruptivos e innovadores, siempre poniendo a la gente al centro de las soluciones.</div>
          </div>


        </div>
      </div>
    </section>

    <!-- ONLINE COURSES
        ================================================== -->
  <section>
<h2 class="h1"><i class="fas fa-angle-double-right text-warning"></i>
  <span class="text-secondary">EVENTOS Y CURSOS </span></h2>
    <carousel-3d height="510px" border="0" :controlsVisible="controlsVisible" :perspective="perspective" :inverseScaling="143" :space="385" style="height: 525px;">
      <slide :index="0" class="border-show2">
        <div class="card card-style4">
        <div class="card-img"><img src="../assets/iso.jpeg" alt="..." class="tamañoEventos">
        </div>
        <div class="card-body">
          
          <h4 align="center" class="h5"><router-link to="/noticias" class="">Implementacions ISO 9001</router-link></h4>
          <div align="center" class="event-meta-list">
            <span class="me-0 me-xl-2 text-white"><i class="ti-calendar me-2 custom-icon"></i> 23 Julio </span>
            <span class="text-white"><i class="ti-time custom-icon me-2"></i>17:00 PM</span>
          </div>
          <p align="center" class="text-white">Generamos soluciones para el desarrollo del talento humano</p><br>

          <hr class="hr2"/>
          <div class="d-flex justify-content-center">
            <button class="tolowercase butn btn-circle border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Regístrate </span></button>
          </div>
          
        </div>
      </div>
      </slide>
      <slide :index="1" class="border-show2">
        <div class="card card-style4">
          <div class="card-img"><img src="../assets/persona5.webp" alt="..." class="tamañoEventos">
          </div>
          <div class="card-body">

            <h4 align="center" class="h5"><router-link to="/noticias" class="">Finanzas Personales</router-link></h4>
            <div align="center" class="event-meta-list">
              <span class="me-0 me-xl-2 text-white"><i class="ti-calendar me-2 custom-icon"></i> 05 Mayo </span>
              <span class="text-white"><i class="ti-time custom-icon me-2"></i>17:00 PM</span>
            </div>
            <p align="center" class="text-white">Generamos soluciones para el desarrollo del talento humano</p><br>
            <hr class="hr2"/>
            <div class="d-flex justify-content-center">
              <button class="butn btn-circle  border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Regístrate</span></button>
            </div>

          </div>
        </div>
      </slide>
      <slide :index="2" class="border-show2">
        <div class="card card-style4">
          <div class="card-img"><img src="../assets/eve1.jpg" alt="..." class="tamañoEventos">
          </div>
          <div class="card-body">

            <h4 align="center" class="h5"><router-link to="/noticias" class="">Sistema de Gestión Humana</router-link></h4>
            <div align="center" class="event-meta-list">
              <span class="me-0 me-xl-2 text-white"><i class="ti-calendar me-2 custom-icon"></i> 05 Agosto </span>
              <span class="text-white"><i class="ti-time custom-icon me-2"></i>17:00 PM</span>
            </div>
            <p align="center" class="text-white">Generamos soluciones para el desarrollo del talento humano</p><br>
            <hr class="hr2"/>
            <div class="d-flex justify-content-center">
              <button class="butn btn-circle  border-show" type="submit"><span class="h6 text-white" style="text-transform: none;">Regístrate</span></button>
            </div>

          </div>
        </div>
      </slide>
    </carousel-3d>
  </section>
    <!-- Team 
        _________________________________________________________________________-->

    <!-- MY PHILOSOPHY AND MISSION
        ================================================== -->
    

    <!-- UPCOMING EVENT
        ================================================== -->

    <!-- EXTRA
        ================================================== -->


    <!-- FOOTER
        ================================================== -->



  </div>
</template>
<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import VueTextTransition from 'vue-text-transition';
  import '../assets/css/_main.scss'
  import '../assets/css/home.scss'
  export default {
    name: "ThemeExample",
    data: function () {

      return {
        stateEffect: true,
        displayСonditions: false,
        controlsVisible: false,
        perspective: 325
      }
    },

    created: function () {
      window.addEventListener('scroll', this.handleScroll);
      //document.body.scrollTop = 0;
      //document.documentElement.scrollTop = 0;
    },
    mounted() {

    },
    components: {
      Carousel3d,
      Slide,
      // eslint-disable-next-line vue/no-unused-components
      VueTextTransition,
    },
    methods: {
      exampleMethod() {
        console.log("Hola mundo")
      },
      handleScroll() {
        if (window.scrollY > 1200 && this.stateEffect) {
          console.log("Execute method")
          this.displayСonditions = true;
          this.stateEffect = false;
        }
      }
    }
  };
</script>