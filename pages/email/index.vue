<template>
  <v-row justify="center">
    <v-col :md="8" :xs="12" dense>
      <v-img :src="src" height="60vh" contain class="mb-4" />
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
import { makeImpactoMongo } from "~/plugins/db.js";
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
      response: {
        mail: "@",
        option: "@",
      },
      button: "",
      model: "",
      mail: "",
      insertData: {},
    };
  },
  methods: {
    wifi() {
      this.insertData.status = "Impacto"
      this.insertData.response = this.response;
      makeImpactoMongo(this.insertData);
      this.toWifi(this.insertData.folio, this.model);
    },
    NewEmail(datos) {
      this.response.mail = datos;
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
    this.insertData = getInsertData();
    this.response.option = this.$route.query.value;
    this.insertData.folio = this.$route.query.folio;
    this.model = this.$route.query.id;
    
  },
};
</script>
