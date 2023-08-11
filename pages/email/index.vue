<template>
  <v-row justify="center">
    <v-col :md="8" :xs="12" dense>
      <v-img :src="src" height="70vh" contain class="mb-4" />
      <EmailForm
        :color="color"
        :txt="txt"
        @NewEmail="NewEmail"
        @sendEmail="wifi"
      />
    </v-col>
  </v-row>
</template>

<script>
import Banner from "~/components/composed/banner.vue";
import EmailForm from "~/components/composed/emailForm.vue";
import { makeResponse } from "~/plugins/db.js";
import { getInsertData } from "~/plugins/sistemas.js";

export default {
  components: {
    Banner,
    EmailForm,
  },
  data() {
    return {
      src: require("@/assets/jpg/banner.jpg"),
      color: "pink lighten-3",
      txt: "¿Te gustaria recibir promociones?",
      send: {
        folio: "@",
        mail: "@",
        age: "@",
        option: 0,
      },
      button: "",
      model: "",
      mail: "",
      insertData: {},
    };
  },
  methods: {
    wifi() {
      makeResponse(this.send);
      this.toWifi(this.send.folio, this.model);
    },
    NewEmail(datos) {
      this.send.mail = datos;
    },
    toWifi(folio, model) {
      this.$router.push({
        path: "/email/wifi",
        query: {
          folio,
          model,
          uamip: this.insertData.uamip,
          uamport: this.insertData.uamport,
          called: this.insertData.called,
          mac: this.insertData.mac,
          nasid: this.insertData.nasid,
          sessionid: this.insertData.sessionid,
          userurl: this.insertData.userurl,
          challenge: this.insertData.challenge,
          id: this.insertData.id,
          ip: this.insertData.direccion_ip,
        },
      });
    },
  },
  mounted() {
    this.send.option = this.$route.query.value;
    this.send.folio = this.$route.query.folio;
    this.model = this.$route.query.model;
    this.insertData = getInsertData();
  },
};
</script>
