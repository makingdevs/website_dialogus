<template>
  <section class="bg-img cover-background full-screen pt-16 pb-8 p-lg-0 top-position min-md-height-auto" data-overlay-dark="0" id="banner">

    <div class="container d-flex flex-column">
        <div class="row align-items-center min-lg-vh-100">
            <div class="col-lg-8 mb-5 mb-lg-0">
                <h6 class="text-primary font-weight-500">gato are in safe hands</h6>
                <h1 class="text-white display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 text-shadow font-weight-800">Struggling at some stage in normal life? I can help.</h1>
                <p class="mb-2-2 w-95 w-md-75 display-29 display-md-28 text-white">The privilege coaching relationship can be an integral asset for proficient development. Shoot for the correct end goal.</p>
                <a href="#!" class="butn me-2-4 mb-2-4 mb-sm-0"><span>Download Free E-Book</span></a>
                <div class="d-block d-sm-inline-block">
                    <a class="popup-social-video video_btn small" href="https://www.youtube.com/watch?v=-ESQmzDbnL8"><i class="fas fa-play"></i></a>
                    <div class="d-inline-block align-middle ps-2-5 text-white text-start font-weight-600">Watch<span class="text-uppercase d-block">intro video</span></div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<style>

#banner {
  background-image: url('../assets/fondo1.webp');
}
  
</style>
<script>

  export default {
    name: "ThemeExample",
    data: function () {
      return {

      }
    },
    created: function () {

    },
    mounted() {

    },
    components: {
    },
    methods: {
      exampleMethod() {
        console.log("Hola mundo")
      },
    }
  };
</script>