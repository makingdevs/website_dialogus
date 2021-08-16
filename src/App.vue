<template>
  <div id="app" class="app">
    <!-- navbar -->
    <header class="header-style1 menu_area-light navbarMovil">
      <div class="navbar-default nav">
        <!-- start top search -->
        <div class="top-search bg-primary">
          <div class="container">
            <form class="search-form" action="search.html" method="GET" accept-charset="utf-8">
              <div class="input-group">
                <span class="input-group-addon cursor-pointer">
                  <button class="search-form_submit fas fa-search text-white" type="submit"></button>
                </span>
                <input type="text" class="search-form_input form-control" name="s" autocomplete="off"
                  placeholder="Type & hit enter..." />
                <span class="input-group-addon close-search mt-1"><i class="fas fa-times"></i></span>
              </div>
            </form>
          </div>
        </div>
        <!-- end top search -->
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-12">
              <div class="menu_area">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <div class="navbar-header navbar-header-custom">
                    <!-- start logo -->
                    <router-link to="/home" class="navbar-brand">
                      <img id="logo" src="./assets/logo2.png" alt="logo" />
                    </router-link>
                    <!-- end logo -->
                  </div>

                  <div class="navbar-toggler" id="menu"></div>

                  <!-- menu area -->
                  <ul class="navbar-nav ms-auto nav-custom" id="nav" style="display: none" @click="hiddenMenu($event)">
                    <li>
                      <router-link to="/home" style="font-size: 16px;" class="subFuente">
                        Inicio
                      </router-link>
                    </li>

                    <li>
                      <router-link  to="/about" style="font-size: 16px;" class="subFuente">
                        Nosotros
                      </router-link>
                    </li>

                    <li>
                      <router-link  to="#!" style="font-size: 16px;" id="eventService" class="d-flex subFuente">
                        <div>
                          servicios
                        </div>
                        <i class="fas fa-sort-down show-arrow" style="margin-left: 10px;"></i>
                      </router-link>
                      <ul class="p-0">
                        <div class="sub-menu-services p-3">
                          <li>
                            <router-link to="/estrategia" class="subServicios subFuente">Estrategia</router-link>
                          </li>
                          <li>
                            <router-link to="/capital" class="subServicios subFuente">Capital Humano</router-link>
                          </li>
                          <li>
                            <router-link to="/cumplimiento" class="subServicios subFuente">Cumplimiento</router-link>
                          </li>
                          <li>
                            <router-link to="/diagnostico" class="subServicios subFuente">Diagnóstico</router-link>
                          </li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <router-link  to="/eventos" style="font-size: 16px;" class="subFuente">
                        Eventos
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/contacto" style="font-size: 16px;" class="subFuente">
                        Contacto
                      </router-link>
                    </li>
                    <li class="d-flex align-items-center">
                      <button class="btn-circle schedule-button btn-color-button p-2" id="buttonAgenda"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor: pointer; padding-bottom: 26px !important;">
                        <i class="far fa-calendar-alt me-0" style="font-weight: 500 !important;"></i>
                        <span class="text-button padding-agenda" style="font-size: 16px; font-weight: 500;"> Agenda una cita </span>
                    </button>
                    </li>
                  </ul>
                  <!-- end menu area -->

                  <!-- start attribute navigation -->

                  <!-- end attribute navigation -->
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />

    <!-- Calendly
        ================================================== -->
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content" style="background: transparent; border: 0px;">
          <div class="modal-header justify-content-between" style="border: 0; padding: 10px 0px;">
            <div style="margin-right: 39px;" />
            <h5 class="modal-title text-white" id="staticBackdropLabel" align="center">Agenda una cita</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
              style="margin: 0px"></button>
          </div>
          <div class="modal-body calendly-custom">
            <vue-calendly url="https://calendly.com/dialogus" class="calendly-custom"></vue-calendly>

          </div>

        </div>
      </div>
    </div>

    <!-- End Calendly
        ================================================== -->

    <!-- FOOTER WEB
        ================================================== -->
    <footer id="webfooter" style="padding: 30px">
      <div id="contacto" class="container-fluid" style="margin-top: 70px">
        <div class="d-flex justify-content-between flex-mobile-footer">
          <div class="d-flex justify-content-start">
            <img src="./assets/js/services/DiaBlan.svg" alt="..." width="300"
              style="margin-left: 0px; margin-top: -60px;">
          </div>
          <div class="d-flex justify-content-start flex-column" style="margin-left: 15%;">
            <ul class="list-style1" align="left">
                <router-link to="/about" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px">
                  Nosotros
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/estrategia" class="text-footercolor font-weight-500 font-poppins submenuServices" style="font-size: 23px">
                  Servicios
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/eventos" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px">
                  Eventos
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column" style="margin-right: 5%">
            <ul class="list-style1" align="left">
                <router-link to="/contacto" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px; ">
                  Contacto
                </router-link>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-mobile-footer">
          <div class="d-flex justify-content-start">
            <p align="left" class="font-poppins correo-footer" >
              contactanos@dialogus.com.mx
            </p>
          </div>
          <div class="d-flex flex-column bg-card-footer">
            <div class="hr-footer" />
          </div>
        </div>
        <div class="d-flex justify-content-between flex-mobile-footer" style="margin-left: -40px">
          <div class="d-flex justify-content-start" style="margin-left: 0px">
            <ul class="socialmedia" style="margin-left: 0px">
              <a class="socialmedia" href="https://twitter.com/Dialogus_LAT"><img src="./assets/js/services/TW.svg"
                  width="50" style="margin: 5px;"></a>
              <a href="https://www.facebook.com/DialogusConsultores"><img src="./assets/js/services/FB.svg" width="50"
                  style="margin: 5px;"></a>
              <a href="https://www.linkedin.com/company/dialogus-consultores/"><img src="./assets/js/services/IN.svg"
                  width="50" style="margin: 5px;"></a>
            </ul>
          </div>
          <div class="d-flex flex-column bg-card-footer1">
            <p align="center" class="font-weight-300 font-poppins footer-text">
              All Rights Reserved &copy; 2021 | Dialogus Consultores
            </p>
          </div>
        </div>
      </div>
    </footer>
<!-- FOOTER MOBILE
        ================================================== -->
        <footer id="mobilefooter" style="padding: 13px">
      <div id="contacto" class="container-fluid" style="margin-top: 100px">
        <div class="d-flex justify-content-between flex-mobile-footer">
          <div class="d-flex justify-content-start">
            <img src="./assets/js/services/DiaBlan.svg" alt="..." width="300"
              style="margin-left: 0px; margin-top: -60px;">
          </div>
          <div class="d-flex justify-content-between flex-mobile-footer">
            <div class="d-flex justify-content-start">
              <p align="left" class="font-weight-300 font-poppins correo-footer">
                contactanos@dialogus.com.mx
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between flex-mobile-footer" style="margin-left: -40px">
          <div class="d-flex justify-content-start" style="margin-left: 0px">
            <ul class="socialmedia" style="margin-left: 0px">
              <a class="socialmedia" href="https://twitter.com/Dialogus_LAT"><img src="./assets/js/services/TW.svg"
                  width="50" style="margin: 5px;"></a>
              <a href="https://www.facebook.com/DialogusConsultores"><img src="./assets/js/services/FB.svg" width="50"
                  style="margin: 5px;"></a>
              <a href="https://www.linkedin.com/company/dialogus-consultores/"><img src="./assets/js/services/IN.svg"
                  width="50" style="margin: 5px;"></a>
            </ul>
          </div>
        </div>
          <div class="d-flex justify-content-start flex-column">
          </div>
          <div class="d-flex justify-content-start flex-column">
          </div>
          <div class="d-flex justify-content-start flex-column">
          </div>
          <div class="d-flex justify-content-start flex-column">
          </div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/about" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px; margin-left:10px;">
                  Nosotros
                  <div class="hr-footermobile" />
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/estrategia" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px; margin-left:10px;">
                  Servicios
                  <div class="hr-footermobile" />
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/eventos" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px; margin-left:10px;">
                  Eventos
                  <div class="hr-footermobile" />
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/contacto" class="text-footercolor font-weight-500 font-poppins" style="font-size: 23px; margin-left:10px;">
                  Contacto
                </router-link>
            </ul>
          </div>
          <div class="m-top-28" />
          <div class="hr-footermobiledown" />
          <div class="d-flex justify-content-between flex-mobile-footer">
            <div class="d-flex Consultores">
              <p align="center" class="font-weight-300 font-poppins footer-text">
                All Rights Reserved &copy; 2021 | Dialogus Consultores
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>


<script>
  import jQuery from 'jquery';
  // eslint-disable-next-line no-unused-vars
  let $ = jQuery;
  import './assets/css/app.scss'
  export default {
    name: "app",
    data: function () {
      return {
        title: "Dialogus",
      };
    },
    components: {},
    created: function () {
      this.changeColorNabvarWithScroll();
    },
    mounted() {
      this.$root.$on("title", (title) => {
        this.title = title;
      });
    },
    methods: {
      eventFire(element, typeEvent) {
        if (element.fireEvent) {
          element.fireEvent('on' + typeEvent);
        } else {
          var evObj = document.createEvent('Events');
          evObj.initEvent(typeEvent, true, false);
          element.dispatchEvent(evObj);
        }
      },
      hiddenMenu(event) {
        if (window.innerWidth < 990) {
          if (event.target.id !== 'submenuNav') {
            const element = document.getElementById("menu");
            window.scroll(0, 200)
            this.eventFire(element, 'click')
          }
          if(event.target.classList.contains("subServicios")){
            const elementServie = document.getElementById("submenuNav");
            this.eventFire(elementServie, 'click')
          }
        }
      },
      test() {
      },
      changeColorNabvarWithScroll() {
        window.addEventListener("scroll", function () {
          if (window.pageYOffset > 100) {
            // eslint-disable-next-line no-empty
          }
        });
      },
    },
  };
</script>