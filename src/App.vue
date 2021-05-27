<template>
  <div id="app">
    <div id="nav">
      <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <a class="navbar-brand home" href="https://www.dialogus.com.mx/"><img src="https://static.wixstatic.com/media/333290_6cf55003a0f3482d95fc20a4530141ea~mv2.png/v1/fill/w_194,h_40,al_c,q_85,usm_0.66_1.00_0.01/dialogusCONTRASTE.webp" alt="dialogusCONTRASTE.png" style="width:194px;height:40px;object-fit:cover;object-position:50% 50%"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-makingdevs" aria-controls="navbar-makingdevs" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-makingdevs">
      <ul class="navbar-nav mr-auto">
      </ul>
      <div class="my-2 my-md-0">
        <ul class="navbar-nav mr-auto">
          
          <li class="nav-item">
            <a class="nav-link" href="/training">
              
              
              Dialogüs
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/services">
              
              
              Nosotros
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/#contact-us">
              
              
              servicios
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="https://blog.makingdevs.com">
              
              
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact-us">
              
              
              Contacto
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</header>
    </div>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
