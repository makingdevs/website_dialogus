<template>
    <div class="py-5">
        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannercontacto" class="banners-services">
            <div class="containerheader">
                <div class="row">
                    <div class="col-lg-6">
                      <div class="m-top-28" />
                      <h1  class="font-weight-700 font-poppins" style="color:#35547c">Contacto</h1>
                      <div class="hr-header" />
                      <div class="m-top-28" />
                      <h3  class="font-weight-300 font-poppins" style="color:#35547c">Si quieres recibir más información puedes ponerte en contacto con nosotros.</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT INFO
        ================================================== -->
        <section class="contact-form">
            <div class="container">

                <div class="row">
                    <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0 contact-border">
                        <div class="contact-wrapper">
                          <a href="tel:5567919880">
                            <img v-if="!contactHoverTel" class="icon-contacto" src="../assets/js/services/contacto/contacTel.svg" @mouseover="contactHoverTel = true">
                            <img v-else class="icon-contacto" src="../assets/js/services/contacto/contacTelHover.svg" @mouseleave="contactHoverTel = false"></a>
                            
                            <div class="contact-content">
                                <h3 class="font-weight-800 mb-2 mb-lg-3 color_33">Llámanos</h3>

                                <a href="tel:5567919880">
                                    <div class="color_33 fuenteContacto">(+52) 55 679 198 80</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0 contact-border">
                        <div class="contact-wrapper">
                          <a class="button" href="mailto:contactanos@dialogus.com.mx">
                            <img v-if="!contactHover" class="icon-contacto" src="../assets/js/services/contacto/contacMsg.svg" @mouseover="contactHover = true">
                            <img v-else class="icon-contacto" src="../assets/js/services/contacto/contacMsgHover.svg" @mouseleave="contactHover = false"></a>
                            <div class="contact-content">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3 color_33">Escríbenos</h4>

                                <a class="button" href="mailto:contactanos@dialogus.com.mx">
                                    <div class="color_33 fuenteContacto">contactanos@dialogus.com.mx</div></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-wrapper">
                          <a href="https://goo.gl/maps/NLyroJ8KhabcxJy4A" target="_blank">
                            <img v-if="contactHoverUbi" class="icon-contacto" src="../assets/js/services/contacto/contacUbi.svg" @mouseover="contactHoverUbi = false">
                            <img v-else class="icon-contacto" src="../assets/js/services/contacto/contacUbiHover.svg" @mouseleave="contactHoverUbi = true"></a>
                            <div class="contact-content ">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3 color_33">Visítanos</h4>
                                <a href="https://goo.gl/maps/NLyroJ8KhabcxJy4A" target="_blank">
                                <div class="color_33 fuenteContacto">Periférico Sur 4121, Fuentes del Pedregal, Tlalpan, 14140 Ciudad de México, CDMX</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- map -->
        <div align="center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.4608114460298!2d-99.21152168459653!3d19.30580028695644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdffe9c197b923%3A0xcd6f6f253728094e!2sDialogus!5e0!3m2!1ses-419!2smx!4v1624422512308!5m2!1ses-419!2smx"
                width="75%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <!-- CONTACT FORM
        ================================================== -->
<section class="container">
      <div class="row m-2 justify-content-md-center" style="background: #e8eaea; border-radius: 12px; padding-bottom: 29px;">
        <div class="col-12" style="background-color: #3f5479; border-radius: 12px 12px 0px 0px">
          <h1 class="d-flex justify-content-center text-white text-contact pt-2">CONTACTO</h1>
        </div>
        <div class="col-12">
          <p align="center" class=" mb-1-6 text-dark text-contact mt-3">
            Compártenos tus datos y en breve uno
            de nuestros asesores te contactará.</p>
        </div>
        <div class="col-12 col-lg-8">
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
                          <input v-model="contact.telf" class="form-control form-control1" id="phone" type="text"
                            name="phone" placeholder="Teléfono" />
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
                          <input v-model="contact.email" class="form-control form-control1" id="email" type="text"
                            name="email" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                    <!-- Begin Text input element -->
                    <div class="col-md-6">
                      <div class="quform-element">

                        <div class="quform-input">
                          <input v-model="contact.asunto" class="form-control form-control1" id="subject" type="text"
                            name="subject" placeholder="Asunto" />
                        </div>
                      </div>
                    </div>
                    <!-- End Text input element -->
                    <div class="col-md-12">
                      <div class="quform-element">
                        <div class="quform-input">
                          <textarea v-model="contact.mensaje" class="form-control form-control1" id="message"
                            name="message" rows="9" placeholder="¿Cómo podemos ayudarte?"></textarea>
                        </div>
                      </div>
                    </div>
                    <!-- End Textarea element -->

                    <!-- Begin Submit button -->
                    <div class="col-md-12">
                      <div class="quform-submit-inner">
                        <div class="d-flex justify-content-center">
                          <button class="theme butn-md btn-width-contact" style="border: none;"><span
                              class="text-button">Enviar respuesta</span></button>
                        </div>
                      </div>
                      <div class="m-top-28" />
                      <div class="quform-loading-wrap text-start"><span class="quform-loading"></span></div>
                    </div>
                    <!-- End Submit button -->

                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
      <!--
        <img class="img-hexPagina-contac" src="../assets/js/services/hexagonos-Pagina/hexPagin.svg">
       -->
    </section>
    </div>
</template>
<style>
  .color_33 {
    color: #35547c;
  }
  .fuenteContacto{
    font-weight: 300;
  }
  #bannercontacto {
    background-image: url('../assets/js/services/Contactohead.svg');
    background-size:100%;
    background-repeat: no-repeat !important;
  }
  .containerheader{
    margin-left: 120px;
  }

  @media(max-width: 1000px ){
  #bannercontacto {
    background-image: url('../assets/js/services/Contactoresponsive.svg');
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
    import '../assets/css/contact.scss'
    import { hideLoader } from '../assets/js/utils';
    export default {
        name: "Contacto",
        watch: {
            TarjetasCarruselTable: function () {
                this.renderComponent = false;
                setTimeout(() => this.renderComponent = true, 1000);
            }
        },
        data: function () {
            return {
                contact: {
                    name: "",
                    email: "",
                    telf: "",
                    mensaje: ""
                },
                contactHover: false,
                contactHoverTel: false,
                contactHoverUbi: true,
            }
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        mounted() {
          hideLoader();
        },

        methods: {
            testMethod(){
            },
            sendNotification() {
                const message = `Hola! \nMe quiero comunicar con ustedes
                        Mi nombre es: ${this.contact.name}
                        Correo: ${this.contact.email}
                        Teléfono: ${this.contact.telf}
                        Asunto: ${this.contact.asunto}
                        Mensaje: ${this.contact.mensaje}`.replace(/  +/g, '');

                window.open(`https://api.whatsapp.com/send?phone=525567919880&text=${encodeURIComponent(message)}`, "_target")
            },
        },
    };
</script>
