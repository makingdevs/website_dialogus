<template>
    <div>
        <!-- PAGE TITLE
        ================================================== -->
        <section class="parallax page-title-section top-position bg-img cover-background" id="bannerContacto">

            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <h1 align="left">Contacto</h1><br>
                        <h3 align="left" class="text-white">Si quieres recibir más información</h3>
                        <h3 align="left" class=" text-warning">Puedes ponerte en contacto con nosotros</h3>
                        <br>
                    </div>
                    <div class="col-lg-4">
                        <img src="../assets/js/services/Contacto TT.svg" alt="" align="left">
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
                            <img v-if="!contactHoverTel" class="icon-contacto" src="../assets/js/services/contacto/contacTel.svg" @mouseover="contactHoverTel = true">
                            <img v-else class="icon-contacto" src="../assets/js/services/contacto/contacTelHover.svg" @mouseleave="contactHoverTel = false">
                            
                            <div class="contact-content">
                                <h3 class="font-weight-800 mb-2 mb-lg-3">Llámanos</h3>

                                <router-link to="#!" class="d-block font-weight-500 mb-1 text-dark">(+44) 123 456 789
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0 contact-border">
                        <div class="contact-wrapper">
                            <img v-if="!contactHover" class="icon-contacto" src="../assets/js/services/contacto/contacMsg.svg" @mouseover="contactHover = true">
                            <img v-else class="icon-contacto" src="../assets/js/services/contacto/contacMsgHover.svg" @mouseleave="contactHover = false">
                            <div class="contact-content">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3">Email Aqui</h4>

                                <router-link to="#!" class="d-block font-weight-500 mb-1 text-dark">
                                    contactanos@dialogus.com.mx</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-wrapper">
                            <img v-if="contactHoverUbi" class="icon-contacto" src="../assets/js/services/contacto/contacUbi.svg" @mouseover="contactHoverUbi = false">
                            <img v-else class="icon-contacto" src="../assets/js/services/contacto/contacUbiHover.svg" @mouseleave="contactHoverUbi = true">
                            <div class="contact-content ">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3">Ubicacion</h4>

                                <div align="center" class="text-dark">Dialogus Periferico Sur 4121, Fuentes del Pedregal
                                    Equipamiento Periférico Picacho Ajusco Canal 13</div>
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
                width="60%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <!-- CONTACT FORM
        ================================================== -->
        <section class="">
            <div class="container position-relative z-index-9">

                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="contact-wrapper-box">
                            <div class="row">
                                <div class="col-lg-2 pe-lg-0">
                                </div>
                                <div class="col-lg-9 ps-lg-0">
                                    <div class="contact-form-area">
                                        <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
                                            <span class="mb-3 color_34">Contáctanos</span>
                                        </h1> <br>

                                        <form class="quform" action="quform/contact.php" method="post"
                                            enctype="multipart/form-data" onclick="">

                                            <div class="quform-elements">

                                                <div class="row">

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">

                                                            <div class="quform-input">
                                                                <input v-model="contact.name"
                                                                    class="form-control form-control1" id="name"
                                                                    type="text" name="name"
                                                                    placeholder="Tu nombre aqui" />
                                                            </div>
                                                        </div><br>

                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">

                                                            <div class="quform-input">
                                                                <input v-model="contact.email"
                                                                    class="form-control form-control1" id="email"
                                                                    type="text" name="email"
                                                                    placeholder="Tu email aqui" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">

                                                            <div class="quform-input">
                                                                <input v-model="contact.asunto"
                                                                    class="form-control form-control1" id="subject"
                                                                    type="text" name="subject"
                                                                    placeholder="Tu asunto aqui" />
                                                            </div>
                                                        </div><br>
                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">

                                                            <div class="quform-input">
                                                                <input v-model="contact.telf"
                                                                    class="form-control form-control1" id="phone"
                                                                    type="text" name="phone"
                                                                    placeholder="Tu numero aqui" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Textarea element -->
                                                    <div class="col-md-12">
                                                        <div class="quform-element">

                                                            <div class="quform-input">
                                                                <textarea v-model="contact.mensaje"
                                                                    class="form-control form-control1" id="message"
                                                                    name="message" rows="3"
                                                                    placeholder="Dejanos algunas palabras"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Textarea element -->

                                                    <!-- Begin Submit button -->
                                                    <div class="col-md-12">
                                                        <div class="quform-submit-inner">
                                                            <div class="d-flex justify-content-center">
                                                                <button class="butn theme butn-md btn-circle"
                                                                    style="width: 35% !important;"><span
                                                                        class="text-button">Enviar
                                                                        respuesta</span></button>
                                                            </div>
                                                        </div><br>
                                                        <div class="quform-loading-wrap text-start"><span
                                                                class="quform-loading"></span></div>
                                                    </div>
                                                    <!-- End Submit button -->

                                                </div>

                                            </div>

                                        </form>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="img-hexContacto" src="../assets/js/services/hexagonos-Pagina/hex-Contacto.svg">
        </section>
    </div>
</template>

<style>
    .img-hexContacto{
    max-width: 204px;
    height: auto;
    vertical-align: top;
    position: absolute;
    margin-top: -138px;
    margin-left: 1716px;
    }
    #bannerContacto {
        background-color: #35547c;
    }

    /*icons contac*/
    .icon-contacto {
        max-width: 100%;
        height: 127px;
        vertical-align: top;
        width: 472px;
    }

    /*icons contac*/
    .btn-circle {
        width: 100%;
        height: 30px;
        text-align: center;
        padding: 6px 0;
        font-size: 12px;
        line-height: 1.428571429;
        border-radius: 15px;
    }

    .contact-icon2 {
        cursor: pointer;
        background: #ffc107;
        height: auto;
        line-height: auto;
        text-align: center;
        transition: clip-path 1s;
        clip-path: polygon(0% 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0 100%)
    }

    .contact-icon i {
        background: #ffffff !important;
        color: #0098a5 !important;
        border: 2px solid #0098a5 !important;
        width: 100px;
        height: 88px;
        text-align: center;
        padding: 6px 0;
        font-size: 51px;
        line-height: 1.428571;
        border-radius: 103px;
    }

    .colorT {
        color: #35547c;
    }

    .colorLineas {
        background-color: #ffc107 !important;
    }

    .dotted {
        background-color: #ffc107 !important;
    }

    .contact-wrapper:hover .contact-icon i {
        background-color: #0098a5 !important;
        color: #fcfcfc !important;
        border: 2px solid #ffffff !important
    }

    .section-heading:before {
        position: absolute;
        content: '';
        width: 40px;
        height: 3px;
        left: 50%;
        bottom: 0px;
        transform: translateX(-50%);
        background: #ffc107 !important;
        z-index: 1;
    }

    .section-heading .dotted-box .dotted {
        position: absolute;
        left: 50%;
        margin-left: 25px;
        width: 3px;
        height: 3px;
        bottom: 0px;
        background: #ffc107 !important;
        z-index: 1;
    }

    #img-fondo {
        background-image: url('../assets/contac.jpeg');
    }

    #img-fondo2 {
        background-image: url('../assets/contac2.jpeg');
    }
</style>
<script>
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

        },

        methods: {
            testMethod(){
                console.log(" Hoal");
            },
            sendNotification() {
                const message = `Hola! \nMe quiero comunicar con ustedes
                        Mi nombre es: ${this.contact.name}
                        Correo: ${this.contact.email}
                        Teléfono: ${this.contact.telf}
                        Asunto: ${this.contact.asunto}
                        Mensaje: ${this.contact.mensaje}`.replace(/  +/g, '');

                window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
            },
        },
    };
</script>