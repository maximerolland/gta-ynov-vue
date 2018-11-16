<template>
  <div id="app">
  <router-view></router-view>
  <button @click="logout()">Deconnexion</button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
