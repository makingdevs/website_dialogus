<template>
  <div id="app">
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
                      <img  id="logo" src="./assets/logo2.webp" alt="logo" /></router-link>
                    <!-- end logo -->
                  </div>

                  <div class="navbar-toggler" id="menu" ></div>

                  <!-- menu area -->
                  <ul class="navbar-nav ms-auto" id="nav" style="display: none" @click="hiddenMenu">
                    <li>
                      <router-link to="/home" class="">
                        Home
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/about" class="">
                        Nosotros
                      </router-link>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/estrategia">Estrategia</a>
                        <a class="dropdown-item" href="/cumplimiento">Cumplimiento</a>
                        <a class="dropdown-item" href="/capital">Capital Humano</a>
                        <a class="dropdown-item" href="/diagnostico">Diagnóstico</a>
                      </div>
                    </li>

                    <li>
                      <router-link to="/noticias" class="">
                        Noticias
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/contacto" class="" >
                        Contacto
                      </router-link>
                    </li>
                    <li>
                      <a class="butn btn-circle border-show" id="buttonAgenda" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="cursor: pointer">
                        Agenda una cita
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
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content" style="background: transparent; border: 0px;">
      <div class="modal-header justify-content-between" style="border: 0; padding: 10px 0px;">
        <div style="margin-right: 39px;" />
        <h5 class="modal-title text-white" id="staticBackdropLabel" align="center">Agenda una cita</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="margin: 0px"></button>
      </div>
      <div class="modal-body calendly-custom">
        <vue-calendly url="https://calendly.com/jovany-makingdevs" class="calendly-custom"></vue-calendly>
        
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
              <div class="row col">
                  <div class="col-sm-6 col-lg-3 mb-2-4 mb-lg-0">
                    <div class="d-flex justify-content-start">
                      <img src="./assets/js/services/DiaBlan.svg" alt="..." width="300" style="margin-left: 25px; margin-top: -60px;">
                    </div>
                    <div class="d-flex justify-content-start">
                      <p align="left" class="mb-3-6 text-white" style="margin-left: 35px;">
                        55 16556739998
                        contactanos@dialogus.com.mx
                      </p></div>
                      <div class="row align-items-center">
                          <div class="col-lg-12 mb-3">
                              <div>
                                <ul>
                                  <div class="d-flex justify-content-start">
                                    <li>
                                      <a href="https://twitter.com/Dialogus_LAT"><img src="./assets/js/services/TW.svg" width="50" style="margin: 8px;"></a>
                                      <a href="https://www.facebook.com/DialogusConsultores"><img src="./assets/js/services/FB.svg" width="50" style="margin: 8px;"></a>
                                      <a href="https://www.linkedin.com/company/dialogus-consultores/"><img src="./assets/js/services/IN.svg" width="50" style="margin: 8px;"></a>
                                    </li> 
                                  </div>
                                </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-4 col-lg-2 mb-2-4 mb-lg-0">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <ul class="list-style1" align="left">
                            <li>
                              <router-link to="/about" class="h5">
                                Nosotros
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/about" class="">
                                Propósito
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/about" class="">
                                Misión
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/about" class="">
                                Visión
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-4 col-lg-2 mb-2-4 mb-lg-0">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <ul class="list-style1" align="left">
                            <li>
                              <p class="h5" style="color:white">
                                Servicios
                              </p>
                            </li>
                            <li>
                              <router-link to="/estrategia" class="">
                                Estrategia
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/cumplimiento" class="">
                                Cumplimiento
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/capital" class="">
                                Capital Humano
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/diagnostico" class="">
                                Diagnóstico
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-4 col-lg-2 mb-2-4 mb-lg-0">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <ul class="list-style1" align="left">
                            <li>
                              <router-link to="/noticias" class="h5">
                                Noticias
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-4 col-lg-2 mb-2-4 mb-lg-0">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <ul class="list-style1" align="left">
                            <li>
                              <router-link to="/contacto" class="h5">
                                Contacto
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>

              </div>
        </div>
      </footer>


  </div>
</template>

<style>
/* home */
#buttonAgenda {
  margin-top: 19px;
  margin-left: 9px;
  font-weight: 900;
}
/* home */
#menu {

}
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    padding: -30px;
  }

  #nav a {
    font-weight: bold;
    color: #ffffff;
    transition: background-color 0.8s linear 0.2s;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
    transition: background-color 0.8s linear 0.2s;
  }
  .header-style1 .navbar-toggler {
    background: #ffffff;
}
.footer-title:before {
    background: rgb(255 212 31) !important;
}

  .fa-mobile-alt:before{
    content: "\f3c5";
    color: #000000 ;
}
.fa-map-marker-alt:before{
    content: "\f3c5";
    color: #ffffff ;
}
.fa-envelope:before{
    content: "\f3c5";
    color: #ffffff ;
}
footer{
  background-color: #5B5D5E !important;
  padding: 20px 0 0;
  font-size: 20px;
}
.col-lg-2 {
    flex: 0 0 auto;
    width: 15%;
}
a, a:active, a:focus {
    color: #ffffff !important;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
}
  .bg-nav {
    background-color: #35547c;
    transition: background-color 0.8s linear 0.2s;
  }
  @media screen and (max-width: 991px){
  .navbar ul li a {
    width: 100%;
    border-bottom: 0;
    background:#35547c;
    transition: background-color 0.8s linear 0.2s;
  }
}

  .address-icon {
    background-color : #5B5D5E !important;
  }
  .footer-bar {
    background: #191919 !important;
  }
  .share-post li a{
    background-color: #191919 !important;
  }
  .footer-title:before {
    background: rgb(255 212 31) !important;
  }
  .fondoCuadros{
    background-color : #ffc107 !important;
  }

  header.scrollHeader .navbar-default {
  background-color: #35547c !important;
  transition: background-color 0.8s linear 0.2s;
}

@media screen  and (max-width: 990px ){
  #buttonAgenda {
    margin-top: 0px;
    margin-left: 0px;
    font-weight: 900;
    background: #35547c !important;
    border-radius: 0px !important;
    padding: 14px 20px !important;
    height: unset !important;
    font-size: 14px !important;
  }
}
</style>
<script>
  import jQuery from 'jquery';
  // eslint-disable-next-line no-unused-vars
  let $ = jQuery;
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
      eventFire(element, typeEvent){
        if (element.fireEvent) {
          element.fireEvent('on' + typeEvent);
        } else {
          var evObj = document.createEvent('Events');
          evObj.initEvent(typeEvent, true, false);
          element.dispatchEvent(evObj);
        }
      }, 
      hiddenMenu() {
        if(window.innerWidth < 990){
          const element = document.getElementById("menu");
          window.scroll(0, 200)
          this.eventFire(element, 'click')
        }
      },
      test() {
      },
      changeColorNabvarWithScroll() {
        window.addEventListener("scroll", function () {
          if (window.pageYOffset > 100) {
            this.nav.classList.add("bg-nav", "shadow");
          } else {
            this.nav.classList.remove("bg-nav", "shadow");
          }
        });
      },
    },
  };
</script>