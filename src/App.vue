<template>
  <div id="app" class="app">
    <!-- navbar -->
    <header class="header-style1 menu_area-light">
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
                      <img id="logo" src="./assets/logo2.webp" alt="logo" />
                    </router-link>
                    <!-- end logo -->
                  </div>

                  <div class="navbar-toggler" id="menu"></div>

                  <!-- menu area -->
                  <ul class="navbar-nav ms-auto nav-custom" id="nav" style="display: none" @click="hiddenMenu($event)">
                    <li>
                      <router-link to="/home" style="font-size: 16px">
                        Home
                      </router-link>
                    </li>

                    <li>
                      <router-link  to="/about" style="font-size: 16px">
                        Nosotros
                      </router-link>
                    </li>

                    <li>
                      <router-link  to="#!" style="font-size: 16px" id="eventService" class="d-flex">
                        <div>
                          servicios
                        </div>
                        <i class="fas fa-sort-down show-arrow" style="margin-left: 10px;"></i>
                      </router-link>
                      <ul class="p-0">
                        <div class="sub-menu-services p-3">
                          <li>
                            <router-link to="/estrategia">Estrategia</router-link>
                          </li>
                          <li>
                            <router-link to="/cumplimiento">Cumplimiento</router-link>
                          </li>
                          <li>
                            <router-link to="/capital">Capital Humano</router-link>
                          </li>
                          <li>
                            <router-link to="/diagnostico">Diagnóstico</router-link>
                          </li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <router-link  to="/eventos" style="font-size: 16px">
                        Eventos
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/contacto" style="font-size: 16px">
                        Contacto
                      </router-link>
                    </li>
                    <li>
                      <a class="theme butn-md btn-circle schedule-button btn-color-button" id="buttonAgenda"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor: pointer; padding-bottom: 26px !important;"><i
                          class="ti-calendar me-1 text-white"></i>
                        <span class="text-button" style="font-size: 16px"> Agenda una cita </span>
                      </a>
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

    <!-- FOOTER
        ================================================== -->
    <footer>
      <div id="contacto" class="container-fluid">
        <div class="d-flex justify-content-between flex-mobile">
          <div class="d-flex justify-content-start">
            <img src="./assets/js/services/DiaBlan.svg" alt="..." width="300"
              style="margin-left: 25px; margin-top: -60px;">
          </div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/about" class="text-footercolor" style="font-size: 23px">
                  Nosotros
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <a href="#seccion-services" class="text-footercolor" style="font-size: 23px">
                  Servicios
                </a>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/eventos" class="text-footercolor" style="font-size: 23px">
                  Eventos
                </router-link>
            </ul>
          </div>
          <div class="vl-footer"></div>
          <div class="d-flex justify-content-start flex-column">
            <ul class="list-style1" align="left">
                <router-link to="/contacto" class="text-footercolor" style="font-size: 23px">
                  Contacto
                </router-link>
            </ul>
          </div>
          <div class="d-flex justify-content-start flex-column"></div>
        </div>
        <div class="d-flex justify-content-between flex-mobile">
          <div class="d-flex justify-content-start">
            <p align="left" class="em text-white">
              contactanos@dialogus.com.mx
            </p>
          </div>
          <div class="d-flex flex-column bg-card-footer">
            <div class="hr-footer" />

          </div>
        </div>
        <div class="d-flex justify-content-between flex-mobile">
          <div class="d-flex justify-content-start">
            <ul class="socialmedia">
              <a class="socialmedia" href="https://twitter.com/Dialogus_LAT"><img src="./assets/js/services/TW.svg"
                  width="50" style="margin: 8px;"></a>
              <a href="https://www.facebook.com/DialogusConsultores"><img src="./assets/js/services/FB.svg" width="50"
                  style="margin: 8px;"></a>
              <a href="https://www.linkedin.com/company/dialogus-consultores/"><img src="./assets/js/services/IN.svg"
                  width="50" style="margin: 8px;"></a>
            </ul>
          </div>
          <div class="d-flex flex-column bg-card-footer1">
            <p align="center" class="text-footercolor" style="margin-left: 0px; font-size: 15px;">
              All Rights Reserved 2021 | Dialogus Consultores
            </p>
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
        console.log(event);
        console.log(event.target.id);
        if (window.innerWidth < 990) {
          if (event.target.id !== 'submenuNav') {
            const element = document.getElementById("menu");
            window.scroll(0, 200)
            this.eventFire(element, 'click')
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