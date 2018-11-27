<template>
  <div class="navbar" v-if="connectedUser != null" v-show="isConnected()">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left uk-margin-left">
        <span>{{ connectedUser.first_name.toUpperCase() }} {{ connectedUser.last_name.toUpperCase() }}</span>
      </div>

      <div class="uk-navbar-right uk-margin-right">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="absence">Absence</router-link>
          </li>
          <li>
            <router-link to="profile">Profil</router-link>
          </li>
          <li v-show="connectedUser.role != 'salarie'">
            <router-link to="GestionUtilisateur">Gestion</router-link>
          </li>
        </ul>
        <button
          class="uk-button uk-button-danger uk-button-small"
          v-if="isConnected()"
          @click="logout()"
        >Deconnexion</button>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      connectedUser: {}
    };
  },
  methods: {
    isConnected() {
      return localStorage.getItem("jwt") != null ? true : false;
    },
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("login");
    },
    getUser() {
      this.connectedUser = JSON.parse(localStorage.getItem("user"));
    }
  },
  beforeMount() {
    this.getUser();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
