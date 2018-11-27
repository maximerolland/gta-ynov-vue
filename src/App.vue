<template>
  <div id="app">
    <navbar v-if="checkIfUserIsConnected()"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: { Navbar },
  data() {
    return {
      isUserConnected: false
    };
  },
  watch: {
    $route(to, from) {
      this.checkIfUserIsConnected();
    }
  },
  methods: {
    checkIfUserIsConnected() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        this.isUserConnected = true;
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    // FIXME
    this.checkIfUserIsConnected();
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
