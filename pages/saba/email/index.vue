<template>
  <v-row justify="center">
    <v-col :md="8" :xs="12">
      <Banner :src="src" />
      <EmailForm :color="color" :txt="txt" />
    </v-col>
  </v-row>
</template>

<script>
import Banner from "~/components/composed/banner.vue";
import EmailForm from "~/components/composed/emailForm.vue";
import { getInsertData } from "~/plugins/sistemas.js";

export default {
 
  components: {
    Banner,
    EmailForm,
  },
  data() {
    return {
      src: "banner.jpg",
      color: "pink lighten-3",
      txt: "¿Te gustaria recibir promociones?",
      send: {
        folio:'@',
        mail:'@',
        age: '@',
        option: 0
      },
      button: "",
    };
  },
};
</script>
