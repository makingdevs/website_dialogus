<template>
  <div class="Services">
        <!-- PAGE TITLE
        ================================================== -->
        <section class="page-title-section top-position bg-img cover-background" id="bannerabout" data-overlay-dark="55" data-background="img/bg/bg-04.jpg">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <h1>Servicios</h1>
                    </div>
                    <div class="col-md-12">
                        <ul class="ps-0">
                            <li><a href="/home">Home</a></li>
                            <li><a href="#!">Servicios</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
         
        
  </div>
</template>
<style>
  #bannerabout {
    background-image: url('../assets/img1.jpg');

  }
  #conteo {
    background-image: url('../assets/img4.jpg');

  }

  body {
    color: #fff;
    font: 600 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
  }
  .flechaCarus {
    width : 100px
  }
  .butn {
    background:rgb( 255 ,212, 31) !important;
  }

  .box {
    background: #2db34a;
    border-radius: auto;
    cursor: pointer;
    height: auto;
    line-height: auto;
    text-align: center;
    transition-property: background, border-radius;
    transition-duration: .2s, 1s;
    transition-timing-function: linear;
    width: auto;
  }
  .card-style4 .date-wrapper {
    background: #35547c!important;
  }
  .team-wrapper .team-wrapper-inner .team-social-links{
    background: #35547c!important;
  }
  .box:hover {
    background: #ff7b29;
    border-radius: 50%;
  }

  .image-tamaño {
    height: 302px;
  }

  .tamañoNosotros {
    height: 310px;
  }

  .tamañoEventos {
    height: 260px;
  }

  .imagenCarruse {
    width: 80%;
  }

  .color_34 {
    background-color: rgb(182, 180, 180);
  }

  .v--vtt-test,
  .v--vtt-test_odd {
    will-change: transform, opacity;
    transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
  }

  .v--vtt-test_visible,
  .v--vtt-test_odd_visible {
    opacity: 1;
    transform: translateY(0);
  }

  .v--vtt-test_hidden {
    opacity: 0;
    transform: translateY(20px);
  }

  .v--vtt-test_odd_hidden {
    opacity: 0;
    transform: translateY(-20px);
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

