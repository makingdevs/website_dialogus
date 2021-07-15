<template>
  <div class="container" style="margin-top: 10px">
    <div class="row">
      <div class="col-2 mobile-hide">
        <slot></slot>
        <div class="verticale-line"></div>
      </div>
      <div class="col-md-6 col-sm-12 col-body-text-custom">
        <div class="d-flex flex-column body-card">
          <div class="title">
            {{title}}
          </div>
          <hr class="small-line">
          <div class="body-text">
            {{bodyText}}
          </div>
          <div class="button-card">
            <button class="butn small">{{buttonText}}</button>
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
  
  .col-body-text-custom {
    padding-right: 0px;
  }

  .col-image-custom {
    height: 375px; 
    padding-left: 0px;
  }

  .image-container {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0px 14px 14px 0px;
  }

  .body-card {
    background-color: white;
    height: 375px;
    padding: 30px;
    border-radius: 14px 0px 0px 14px;
  }

  .button-card {
    margin-top: 15px;
  }

  .title {
    color: #35547c !important;
    font-size: 20px;
  }

  .verticale-line {
    border-left: 10px solid rgb(255, 255, 255);
    height: 400px;
    margin-left: 90px;
  }

  .butn.small {
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 15px !important;
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

  @media (max-width:1198px) {
    .verticale-line {
      margin-left: 64px;
    }
  }

  @media (max-width: 990px) {

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
  }


</style>