<template>
  <div class="dashboard">
    <p v-if="listeEvenements.length == 0">Vous n'avez actuellement aucun évenement de prévu</p>
    <div class="uk-child-width-1-2@s" v-for="(event, index) in listeEvenements" :key="index">
      <div class="uk-card uk-card-body uk-card-hover">
        <div class="uk-card-badge uk-label">{{ event.statut }}</div>
        <h3 class="uk-card-title">{{ event.titre }}</h3>
        <p>{{ event.date_debut }}</p>
        <p>{{ event.date_fin }}</p>
        <p>{{ event.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      schedules: [],
      options: {},
      listeEvenements: [],
      currentUser: {}
    };
  },
  methods: {
    getUserEvent() {
      axios
        .get(
          "https://gta-ynov-vuejs-api.herokuapp.com/event/user/" +
            this.currentUser.id
        )
        .then(res => {
          res.data.forEach(element => {
            this.listeEvenements.push(element);
          });
        });
    }
  },
  beforeMount() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.getUserEvent();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
