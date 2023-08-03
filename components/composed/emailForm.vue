<template>
  <div>
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-card
            :color="color"
            width="350"
            class="pa-2 px-4"
            elevation="12"
            outlined
            shaped
          >
            <p class="text-center title">{{ txt }}</p>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              outlined
              color="black"
            />
          </v-card>
        </v-row>
        <v-row justify="space-around" class="py-2">
          <v-btn color="pink" rounded :disabled="!isEmailValid" @click="wifi()">
            <v-icon> mdi-wifi</v-icon>
            Liberar WiFi
          </v-btn>
          <v-btn color="purple" rounded>
            Visitar sitio
            <v-icon> mdi-arrow-right</v-icon>
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
  methods: {
    wifi() {
      const folio = this.send.folio;
      
      this.send.mail = this.email;
      makeResponse(this.send);
      this.$router.push({
        path: "/saba/email/wifi",
        query: {
          folio,
          model: this.model,
        },
      });
    },
  },
  mounted() {
    this.send.option = this.$route.query.value;
    this.send.folio = this.$route.query.folio;
    this.model = this.$route.query.model;
    console.log(this.model);
  },
};
</script>
