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

                  <div class="navbar-toggler"></div>

                  <!-- menu area -->
                  <ul class="navbar-nav ms-auto" id="nav" style="display: none">
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

                    <li>
                      <router-link to="/servicios" class="">
                        Servicios
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/noticias" class="">
                        Noticias
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/contacto" class="">
                        Contacto
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/login" class="">
                        Login
                      </router-link>
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

                  <!-- FOOTER
        ================================================== -->
        <footer>
          <div id="contacto">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6 col-lg-4 mb-2-4 mb-lg-0">
                      <img src="./assets/js/services/DiaBlan.svg" alt="..." width="300">
                      <p class="mb-1-6 text-white" align="left">
                        55 16556739998<br>
                        contactanos@dialogus.com.mx
                      </p>
                      <div class="row align-items-center">
                          <div class="col-lg-12 mb-3">
                              <div>
                                <ul>
                                    <li>
                                      <a href="https://twitter.com/Dialogus_LAT"><img src="./assets/js/services/TW.svg" width="100"></a>
                                      <a href="https://www.facebook.com/DialogusConsultores"><img src="./assets/js/services/FB.svg" width="100"></a>
                                      <a href="https://www.linkedin.com/company/dialogus-consultores/"><img src="./assets/js/services/IN.svg" width="100"></a>
                                    </li> 
                                </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-lg-2 mb-2-4 mb-lg-0">
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
                  <div class="col-sm-6 col-lg-2 mb-2-4 mb-lg-0">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <ul class="list-style1" align="left">
                            <li>
                              <router-link to="/servicios" class="h5">
                                Servicios
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/servicios" class="">
                                Estrategia
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/servicios" class="">
                                Cumplimiento
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/servicios" class="">
                                Capital Humano
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/servicios" class="">
                                Diagnóstico
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-6 col-lg-2 mb-2-4 mb-lg-0">
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
                  <div class="col-sm-6 col-lg-2 mb-2-4 mb-lg-0">
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

        </div>
      </footer>


  </div>
</template>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    transition: background-color 0.8s linear 0.2s;
    padding: -30px;
  }

  #nav a {
    font-weight: bold;
    color: #ffffff;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
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
  }
  @media screen and (max-width: 991px){
  .navbar ul li a {
    width: 100%;
    border-bottom: 0;
    background:#35547c;
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
      console.log("Hello word app");
      this.changeColorNabvarWithScroll();
    },
    mounted() {
      this.$root.$on("title", (title) => {
        this.title = title;
      });
    },
    methods: {
      test() {
        console.log("test");
      },
      changeColorNabvarWithScroll() {
        console.log("changeColorNabvarWithScroll");
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