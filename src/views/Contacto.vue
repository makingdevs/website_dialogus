<template>
    <div>
<!-- PAGE TITLE
        ================================================== -->
        <section class="page-title-section top-position bg-img cover-background parallax bg-img " data-overlay-dark="55" id="img-fondo">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <h1>Contacto</h1>
                    </div>
                    <div class="col-md-12">
                        <ul class="ps-0">
                            <li><router-link to="/home">Home</router-link></li>
                            <li><router-link to="/contacto" class="text-warning">Contact</router-link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

         <!-- CONTACT INFO
        ================================================== -->
        <section class="contact-form">
            <div class="container">
                <div class="section-heading">
                    <h2 class="h1 text-secondary">Estamos aqui para ayudarte</h2>
                    <div class="dotted-box">
                      <span class="dotted"></span>
                      <span class="dotted"></span>
                      <span class="dotted"></span>
                    </div>
                  </div>
                <div class="row">
                    <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0 contact-border">
                        <div class="contact-wrapper">
                            <div class="contact-icon">
                                <i class="ti-mobile"></i>
                            </div>
                            <div class="contact-content">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3">Llámanos</h4>
                                <h2 class="title-hover">Llámanos</h2>
                                <router-link to="#!" class="d-block font-weight-500 mb-1 text-dark">(+44) 123 456 789</router-link>
                                <router-link to="#!" class="font-weight-500 text-dark">+ (124) 1523-567-9874</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-1-6 mb-md-1-9 mb-lg-0 contact-border">
                        <div class="contact-wrapper">
                            <div class="contact-icon">
                                <i class="ti-email"></i>
                            </div>
                            <div class="contact-content">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3">Email Aqui</h4>
                                <h2 class="title-hover">Email</h2>
                                <router-link to="#!" class="d-block font-weight-500 mb-1 text-dark">contactanos@dialogus.com.mx</router-link>
                                <router-link to="#!" class="font-weight-500 text-dark">info@yourdomain.com</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-wrapper">
                            <div class="contact-icon">
                                <i class="ti-map-alt"></i>
                            </div>
                            <div class="contact-content ">
                                <h4 class="h3 font-weight-800 mb-2 mb-lg-3">Ubicacion</h4>
                                <h2 class="title-hover ">Ubicacion</h2>
                                <div align="center" class="text-dark">Dialogus Periferico Sur 4121, Fuentes del Pedregal Equipamiento Periférico Picacho Ajusco Canal 13</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                <!-- CONTACT FORM
        ================================================== -->
        <section class="position-relative z-index-9">
            <div class="bg-img parallax section-bg" data-overlay-dark="6" id="img-fondo2"></div>
            <div class="container position-relative z-index-9">
                <div class="row justify-content-center mb-6">
                    <div class="col-lg-9 text-center">
                        <h2 class="font-weight-600 h1 text-white mb-3 w-md-90 w-xl-80 mx-auto">El mejor caso de éxito es cuando se refleja en el crecimiento de la empresa con Dialogüs</h2>
                        <p class="font-weight-500 mb-0 text-white w-95 w-md-85 w-xl-70 mx-auto">En Dialogus entendemos y atendemos las necesidades de nuestros clientes, sin importar el tamaño o el sector, eso nos entrega una gran escalabilidad y flexibilidad para poder desarrollar diferentes proyecto en cualquier organización.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="contact-wrapper-box">
                            <div class="row">
                                <div class="col-lg-6 pe-lg-0">
                                    <img class="h-100 w-100" src="../assets/contac1.jpeg" alt="...">
                                </div>
                                <div class="col-lg-6 ps-lg-0">
                                    <div class="contact-form-area">
                                        <h3 class="mb-3 text-secondary">Llámanos o rellena el formulario</h3>
                                        <p class="mb-1-6 text-dark">Si podemos ayudarlo de alguna forma, complete este formulario. Te ayudaremos y nos pondremos en contacto.</p>

                                        <form class="quform" action="quform/contact.php" method="post" enctype="multipart/form-data" onclick="">

                                            <div class="quform-elements">

                                                <div class="row">

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">
                                                            <label for="name">Tu Nombre <span class="quform-required">*</span></label>
                                                            <div class="quform-input">
                                                                <input class="form-control" id="name" type="text" name="name" placeholder="Tu nombre aqui" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">
                                                            <label for="email">Tu Email <span class="quform-required">*</span></label>
                                                            <div class="quform-input">
                                                                <input class="form-control" id="email" type="text" name="email" placeholder="Tu email aqui" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">
                                                            <label for="subject">Tu Asunto <span class="quform-required">*</span></label>
                                                            <div class="quform-input">
                                                                <input class="form-control" id="subject" type="text" name="subject" placeholder="Tu asunto aqui"/>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Text input element -->
                                                    <div class="col-md-6">
                                                        <div class="quform-element">
                                                            <label for="phone">Número de contacto</label>
                                                            <div class="quform-input">
                                                                <input class="form-control" id="phone" type="text" name="phone" placeholder="Tu numero aqui" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <!-- End Text input element -->

                                                    <!-- Begin Textarea element -->
                                                    <div class="col-md-12">
                                                        <div class="quform-element">
                                                            <label for="message">Mensaje <span class="quform-required">*</span></label>
                                                            <div class="quform-input">
                                                                <textarea class="form-control" id="message" name="message" rows="3" placeholder="Dejanos algunas palabras"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Textarea element -->

                                                    <!-- Begin Submit button -->
                                                    <div class="col-md-12">
                                                        <div class="quform-submit-inner">
                                                            <button class="butn theme butn-md btn-circle" type="submit"><span class="colorT">ENVIAR MENSAJE</span></button>
                                                        </div>
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
                    </div>
                </div>
            </div>
        </section>

        <!-- map -->
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.4608114460298!2d-99.21152168459653!3d19.30580028695644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdffe9c197b923%3A0xcd6f6f253728094e!2sDialogus!5e0!3m2!1ses-419!2smx!4v1624422512308!5m2!1ses-419!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</template>

<style>
.btn-circle {
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.contact-icon i {
    color: #35547c !important;
    border: 2px solid #ffc107 !important;
}
.colorT{
    color: #35547c;
}
.colorLineas{
    background-color: #ffc107 !important;
}
.dotted{
    background-color: #ffc107 !important;
}
.contact-wrapper:hover .contact-icon i {
  background: #ffc107 !important; 
  color: #ffffff !important;
  border: 2px solid #35547c !important; 
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
#img-fondo{
    background-image: url('../assets/contac.jpeg');
}
#img-fondo2{
    background-image: url('../assets/contac2.jpeg');
}
</style>
<script>
    export default{
        created: function () {
          window.addEventListener('scroll', this.handleScroll);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },
    };
    </script>