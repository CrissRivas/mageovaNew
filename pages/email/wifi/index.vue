<template>
  <v-row aling="center">
    <v-img :src="wifi" height="100vh" contain/>
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

    if (this.send.model !== undefined) {
      const model = this.send.model;
      let redirectUrl;

      if (model === "RUT240") {
        redirectUrl =
          "http://192.168.2.254:3990/trial?userurl=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect"; //teltonika RUT240
      } else if (model === "RUT950" || model === "RUT200") {
        redirectUrl =
          "http://192.168.2.254:3990/trial?userurl=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirectfunction"; //teltonika RUT950 and RUT200
      } else {
        redirectUrl = "http://192.168.1.1/goform/wifi_no_auth_login_proc/"; //modelo Four-Faith
      }

      // Redirigir a la nueva URL después de 3 segundos
      setTimeout(() => {
        this.redirectToURL(redirectUrl);
      }, 3000); // 3000 milisegundos (3 segundos)
    } else {
      console.log("No hay un modelo definido");
      const defaultURL = "http://192.168.1.1/goform/wifi_no_auth_login_proc/"; //modelo Four-Faith
      // Redirigir a la nueva URL para el modelo por defecto después de 3 segundos
      setTimeout(() => {
        this.redirectToURL(defaultURL);
      }, 3000); // 3000 milisegundos (3 segundos)
    }
  },
  methods: {
    redirectToURL(url) {
      // Redirigir a la nueva URL utilizando el enrutador de Nuxt
      window.location.href = url;
    },
  },
};
</script>


<style lang="scss" scoped></style>
