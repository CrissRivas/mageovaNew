<template>
  <v-row>
    <v-col no-gutters>
      <v-select
        :items="edades"
        v-model="edad"
        label="Edad"
        dense
        outlined
      ></v-select>
    </v-col>
    <v-col no-gutters>
      <v-select
        :items="generos"
        label="Genero"
        v-model="genero"
        dense
        outlined
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      edad: "",
      genero: "",
      ready: false,
      edades: [
        "Menor a 18 años",
        "18 a 24 años",
        "25 a 34 años",
        "35 a 44 años",
        "45 a 54 años",
        "Más de 54 años",
      ],
      generos: ["Hombre", "Mujer", "Otro"],
    };
  },
  watch: {
    edad() {
      this.checkResponse();
    },
    genero() {
      this.checkResponse();
    },
  },
  methods: {
    checkResponse() {
      if (this.edad !== "" && this.genero !== "") {
        this.$emit("edad", this.edad);
        this.$emit("genero", this.genero);
        this.$emit("sendResponse", true);
        
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
