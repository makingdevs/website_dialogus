<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <slot></slot>
        <div class="vl"></div>
      </div>
      <div class="col-5">
        Cuerpo de la tarjeta
      </div>
      <div class="col-5">
        Imagen de la tarjeta
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
    icon: String,
    imageUrl: String
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
.img3 {
  max-width: 100%;
  height: 127px;
  vertical-align: top;
  width: 472px;
  position: absolute;
  margin-left: -193px;
}

.vl {
  border-left: 6px solid green;
  height: 200px;
  margin-left: 120px;
}
</style>
