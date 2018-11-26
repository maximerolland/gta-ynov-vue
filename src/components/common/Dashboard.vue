<template>
  <div class="dashboard">
     <vue-tuicalendar
    ref="calendar"
    :options="options"
    :schedules="listeEvenements"
  >
  </vue-tuicalendar>
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
