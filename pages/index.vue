<template>
  <v-row justify="center">
    <v-col :md="8" :xs="12">
      <Banner :src="src" />
      <v-card class="px-2">
        <v-row class="px-4">
          <span>{{ advice }}</span>
        </v-row>
        <Select @sendResponse="makeRes" @edad="insertAge" @genero="insertGen" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Banner from "~/components/composed/banner.vue";
import Select from "~/components/composed/select.vue";
import { getInsertData } from "~/plugins/sistemas.js";
import { makeIntento, makeIntentoMongo, makeResponse } from "~/plugins/db.js";

export default {
  name: "IndexPage",
  components: {
    Banner,
    Select,
  },
  data() {
    return {
      advice: "Apóyanos con la siguiente información para liberar internet",
      insertData: {},
      src: "banner.jpg",
    };
  },

  methods: {
    insertAge(age) {
      this.insertData.response.edad = age;
    },
    insertGen(gen) {
      this.insertData.response.gen = gen;
    },
    makeRes() {
      makeResponse(this.insertData);
      this.toWifi();
    },
    toWifi() {
      this.$router.push({
        path: "/wifi",
        query: {
          uamip: this.insertData.uamip,
          uamport: this.insertData.uamport,
          called: this.insertData.called,
          mac: this.insertData.mac,
          nasid: this.insertData.nasid,
          sessionid: this.insertData.sessionid,
          userurl: this.insertData.userurl,
          challenge: this.insertData.challenge,
          id: this.insertData.dispositivo_rt,
          ip: this.insertData.direccion_ip,
          folio: this.insertData.folio,
          model: this.insertData.id,
        },
      });
    },
  },

  beforeMount() {
    this.insertData = getInsertData();
    makeIntento(this.insertData);
    makeIntentoMongo(this.insertData);
  },
};
</script>
