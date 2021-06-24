<template>
  <div id="app">
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
                      <a href="/contacto" class="">
                        Contacto
                      </a>
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
                  <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                      <div class="mb-1-6">
                          <img src="./assets/logo2.webp" alt="...">
                      </div>
                      <p class="mb-1-6 text-white">Brindamos instrucción de vida, junto con el grupo y la empresa también.</p>
                      <div class="row align-items-center">
                          <div class="col-lg-12 mb-3">
                              <div class="media">
                                  <div class="address-icon">
                                      <i class="far fa-envelope"></i>
                                  </div>
                                  <div class="media-body align-self-center">
                                      <h6 class="text-white mb-0">Email </h6>
                                      <p class="text-white mb-0">contactanos@dialogus.com.mx</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-12 mb-3">
                              <div class="media">
                                  <div class="address-icon">
                                      <i class="fas fa-mobile-alt"></i>
                                  </div>
                                  <div class="media-body align-self-center">
                                      <h6 class="text-white mb-0">Whatsapp</h6>
                                      <p class="text-white mb-0">(+44) 123 456 789</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="media">
                                  <div class="address-icon">
                                      <i class="fas fa-map-marker-alt"></i>
                                  </div>
                                  <div class="media-body align-self-center">
                                      <h6 class="text-white mb-0">Localización</h6>
                                      <p class="text-white mb-0">Dialogus, Periferico Sur, Equipamiento Periférico Picacho Ajusco Canal 13</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <h3 class="footer-title h5">Explorar</h3>
                          <ul class="list-style3">
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
                              <router-link to="#" class="">
                                Contacto
                              </router-link>
                            </li>
                            <li>
                              <router-link to="login" class="">
                                login
                              </router-link>
                            </li>
                          </ul>
                      </div>
                  </div>

                  <div class="col-sm-6 col-lg-6">
                      <div class="ps-md-1-6 ps-xl-1-9">
                          <h3 class="footer-title h5">Generar una cita</h3>
                          <form class="quform newsletter-form w-90 w-sm-100" action="quform/newsletter-two.php" method="post" enctype="multipart/form-data" onclick="">
                            <div class="input-group mb-3">
                              <span class="input-group-text fondoCuadros" id="basic-addon1">Nombre</span>
                              <input type="text" class="form-control" placeholder="Nombre Completo" aria-label="Nombre Completo" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                              <span class="input-group-text fondoCuadros" id="basic-addon1">Telefono</span>
                              <input type="text" class="form-control" placeholder="Ingrese Telefono" aria-label="Ingrese Telefono" aria-describedby="basic-addon1">
                            </div>
                            
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2">
                              <span class="input-group-text fondoCuadros" id="basic-addon2">@example.com</span>
                            </div>

                            <div class="input-group">
                              <span class="input-group-text fondoCuadros">Motivo de cita</span>
                              <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <br>
                            <button type="button" class="btn btn-success">Enviar</button>
                              
                          </form>
                      </div>
                  </div>
              </div>
                        <div class="footer-bar">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6 text-center text-md-start mt-3 mt-md-0 order-2 order-md-1">
                          <p class="d-inline-block text-white mb-0">&copy; 2021 Desarrollado por <a href="https://www.dialogus.com.mx/" class="text-secondary">Dialogüs</a></p>
                      </div>
                      <div class="col-md-6 text-md-end order-1 order-md-2">
                          <p class="text-white d-inline-block font-weight-600 mb-0 align-middle">Estamos en: </p>
                          <ul class="share-post">
                              <li>
                                  <a href="https://www.facebook.com/DialogusConsultores"><i class="fab fa-facebook-f "></i></a>
                              </li>
                              <li>
                                  <a href="https://twitter.com/search?q=%40Dialogus_LAT&src=typed_query"><i class="fab fa-twitter"></i></a>
                              </li>
                              <li>
                                  <a href="https://mx.linkedin.com/jobs/search?keywords=Dialogus-consultores&location=Ecatepec%20de%20Morelos%2C%20M%C3%A9xico%2C%20M%C3%A9xico&geoId=101340577&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"><i class="fab fa-linkedin-in"></i></a>
                              </li>
                          </ul>
                      </div>
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #eb2020;
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

  .bg-nav {
    background-color: #35547c;
  }
  .address-icon {
    background-color : #191919 !important;
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