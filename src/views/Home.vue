<template>
  <div>
    <div
      class="home banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <div
        id="carouselExampleIndicators"
        class="carousel slide home banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"></button>

        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src="../assets/fondo1.webp"
              class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
              alt="../assets/fondo1.webp"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 align="right" v-if="title">{{title.value}}</h5>
              <p align="right">_____________________</p>
              <h4 align="right"><b> LOS MEJORES ASESORES </b></h4>
              <h4 align="right"><b> SE ASEGURAN DE QUE TU </b></h4>
              <h4 align="right"><b>EMPRESA ALCANCE SUS </b></h4>
              <h4 align="right"><b>METAS </b></h4>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              src="../assets/fondo2.webp"
              class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
              alt="../assets/fondo2.webp"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 align="right">CAPITAL HUMANO</h5>
              <p align="right">_____________________</p>
              <h4 align="right"><b> TUS COLABORADORES SON </b></h4>
              <h4 align="right"><b> LA BASE DE TU </b></h4>
              <h4 align="right"><b>CRECIMIENTO </b></h4>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="../assets/fondo3.webp"
              class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
              alt="../assets/fondo3.webp"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 align="right">CUMPLIMIENTO</h5>
              <p align="right">_____________________</p>
              <h4 align="right"><b> MANTENTE ACTUALIZADO </b></h4>
              <h4 align="right"><b> PARA QUE TU EMPRESA </b></h4>
              <h4 align="right"><b>ESTÉ SIEMPRE EN REGLA </b></h4>
             
            </div>
          </div>
          <div class="carousel-item">
            <video
              width="400" loop="true" muted autoplay
              class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
              <source src="../assets/mov_bbb.mp4" type="video/mp4" />
              <source src="assets/mov_bbb.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      <br>

    <div class="container my-5 d-grid gap-5" >
      <div class="p-5">
        <img align="right" src="../assets/mag1.webp" alt="">
        <h5 style="color:#FFFFFF" align="left">SOBRE NOSOTROS</h5>
        <h5 style="color:#FFFFFF" align="left">_____________________</h5>
        <img   align="left" src="../assets/dualo1.webp" class="image-size" >
        <br>
        <br>
        <h5 style="color:#FFFFFF" align="left">Visión</h5>
        <h6 style="color:#FFFFFF" align="left">{{vision}}</h6>
        <h5 style="color:#FFFFFF" align="left">Misión</h5>
        <h6 style="color:#FFFFFF" align="left">Nuestra misión es acompañar el desarrollo de nuestros</h6>
        <h6 style="color:#FFFFFF" align="left">clientes, mediante metodologías innovadoras contribuyendo</h6>
        <h6 style="color:#FFFFFF" align="left">en su rentabilidad, productividad y satisfacción.</h6>
      </div>
    </div>
    <div id="padre">
      <h3 align="center" class="titu">CONOCE NUESTROS SERVICIOS</h3>
      <h3 align="center" class="line">______________________________________________</h3>
      <span class="uno">1</span>
      <span class="dos">2</span>
      <span class="tres">3</span>
      <a href="">
      <h3 style="color:#fbfcfd" class="posicion-texto">CAPITAL HUMANO</h3>
      </a>
       <a href="">
      <h3 style="color:#fbfcfd" class="posicion-texto2">ESTRATEGIA</h3>
      </a>
      <a href="">
      <h3 style="color:#fbfcfd" class="posicion-texto3">CUMPLIMIENTO</h3>
      </a>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {HomePageTableRef} from '../dbConnection'
export default {
  name: "Home",
  firebase: {
    HomePageTable: HomePageTableRef
  },
  data: function (){
    return {
      word: {
        name: "",
        value: ""
      },
      title: {
        value: ""
      },
      vision: "",
      mision: "",
      HomePageTable: []
    }
  },
  watch: {
    HomePageTable: function (){
      console.log("cambio");
      this.HomePageTable.forEach( word => console.log(word['.key']));
      let word = this.HomePageTable.find( word => word['name'] == "vision");
      console.log(word)
      this.vision = word?.value
    }
  },
  created: function () {
    this.exampleMethod()
    console.log(this.HomePageTable)
    this.title = this.HomePageTable[0];
  },
  mounted(){
    this.title = this.HomePageTable[0]; 
  },
  components: {
    HelloWorld,
  },
  methods: {
    exampleMethod(){
      console.log("Hola mundo")
    },
    createWord(){
      this.word.name = "title";
      this.word.value = "tus colaboradores son";
      HomePageTableRef.push(this.word); 
      console.log("Palabra Crreada");
    },
    setTitle(){
      console.log(this.HomePageTable[0])
      this.title = this.HomePageTable[0]; 
    }
  }

};
</script>
<style>
.uno {
  color: rgb(var(--color_34));
  position: relative;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
  margin-top: 100px;
  top: 80px;
  right: 306px;
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
}
.dos{
  color: rgb(var(--color_34));
  position: relative;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
  margin-top: 100px;
  top: 80px;
  center: 10px;
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
}
.tres{
  color: rgb(var(--color_34));
  position: relative;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
  margin-top: 100px;
  top: 80px;
  left: 306px;
  grid-area: 3 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
}
.line{
  color: rgb(var(--color_34));
  position: relative;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  top: 100px;
}
.titu{
  color: rgb(var(--color_34));
  position: relative;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  top: 100px;
}
.posicion-texto{
  position: relative;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  top: 0px;
}
.posicion-texto2{
  position: relative;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  top: -40px;
  left: 350px;
}
.posicion-texto3{
  position: relative;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  top: -70px;
  right: 306px;
}

.image-size {
  width: 10%;
}
.banner-image {
  background-size: cover;
}
#padre {
  background-image: url("../assets/fondo4.webp");
  height: 468px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  background-size: cover;
}
.bg-text {
  background-color: rgb(14, 24, 33);
}
.card-title {
  position: absolute;    /* posición absolute con respecto al padre */
  bottom: 0;             /* posicionada en la esquina inferior derecha */
  right: 1rem;
}

</style>