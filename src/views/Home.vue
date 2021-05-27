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

        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src="../assets/fondo1.webp"
              class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
              alt="../assets/fondo1.webp"/>
            <div class="carousel-caption d-none d-md-block">
              <h5 align="right">ESTRATEGIA</h5>
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

    <div class="container my-5 d-grid gap-5">
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi.
        </p>
      </div>
      <div class="p-5 border">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
          natus iusto fugit id saepe neque rerum magni laudantium accusantium
          dolorem numquam quasi. df
        </p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.banner-image {
  background-size: cover;
}
</style>