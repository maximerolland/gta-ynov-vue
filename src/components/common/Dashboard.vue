<template>
  <div class="dashboard">
     <vue-tuicalendar
    ref="calendar"
    :options="options"
    :schedules="schedules"
  >
  </vue-tuicalendar>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      schedules: [],
      options: {}
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
