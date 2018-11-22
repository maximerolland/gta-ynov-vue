<template>
  <div class="profile">
   <h2>Votre profile</h2>
   <p>{{ profileUser.first_name }}</p>
   <p>{{ profileUser.last_name }}</p>
   <p>{{ profileUser.email }}</p>
   <p>{{ profileUser.phone }}</p>
   <p>{{ profileUser.adresse }}</p>
   <p>{{ profileUser.code_postale }}</p>
   <p>{{ profileUser.date_de_naissance }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profileUser: {}
    };
  },
  beforeMount() {
    this.profileUser = JSON.parse(localStorage.getItem("user"));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
