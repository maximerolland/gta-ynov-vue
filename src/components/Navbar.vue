<template>
  <div class="navbar" v-if="isConnected()">
    <nav class="uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">
           <span>{{ connectedUser.first_name }}  {{ connectedUser.last_name }}</span>
        </div>

        <div class="uk-navbar-right">

            <ul class="uk-navbar-nav">
                <li><router-link to="dashboard">Dashboard</router-link></li>
                <li><router-link to="absence">Absence</router-link></li>
                <li><router-link to="profile">Profil</router-link></li>
                <li v-if="connectedUser.role == 'drh'"><router-link to="GestionUtilisateur">Gestion</router-link></li>
            </ul>
            <button class="uk-button uk-button-danger" v-if="isConnected()" @click="logout()">Deconnexion</button>
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
