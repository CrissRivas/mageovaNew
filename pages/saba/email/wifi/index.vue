<template>
  <v-row aling="center">
    <v-img :src="wifi" />
  </v-row>
</template>

<script>
import { makeImpactoMongo, makeImpacto } from "~/plugins/db.js";
import { getInsertData } from "~/plugins/sistemas.js";

export default {
  data() {
    return {
      wifi: require("@/assets/jpg/wifi.jpg"),
      send: {},
    };
  },
  beforeMount() {
    this.send = getInsertData();
    this.send.model = this.$route.query.model;
    this.send.folio = this.$route.query.folio;
    makeImpacto(this.send);
    makeImpactoMongo(this.send);
  },
};
</script>

<style lang="scss" scoped></style>
