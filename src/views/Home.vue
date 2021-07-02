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
        <div class="section-heading">
          <h2 class="h1 text-secondary">¡Servicios!</h2>
          <div class="dotted-box">
            <span class="dotted"></span>
            <span class="dotted"></span>
            <span class="dotted"></span>
          </div>
        </div>
        <div class="row justify-content-center g-1">
          <div class="col-md-8 col-lg-6">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño " src="../assets/trab2.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Capital Humano</h3>
                    <p class="h6 mb-0">Nuestra división de Capital Humano genera soluciones para la gestión de talento, el
                      desarrollo organizacional y las estrategias</p>
                    <div class="service-button">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/trab1.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Estrategia</h3>
                    <p class="h6 mb-0">En conjunto con tu empresa, unidad de negocio o área, aplicamos metodologías
                      efectivas e innovadoras para definir el marco de acción.</p>
                    <div class="service-button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="col-md-8 col-lg-6">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/trab3.png" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Cumplimiento</h3>
                    <p class="h6 mb-0">Desarrollamos sistemas que fomentan la integridad y ética para crear una cultura de
                      honestidad y buenos valores</p>
                    <div class="service-button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">
            <div class="service-wrapper">
              <div class="service-content">
                <img class="image-tamaño" src="../assets/trab4.jpeg" alt="...">
                <div class="service-inner">
                  <div class="content">
                    <h3>Diagnóstico</h3>
                    <p class="h6 mb-0">Identicamos áreas de oportunidad de las empresas por medio de diversas herramientas de monitoreo y análisis.</p>
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
              <img class="box-custom" src="../assets/que es.jpg" alt="...">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="h1 color_34">Te presentamos</div><br>
            <img class="img2" src="../assets/dualo1.webp" alt="..."><br><br>
            <div class="h4 color_34">Somos una consultora que ofrece una amplia gama de servicios disruptivos e innovadores, siempre poniendo a la gente al centro de las soluciones.</div>
          </div>


        </div>
      </div>
    </section>

    <!-- ONLINE COURSES
        ================================================== -->
  <section>
<h2 class="h1"><i class="fas fa-angle-double-right text-warning"></i>
  <span class="color_34">EVENTOS Y CURSOS </span></h2>
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

<style>
/*APARTADO DE QUE ES DIALOGUS */
.img2 {
    max-width: 100%;
    height: 70px;
    vertical-align: top;
}
/*APARTADO DE QUE ES DIALOGUS */
  .carousel-3d-slide {
    border-radius: 20px;
  }

  .border-show {
    box-shadow: 1px 3px 4px 2px rgb(31, 31, 31);
  }
  .border-show2 {
    box-shadow: 3px 3px 5px 2px rgb(175, 175, 175);
  }

  #banner {
    background-image: url('../assets/blog1.jpeg');
  }

  .fade-in-image {
  animation: fadeIn 6s;
  -webkit-animation: fadeIn 6s;
  -moz-animation: fadeIn 6s;
  -o-animation: fadeIn 6s;
  -ms-animation: fadeIn 6s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

  body {
    color: #fff;
    font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
  }
  .flechaCarus {
    width : 100px
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
  
  /* STYLOS DEL CARRUSEL*/

  .custom-icon {
    font-size: 20px;
    font-weight: bold;
  }
  .card-style4 {
    transition: all 0.3s ease;
    position: relative;
    text-align: left;
    border: 0px solid #f9f9f9 !important;
    height: 100%;
}
  .card-style4 .date-wrapper {
    background:rgb( 255 ,212, 31) !important;
  }
.card-style4 .card-body:before {
    position: absolute;
    content: '';
    background-color: rgb(59,84,123)!important;
    height: 4px;
    width: 100%;
    top: 0;
    left: 0;
    transition: .5s ease;
}
  .card-style4 .card-body {
    padding: 40px 30px;
    position: relative;
    background: #35547c !important;
}
  .card-style4 .card-body .date{
    color: #35547c !important;
}
  .card-style4 .card-body .month{
    color: #35547c !important;
}
  h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a {
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #ffffff !important;
}
/* STYLOS DEL CARRUSEL*/

  .box-custom:hover {
    background: rgb( 255 ,212, 31) ;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
  .hr2{
    color: white;
    border: 1px solid;
    opacity: .35;
    top: 170px;
    left: 0;
    position: absolute;
    width: 100%;
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
    /*+++++++++++++++++++++++++++carrusel++++++++++++++++++++++++++*/
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
    color: #35547c !important;
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

  /*ESTILOS DEL BOTON*/
  .butn {
    background: #20ad95 !important;
    color: #fff !important;
  }
  .butn {
  position: relative;
  display: inline-block;
  background: #ff7029;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  padding:  6px 0;
  border-radius: 15px;
  line-height: normal;
  letter-spacing: 1.428571429;
  text-transform: uppercase;
  z-index: 1;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
  .btn-circle{
    width: 50% !important;
    height: 30px !important;
    text-align: center !important;
    padding: 6px 0 !important;
    font-size: 12px !important;
    line-height: 1.428571429 !important;
    border-radius: 15px !important;
  }
  .butn:hover:after, .butn:active:after, .butn:focus:after {
    background: #ffc107 !important;
    opacity: 1;
    transform: scaleY(1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); 

    width: 100%;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}
      /*ESTILOS DEL BOTON*/
</style>
<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import VueTextTransition from 'vue-text-transition';
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