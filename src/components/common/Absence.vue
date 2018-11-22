<template>
  <div class="absence">
    <h2>Saisie des absences</h2>
    <form class="uk-form-horizontal uk-margin" @submit.prevent="ajouterEvent" uk-grid>
        <div>
          <input class="uk-input"
          v-model="titreDemande"
          placeholder="Titre de votre demande"
          type="text">
        </div>

        <div>
          <input class="uk-input"
          v-model="dateDemande"
          type="date">
        </div>

        <div>
          <select class="uk-input" v-model="typeDemande">
            <option selected value="" >-- Type --</option>
            <option value="cp">Congé payé</option>
            <option value="css">Congé sans solde</option>
            <option value="rtt">Récuperation du temps de travail</option>
            <option value="ah">Amenagement d'horaire</option>
          </select>
        </div>

        <div>
          <button type="submit" class="uk-button uk-button-primary">Valider</button>
        </div>

    </form>

<hr>

    <h2>Historique de vos absences</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Absence",
  data() {
    return {
      titreDemande: "",
      typeDemande: "",
      dateDemande: ""
    };
  },
  methods: {
    async ajouterEvent() {
      if (
        this.checkIfNotNull(this.titreDemande) &&
        this.checkIfNotNull(this.typeDemande) &&
        this.checkIfNotNull(this.dateDemande)
      ) {
        let connectedUser = JSON.parse(localStorage.getItem("user"));
        axios
          .post("https://gta-ynov-vuejs-api.herokuapp.com/event", {
            titre: this.titreDemande,
            type: this.typeDemande,
            date: this.dateDemande,
            statut: "en attente",
            userid: connectedUser.id
          })
          .then(() => {});
      }
    },
    checkIfNotNull(param) {
      return param != "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
