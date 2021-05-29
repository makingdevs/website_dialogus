<template>
  <div id="app">
      <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3" id="nav">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="https://static.wixstatic.com/media/333290_6cf55003a0f3482d95fc20a4530141ea~mv2.png/v1/fill/w_194,h_40,al_c,q_85,usm_0.66_1.00_0.01/dialogusCONTRASTE.webp" alt="dialogusCONTRASTE.png" style="width:194px;height:40px;object-fit:cover;object-position:50% 50%"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="#" id="dialogus">Dialogus | </a> 
            </li>
            <li class="nav-item">
              <a class="nav-link text-white dialogus" href="#">Nosotros | </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Servicios | </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white dialogus" href="#">Blog | </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  transition: background-color 0.8s linear 0.2s;
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-nav {
  background-color: #2f547c;
}
</style>
<script>

export default {
  name: "app",
  data: function () {
    return {
      title: 'La Jungla'
    };
  },
  components: {},
  created: function () {
    console.log("Hello word app");
    this.changeColorNabvarWithScroll();
  

  },
  mounted(){
    this.$root.$on('title', title => {
      this.title = title;
    });
  },
  methods: {
    test(){
      console.log("test")
    },
    changeColorNabvarWithScroll(){
      console.log("changeColorNabvarWithScroll")
        window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        this.nav.classList.add('bg-nav', 'shadow');
      } else {
        this.nav.classList.remove('bg-nav', 'shadow');
      }
    });
    }
  },
};
</script>

