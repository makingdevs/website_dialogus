<template>
  <div class="home">
    <img alt="Vue logo" src="https://static.wixstatic.com/media/333290_92ba75adb8a84de4a8e36e1c47d29eff~mv2.jpg/v1/fill/w_980,h_716,al_c,q_85,usm_0.66_1.00_0.01/333290_92ba75adb8a84de4a8e36e1c47d29eff~mv2.webp">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
