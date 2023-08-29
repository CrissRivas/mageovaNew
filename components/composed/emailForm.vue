<template>
  <div>
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-card
            :color="color"
            width="350"
            class="px-4"
            elevation="12"
            outlined
            shaped
            dense
          >
            <p class="text-center title">{{ txt }}</p>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              outlined
              dense
              color="black"
            />
          </v-card>
        </v-row>
        <v-row justify="space-around" class="py-2">
          <v-btn color="pink" rounded :disabled="!isEmailValid" @click="sendEmail()">
            <!-- <v-icon> mdi-wifi</v-icon> -->
            Liberar WiFi
          </v-btn>
          <v-btn color="purple" rounded @click="siteRedirect()">
            Visitar sitio
            <!-- <v-icon> mdi-arrow-right</v-icon> -->
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { makeResponse } from "~/plugins/db.js";

export default {
  data() {
    return {
      email: "",
      button: "",
      model: "",
      send: {
        folio: "@",
        mail: "@",
        age: "@",
        option: 0,
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  props: {
    color: {
      type: String,
      required: true,
    },
    txt: {
      type: String,
      required: true,
    },
  },
  computed: {
    isEmailValid() {
      return (
        this.email.trim() === "" ||
        this.emailRules.every((rule) => rule(this.email) === true)
      );
    },
  },
  watch:{
    email(){
      this.$emit('NewEmail',this.email)
    }
  },
  methods: {
    sendEmail(){
      this.$emit('sendEmail',true);
    },
    siteRedirect(){
      window.location.href = "https://www.saba.com.mx/comprar-productos/kits-saba/kits-diana-lista/";
    }
  },
};
</script>
<style lang="css" scoped>
h3{
  font-size: 16px !important;
}
p{
  font-size: 16px !important;
}

@media screen and (min-font-size: 16px) {
  /* Aplicar estilos para dispositivos con tamaño de fuente mayor o igual a 16px */
  h3{
    font-size: 10px !important;
  }
  p{
    font-size: 6px !important;
  }
}
</style>