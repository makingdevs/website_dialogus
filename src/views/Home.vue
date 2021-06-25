<template>
  <div>

    <section
      class="parallax bg-img cover-background  bg-img cover-background full-screen pt-16 pb-8 p-lg-0 top-position min-md-height-auto"
      data-overlay-dark="55" id="banner">

      <div class="container d-flex flex-column">
        <div class="row align-items-center min-lg-vh-100">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <h1 class="text-white display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 text-shadow font-weight-800">
              El mejor caso de éxito es cuando existe una transformación</h1>
            <p class="mb-2-2 w-95 w-md-75 display-29 display-md-28 text-white font-weight-800">En Dialogus nos hemos preocupado y
              enfocado en el desarrollo del activo más valioso con el que contamos: nuestra gente.</p>
            <a href="#!" class="butn me-2-4 mb-2-4 mb-sm-0"><span class="text-dark" >Descargar guia de Dialogüs</span></a>
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
        <div class="section-heading">
          <h2 class="h1 text-secondary">¡Servicios!</h2>
          <div class="dotted-box">
            <span class="dotted"></span>
            <span class="dotted"></span>
            <span class="dotted"></span>
          </div>
        </div>
        <div class="row justify-content-center g-1">
          <div class="col-md-8 col-lg-3">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño " src="../assets/entrena.png" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Capital Humano</h3>
                    <p class="mb-0">Nuestra división de Capital Humano genera soluciones para la gestión de talento, el
                      desarrollo organizacional y las estrategias</p>
                    <div class="service-button">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-3">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/persona4.webp" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Estrategia</h3>
                    <p class="mb-0">En conjunto con tu empresa, unidad de negocio o área, aplicamos metodologías
                      efectivas e innovadoras para definir el marco de acción.</p>
                    <div class="service-button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8 col-lg-3">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/curso1.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Cumplimiento</h3>
                    <p class="mb-0">Desarrollamos sistemas que fomentan la integridad y ética para crear una cultura de
                      honestidad y buenos valores</p>
                    <div class="service-button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-3">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/fondo5.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Diagnóstico</h3>
                    <p class="mb-0">Identicamos áreas de oportunidad de las empresas por medio de diversas herramientas de monitoreo y análisis.</p>
                    <div class="service-button">
                    </div>
                  </div>
                </div>
              </div>
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
              <img class="box-custom" src="../assets/about-01.jpeg" alt="...">
            </div>
          </div>
          <div class="col-lg-6">
            <vue-text-transition class="h1 text-black text-secondary mb-1-6 font-weight-700" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
              ¿Que es Dialogüs?</vue-text-transition>
            <vue-text-transition align="left" class="h4 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
               Es una firma de consultoría dedicada a construir confianza para sus clientes mediante servicios especializados y prácticas de negocio innovadoras,
               generando eficiencia y prosperidad. Es una empresa con cinco años de experiencia en el mercado y una amplia gama de clientes en diversos sectores.</vue-text-transition>
            <ul class="list-style1">
            </ul>
          </div>
          <div class="col-md-12">
            <div class="about-content rounded border-show">
              <vue-text-transition class="lead text-black" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
                Apasionados por colaborar en la transformación de nuestros clientes y fomentar relaciones de confianza a largo plazo.</vue-text-transition>
              <div class="text-end">
                <img src="../assets/firma.jpeg" alt="...">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ONLINE COURSES
        ================================================== -->
    <h2 class="h1 text-secondary">Noticias</h2>
    <carousel-3d height="526px" border="2" controlsVisible="true" >
      
      <slide :index="0">
        <div class="card card-style4">
        <div class="card-img"><img src="/img/fondo3.b2a4e6d6.webp" alt="..." class="tamañoEventos">
        </div>
        <div class="card-body">
          <div class="date-wrapper">
            <span class="date">23</span>
            <span class="month">Oct</span>
          </div>
          <h4 class="h5"><router-link to="/noticias" class="">¿Qué debo saber sobre la NOM-035?</router-link></h4>
          <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
          <div class="event-meta-list"><span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>9:00 AM - 12:00 PM</span>
            <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Delaware</span>
          </div>
        </div>
      </div>
      </slide>
      <slide :index="1">
        <div class="card card-style4">
          <div class="card-img"><img src="../assets/fondo2.webp" alt="..." class="tamañoEventos">
          </div>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">03</span>
              <span class="month">Jun</span>
            </div>
            <h4 class="h5"><router-link to="/noticias" class="">¿Qué debo saber sobre la NOM-035?</router-link></h4>
            <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
            <div class="event-meta-list"><span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Delaware</span>
            </div>
          </div>
        </div>
      </slide>
      <slide :index="2">
        <div class="card card-style4">
          <div class="card-img"><img src="../assets/fondo1.webp" alt="..." class="tamañoEventos">
          </div>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">13</span>
              <span class="month">Mar</span>
            </div>
            <h4 class="h5"><router-link to="/noticias" class="">¿Qué debo saber sobre la NOM-035?</router-link></h4>
            <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
            <div class="event-meta-list"><span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Delaware</span>
            </div>
          </div>
        </div>
      </slide>
      <slide :index="3">
        <div class="card card-style4">
          <div class="card-img"><img src="../assets/persona1.webp" alt="..." class="tamañoEventos">
          </div>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">10</span>
              <span class="month">Ago</span>
            </div>
            <h4 class="h5"><router-link to="/noticias" class="">¿Qué debo saber sobre la NOM-035?</router-link></h4>
            <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
            <div class="event-meta-list"><span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Delaware</span>
            </div>
          </div>
        </div>
      </slide>
      <slide :index="4">
        <div class="card card-style4">
          <div class="card-img"><img src="../assets/persona4.webp" alt="..." class="tamañoEventos">
          </div>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">13</span>
              <span class="month">Mar</span>
            </div>
            <h4 class="h5"><router-link to="/noticias" class="">¿Qué debo saber sobre la NOM-035?</router-link></h4>
            <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
            <div class="event-meta-list"><span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Delaware</span>
            </div>
          </div>
        </div>

      </slide>
    </carousel-3d>

    <!-- Team 
        _________________________________________________________________________-->

    

    <!-- MY PHILOSOPHY AND MISSION
        ================================================== -->
    

    <!-- UPCOMING EVENT
        ================================================== -->
    <section class="bg-light">
      <div class="container">
        <div class="section-heading">
          <h2 class="h1 text-secondary">Nuestros Próximos Eventos</h2>
          <div class="dotted-box">
            <span class="dotted"></span>
            <span class="dotted"></span>
            <span class="dotted"></span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0">
            <div class="card card-style4">
              <div class="card-img">
                <img class="tamañoEventos" src="../assets/fondo2.webp" alt="...">
              </div>
              <div class="card-body">
                <div class="date-wrapper">
                  <span class="date">06</span>
                  <span class="month">Apr</span>
                </div>
                <h4 class="h5"><router-link to="/noticias">Consejos para contratar el coach correcto para tu empresa.</router-link></h4>
                <p class="text-dark">Contratar a un coach profesional de tu compañía es la tendencia de las empresas.
                  Abundan los diferentes coaches que puedes.</p>
                <div class="event-meta-list">
                  <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>11:00 AM - 04:00
                    PM</span>
                  <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Colorado</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0">
            <div class="card card-style4">
              <div class="card-img">
                <img class="tamañoEventos" src="../assets/fondo3.webp" alt="...">
              </div>
              <div class="card-body">
                <div class="date-wrapper">
                  <span class="date">23</span>
                  <span class="month">Oct</span>
                </div>
                <h4 class="h5"><router-link to="/noticias">¿Qué debo saber sobre la NOM-035?</router-link></h4>
                <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma
                  Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
                <div class="event-meta-list">
                  <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>9:00 AM - 12:00
                    PM</span>
                  <span class="text-dark"><i class="ti-map-alt text-warning me-2"></i>Delaware</span>

                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-style4">
              <div class="card-img">
                <img class="tamañoEventos" src="../assets/persona1.webp" alt="...">
              </div>
              <div class="card-body">
                <div class="date-wrapper">
                  <span class="date">21</span>
                  <span class="month">Sep</span>
                </div>
                <h4 class="h5"><router-link to="/noticias">Expectativas en equilibrio</router-link></h4>
                <p class="text-dark">Todos conocen la expectativa, ya sea porque los ha hecho sentirse felices o
                  desafortunados, pero todos los seres humanos en algún punto...</p>
                <div class="event-meta-list">
                  <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-warning me-2"></i>8:00 AM - 11:00
                    AM</span>
                  <span class="text-dark"><i class="ti-map-alt text-warning me-2 "></i>California</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXTRA
        ================================================== -->


    <!-- FOOTER
        ================================================== -->



  </div>
</template>

<style>
  .border-show {
    box-shadow: 0px 0px 5px 2px gray;
  }
  #banner {
    background-image: url('../assets/blog1.jpeg');
  }

  body {
    color: #fff;
    font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
  }
  .flechaCarus {
    width : 100px
  }
  .butn {
    background:rgb( 255 ,212, 31) !important;
  }

  .box-custom {
    background: rgb(59,84,123);
    cursor: pointer;
    height: auto;
    line-height: auto;
    text-align: center;
    transition: clip-path 1s;
    clip-path: polygon(0% 0, 50% 0%, 100% 0%, 100% 100%, 50%  100%, 0 100%);
    
  }
  
  .card-style4 .date-wrapper {
    background: #35547c!important;
  }
  .box-custom:hover {
    background: rgb( 255 ,212, 31) ;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
  
  .card-style4 .card-img:before {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 8;
    opacity: 0;
    transform: perspective(400px) rotateX(-90deg);
    transform-origin: top;
    transition: all 0.5s;
    background: rgba(255, 255, 255, 0) !important; }

  .section-heading:before {
    position: absolute;
    content: '';
    width: 40px;
    height: 3px;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    background: #ffc107 !important;
    z-index: 1; }
  .section-heading .dotted-box .dotted {
    position: absolute;
    left: 50%;
    margin-left: 25px;
    width: 3px;
    height: 3px;
    bottom: 0px;
    background: #ffc107 !important;
    z-index: 1; }
  .image-tamaño {
    height: 255px;
    
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

  .color_34 {
    background-color: #35547c ;
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
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import VueTextTransition from 'vue-text-transition';

  export default {
    name: "ThemeExample",
    data: function () {

      return {
        stateEffect: true,
        displayСonditions: false
      }
    },

    created: function () {
      window.addEventListener('scroll', this.handleScroll);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
        if (window.scrollY > 1240 && this.stateEffect) {
          console.log("Execute method")
          this.displayСonditions = true;
          this.stateEffect = false;
        }
      }
    }
  };
</script>