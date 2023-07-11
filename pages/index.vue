<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class=" py-4 d-flex justify-center">
        <Clock />
        <p>{{$route.params}}</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Clock from '~/components/composed/clock.vue';
import connection from '~/plugins/db';
export default {
  name: 'IndexPage',
    components: {
    Clock
  },
  data() {
    return {
      params: ''
    }
  },
  async created() {
    // Aquí puedes realizar consultas a la base de datos utilizando la conexión
    // Ejemplo:

    try {
      let datazos = await connection.execute('SELECT id FROM mageova_portales.Impactos WHERE dispositivo_rt = ? LIMIT 10', ['X4-0219']);
      console.log(  datazos[0]  );
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
    }
  }
}
</script>
