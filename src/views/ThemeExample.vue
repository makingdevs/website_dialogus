<template>
  <div>

    <section
      class="parallax bg-img cover-background  bg-img cover-background full-screen pt-16 pb-8 p-lg-0 top-position min-md-height-auto"
      data-overlay-dark="0" id="banner">

      <div class="container d-flex flex-column">
        <div class="row align-items-center min-lg-vh-100">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <h1 class="text-white display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 text-shadow font-weight-800">
              El mejor caso de éxito es cuando existe una transformación</h1>
            <p class="mb-2-2 w-95 w-md-75 display-29 display-md-28 text-black">En Dialogus nos hemos preocupado y
              enfocado en el desarrollo del activo más valioso con el que contamos: nuestra gente.</p>
            <a href="#!" class="butn me-2-4 mb-2-4 mb-sm-0"><span>Descargar guia de Dialogüs</span></a>
            <div class="d-block d-sm-inline-block">
              <a class="popup-social-video video_btn small" href="https://www.youtube.com/watch?v=-ESQmzDbnL8"><i
                  class="fas fa-play"></i></a>
              <div class="d-inline-block align-middle ps-2-5 text-black text-start font-weight-600">Ver<span
                  class="text-uppercase d-block text-black">Video</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SERVICE================================================== -->

    <section>
      <div class="container">
        <div class="section-heading">
          <h2 class="h1 text-secondary">¡Cómo puedo ayudarte!</h2>
          <div class="dotted-box">
            <span class="dotted"></span>
            <span class="dotted"></span>
            <span class="dotted"></span>
          </div>
        </div>
        <div class="row justify-content-center g-0">
          <div class="col-md-8 col-lg-4">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/entrena.png" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Capital Humano</h3>
                    <p class="mb-0">Nuestra división de Capital Humano genera soluciones para la gestión de talento, el
                      desarrollo organizacional y las estrategias</p>
                    <div class="service-button">
                      <a class="butn btn-white" href="#!"><span>Ver Más</span> <i
                          class="fas fa-arrow-right ms-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-4">
            <div class="service-wrapper">
              <div class="service-content">
                <img src="../assets/blog2.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Estrategia</h3>
                    <p class="mb-0">En conjunto con tu empresa, unidad de negocio o área, aplicamos metodologías
                      efectivas e innovadoras para definir el marco de acción.</p>
                    <div class="service-button">
                      <a class="butn btn-white" href="#!"><span>Ver Más</span> <i
                          class="fas fa-arrow-right ms-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-4">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/curso1.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Cumplimiento</h3>
                    <p class="mb-0">Desarrollamos sistemas que fomentan la integridad y ética para crear una cultura de
                      honestidad y buenos valores</p>
                    <div class="service-button">
                      <a class="butn btn-white" href="#!"><span>Ver Más</span> <i
                          class="fas fa-arrow-right ms-2"></i></a>
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
              <img class="box" src="../assets/about-01.jpeg" alt="...">
            </div>
          </div>
          <div class="col-lg-6">
            <h2 class="h1 text-black text-secondary mb-1-6 font-weight-700">Certificación internacional de Dialogus
              ejecutivo!</h2>
            <p class="text-black">Este programa le permitirá convertirse en un Entrenador de Líderes y Ejecutivos
              certificado, lo que ayudará adecuadamente a las asociaciones a dar lo mejor de sí mismas. Este programa Es
              fundamental para la formación integral de la vida la instrucción, junto con los programas de formación
              grupal y empresarial.</p>
            <ul class="list-style1">
              <li class="text-black"><i class="far fa-arrow-alt-circle-right text-primary me-2"></i>Cursos de Dialogus
              </li>
              <li class="text-black"><i class="far fa-arrow-alt-circle-right text-primary me-2 text-black"></i>Práctica
                constante y enfoque sistémico</li>
              <li class="text-black"><i
                  class="far fa-arrow-alt-circle-right text-primary me-2 text-black"></i>Cuestionario de integración de
                formación</li>
            </ul>
          </div>
          <div class="col-md-12 ">
            <div class="about-content rounded">
              <p class="lead text-black">“Generar Prosperidad Incluyente*, mediante el crecimiento y la permanencia de
                las empresas en el mercado.”</p>
              <p class="lead text-black">* Que nos vaya bien a todos.</p>
              <div class="text-end">
                <img src="../assets/dualo1.webp" alt="...">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ONLINE COURSES
        ================================================== -->
    <h2 class="h1 text-secondary">Nuestros Cursos</h2>
    <carousel-3d>
      <slide :index="0">
        <div class="card card-style4">
          <div class="card-img">
          </div>
          <br>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">23</span>
              <span class="month">Oct</span>
            </div>
            <h4 class="h5"><a href="#!">¿Que es dialogus?</a></h4>
            <p class="text-dark">El 02 de octubre 2018 se publicó en el Diario Oficial de la Federación..</p>
            <div class="event-meta-list">
              <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Delaware</span>

            </div>
          </div>
        </div>
      </slide>
      <slide :index="1">
        <div class="card card-style4">
          <div class="card-img">
          </div>
          <br>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">10</span>
              <span class="month">Dic</span>
            </div>
            <h4 class="h5"><a href="#!">¿Que es dialogus?</a></h4>
            <p class="text-dark">El 02 de octubre 2018 se publicó en el Diario Oficial de la Federación..</p>
            <div class="event-meta-list">
              <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Delaware</span>

            </div>
          </div>
        </div>
      </slide>
      <slide :index="2">
        <div class="card card-style4">
          <div class="card-img">
          </div>
          <br>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">20</span>
              <span class="month">Feb</span>
            </div>
            <h4 class="h5"><a href="#!">¿Que es dialogus?</a></h4>
            <p class="text-dark">El 02 de octubre 2018 se publicó en el Diario Oficial de la Federación..</p>
            <div class="event-meta-list">
              <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Delaware</span>

            </div>
          </div>
        </div>
      </slide>
      <slide :index="3">
        <div class="card card-style4">
          <div class="card-img">
          </div>
          <br>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">13</span>
              <span class="month">Jun</span>
            </div>
            <h4 class="h5"><a href="#!">¿Que es dialogus?</a></h4>
            <p class="text-dark">El 02 de octubre 2018 se publicó en el Diario Oficial de la Federación..</p>
            <div class="event-meta-list">
              <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Delaware</span>

            </div>
          </div>
        </div>
      </slide>
      <slide :index="4">
        <div class="card card-style4">
          <div class="card-img">
          </div>
          <br>
          <div class="card-body">
            <div class="date-wrapper">
              <span class="date">02</span>
              <span class="month">Ago</span>
            </div>
            <h4 class="h5"><a href="#!">¿Que es dialogus?</a></h4>
            <p class="text-dark">El 02 de octubre 2018 se publicó en el Diario Oficial de la Federación..</p>
            <div class="event-meta-list">
              <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>9:00 AM - 12:00 PM</span>
              <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Delaware</span>

            </div>
          </div>
        </div>

      </slide>
    </carousel-3d>

    <!-- Team 
        _________________________________________________________________________-->

    <section class="bg-light">
      <div class="container">
        <div class="section-heading">
          <h2 class="h1 text-secondary">Equipo </h2>
          <div class="dotted-box">
            <span class="dotted"></span>
            <span class="dotted"></span>
            <span class="dotted"></span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-1-9 mb-lg-0">
            <div class="team-wrapper">
              <div class="img-holder">
                <div class="team-wrapper-inner">
                  <img class="tamañoNosotros" src="../assets/persona2.webp" alt="...">
                  <div class="team-social-links">
                    <ul class="social-icons">
                      <li>
                        <a href="https://www.facebook.com/DialogusConsultores"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/search?q=%40Dialogus_LAT&src=typed_query"><i
                            class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a
                          href="https://mx.linkedin.com/jobs/search?keywords=Dialogus-consultores&location=Ecatepec%20de%20Morelos%2C%20M%C3%A9xico%2C%20M%C3%A9xico&geoId=101340577&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"><i
                            class="fab fa-linkedin-in"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content">
                  <h4 class="h5"><a href="https://www.facebook.com/DialogusConsultores">Lynn Santana</a></h4>
                  <p class="text-primary font-weight-600 mb-0">Founder</p>
                  <i class="fas fa-share-alt pink"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 mb-1-9 mb-lg-0">
            <div class="team-wrapper">
              <div class="img-holder">
                <div class="team-wrapper-inner">
                  <img class="tamañoNosotros" src="../assets/persona1.webp" alt="...">
                  <div class="team-social-links">
                    <ul class="social-icons">
                      <li>
                        <a href="https://www.facebook.com/DialogusConsultores"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/search?q=%40Dialogus_LAT&src=typed_query"><i
                            class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a
                          href="https://mx.linkedin.com/jobs/search?keywords=Dialogus-consultores&location=Ecatepec%20de%20Morelos%2C%20M%C3%A9xico%2C%20M%C3%A9xico&geoId=101340577&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"><i
                            class="fab fa-linkedin-in"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content">
                  <h4 class="h5"><a href="#!">Pam Cox</a></h4>
                  <p class="text-primary font-weight-600 mb-0">Life Coach</p>
                  <i class="fas fa-share-alt pink"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="team-wrapper">
              <div class="img-holder">
                <div class="team-wrapper-inner">
                  <img class="tamañoNosotros" src="../assets/blog1.jpeg" alt="...">
                  <div class="team-social-links">
                    <ul class="social-icons">
                      <li>
                        <a href="https://www.facebook.com/DialogusConsultores"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/search?q=%40Dialogus_LAT&src=typed_query"><i
                            class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a
                          href="https://mx.linkedin.com/jobs/search?keywords=Dialogus-consultores&location=Ecatepec%20de%20Morelos%2C%20M%C3%A9xico%2C%20M%C3%A9xico&geoId=101340577&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"><i
                            class="fab fa-linkedin-in"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content">
                  <h4 class="h5"><a href="#!">George Murray</a></h4>
                  <p class="text-primary font-weight-600 mb-0">Business Coach</p>
                  <i class="fas fa-share-alt pink"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MY PHILOSOPHY AND MISSION
        ================================================== -->
    <section class="pb-0">
      <div class="container my-5 d-grid gap-5" >
        <div class="p-5">
          <img align="right" src="../assets/mag1.webp" alt="">
          <vue-text-transition align="left" class="h3 text-secondary" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
          SOBRE NOSOTROS </vue-text-transition>
          <vue-text-transition align="left" class="h3 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            _____________________</vue-text-transition>
          <img align="left" src="../assets/dualo1.webp" class="image-size" >
          <br>
          <br>
          <vue-text-transition align="left" class="h4 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            Visión
          </vue-text-transition>
          <vue-text-transition align="left" class="h5 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            Nuestra visión es generar prosperidad incluyente,
          </vue-text-transition>
          <vue-text-transition align="left" class="h5 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            asegurando el crecimiento y la permanencia de las empresas
          </vue-text-transition>
          <vue-text-transition align="left" class="h5 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
              en el mercado.
            </vue-text-transition>
          <vue-text-transition align="left" class="h4 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            Misión
          </vue-text-transition>
          <vue-text-transition align="left" class="h5 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            Nuestra misión es acompañar el desarrollo de nuestros
          </vue-text-transition>
          <vue-text-transition align="left" class="h5 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            clientes, mediante metodologías innovadoras contribuyendo
          </vue-text-transition>
          <vue-text-transition align="left" class="h5 text-dark" tag="h1" name="test" :show="displayСonditions" :interval="40" :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]">
            en su rentabilidad, productividad y satisfacción.
          </vue-text-transition>
        </div>
      </div>

    </section>

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
                <h4 class="h5"><a href="#!">Consejos para contratar el coach correcto para tu empresa.</a></h4>
                <p class="text-dark">Contratar a un coach profesional de tu compañía es la tendencia de las empresas.
                  Abundan los diferentes coaches que puedes contratar para...</p>
                <div class="event-meta-list">
                  <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>11:00 AM - 04:00
                    PM</span>
                  <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Colorado</span>
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
                <h4 class="h5"><a href="#!">¿Qué debo saber sobre la NOM-035?</a></h4>
                <p class="text-dark">El 23 de octubre 2018 se publicó en el Diario Oficial de la Federación la Norma
                  Oficial Mexicana 035 STPS-2018 Factores de riesgo...</p>
                <div class="event-meta-list">
                  <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>9:00 AM - 12:00
                    PM</span>
                  <span class="text-dark"><i class="ti-map-alt text-primary me-2"></i>Delaware</span>

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
                <h4 class="h5"><a href="#!">Expectativas en equilibrio</a></h4>
                <p class="text-dark">Todos conocen la expectativa, ya sea porque los ha hecho sentirse felices o
                  desafortunados, pero todos los seres humanos en algún punto...</p>
                <div class="event-meta-list">
                  <span class="me-0 me-xl-3 text-dark"><i class="ti-time text-primary me-2"></i>8:00 AM - 11:00
                    AM</span>
                  <span class="text-dark"><i class="ti-map-alt text-primary me-2 "></i>California</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXTRA
        ================================================== -->
    <section class="parallax bg-img cover-background " data-overlay-dark="6" data-background="" id="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="border-bottom border-white-opacity2 pb-2-6 mb-2-6">
              <h2 class="h1 text-center text-white">Capital Humano</h2>
              <p class="lead text-white text-center w-95 w-lg-60 w-xl-50 w-xxl-45 mx-auto">Nuestra división de Capital
                Humano genera soluciones para la gestión de talento, el desarrollo organizacional y las estrategias de
                bienestar para tu organización.</p>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER
        ================================================== -->



  </div>
</template>

<style>
  #banner {
    background-image: url('../assets/blog1.jpeg');

  }

  body {
    color: #fff;
    font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
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
    },
    mounted() {

    },
    components: {
      Carousel3d,
      Slide,
      // eslint-disable-next-line vue/no-unused-components
      VueTextTransition
    },
    methods: {
      exampleMethod() {
        console.log("Hola mundo")
      },
      handleScroll() {
        if (window.scrollY > 3000 && this.stateEffect) {
          console.log("Execute method")
          this.displayСonditions = true;
          this.stateEffect = false;
        }
      }
    }
  };
</script>