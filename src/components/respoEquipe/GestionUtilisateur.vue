<template>
  <div class="createUser">
    <h2>Gestion des utilisateurs</h2>
    <table class="uk-table  uk-table-striped">
    <caption>Liste des utilisateurs</caption>
    <thead>
        <tr>
            <th>Adresse mail</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Date de naissance</th>
            <th>Adresse</th>
            <th>Code postale</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(user, index) in listeUser" v-bind:key="index">
            <td>{{ user.email }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.date_de_naissance }}</td>
            <td>{{ user.adresse }}</td>
            <td>{{ user.code_postale }}</td>
            <td>{{ user.role }}</td>
        </tr>
    </tbody>
</table>

<hr>

   <h2>Ajouter un Utilisateur</h2>
     <form class="uk-form-horizontal uk-margin uk-column-1-2" @submit.prevent="ajouter" uk-grid>
        <!-- Inputs -->
        <div v-for="input in userInputs" :key="input.key">
          <label v-if="input.id =='dateDeNaissance'">Date de naissance</label>
          <input :class="['uk-input', {'uk-form-danger':input.isEmpty}]"
          v-model="input.value"
          @change="checkEmpty(input)"
          :placeholder="input.placeholder"
          :type="input.type">

        </div>

        <div>
          <select class="uk-input" v-model="selectedRole">
            <option selected value="" >-- Role --</option>
            <option value="respequipe">Résponsable d'équipe</option>
            <option value="drh">Directeur des ressouces humaines</option>
            <option value="salarie">Salarié</option>
          </select>
        </div>

        <!-- Submit -->
        <div v-if="!isSigningIn" class="uk-width-1-1">
          <button type="submit" class="uk-button uk-button-primary ">Créer</button>
        </div>
        <div v-else class="uk-width-1-1">
        </div>
      </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateUser",
  data() {
    return {
      listeUser: [],
      userInputs: {
        lastName: {
          id: "nom",
          value: "",
          placeholder: "Votre nom",
          isEmpty: false,
          type: "text"
        },
        firstName: {
          id: "prenom",
          value: "",
          placeholder: "Votre prénom",
          isEmpty: false,
          type: "text"
        },
        birthDate: {
          id: "dateDeNaissance",
          value: "",
          placeholder: "",
          isEmpty: false,
          type: "date"
        },
        phone: {
          id: "phone",
          value: "",
          placeholder: "Votre numéro de téléphone",
          isEmpty: false,
          type: "text"
        },
        adresse: {
          id: "adresse",
          value: "",
          placeholder: "Votre adresse",
          isEmpty: false,
          type: "text"
        },
        codePostale: {
          id: "codePostale",
          value: "",
          placeholder: "Votre code postale",
          isEmpty: false,
          type: "text"
        },
        email: {
          id: "email",
          value: "",
          placeholder: "E-mail",
          isEmpty: false,
          type: "email"
        },
        password: {
          id: "password",
          value: "",
          placeholder: "Mot de passe",
          isEmpty: false,
          type: "password"
        },
        verifyPassword: {
          id: "verifyPassword",
          value: "",
          placeholder: "Confirmer mot de passe",
          isEmpty: false,
          type: "password"
        }
      },
      redirectionURL: this.$route.query.redirect,
      isSigningIn: false,
      selectedRole: ""
    };
  },
  props: {},
  methods: {
    async ajouter() {
      let firstName;
      let lastName;
      let mailUser;
      let adresseUser;
      let cpUser;
      let dateDeNaissanceUser;
      let phoneUser;
      let passwordUser;
      let passwordVerifyUser;
      let roleUser = this.selectedRole;
      let U = this.userInputs;
      for (let input in U) {
        if (U[input].type == "email") {
          mailUser = U[input].value;
        }
        if (U[input].id == "password") {
          passwordUser = U[input].value;
        }
        if (U[input].id == "verifyPassword") {
          passwordVerifyUser = U[input].value;
        }
        if (U[input].id == "prenom") {
          firstName = U[input].value;
        }
        if (U[input].id == "nom") {
          lastName = U[input].value;
        }
        if (U[input].id == "phone") {
          phoneUser = U[input].value;
        }
        if (U[input].id == "adresse") {
          adresseUser = U[input].value;
        }
        if (U[input].id == "codePostale") {
          cpUser = U[input].value;
        }
        if (U[input].id == "dateDeNaissance") {
          dateDeNaissanceUser = U[input].value;
        }
      }
      if (passwordUser == passwordVerifyUser) {
        this.createAccount(
          firstName,
          lastName,
          mailUser,
          phoneUser,
          adresseUser,
          cpUser,
          dateDeNaissanceUser,
          passwordUser,
          roleUser
        );
      }
    },
    createAccount(
      firstName,
      lastName,
      emailUser,
      phoneUser,
      adresseUser,
      cpUser,
      dateDeNaissanceUser,
      passwordUser,
      roleUser
    ) {
      axios
        .post("https://gta-ynov-vuejs-api.herokuapp.com/register", {
          firstName: firstName,
          lastName: lastName,
          email: emailUser,
          phone: phoneUser,
          adresse: adresseUser,
          codePostale: cpUser,
          dateNaissance: dateDeNaissanceUser,
          password: passwordUser,
          role: roleUser
        })
        .then(() => {});
    },
    /**
     * @method checkEmpty : sets isEmpty single input if data not null
     */
    checkEmpty(input) {
      input.isEmpty = input.value === "";
    },
    getAllUsers() {
      axios.get("https://gta-ynov-vuejs-api.herokuapp.com/users").then(res => {
        res.data.forEach(element => {
          this.listeUser.push(element);
        });
      });
    }
  },
  beforeMount() {
    this.getAllUsers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
