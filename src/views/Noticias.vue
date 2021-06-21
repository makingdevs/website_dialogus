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

        <!-- BLOG GRID
        ================================================== -->
        <section class="blog">
            <div class="container">
                <div class="section-heading">
                    <h2 class="h1 text-secondary">Our Latest Blog</h2>
                    <div class="dotted-box">
                        <span class="dotted"></span>
                        <span class="dotted"></span>
                        <span class="dotted"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-xl-4 mb-1-6 mb-md-1-9">
                        <article class="card card-style2 h-100">
                            <div class="card-img">
                                <img src="../assets/persona1.webp" alt="...">
                            </div>
                            <div class="card-body">
                                <ul class="meta-tags">
                                    <li>
                                            <i class="ti-calendar me-1 text-primary"></i> Feb 18, 2021
                                    </li>
                                </ul>
                                <h3 class="h4 mb-3"><a href="blog-details.html">5 Facts about life coach that will make you think twice.</a></h3>
                                <p>The purpose of the masterclass is to introduce the key thoughts supporting the psychodynamic approach.</p>
                                <router-link to="#" class=""></router-link>
                                <a href="blog-details.html" class="font-weight-600">read more...</a>
                            </div>
                        </article>
                    </div>
                    <div class="col-lg-6 col-xl-4 mb-1-6 mb-md-1-9">
                        <article class="card card-style2 h-100">
                            <div class="card-img">
                                <img src="img/blog/blog-02.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <ul class="meta-tags">
                                    <li>
                                        <a href="#!">
                                            <i class="ti-calendar me-1 text-primary"></i> Feb 09, 2021
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i class="ti-comment me-1 text-primary"></i> 12 Comment
                                        </a>
                                    </li>
                                </ul>
                                <h3 class="h4 mb-3"><a href="blog-details.html">20 Wonderful life coach. Number 16 is absolutely stunning!</a></h3>
                                <p>The purpose of the masterclass is to introduce the key thoughts supporting the psychodynamic approach.</p>
                                <a href="blog-details.html" class="font-weight-600">read more...</a>
                            </div>
                        </article>
                    </div>
                    <div class="col-lg-6 col-xl-4 mb-1-6 mb-md-1-9">
                        <article class="card card-style2 h-100">
                            <div class="card-img">
                                <img src="img/blog/blog-03.jpg" alt="...">
                            </div>
                            <div class="card-body">
                                <ul class="meta-tags">
                                    <li>
                                        <a href="#!">
                                            <i class="ti-calendar me-1 text-primary"></i> Jan 24, 2021
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i class="ti-comment me-1 text-primary"></i> 24 Comment
                                        </a>
                                    </li>
                                </ul>
                                <h3 class="h4 mb-3"><a href="blog-details.html">How to have a fantastic life coach with minimal spending?</a></h3>
                                <p>The purpose of the masterclass is to introduce the key thoughts supporting the psychodynamic approach.</p>
                                <a href="blog-details.html" class="font-weight-600">read more...</a>
                            </div>
                        </article>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <!-- start pager  -->
                        <div class="text-center mt-6 mt-lg-7">
                            <div class="pagination">
                                <ul>
                                    <li><a href="#!" class="me-3"><i class="fas fa-long-arrow-alt-left"></i></a></li>
                                    <li class="active"><a href="#!" class="me-2">1</a></li>
                                    <li><a href="#!" class="me-2">2</a></li>
                                    <li><a href="#!" class="me-3">3</a></li>
                                    <li><a href="#!"><i class="fas fa-long-arrow-alt-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- end pager -->
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