<template>
  <div class="login">
    <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="img/login/background.jpg" uk-img>
      <h1>Connexion</h1>
    </div>
     <form class="uk-form-horizontal uk-margin" @submit.prevent="signin" uk-grid>
        <!-- Inputs -->
        <div v-for="input in userInputs" class="uk-margin uk-width-1-1" :key="input.key">
          <!-- Email -->
          <div v-if="input.type == 'email'">
            <input :class="['uk-input', {'uk-form-danger':input.isEmpty}]"
            v-model="input.value"
            @change="checkEmpty(input)"
            :placeholder="input.placeholder"
            type="email">
          </div>

          <!-- Password -->
          <div v-if="input.type == 'password'">
            <input :class="['uk-input', {'uk-form-danger':input.isEmpty}]"
            v-model="input.value"
            @change="checkEmpty(input)"
            :placeholder="input.placeholder"
            type="password">
          </div>
        </div>

        <!-- Submit -->
        <div v-if="!isSigningIn" class="uk-width-1-1">
          <button type="submit" class="uk-button uk-button-primary uk-width-1-1">Se connecter</button>
        </div>
        <div v-else class="uk-width-1-1">
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInputs: {
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
        }
      },
      redirectionURL: this.$route.query.redirect,
      isSigningIn: false
    };
  },
  props: {},
  methods: {
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
