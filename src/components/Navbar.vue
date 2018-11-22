<template>
  <div class="navbar">
    <nav class="uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>

        </div>

        <div class="uk-navbar-right">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><router-link to="ajouterUtilisateur">Profil</router-link></li>
                <li><router-link to="ajouterUtilisateur">Gestion</router-link></li>
            </ul>
            <button class="uk-button uk-button-danger" v-if="isConnected()" @click="logout()">Deconnexion</button>
        </div>

    </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  methods: {
    isConnected() {
      return localStorage.getItem("jwt") != null ? true : false;
    },
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
