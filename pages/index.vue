<template>
  <v-row justify="center">
    <v-col :md="8" :xs="12">
      <Clock :waitingTime="10" @emitTime="timeOver" />
      <Banner :src="src" />
      <!-- <v-row>
        <v-col no-gutters align-content="center" justify="center">
          <Btns :buttons="buttons" @emitBtnId="selectedBtn" />
        </v-col>
        <v-col align="center" justify="start" no-gutters cols="5">
          <v-btn @click="selectedBtn(4)" color="pink"> No aplica </v-btn>
        </v-col>
      </v-row> -->
    </v-col>
  </v-row>
</template>

<script>
import Clock from "~/components/composed/clock.vue";
import Banner from "~/components/composed/banner.vue";
import Btns from "~/components/composed/btns";
import { getInsertData } from "~/plugins/sistemas.js";
import { makeIntento, makeIntentoMongo } from "~/plugins/db.js";

export default {
  name: "IndexPage",
  components: {
    Clock,
    Banner,
    Btns,
  },
  data() {
    return {
      params: "",
      buttonSelected: 0,
      buttons: ["1.png", "2.png", "3.png"],
      insertData: {},
      src: "banner.jpg",
      makeOption: "",
    };
  },

  methods: {
    selectedBtn(value) {
      // switch (value) {
      //   case 1:
      //     this.makeOption = "Ginecológicamente";
      //     break;
      //   case 2:
      //     this.makeOption = "Balance Ph";
      //     break;
      //   case 3:
      //     this.makeOption = "Ingredientes naturales";
      //     break;
      //   default:
      //     this.makeOption = "No aplica";
      //     break;
      // }

      console.log(value, this.makeOption);
      this.$router.push({
        path: "/wifi",
        query: {
          value: this.makeOption,
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

    timeOver() {
      console.log("time over!");
      this.selectedBtn('@');
    },
  },

  beforeMount() {
    // Llamar a la función getInsertData y asignar el resultado a insertData
    this.insertData = getInsertData();
    // console.log(this.insertData.folio);
    makeIntento(this.insertData);
    makeIntentoMongo(this.insertData);
  },
};
</script>
