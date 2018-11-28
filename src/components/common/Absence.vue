<template>
  <div class="absence">
    <h2>Saisie de vos absences</h2>
    <form class="uk-form-horizontal uk-margin" @submit.prevent="ajouterEvent" uk-grid>
      <div>
        <input
          class="uk-input"
          v-model="titreDemande"
          placeholder="Motif de votre demande"
          type="text"
        >
      </div>

      <div>
        <input class="uk-input" v-model="dateDebutDemande" type="date">
      </div>

      <div>
        <input class="uk-input" v-model="dateFinDemande" type="date">
      </div>

      <div>
        <select class="uk-input" v-model="typeDemande">
          <option selected value>-- Type --</option>
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

    <div v-show="currentUser.role != 'salarie'">
      <h2>Validation des absences</h2>

      <table class="uk-table uk-table-striped">
        <caption>Liste des absences à valider</caption>
        <thead>
          <tr>
            <th>Motif</th>
            <th>Type</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in listeAbsenceEnAttente" v-bind:key="index">
            <td>{{ event.titre }}</td>
            <td>{{ traduitType(event.type) }}</td>
            <td>{{ event.date_debut }}</td>
            <td>{{ event.date_fin }}</td>
            <td>{{ event.statut }}</td>
            <td>
              <button
                type="button"
                v-on:click="valideAbsenceColaborateur(event, 'valider')"
                class="uk-button uk-button-primary uk-button-small"
              >Valider</button>
              <button
                type="button"
                v-on:click="valideAbsenceColaborateur(event, 'refuser')"
                class="uk-button uk-button-danger uk-button-small"
              >Refuser</button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr>
    </div>

    <h2>Historique de vos absences</h2>

    <table class="uk-table uk-table-striped">
      <caption>Liste des absences</caption>
      <thead>
        <tr>
          <th>Motif</th>
          <th>Type</th>
          <th>Date début</th>
          <th>Date fin</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in listeAbsence" v-bind:key="index">
          <td>{{ event.titre }}</td>
          <td>{{ traduitType(event.type) }}</td>
          <td>{{ event.date_debut }}</td>
          <td>{{ event.date_fin }}</td>
          <td>{{ event.statut }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import UIkit from "uikit";

export default {
  name: "Absence",
  data() {
    return {
      titreDemande: "",
      typeDemande: "",
      dateDebutDemande: "",
      dateFinDemande: "",
      currentUser: {},
      listeAbsence: [],
      listeAbsenceEnAttente: []
    };
  },
  methods: {
    async ajouterEvent() {
      if (
        this.checkIfNotNull(this.titreDemande) &&
        this.checkIfNotNull(this.typeDemande) &&
        this.checkIfNotNull(this.dateDebutDemande) &&
        this.checkIfNotNull(this.dateFinDemande)
      ) {
        let connectedUser = JSON.parse(localStorage.getItem("user"));
        axios
          .post("https://gta-ynov-vuejs-api.herokuapp.com/event", {
            titre: this.titreDemande,
            type: this.typeDemande,
            statut: "en attente",
            date_debut: this.dateDebutDemande,
            date_fin: this.dateFinDemande,
            user: connectedUser.id
          })
          .then(res => {
            if (res.status == 200) {
              this.resetAbsenceForm();
              UIkit.notification({
                message: "Votre absence a correctement été ajouté",
                status: "success",
                pos: "top-right",
                timeout: 2000
              });
              this.getUserAbsence();
            } else {
              UIkit.notification({
                message: "Erreur lors de l'ajout de l'absence",
                status: "error",
                pos: "top-right",
                timeout: 2000
              });
            }
          });
      }
    },
    resetAbsenceForm() {
      this.titreDemande = "";
      this.typeDemande = "";
      this.dateDebutDemande = "";
      this.dateFinDemande = "";
    },
    checkIfNotNull(param) {
      return param != "";
    },
    getUserAbsence() {
      axios
        .get("https://gta-ynov-vuejs-api.herokuapp.com/event/user/" + this.currentUser.id)
        .then(res => {
          this.listeAbsence = [];
          res.data.forEach(element => {
            this.listeAbsence.push(element);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAbsenceToValidate() {
      axios
        .get(
          "https://gta-ynov-vuejs-api.herokuapp.com/event/user/" + this.currentUser.id + "/attente"
        )
        .then(res => {
          console.log(res);
          this.listeAbsenceEnAttente = [];
          res.data.forEach(element => {
            this.listeAbsenceEnAttente.push(element);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    valideAbsenceColaborateur(event, statut) {
      let messageSuccess;
      if (statut == "valider") {
        messageSuccess = "Absence correctement valider";
      } else {
        messageSuccess = "Absence correctement refuser";
      }
      axios
        .put("https://gta-ynov-vuejs-api.herokuapp.com/event/statut", {
          statut: statut,
          id: event.id
        })
        .then(res => {
          if (res.status == 200) {
            UIkit.notification({
              message: messageSuccess,
              status: "success",
              pos: "top-right",
              timeout: 2000
            });
            this.getAbsenceToValidate();
          } else {
            UIkit.notification({
              message: "Erreur lors de la modification",
              status: "error",
              pos: "top-right",
              timeout: 2000
            });
          }
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
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.getUserAbsence();
    this.getAbsenceToValidate();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
