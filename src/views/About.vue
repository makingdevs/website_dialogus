<template>
  <div class="about">
        <!-- PAGE TITLE
        ================================================== -->
        <section class="parallax page-title-section top-position bg-img cover-background"  id="bannerservicios">

          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left">Nosotros</h1><br>
                <p class="Ti1">Conoce más acerca de nosotros</p>
                <p class="Ti2">y nuestra visión para nuestros clientes.</p>
                <br>
              </div>
              <div class="col-lg-4">
                <img src="../assets/js/services/Estrategia/Estrategia  TT.svg" alt=""  align="left">
              </div>
            </div>
          </div>
        </section>

       
       <!-- Misión Visión Propósito
        ================================================== -->
      <section id="seccion-services">
      <div class="container">
          <div class="d-flex justify-content-between bg-divisions flex-mobile">

            <div class="d-flex flex-column bg-card">
              <img align="right" :showç="handleScroll" class="icon-about alignImag divisionsIcons animate__animated" src="../assets/js/services/Recurso 17.svg" style=" margin-top: -98px; margin-left: 2px;"><br>
              <span align="center" class="text-title">Misión</span><br>
              <div class="hr-border"/><br>
              <span align="center" class="h5 flex-grow-1 text-body animate__animated" id="text-estrategia">Acompañamos el desarrollo de nuestros clientes, mediante metodologías innovadoras contribuyendo en su rentabilidad, productividad y satisfacción.</span>
            </div>

            <div class="d-flex flex-column bg-card">
              <img class="icon-about alignImag2 alignImag  divisionsIcons animate__animated" src="../assets/js/services/Recurso 1.svg" style=" margin-top: -98px; margin-left: 2px;"><br>
              <span align="center" class="text-title">Visión</span><br>
              <div class="hr-border"/><br>
              <span align="center" class="h5 flex-grow-1 text-body">Generar Prosperidad Incluyente mediante el crecimiento y la permanencia de las empresas en el mercado.</span>
            </div>

            <div class="d-flex flex-column bg-card">
              <img class="icon-about alignImag2 alignImag divisionsIcons animate__animated" src="../assets/js/services/Recurso 25.svg" style=" margin-top: -98px; margin-left: 2px;"><br>
              <span align="center" class="text-title">Propósito</span><br>
              <div class="hr-border"/><br>
              <span align="center" class="h5 flex-grow-1 text-body">Apasionados por colaborar en la transformación de nuestros clientes y fomentar relaciones de confianza a largo plazo.</span>
            </div>
          </div>

      </div>
      </section>

    <!-- Contador
        ================================================== -->
        <section id="seccion-counter">
          <div class="row">
              <div class="d-flex justify-content-between bg-counter flex-mobile">
                <div class="d-flex flex-column bg-card-counter">
                  <img align="right" :showç="handleScroll" class="icon-divisiones alignImag divisionsIcons" src="../assets/js/services/Recurso 17.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter">107</span><br>
                  <span align="center" class="h5 text-counter">Reuniones con CEO's y Directores para definir la división de sus negocios</span>
                </div>
                <div class="vl"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag  divisionsIcons" src="../assets/js/services/Recurso 1.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter">338</span><br>
                  <span align="center" class="h5 text-counter">Becarios distribuidos en 23 Áreas y Unidades de Negocio</span>
                </div>
                <div class="vl"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag divisionsIcons" src="../assets/js/services/Recurso 2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter">1500</span><br>
                  <span align="center" class="h5 text-counter">Investigadores certificados para atender denuncias</span>
                </div>
                <div class="vl"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag divisionsIcons" src="../assets/js/services/Recurso 2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter">400</span><br>
                  <span align="center" class="h5 text-counter">Proveedores Certificados en los distintos niveles</span>
                </div>
              </div>

          </div>
        </section>
    <!-- Clientes y testimonios
        ================================================== -->
        <section>
            <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
            <span class="color_34">Nuestros Clientes </span></h1>
                <carousel-3d height="500px" style="height: 525px;" border="0">
                    <slide :index="0" class="border-show2">
                        <div class="card card-style4">
                            <div class="card-img"><img src="../assets/persona1.webp" alt="..." class="tamañoEventos">
                                <div class="card-body">
                                    <h4 align="center" class="h5">
                                    <router-link to="/noticias" class="">Empresa 1</router-link>
                                    </h4>
                                    <div align="center" class="event-meta-list">
                                    <span class="me-0 me-xl-2 text-white"><i class="fas fa-map-marker-alt"></i>&nbsp;Ubicación 1</span>
                                    </div>
                                    <p align="center" class="text-white">Testimonio 1</p><br>
                                    <hr class="hr2"/>
                                    <div class="d-flex justify-content-center">
                                      <div class="rating">
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide :index="1" class="border-show2">
                        <div class="card card-style4">
                            <div class="card-img"><img src="../assets/persona2.webp" alt="..." class="tamañoEventos">
                                <div class="card-body">
                                    <h4 align="center" class="h5">
                                    <router-link to="/noticias" class="">Empresa 2</router-link>
                                    </h4>
                                    <div align="center" class="event-meta-list">
                                    <span class="me-0 me-xl-2 text-white"><i class="fas fa-map-marker-alt"></i>&nbsp;Ubicación 2</span>
                                    </div>
                                    <p align="center" class="text-white">Testimonio 2</p><br>
                                    <hr class="hr2" />
                                    <div class="d-flex justify-content-center">
                                      <div class="rating">
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide :index="2" class="border-show2">
                        <div class="card card-style4">
                            <div class="card-img"><img src="../assets/persona3.webp" alt="..." class="tamañoEventos">
                                <div class="card-body">
                                    <h4 align="center" class="h5">
                                    <router-link to="/noticias" class="">Empresa 3</router-link>
                                    </h4>
                                    <div align="center" class="event-meta-list">
                                    <span class="me-0 me-xl-2 text-white"><i class="fas fa-map-marker-alt"></i>&nbsp;Ubicación 3</span>
                                    </div>
                                    <p align="center" class="text-white">Testimonio 3</p><br>
                                    <hr class="hr2" />
                                    <div class="d-flex justify-content-center">
                                      <div class="rating">
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide :index="3" class="border-show2">
                        <div class="card card-style4">
                            <div class="card-img"><img src="../assets/persona4.webp" alt="..." class="tamañoEventos">
                                <div class="card-body">
                                    <h4 align="center" class="h5">
                                    <router-link to="/noticias" class="">Empresa 4</router-link>
                                    </h4>
                                    <div align="center" class="event-meta-list">
                                    <span class="me-0 me-xl-2 text-white"><i class="fas fa-map-marker-alt"></i>&nbsp;Ubicación 4</span>
                                    </div>
                                    <p align="center" class="text-white">Testimonio 4</p><br>
                                    <hr class="hr2" />
                                    <div class="d-flex justify-content-center">
                                      <div class="rating">
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                    <slide :index="4" class="border-show2">
                        <div class="card card-style4">
                            <div class="card-img"><img src="../assets/persona5.webp" alt="..." class="tamañoEventos">
                                <div class="card-body">
                                    <h4 align="center" class="h5">
                                    <router-link to="/noticias" class="">Empresa 5</router-link>
                                    </h4>
                                    <div align="center" class="event-meta-list">
                                    <span class="me-0 me-xl-2 text-white"><i class="fas fa-map-marker-alt"></i>&nbsp;Ubicación 5</span>
                                    </div>
                                    <p align="center" class="text-white">Testimonio 5</p><br>
                                    <hr class="hr2" />
                                    <div class="d-flex justify-content-center">
                                      <div class="rating">
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                          <span><i class="fas fa-star"></i></span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel-3d>
            </section>
        
  </div>
</template>
<style>
  #bannerabout {
    background-image: url('../assets/img1.jpg');

  }
  #bannerservicios {
    background-color: #35547c!important;

  }
  #conteo {
    background-image: url('../assets/img4.jpeg');

  }
  #testi {
    background-image: url('../assets/img4.jpeg');

  }
  .colorLineas{
    background-color: #ffc107 !important;
}
.border-radius-50 {
    border-radius: 50%;
}
element.style {
  background-image: url('../assets/img4.jpeg');

  }
.media-body {
    -ms-flex: 1;
    flex: 1;
    word-break: break-word;
}
.ms-3 {
    margin-left: 1rem!important;
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
  .text-counter {
    font-size: 20px !important;
    color: #ffffff !important;
  }
  .video_btn2{
    background: #35547c!important;
  }
  .bg-secondary{
    background: #35547c!important;
  }
  .card-style4 .date-wrapper {
    background: #35547c!important;
  }
  .team-wrapper .team-content i {
    background: #35547c!important;
  }
  .team-wrapper  .team-social-links{
    background: #35547c!important;
  }
  .team-social-links .social-icons li a{
    background: #35547c!important;
  }
  .box:hover {
    background: #ffc107;
    border-radius: 50%;
  }
  .Ti1{
    text-align: left;
    font-size: 28px;
    color: #ffffff;
  }
  .Ti2{
    text-align: left;
    font-size: 28px;
    color: #ffcc00;
  }
  .vl {
    margin-top: 80px;
    border-left: 2px solid #ffcc00;
    height: 350px;
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

 .rating span{
   color: #ffbc51;
 }
 .hr2{
   top: 150px;
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
  import '../assets/css/_main.scss'
  import '../assets/css/home.scss'
  export default {

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
    },
    methods: {
      exampleMethod() {
        
      },
      handleScroll() {
        if (window.scrollY > 1200 && this.stateEffect) {
          this.displayСonditions = true;
          this.stateEffect = false;
        }
      }
    }
  };
</script>

