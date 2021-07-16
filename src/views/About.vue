<template>
  <div class="about">
        <!-- PAGE TITLE
        ================================================== -->
        <section class="parallax page-title-section top-position bg-img cover-background" data-overlay-dark="55" id="bannerabout">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <h1>Nosotros</h1>
                    </div>
                    <div class="col-md-12">
                        <ul class="ps-0">
                            <li><a href="/home">Home</a></li>
                            <li><router-link to="/about" class="text-warning">Nosotros</router-link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

       
       <!-- Misión Visión
        ================================================== -->
    <section class="bg-light" >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-6 mb-md-8 mb-lg-0">
            <div class="pe-lg-1-9 pe-xl-2-5 text-center">
              <img class="box-custom" src="../assets/img2.jpeg" alt="...">
            </div>
          </div>
          <div class="col-lg-6">
            <h1 align="center" class="text-black color_34 mb-1-6 font-weight-700">Nuestra Misión</h1>
            <p class="text-black">Acompañamos el desarrollo de nuestros clientes, mediante metodologías innovadoras contribuyendo en su rentabilidad, productividad y satisfacción.</p>
            <h1 align="center" class="text-black color_34 mb-1-6 font-weight-700">Nuestra Visión</h1>
            <p class="text-black">Generar Prosperidad Incluyente*, mediante el crecimiento y la permanencia de las empresas en el mercado. *Que nos vaya bien a todos.</p>
            <h1 align="center" class="text-black color_34 mb-1-6 font-weight-700">Nuestro Propósito</h1>
            <p class="text-black">Generar Prosperidad Incluyente*, mediante el crecimiento y la permanencia de las empresas en el mercado. *Que nos vaya bien a todos.</p>
            
            <ul class="list-style1">
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- COUNTER
        ================================================== -->
        <section class="py-0">
            <div class="row g-0">
                <div class="col-lg-6 bg-img cover-background" data-overlay-dark="2" data-background="../assets/img4.jpeg" id="conteo">
                    <div class="d-table h-100 text-center mx-auto position-relative z-index-1">
                        <div class="d-table-cell vertical-align-middle h-100 ">
                            <div class="d-inline-block vertical-align-middle z-index-1 text-start">
                                <a class="popup-social-video video_btn" href="https://www.youtube.com/watch?v=-ESQmzDbnL8"><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 bg-secondary">
                    <div class="p-2-5 p-sm-2-7 p-md-6 p-lg-9 p-xl-14">
                        <div class="row g-0 justify-content-center">
                            <div class="col-sm-6 text-center border-sm-end border-bottom border-white-opacity2 py-1-6">
                                <span class="countup text-white h1 font-weight-700">45</span>
                                <p class="display-28 display-xl-27 text-white font-weight-500 m-0">Cursos</p>
                            </div>
                            <div class="col-sm-6 text-center border-bottom border-white-opacity2 py-1-6">
                                <span class="countup text-white h1 font-weight-700">1800</span>
                                <p class="display-28 display-xl-27 text-white font-weight-500 m-0">Clientes felices</p>
                            </div>
                            <div class="col-sm-6 text-center borders-bottom border-sm-bottom-0 border-sm-end border-white-opacity2 py-1-6">
                                <span class="countup text-white h1 font-weight-700">1500</span>
                                <p class="display-28 display-xl-27 text-white font-weight-500 m-0">Satisfacción</p>
                            </div>
                            <div class="col-sm-6 text-center py-1-6">
                                <span class="countup text-white h1 font-weight-700">21</span>
                                <p class="display-28 display-xl-27 text-white font-weight-500 m-0">Premios ganados</p>
                            </div>
                        </div>
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
                                    <router-link to="/eventos" class="">Empresa 1</router-link>
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
                                    <router-link to="/eventos" class="">Empresa 2</router-link>
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
                                    <router-link to="/eventos" class="">Empresa 3</router-link>
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
                                    <router-link to="/eventos" class="">Empresa 4</router-link>
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
                                    <router-link to="/eventos" class="">Empresa 5</router-link>
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

