<template>
<div>
	<!-- PAGE TITLE
        ================================================== -->
		<div id="intro" class="bg-image shadow-2-strong">
      <div class="mask d-flex align-items-center h-100" data-overlay-dark="55">
        <div class="login container">
			<div class="col-md-12">
				<h1 class="text-white">Iniciar sesión</h1>
			</div>
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <form class="bg-white  rounded-5 shadow-5-strong p-5" @submit.prevent="checkLogin">
                <!-- Email input -->
                <div class="form-outline mb-4">
					<label class="h5 form-label" for="exampleInputuser1">Usuario</label>
                  <input type="user" id="form1Example1" class="form-control" v-model="user.username">
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
					<label class="h5 form-label" for="exampleInputPassword1">Contraseña</label>
                  <input type="password" id="exampleInputPassword1" class="form-control" exampleInputPassword1>
                </div>

                <!-- Submit button -->
                <button type="submit" class=" btn btn-success">Ingresar</button>
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
		console.log("Nací");
  },
  mounted(){

  },
  components: {
  },
  methods: {
		checkLogin(){
			if(this.user.username == "test" && this.user.pass == "test"){
				auth.setUserLogged(this.user);
				this.$router.go("/home");
			}
		}
  }

};
</script>
