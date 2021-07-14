<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 mobile-hide">
        <slot></slot>
        <div class="verticale-line"></div>
      </div>
      <div class="col-md-7 col-lg-6" style="margin: inherit;">
        <div class="card card-style5 mobile-space">
          <div class="card-body mobile-space">
            <h5 class="ttarjeta">{{title}}</h5>
            <hr>
              <p class="ctarjeta">{{bodyText}}</p>
              <p align="left">
                <a class="butn small" href="" ><span>{{buttonText}}</span></a>
              </p>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-lg-4 bg-img cover-background min-height-300">
        <img class="image-service" :src="require(`../assets/${imageSquare}`)" alt="">
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CardService',
  props: {
    title: String,
    bodyText: String,
    imageUrl: String,
    buttonText: String,
    imageSquare: String
  },
  data: () => {
    return {
      src: 'Recurso 1.svg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-service {
  max-width: 100%;
  height: 371px;
  vertical-align: top;
  width: 450px;
  margin-left: -23px;
}

.ttarjeta{
  color: #35547c!important;
  text-align: left;
}

.ctarjeta{
  text-align: left;
  font-size: 20px;
  text-align: justify;
}

.verticale-line {
  border-left: 10px solid rgb(255, 255, 255);
  height: 400px;
  margin-left: 90px;
}
.card-style5 {
    padding: 0px;
    border: 1px solid #ededed;
    height: 70%;
}

.butn.small {
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 15px !important;
}

hr:not([size]) {
    height: 3px;
}
hr {
    margin: 1rem 0px;
    color: #ffc107;
    background-color: currentColor;
    border: 20;
    opacity: 10;
    width: 10%;
}
@media (max-width: 1246px) {
  .verticale-line{
    margin-left: 79px;
  }
}

@media (max-width:1198px){
  .verticale-line{
    margin-left: 64px;
  }
}

@media (max-width: 990px) {

  .mobile-hide {
    display: none;
  }
  .mobile-space{
    padding: 3px !important;
  }
  
  .image-service{
    height: 240px;
  }
  .card-style5 {
    height: unset;
  }
}
</style>
