<template>
	<div class="login container">
		<form @submit="checkLogin">
			<div class="mb-3">
				<label for="exampleInputuser1" class="form-label">user address</label>
				<input type="user" class="form-control" v-model="user.username">
				<div class="form-text">We'll never share your user with anyone else.</div>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" v-model="user.pass">
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
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
		checkLogin(e){
			if(this.user.username == "test" && this.user.pass == "test"){
				return true;
			}
			console.log("Contraseña incorrecta");
			e.preventDefault();
		}
  }

};
</script>
