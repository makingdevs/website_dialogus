<template>
  <div>
    <section
      class="parallax bg-img cover-background  bg-img cover-background full-screen pt-16 pb-8 p-lg-0 top-position2 min-md-height-auto"
      data-overlay-dark="55" id="banner">

      <div class="container d-flex flex-column ">
        <div class="row align-items-center min-lg-vh-100">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <h1 align="left"
              class="text-white display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 text-shadow font-weight-800 animate__animated animate__bounce">
              Innovación que transforma negocios.</h1>

            <h6 align="left" class=" text-white font-weight-800 animate__animated animate__fadeInTopLeft">En Dialogus
              nos comprometemos en transformar</h6>
            <h6 align="left" class=" text-white font-weight-800 animate__animated animate__fadeInBottomRight"> los
              negocios para llevarlos al siguiente nivel.</h6>
            <br>
            <div class="d-flex bd-highlight align-items-center">
              <a href="#!"
                class="h4 btn-circle btn-color-button me-2-4 mb-2-4 mb-sm-0 font-weight-900 animate__animated animate__fadeInUp"
                style="width: 35% !important; border: none;"><span class="text-button">Descargar Guia</span></a>
              <div class="d-block d-sm-inline-block">
                <a class="popup-social-video video_btn small" href="https://www.youtube.com/watch?v=-ESQmzDbnL8"><i
                    class="fas fa-play"></i></a>
                <div class="d-inline-block align-middle ps-2-5 text-white text-start font-weight-600">Ver<span
                    class="text-uppercase d-block text-white">Video</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SERVICE================================================== -->

    <section id="seccion-services">
      <img class="img-hexPagina" src="../assets/js/services/hexagonos-Pagina/hexPagin.svg">
      <div class="container">
        <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
          <span class="color_34 ">NUESTRAS DIVISIONES </span>
        </h1><br><br><br>
        <div class="d-flex justify-content-between bg-divisions flex-mobile">
          <div class="d-flex flex-column bg-card">

            <img align="right" :show="handleScroll" class="icon-divisiones alignImag divisionsIcons animate__animated"
              src="../assets/js/services/Recurso 17.svg" style=" margin-top: -98px; margin-left: 2px;"><br>

            <span align="center" :show="handleScroll" class="text-title divisionsText animate__animated">Estrategia</span><br>
            <div class="hr-border" /><br>
            <span align="center" :show="handleScroll" class="h5 flex-grow-1 text-body divisionsText animate__animated" id="text-estrategia">Definimos el
              camino para alcanzar tus objetivos de manera exitosa.</span>
            <div class="d-flex justify-content-center mt-5 mb-5">

              <router-link to="/estrategia" class="btn-circle btn-color-button" type="submit" style="border: none;"><span
                  class=" text-button" style="text-transform: none;">Conoce más</span></router-link>

            </div>
          </div>

          <div class="d-flex flex-column bg-card">
            <img class="icon-divisiones alignImag2 alignImag  divisionsIcons animate__animated"
              src="../assets/js/services/Recurso 1.svg" style=" margin-top: -98px; margin-left: 2px;"><br>
            <span align="center" class="text-title divisionsText animate__animated">Capital Humano</span><br>
            <div class="hr-border" /><br>
            <span align="center" class="h5 flex-grow-1 text-body divisionsText animate__animated">Generamos soluciones para el desarrollo del talento
              humano y el desarrollo organizacional.</span>
            <div class="d-flex justify-content-center mt-5 mb-5">
              <router-link to="/capital" class="btn-circle btn-color-button" type="submit" style="border: none;"><span class="text-button"
                  style="text-transform: none;">Conoce más</span></router-link>
            </div>
          </div>

          <div class="d-flex flex-column bg-card">
            <img class="icon-divisiones alignImag2 alignImag divisionsIcons animate__animated"
              src="../assets/js/services/Recurso 2.svg" style=" margin-top: -98px; margin-left: 2px;"><br>
            <span align="center" class="text-title divisionsText animate__animated">Cumplimiento</span><br>
            <div class="hr-border" /><br>
            <span align="center" class="h5 flex-grow-1 text-body divisionsText animate__animated">Blindamos a las empresas con sistemas de integridad,
              ética y gestión de riesgos.</span>
            <br>
            <div class="d-flex justify-content-center mt-5 mb-5">
              <router-link to="/cumplimiento" class="btn-circle btn-color-button" type="submit" style="border: none;"><span
                  class="text-button" style="text-transform: none;">Conoce más</span></router-link>
            </div>
          </div>

          <div class="d-flex flex-column bg-card">
            <img class="icon-divisiones alignImag2 alignImag divisionsIcons animate__animated"
              src="../assets/js/services/Recurso 25.svg" style=" margin-top: -98px; margin-left: 2px;"><br>
            <span align="center" class="text-title divisionsText animate__animated">Diagnóstico</span><br>
            <div class="hr-border" /><br>
            <span align="center" class="h5 flex-grow-1 text-body divisionsText animate__animated">Identificamos fortalezas y debilidades de empresas
              reforzando el ecosistema mexicano.</span>
            <div class="d-flex justify-content-center mt-5 mb-5">
              <router-link to="/diagnostico" class="btn-circle btn-color-button" type="submit" style="border: none;"><span
                  class="text-button" style="text-transform: none;">Conoce más</span></router-link>
            </div>
          </div>
        </div>

      </div>

    </section>
    <!-- END SERVICE============================================== -->

    <!-- ABOUTUS ================================================== -->
    <section class="bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-6 mb-md-8 mb-lg-0">
            <div class="pe-lg-1-9 pe-xl-2-5 text-center">
              <img class="box-custom presentamosAnimation animate__animated" src="../assets/que es.jpeg" alt="...">
            </div>
          </div>
          <div class="col-lg-6">
            <div align="center" class="h1 color_33 presentamosAnimation animate__animated">Te presentamos</div><br>
            <img align="center" class="img2 presentamosText animate__animated" src="../assets/js/services/Recurso 6.svg" alt="..."><br><br>
            <div align="center" class="h4 color_33 presentamosText animate__animated">Somos una consultora que ofrece una amplia gama de servicios
              disruptivos e innovadores, siempre poniendo a la gente al centro de las soluciones.</div>
          </div>


        </div>
      </div>
    </section>
    <!--END ABOUTUS =============================================== -->


    <!-- ONLINE COURSES
        ================================================== -->
    <section class="section-carousel">
      <img class="img-hexPagina-carrusel" src="../assets/js/services/hexagonos-Pagina/hexPagin.svg">
      <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
        <span class="color_34">EVENTOS Y CURSOS </span>
      </h1>
      <carousel-3d v-if="renderComponent" height="510px" border="0" :controlsVisible="controlsVisible" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'"
        :perspective="perspective" :inverseScaling="300" :space="385" style="height: 525px;">
        <slide :index="index" class="" v-for="(tarjeta, index) in TarjetasCarruselTable" :key="index">
          <div class="card card-style4">
            <div class="card-img"><img :src="tarjeta.image" alt="..." class="tamañoEventos">
            </div>
            <div class="card-body">
              <h5 align="center">
                <router-link to="/eventos" class="text-white">{{tarjeta.title}}</router-link>
              </h5>
              <div align="center" class="event-meta-list">
                <span class="me-0 me-xl-2 text-white"><i
                    class="ti-calendar me-2 custom-icon"></i>{{tarjeta.date}}</span>
                <span class="text-white"><i class="ti-time custom-icon me-2"></i>{{tarjeta.time}}</span>
              </div>
              <p align="center" class="text-white">{{tarjeta.description}}</p><br>
              <hr class="hr2" />
              <div class="d-flex justify-content-center">
                <a class="tolowercase btn-circle btn-color-button" :href="tarjeta.urlRegister" target="_blank" style="border: none;"><span
                    class="text-button" style="text-transform: none;">Regístrate </span></a>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </section>
    <!-- Team
        _________________________________________________________________________-->


    <!-- EXTRA
        ================================================== -->
    <section class="container">
      <div class="row" style="background: #e8eaea; border-radius: 12px; padding-bottom: 29px;">
        <div class="col-12" style="background-color: #3f5479; border-radius: 12px 12px 0px 0px">
          <h1 class="d-flex justify-content-center text-white text-contact">CONTACTO</h1>
        </div>
        <div class="col-12">
                <p align="center" class=" mb-1-6 text-dark text-contact">
                  Compártenos tus datos y en breve uno
                  de nuestros asesores te contactará.</p>
        </div>
        <div class="d-flex justify-content-between">
          <div class="col-8">
            <div class="ps-lg-2">
              <div class="contact-form-area">
                <form class="quform" @submit.prevent="sendNotification">

                  <div class="quform-elements">

                    <div class="row">

                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element">

                          <div class="quform-input">
                            <input v-model="contact.name" class="form-control form-control1" id="name" type="text"
                              name="name" placeholder="Nombre" />
                          </div>
                        </div>

                      </div>
                      <!-- End Text input element -->

                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element">

                          <div class="quform-input">
                            <input v-model="contact.email" class="form-control form-control1" id="email" type="text"
                              name="email" placeholder="Email" />
                          </div>
                        </div>
                      </div>
                      <!-- End Text input element -->

                      <!-- Begin Text input element -->

                      <!-- End Text input element -->

                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element">
                          <div class="quform-input">
                            <input v-model="contact.telf" class="form-control form-control1" id="phone" type="text"
                              name="phone" placeholder="Telefono" />
                          </div>
                        </div>
                      </div>
                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element">
                          
                          <div class="quform-input">
                            <input v-model="contact.asunto" class="form-control form-control1" id="subject" type="text" name="subject"
                              placeholder="Tu asunto aqui" />
                          </div>
                        </div>
                      </div>
                      <!-- End Text input element -->
                      <div class="col-md-12">
                        <div class="quform-element">
                          <label for="message"><span class="quform-required"></span></label>
                          <div class="quform-input">
                            <textarea v-model="contact.mensaje" class="form-control form-control1" id="message"
                              name="message" rows="3" placeholder="¿Cómo podemos ayudarte?"></textarea>
                          </div>
                        </div>
                      </div>
                      <!-- End Textarea element -->

                      <!-- Begin Submit button -->
                      <div class="col-md-12">
                        <div class="quform-submit-inner">
                          <div class="d-flex justify-content-center">
                            <button class="theme butn-md btn-circle btn-width-contact" style="border: none;"><span
                                class="text-button">Enviar respuesta</span></button>
                          </div>
                        </div><br>
                        <div class="quform-loading-wrap text-start"><span class="quform-loading"></span></div>
                      </div>
                      <!-- End Submit button -->

                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>

          <div class="col-4">
            <div class=""><br>
              <div class="d-flex flex-column cuadrado2 text-white "><br>
                <img align="center" class="telef" src="../assets/js/services/telfono.svg"><br>
                <a href="tel:55 16556739998">
                <p align="center" class="text-cuadrado2 text-white">55 16556739998</p>
                </a>
                <img class="telef" src="../assets/js/services/messa.svg"><br>
                <a class="button" href="mailto:contactanos@dialogus.com.mx">
                <p align="center" class="text-cuadrado2 email-text text-white"> contactanos@dialogus.com.mx </p></a>
                  
                <img class="telef" src="../assets/js/services/ubicacion.svg"><br>
                <a href="https://goo.gl/maps/NLyroJ8KhabcxJy4A" target="_blank">
                <p align="center" class="text-cuadrado2 text-white">Periferico Sur 4121, Fuentes del Pedregal, Tlalpan, 14140 Ciudad de México, CDMX</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
        <img class="img-hexPagina-contac" src="../assets/js/services/hexagonos-Pagina/hexPagin.svg">
       -->
    </section>
    <!-- FOOTER
        ================================================== -->
  </div>
</template>
<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import VueTextTransition from 'vue-text-transition';
  import '../assets/css/_main.scss'
  import '../assets/css/home.scss'
  
  import { TarjetasCarruselTableRef } from '../dbConnection'
  export default {
    name: "home",
    firebase: {
      TarjetasCarruselTable: TarjetasCarruselTableRef
    },
    watch: {
      TarjetasCarruselTable: function () {
        this.renderComponent = false;
        setTimeout(() => this.renderComponent = true, 1000);
      }
    },
    data: function () {
      return {
        animate__animated: true,
        animate__animated_text: true,
        animate_presentamos: true,
        animate_presentamos_text: true,
        displayСonditions: false,
        controlsVisible: true,
        perspective: 35,
        TarjetasCarruselTable: [],
        renderComponent: false,
        show: true,
        contact: {
          name: "",
          email: "",
          telf: "",
          mensaje: ""
        }
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
      sendNotification() {
        const message = `Hola! \nMe quiero comunicar con ustedes
                        Mi nombre es: ${this.contact.name}
                        Correo: ${this.contact.email}
                        Teléfono: ${this.contact.telf}
                        Asunto: ${this.contact.asunto}
                        Mensaje: ${this.contact.mensaje}`.replace(/  +/g, '');

        window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
      },
      handleScroll() {
        this.activatedDivisionsIcons();
        this.returnStateAnimate();
        this.animationDivisionsText();
        this.returnAnimateText();
        this.animationPresentamos();
        this.returnPresentamos();
        this.presentamosText();
        this.returnPresentamosText();
      },
      activatedDivisionsIcons() {
        if (window.scrollY > 300 && this.animate__animated) {
          const divisionsIcons = document.getElementsByClassName("divisionsIcons")
          for (const division of divisionsIcons) {
            division.classList.add("animate__fadeInTopLeft")
          }
          this.displayСonditions = true;
          this.animate__animated = false;
        }

      },
      returnStateAnimate() {
        if (window.scrollY < 200 && !this.animate__animated) {
          const divisionsIcons = document.getElementsByClassName("divisionsIcons")
          for (const division of divisionsIcons) {
            division.classList.remove("animate__fadeInTopLeft")
          }
          this.animate__animated = true;
        }
      },
      animationDivisionsText(){
        if (window.scrollY > 400 && this.animate__animated_text) {
          const divisionsText = document.getElementsByClassName("divisionsText")
          for (const textDivision of divisionsText) {
            textDivision.classList.add("animate__fadeInBottomRight")
          }
          this.animate__animated_text = false;
        } 
      },
      returnAnimateText() {
        if (window.scrollY < 200 && !this.animate__animated_text) {
          const divisionsText = document.getElementsByClassName("divisionsText")
          for (const textDivision of divisionsText) {
            textDivision.classList.remove("animate__fadeInBottomRight")
          }
          this.animate__animated_text = true;
        }
      },
      
      animationPresentamos(){
        if (window.scrollY > 1200 && this.animate_presentamos) {
          const presentamos = document.getElementsByClassName("presentamosAnimation")
          for (const presentamosAnimation of presentamos) {
            presentamosAnimation.classList.add("animate__fadeInDown")
          }
          this.animate_presentamos = false;
        } 
      },
      returnPresentamos() {
        if (window.scrollY < 200 && !this.animate_presentamos) {
          const presentamos = document.getElementsByClassName("presentamosAnimation")
          for (const presentamosAnimation of presentamos) {
            presentamosAnimation.classList.remove("animate__fadeInDown")
          }
          this.animate_presentamos = true;
        }
      },
      
      presentamosText(){
        if (window.scrollY > 1200 && this.animate_presentamos_text) {
          const textPresentamos = document.getElementsByClassName("presentamosText")
          for (const presentamosTextAnimation of textPresentamos) {
            presentamosTextAnimation.classList.add("animate__fadeInUp")
          }
          this.animate_presentamos_text = false;
        } 
      },
      returnPresentamosText() {
        if (window.scrollY < 250 && !this.animate_presentamos_text) {
          const textPresentamos = document.getElementsByClassName("presentamosText")
          for (const presentamosTextAnimation of textPresentamos) {
            presentamosTextAnimation.classList.remove("animate__fadeInUp")
          }
          this.animate_presentamos_text = true;
        }
      },
    }
  };
</script>