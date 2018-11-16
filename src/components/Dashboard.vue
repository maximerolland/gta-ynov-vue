<template>
  <div class="dashboard">
    <navbar></navbar>
   <p>Bienvenue sur votre dashboard </p>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Dashboard",
  components: { Navbar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
