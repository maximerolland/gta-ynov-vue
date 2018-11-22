<template>
  <div class="createUser">
   <h1>Ajouter un Utilisateur</h1>
     <form class="uk-form-horizontal uk-margin" @submit.prevent="ajouter" uk-grid>
        <!-- Inputs -->
        <div v-for="input in userInputs" class="uk-margin uk-width-1-1" :key="input.key">
          <!-- prenom -->
          <div>
            <input :class="['uk-input', {'uk-form-danger':input.isEmpty}]"
            v-model="input.value"
            @change="checkEmpty(input)"
            :placeholder="input.placeholder"
            :type="input.type">
          </div>

        </div>

        <select class="uk-input" v-model="selectedRole">
          <option selected value="" >-- Role --</option>
          <option value="respequipe">Résponsable d'équipe</option>
          <option value="drh">Directeur des ressouces humaines</option>
          <option value="salarie">Salarié</option>
        </select>

        <!-- Submit -->
        <div v-if="!isSigningIn" class="uk-width-1-1">
          <button type="submit" class="uk-button uk-button-primary uk-width-1-1">Créer</button>
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
      let passwordUser;
      let confirmPasswordUser;
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
      }
      if (passwordUser != passwordVerifyUser) {
      } else {
        this.createAccount(
          firstName,
          lastName,
          mailUser,
          passwordUser,
          roleUser
        );
      }
    },
    createAccount(firstName, lastName, emailUser, passwordUser, roleUser) {
      let longName = firstName + " " + lastName;
      axios
        .post("https://gta-ynov-vuejs-api.herokuapp.com/register", {
          name: longName,
          email: emailUser,
          password: passwordUser,
          role: roleUser
        })
        .then(r => {
          localStorage.jwt = r.data.token;
          localStorage.user = JSON.stringify(r.data.user);
          console.log(r);
        });
    },
    /**
     * @method checkEmpty : sets isEmpty single input if data not null
     */
    checkEmpty(input) {
      input.isEmpty = input.value === "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
