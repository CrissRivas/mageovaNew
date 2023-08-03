<template>
  <div class="container">
    <v-progress-circular
      indeterminate
      :size="90"
      color="green"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: "",
      id: "",
      queryString: "",
    };
  },

  beforeMount() {
    this.queryString = new URLSearchParams(window.location.search);
    this.model = this.$route.query.model;
    this.id = this.$route.query.id;

    console.log(this.id, this.model);
    console.log("listo");
  },
};
</script>

<style>
.container {
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
