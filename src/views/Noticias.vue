<template>
    <div>
        
        <!-- PAGE TITLE
        ================================================== -->
        <section class="page-title-section top-position bg-img cover-background" data-overlay-dark="55" id="banner2">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <h1>Noticias</h1>
                    </div>
                    <div class="col-md-12">
                        <ul class="ps-0">
                            <li>
                                <router-link to="/home" class="">
                                    Home
                                  </router-link></li>
                            <li>
                                <router-link to="/noticias" class="">
                                    Noticias
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<style>
    #banner2 {
        background-image: url('../assets/fondo5.jpeg');
    }
</style>