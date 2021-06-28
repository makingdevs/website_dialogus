<template>
<div>
	<!-- PAGE TITLE
        ================================================== -->
		<section class="page-title-section top-position bg-img cover-background" data-overlay-dark="55" id="imageLogin">
		
		</section>
<section>
	<div class="login container">
		<form @submit.prevent="checkLogin">
			<div class="mb-4">
				<label for="exampleInputuser1" class="h1 form-label text-info">Usuario</label>
				<input type="user" class="form-control" v-model="user.username">
			</div>
			<div class="mb-4">
				<label for="exampleInputPassword1" class="h1 form-label text-info">Contraseña</label>
				<input type="password" class="form-control" id="exampleInputPassword1" v-model="user.pass">
			</div>
			<button type="submit" class="btn btn-success">Ingresar</button>
		</form>
	</div>
</section>
</div>
</template>

<style>

#imageLogin{
	background-image: url('../assets/Login-Mágico.png');
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
