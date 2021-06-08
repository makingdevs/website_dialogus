<template>
  <div id="app">
    <header class="header-style1 menu_area-light">
      <div class="navbar-default nav">
        <!-- start top search -->
        <div class="top-search bg-primary">
          <div class="container">
            <form class="search-form" action="search.html" method="GET" accept-charset="utf-8">
              <div class="input-group">
                <span class="input-group-addon cursor-pointer">
                  <button class="search-form_submit fas fa-search text-white" type="submit"></button>
                </span>
                <input type="text" class="search-form_input form-control" name="s" autocomplete="off"
                  placeholder="Type & hit enter..." />
                <span class="input-group-addon close-search mt-1"><i class="fas fa-times"></i></span>
              </div>
            </form>
          </div>
        </div>
        <!-- end top search -->
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-12">
              <div class="menu_area">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <div class="navbar-header navbar-header-custom">
                    <!-- start logo -->
                    <a href="index.html" class="navbar-brand">
                      <img  id="logo" src="./assets/logo2.webp" alt="logo" /></a>
                    <!-- end logo -->
                  </div>

                  <div class="navbar-toggler"></div>

                  <!-- menu area -->
                  <ul class="navbar-nav ms-auto" id="nav" style="display: none">
                    <li><a href="index.html">Home</a></li>
                    <li>
                      <a href="#!">Pages</a>
                      <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li>
                          <a href="success-stories.html">Sucess Stories</a>
                        </li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li>
                          <a href="#!">Program</a>
                          <ul>
                            <li>
                              <a href="program-grid.html">Program Grid</a>
                            </li>
                            <li>
                              <a href="program-list.html">Program List</a>
                            </li>
                            <li>
                              <a href="program-details.html">Program Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">Events</a>
                          <ul>
                            <li><a href="event-grid.html">Event Grid</a></li>
                            <li>
                              <a href="event-details.html">Event Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">Podcast</a>
                          <ul>
                            <li>
                              <a href="podcast-list.html">Podcast List</a>
                            </li>
                            <li>
                              <a href="podcast-details.html">Podcast Details</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="404.html">Page 404</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Courses</a>
                      <ul>
                        <li><a href="courses-grid.html">Courses Grid</a></li>
                        <li>
                          <a href="courses-details.html">Courses Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Portfolio</a>
                      <ul>
                        <li>
                          <a href="portfolio-2-col.html">Portfolio 2 Columns</a>
                        </li>
                        <li>
                          <a href="portfolio-3-col.html">Portfolio 3 Columns</a>
                        </li>
                        <li>
                          <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Resources</a>
                      <ul>
                        <li>
                          <a href="#!">Help Center</a>
                          <ul>
                            <li><a href="help.html">Help</a></li>
                            <li><a href="category.html">Category</a></li>
                            <li>
                              <a href="category-article.html">Category Article</a>
                            </li>
                            <li>
                              <a href="help-center-profile.html">Help Center Profile</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">Webinar</a>
                          <ul>
                            <li>
                              <a href="webinar-list.html">Webinar List</a>
                            </li>
                            <li>
                              <a href="webinar-booking.html">Webinar Booking</a>
                            </li>
                            <li>
                              <a href="webinar-details.html">Webinar Details</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="download-book.html">Download Book</a></li>
                        <li>
                          <a href="free-session-booking.html">Free Session Booking</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Blog</a>
                      <ul>
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                  <!-- end menu area -->

                  <!-- start attribute navigation -->
                  <div class="attr-nav">
                    <ul>
                      <li class="search">
                        <a href="#!"><i class="fas fa-search"></i></a>
                      </li>
                    </ul>
                  </div>
                  <!-- end attribute navigation -->
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fdfdfd;
  }

  #nav {
    transition: background-color 0.8s linear 0.2s;
    padding: -30px;
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
  import jQuery from 'jquery';
  // eslint-disable-next-line no-unused-vars
  let $ = jQuery;
  export default {
    name: "app",
    data: function () {
      return {
        title: "La Jungla",
      };
    },
    components: {},
    created: function () {
      console.log("Hello word app");
      this.changeColorNabvarWithScroll();
    },
    mounted() {
      this.$root.$on("title", (title) => {
        this.title = title;
      });
    },
    methods: {
      test() {
        console.log("test");
      },
      changeColorNabvarWithScroll() {
        console.log("changeColorNabvarWithScroll");
        window.addEventListener("scroll", function () {
          if (window.pageYOffset > 100) {
            this.nav.classList.add("bg-nav", "shadow");
          } else {
            this.nav.classList.remove("bg-nav", "shadow");
          }
        });
      },
    },
  };
</script>