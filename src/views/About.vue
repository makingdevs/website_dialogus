<template>
  <div class="about">
        <!-- PAGE TITLE
        ================================================== -->
        <section class="parallax page-title-section top-position bg-img cover-background"  id="bannerservicios">

          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h1 align="left" class="font-weight-700 font-poppins">Nosotros</h1><div class="m-top-28" />
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#FFFFFF">Conoce más acerca de nosotros</h3>
                <h3 align="left" class="font-weight-300 font-poppins" style="color:#ffc107">y nuestra visión para nuestros clientes.</h3>
                <div class="m-top-28" />
              </div>
              <div class="col-lg-4">
                <img src="../assets/js/services/Nosotros/Nosotros TT.svg" alt=""  align="left">
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
              <img align="right" :showç="handleScroll" class="icon-about alignImag divisionsIcons animate__animated" src="../assets/js/services/Nosotros/Nosotros 1.svg" style=" margin-top: -98px; margin-left: 2px;">
              <span align="center" class="text-title font-weight-500 font-poppins">Misión</span><div class="m-top-28" />
              <div class="hr-border"/><div class="m-top-28" />
              <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins">Acompañamos el desarrollo de nuestros clientes, mediante metodologías innovadoras contribuyendo en su rentabilidad, productividad y satisfacción.</span>
            </div>
            <div class="d-flex flex-column bg-card-about">
              <img class="icon-about alignImag2 alignImag  divisionsIcons animate__animated" src="../assets/js/services/Nosotros/Nosotros 2.svg" style=" margin-top: -98px; margin-left: 2px;">
              <span align="center" class="text-title font-weight-500 font-poppins">Visión</span><div class="m-top-28" />
              <div class="hr-border"/><div class="m-top-28" />
              <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins">Generar Prosperidad Incluyente mediante el crecimiento y la permanencia de las empresas en el mercado.</span>
            </div>

            <div class="d-flex flex-column bg-card-about">
              <img class="icon-about alignImag2 alignImag divisionsIcons animate__animated" src="../assets/js/services/Nosotros/Nosotros 3.svg" style=" margin-top: -98px; margin-left: 2px;">
              <span align="center" class="text-title font-weight-500 font-poppins">Propósito</span><div class="m-top-28" />
              <div class="hr-border"/><div class="m-top-28" />
              <span align="center" class="h5 flex-grow-1 text-body font-weight-300 font-poppins">Apasionados por colaborar en la transformación de nuestros clientes y fomentar relaciones de confianza a largo plazo.</span>
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
                  <img align="right" :showç="handleScroll" class="icon-divisiones alignImag divisionsIcons" src="../assets/js/services/Recurso 17.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter font-weight-800 font-poppins">107</span><br>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Reuniones con CEO's y Directores para definir la división de sus negocios</span>
                </div>
                <div class="vl-about"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag  divisionsIcons" src="../assets/js/services/Recurso 1.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter font-weight-800 font-poppins">338</span><br>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Becarios distribuidos en 23 Áreas y Unidades de Negocio</span>
                </div>
                <div class="vl-about"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag divisionsIcons" src="../assets/js/services/Recurso 2.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter font-weight-800 font-poppins">1500</span><br>
                  <span align="center" class="h5 text-counter font-weight-300 font-poppins">Investigadores certificados para atender denuncias</span>
                </div>
                <div class="vl-about"></div>
                <div class="d-flex flex-column bg-card-counter">
                  <img class="icon-divisiones alignImag2 alignImag divisionsIcons" src="../assets/js/services/Recurso 25.svg" style=" margin-top: 0px; margin-left: 2px;"><br>
                  <span align="center" class="text-title-counter font-weight-800 font-poppins">400</span><br>
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
        
  </div>
</template>
<style>
  #bannerabout {
    background-image: url('../assets/img1.jpg');
  }
  #bannerservicios {
    background-color: #35547c!important;
  }
  .seccion-counter{
    margin-top: -120px;
  }
  .testimonios{
    background-color: #e8eaea!important;
    margin-top: -120px;
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
  .vl-about {
    margin-top: 60px;
    border-left: 2px solid #ffcc00;
    height: 370px;
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

  @media(max-width: 1199px ){
  .vl-about {
      display: none;
  }
  }

</style>

<script>
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
      //VueSlickCarousel,
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

