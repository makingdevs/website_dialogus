<template>
    <div class="eventos py-5"> 
        <!-- PAGE TITLE
        ================================================== -->
        <section id="bannereventos" class="banners-services">
            <div class="containerheader">
              <div class="row">
                <div class="col-lg-6">
                  <div class="m-top-28" />
                  <h1 class="font-weight-700 font-poppins" style="color:#35547c">Eventos</h1>
                  <div class="hr-header" />
                  <div class="m-top-28" />
                  <h3 class="font-weight-300 font-poppins" style="color:#35547c">Descubre más con la oferta que tenemos de eventos y cursos de la mano de nuestros expertos.</h3>
                </div>
              </div>
            </div>
          </section>

        <!-- BLOG GRID
        ================================================== -->
        <section class="blog">
            <div class="container">
                    <h1 align="center"><i class="fas fa-angle-double-right text-warning"></i>
                        <span class="color_34"> EVENTOS </span></h1> <div class="m-top-28" />
                <div class="row" >
                    <div class="col-lg-6 col-xl-4 mb-1-6 mb-md-1-9" :index="index" v-for="(tarjeta, index) in TarjetasCarruselTable" :key="index">
                        <article class="card card-style2 card-style4 h-100">
                            <div class="card-img"><img :src="tarjeta.image" alt="..." class="tamañoEventos">
                            </div>
                            <div class="card-body">
                                <ul class="meta-tags">
                                    <li>
                                        <router-link to="/eventosDetalles" class="text-dark">
                                            <i class="ti-calendar me-1 text-warning"></i> {{tarjeta.date}}
                                        </router-link>
                                    </li>
                                </ul>
                                <h3 class="h4 mb-3">{{tarjeta.title}}</h3>
                                <p  align="left" class="text-dark">{{tarjeta.description}}</p>
                                <div class="d-flex justify-content-center">
                                    <a class="tolowercase button-register" :href="tarjeta.urlRegister" target="_blank"
                                    ><span class="text-button">Regístrate </span></a>
                                  </div> 

                            </div>
                        </article>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<style>
/*PART OF EVENTS TITLES*/
#bannereventos {
    background-image: url('../assets/js/services/Eventoshead.svg');
    background-size:100%;
    background-repeat: no-repeat !important;
  }
.containerheader{
    margin-left: 120px;
    text-align: left;
  }
/*END*/
.pagination .active a {
    background-color: #0098a5;
    color: #fcfcfc;
    border: 1px solid #dbdbdb;
    cursor: default;
}


.pagination a {
    float: left;
    font-size: 16px;
    padding: 0 18px;
    line-height: 40px;
    text-decoration: none;
    font-weight: 800;
    border: 1px solid #ffffff;
    background: #0098a5;
    border-radius: 35px;
    color: #ffffff;
}
.pagination a:hover {
      background-color: #ffffff;
      border: 1px solid #0098a5;
      color: #0098a5; 
      border-radius: 35px;
      }
   
.tamañoCuadros{
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    border-radius: 0;
}
.card-style2 .card-body {
    padding: 40px 30px;
    position: relative;
    background: #fff !important;
}
@media(max-width: 1000px ){
  #bannereventos {
    background-image: url('../assets/js/services/Eventosresponsive.svg');
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
  import '../assets/css/_main.scss';
  import '../assets/css/home.scss';
  import { hideLoader } from '../assets/js/utils';
  import { TarjetasCarruselTableRef } from '../dbConnection'
export default{
    
    name: "home",
    firebase: {
      TarjetasCarruselTable: TarjetasCarruselTableRef
    },
    watch: {
      TarjetasCarruselTable: function () {
        this.renderComponent = false;
        setTimeout(() => this.renderComponent = true, 1000);
      },
    },
    data : function () {
      return{
          TarjetasCarruselTable: []
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
};
</script>