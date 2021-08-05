<template>
  <div class="about">
        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannerabout" class="banners-services">
          <div class="containerheader">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="font-weight-700 font-poppins" style="color:#35547c">Nosotros</h1>
                <div class="hr-header" />
                <div class="m-top-28" />
                <h3 class="font-weight-300 font-poppins" style="color:#35547c">Conoce más acerca de nosotros y nuestra visión para nuestros clientes.</h3>
              </div>
            </div>
          </div>
        </section>

       <!-- Misión Visión Propósito
        ================================================== -->
      <section id="seccion-services">
      <div class="container">
          <div class="d-flex justify-content-between bg-about flex-mobile">

            <div class="d-flex flex-column bg-card-about">
              <img :show="handleScrollefect" class="icon-about alignImag2 alignImag nosotrosIcons animate__animated" src="../assets/js/services/Nosotros/Nosotros1.svg" style=" margin-top: -98px; margin-left: 2px;">
              <span align="center" class="text-title font-weight-500 font-poppins nosotrosText animate__animated">Misión</span><div class="m-top-28" />
              <div class="hr-border-about"/><div class="m-top-28" />
              <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins nosotrosText animate__animated">Acompañamos el desarrollo de nuestros clientes, mediante metodologías innovadoras contribuyendo en su rentabilidad, productividad y satisfacción.</span>
            </div>
            <div class="d-flex flex-column bg-card-about">
              <img class="icon-about alignImag2 alignImag nosotrosIcons animate__animated" src="../assets/js/services/Nosotros/Nosotros2.svg" style=" margin-top: -98px; margin-left: 2px;">
              <span align="center" class="text-title font-weight-500 font-poppins nosotrosText animate__animated">Visión</span><div class="m-top-28" />
              <div class="hr-border-about"/><div class="m-top-28" />
              <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins nosotrosText animate__animated">Generar Prosperidad Incluyente mediante el crecimiento y la permanencia de las empresas en el mercado.</span>
            </div>

            <div class="d-flex flex-column bg-card-about">
              <img class="icon-about alignImag2 alignImag nosotrosIcons animate__animated" src="../assets/js/services/Nosotros/Nosotros3.svg" style=" margin-top: -98px; margin-left: 2px;">
              <span align="center" class="text-title font-weight-500 font-poppins nosotrosText animate__animated">Propósito</span><div class="m-top-28" />
              <div class="hr-border-about"/><div class="m-top-28" />
              <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins nosotrosText animate__animated">Apasionados por colaborar en la transformación de nuestros clientes y fomentar relaciones de confianza a largo plazo.</span>
            </div>
          </div>

      </div>
      </section>

    <!-- Contador
        ================================================== -->
        <section class="seccion-counter">
          <div class="row">
              <div class="d-flex justify-content-between bg-counter flex-mobile">
                <div class="d-flex flex-column bg-card-counter">
                  <img align="right" :showç="handleScroll" class="icon-divisiones alignImag divisionsIcons" src="../assets/js/services/estrategi2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <div class="iCountUp" align="center">
                    <span align="center" class="text-title-counter font-weight-800 font-poppins"><ICountUp :delay="delay" :endVal="endVal" :options="options" @ready="onReady"/></span><br>
                  </div>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Reuniones con CEO's y Directores para definir la división de sus negocios</span>
                </div>
                <div class="vl-about"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag  divisionsIcons" src="../assets/js/services/capital2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <div class="iCountUp" align="center">
                    <span align="center" class="text-title-counter font-weight-800 font-poppins"><ICountUp :delay="delay" :endVal="endVal1" :options="options" @ready="onReady1"/></span><br>
                  </div>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Becarios distribuidos en 23 Áreas y Unidades de Negocio</span>
                </div>
                <div class="vl-about"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag divisionsIcons" src="../assets/js/services/cumpli2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <div class="iCountUp" align="center">
                    <span align="center" class="text-title-counter font-weight-800 font-poppins"><ICountUp :delay="delay" :endVal="endVal2" :options="options" @ready="onReady2"/></span><br>
                  </div>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Investigadores certificados para atender denuncias</span>
                </div>
                <div class="vl-about"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag divisionsIcons" src="../assets/js/services/diagno2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <div class="iCountUp" align="center">
                    <span align="center" class="text-title-counter font-weight-800 font-poppins"><ICountUp :delay="delay" :endVal="endVal3" :options="options" @ready="onReady3"/></span><br>
                  </div>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Proveedores Certificados en los distintos niveles</span>
                </div>
              </div>

          </div>
        </section>
    <!-- Testimonios
        ================================================== -->
        <section class="testimonios">
            <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
            <span class="color_34 font-weight-500 font-poppins">Testimonios </span></h1>
                
                <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios">
                          <img align="left" :showç="handleScroll" class="icon-testimonios alignImag3 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                        <div class="d-flex flex-column bg-card-testimonios">
                          <img align="left" :showç="handleScroll" class="icon-testimonios alignImag3 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                        <div class="d-flex flex-column bg-card-testimonios">
                          <img align="left" :showç="handleScroll" class="icon-testimonios alignImag3 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios">
                          <img align="left" :showç="handleScroll" class="icon-testimonios alignImag3 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                        <div class="d-flex flex-column bg-card-testimonios">
                          <img align="left" :showç="handleScroll" class="icon-testimonios alignImag3 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                        <div class="d-flex flex-column bg-card-testimonios">
                          <img align="left" :showç="handleScroll" class="icon-testimonios alignImag3 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
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
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </section>

            <section class="testimoniosmobile">
            <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
            <span class="color_34 font-weight-500 font-poppins">Testimonios </span></h1>
                
                <div id="carouselmobile" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios-mobile">
                          <img align="left" :showç="handleScroll" class="icon-testimonios-mobile alignImag4 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios-mobile">
                          <img align="left" :showç="handleScroll" class="icon-testimonios-mobile alignImag4 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios-mobile">
                          <img align="left" :showç="handleScroll" class="icon-testimonios-mobile alignImag4 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios-mobile">
                          <img align="left" :showç="handleScroll" class="icon-testimonios-mobile alignImag4 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios-mobile">
                          <img align="left" :showç="handleScroll" class="icon-testimonios-mobile alignImag4 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="d-flex justify-content-between bg-testimonios flex-mobile">
                        <div class="d-flex flex-column bg-card-testimonios-mobile">
                          <img align="left" :showç="handleScroll" class="icon-testimonios-mobile alignImag4 divisionsIcons" src="../assets/js/services/Nosotros/comillas.svg" style=" margin-top: -98px; margin-left: 2px;">
                          <div class="m-top-28" />
                          <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins" id="text-estrategia">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu</span>
                          <div class="rating" align="center">
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
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselmobile" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselmobile" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </section>
        
  </div>
</template>
<style>
  #bannerabout {
    background-image: url('../assets/js/services/Nosotroshead.svg');
    background-size:100%;
    background-repeat: no-repeat;
  }
  .containerheader{
    margin-left: 120px;
    text-align: left;
  }
  .seccion-counter{
    margin-top: -120px;
  }
  .testimonios{
    background-color: #e8eaea!important;
    margin-top: -120px;
  }
  .testimoniosmobile{
    background-color: #e8eaea!important;
    margin-top: -120px;
    display: none;
  }
  .colorLineas{
    background-color: #ffc107 !important;
}
.border-radius-50 {
    border-radius: 50%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 0px solid black;
  background-image: none;
  margin-top: 50%;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: #35547c;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: #35547c;
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
  .vl-about {
    margin-top: 60px !important;
    border-left: 2px solid #ffcc00;
    height: 310px !important;
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
  
  
  @media(max-width: 1000px ){
  #bannerabout {
    background-image: url('../assets/js/services/Nosotrosresponsive.svg');
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

  .vl-about {
      display: none;
  }
  .testimonios{
    background-color: #e8eaea!important;
    margin-top: -120px;
    display: none;
  }
  .testimoniosmobile{
    background-color: #e8eaea!important;
    margin-top: -120px;
    display: block;
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    margin-top: 100%;
  }
  }
  @media(max-width: 700px ){
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    margin-top: 150%;
  }
  }
  

</style>

<script>
  import '../assets/css/_main.scss'
  import '../assets/css/home.scss'
  import ICountUp from 'vue-countup-v2';
  export default {
    data: function () {
      return {
        animate__animated_nosotros: true,
        animate_text_nosotros: true,
        displayСonditions: false,
        delay: 5000,
        endVal: 107,
        endVal1: 338,
        endVal2: 1500,
        endVal3: 400,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
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
      ICountUp,
      //VueSlickCarousel,
    },
    
    methods: {
      onReady: function(instance) {
        const that = this;
        instance.update(that.endVal);
      },
      onReady1: function(instance) {
        const that = this;
        instance.update(that.endVal1);
      },
      onReady2: function(instance) {
        const that = this;
        instance.update(that.endVal2);
      },
      onReady3: function(instance) {
        const that = this;
        instance.update(that.endVal3);
      },

      handleScroll() {
        if (window.scrollY > 1200 && this.stateEffect) {
          this.displayСonditions = true;
          this.stateEffect = false;
        }
        this.activatedNosotros();
        this.returnNosotros();
        this.animationNosotrosText();
        this.returnNosotrosText();
      },
      activatedNosotros() {
        if (window.scrollY > 100 && this.animate__animated_nosotros) {
          const nosotrosIcons = document.getElementsByClassName("nosotrosIcons")
          for (const nosotros of nosotrosIcons) {
            nosotros.classList.add("animate__fadeInDown")
          }
          this.displayСonditions = true;
          this.animate__animated_nosotros = false;
        }

      },
      returnNosotros() {
        if (window.scrollY < 150 && !this.animate__animated_nosotros) {
          const nosotrosIcons = document.getElementsByClassName("nosotrosIcons")
          for (const nosotros of nosotrosIcons) {
            nosotros.classList.remove("animate__fadeInDown")
          }
          this.animate__animated_nosotros = true;
        }
      },
      animationNosotrosText() {
        if (window.scrollY > 150 && this.animate_text_nosotros) {
          const nosotrosText = document.getElementsByClassName("nosotrosText")
          for (const textNosotros of nosotrosText) {
            textNosotros.classList.add("animate__fadeInUp")
          }
          this.animate_text_nosotros = false;
        }
      },
      returnNosotrosText() {
        if (window.scrollY < 100 && !this.animate_text_nosotros) {
          const nosotrosText = document.getElementsByClassName("nosotrosText")
          for (const textNosotros of nosotrosText) {
            textNosotros.classList.remove("animate__fadeInUp")
          }
          this.animate_text_nosotros = true;
        }
      },
    }
  };
</script>

