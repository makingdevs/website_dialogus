<template>
  <div class="container m-top-mobile">
    <div class="row">
      <div class="col-2 mobile-hide">
        <slot></slot>
        <div class="verticale-line"></div>
      </div>
      <div class="col-md-6 col-sm-12 col-body-text-custom">
        <div class="d-flex flex-column body-card">
          <div class="title font-weight-500 font-poppins">
            {{title}}
          </div>
          <hr class="small-line">
          <div class="body-text font-weight-300 font-poppins">
            {{bodyText}}
          </div>
          <div class="button-card">
            <button class="schedule-button button-text-cardsService">{{buttonText}}</button>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-image-custom">
        <img class="image-container" :src="require(`../assets/${imageSquare}`)">
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/home.scss'
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
        src: 'capital2.svg'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
  
  .col-body-text-custom {
    padding-bottom: 10%;
    padding-right: 0px;
  }

  .button-text-cardsService {
  width: 37%;
  padding: unset;
  border-radius: 15px;
  background: #0098a5;
  border: 2px solid #0098a5;  
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}
.button-text-cardsService:hover{
    border-radius: 15px;
    background: #ffffff;
    border: 2px solid #0098a5; 
    .text-button {
      color: #0098a5 ;
      word-wrap: break-word;
    }
  }
  .col-image-custom {
    padding-bottom: 10%;
    padding-left: 0px;
  }

  .image-container {
    height: 100%;
    width: 110%;
    object-fit: cover;
    border-radius: 0px 50px 50px 0px;
  }

  .body-card {
    background-color: #e8eaea;
    height: 100%;
    width: 100%;
    padding: 30px;
    border-radius: 50px 0px 0px 50px;
  }

  .button-card {
    margin-top: 15px;
  }

  .body-text {
    text-align: justify;
    font-family: 'Poppins', sans-serif;
  }

  .title {
    color: #35547c !important;
    font-family: 'Poppins', sans-serif;
    margin-top: 25px;
    font-size: 25px;
  }

  .verticale-line {
    border-left: 10px solid #ffc107;
    height: 400px;
    margin-left: 90px;
  }

  .butn.small {
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 15px !important;
    font-family: 'Poppins', sans-serif;
  }
  .small-line {
    margin: 1rem 0px;
    color: #ffc107;
    background-color: currentColor;
    border: 20;
    opacity: 10;
    width: 10%;
    height: 2px;
  }

  @media (max-width: 1246px) {
    .verticale-line {
      margin-left: 79px;
    }
  }

  @media (max-width:1199px) {
    .verticale-line {
      margin-left: 64px;
    }
    .button-text-cardsService {
      font-size: 15px;
    }
  }

  @media (max-width: 990px) {
    .button-text-cardsService {
      font-size: 11px;
    }
    .body-text {
      font-size: 11px;
    }

    .mobile-hide {
      display: none;
    }

    .mobile-space {
      padding: 3px !important;
    }

    .image-service {
      height: 240px;
    }

    .card-style5 {
      height: unset;
    }
  }


  @media (max-width: 768px) {
    .button-text-cardsService {
      font-size: 10.5px;
    }
    .image-container {
      border-radius: 0px 0px 14px 14px;
    }

    .body-card {
      border-radius: 14px 14px 0px 0px;
    }

    .col-image-custom {
      padding-left: 12px; 
    }

    .col-body-text-custom {
      padding-right: 12px;
    }
    .col-image-custom {
      padding-bottom: 0%;
    }
    .col-body-text-custom {
      padding-bottom: 0%;
    }
    .m-top-mobile {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 767px){
    .button-text-cardsService {
      font-size: 15px;
    }
  }

</style>