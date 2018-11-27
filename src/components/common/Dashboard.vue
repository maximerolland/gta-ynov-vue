<template>
  <div class="dashboard">
    <p v-if="listeEvenements.length == 0">Vous n'avez actuellement aucun évenement de prévu</p>
    <div class="uk-child-width-1-1@s" v-for="(event, index) in listeEvenements" :key="index">
      <div class="uk-card uk-card-body uk-card-hover">
        <div class="uk-card-badge uk-label">{{ event.statut }}</div>
        <h3 class="uk-card-title">Motif : {{ event.titre }}</h3>
        <p>Absent du {{ event.date_debut }}</p>
        <p>au {{ event.date_fin }}</p>
        <p>{{ traduitType(event.type) }}</p>
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
    },
    traduitType(type) {
      let response;
      switch (type) {
        case "cp":
          response = "Congé payé";
          break;
        case "css":
          response = "Congé sans solde";
          break;
        case "rtt":
          response = "Récuperation du temps de travail";
          break;
        case "ah":
          response = "Amenagement d'horaire";
          break;
        default:
          response = type;
      }
      return response;
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
