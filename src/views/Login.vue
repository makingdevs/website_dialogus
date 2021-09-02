<template>
<div>
	<!-- PAGE TITLE
        ================================================== -->
		<div id="intro" class="bg-image shadow-2-strong">
      <div class="mask d-flex align-items-center h-100 top-position2" data-overlay-dark="55" >
        <div class="login container">
			<div class="col-md-12">
				<h1 align="center" class="text-white">Iniciar sesión</h1>
			</div>
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <form @submit.prevent="checkLogin" class="bg-white  rounded-5 shadow-5-strong p-5" >
                <!-- Email input -->
                <div class="form-outline mb-4">
					<label for="exampleInputuser1" class="h5 form-label">Usuario</label>
					<input type="user" class="form-control" v-model="user.username">
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
					<label for="exampleInputPassword1" class="h5 form-label">Contraseña</label>
					<input type="password" class="form-control" id="exampleInputPassword1" v-model="user.pass">
                </div>

                <!-- Submit button -->
                <button type="submit" class=" btn btn-success ">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
	</div>
    </div>
</div>
</template>

<style>
#intro {
        background-image: url('../assets/legin.jpeg');
        height: 100vh;
      }

      /* Height for devices larger than 576px */
      @media (min-width: 992px) {
        #intro {
          margin-top: -58.59px;
        }
      }
</style>
<script>
import auth from '@/assets/js/auth/auth.js';
import { hideLoader } from '../assets/js/utils';
export default {
  name: "Login",
  data: function (){
    return {
            user: {
                username: "",
                pass: ""
            }
    }
  },
  watch: {
        msg: function (){
            this.msg = this.msg.toUpperCase();
        }
  },
  created: function () {
	window.addEventListener('scroll', this.handleScroll);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  },
  mounted(){
    hideLoader();
  },
  components: {
  },
  methods: {
        checkLogin(){
            if(this.user.username == "test" && this.user.pass == "test"){
                auth.setUserLogged(this.user);
                this.$router.push({ name: 'TextAdministrations' })
            }
        }
  }
};
</script>