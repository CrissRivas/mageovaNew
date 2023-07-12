<template>
  <v-row justify="center">
    <v-col :md="8"  :xs="12">
        <Clock :waitingTime="10" />
        <Banner />
        <Btns :buttons="buttons" @emitBtnId="selectedBtn"/>
    </v-col>
  </v-row>
</template>

<script>
import  Clock   from   '~/components/composed/clock.vue';
import  Banner  from   '~/components/composed/banner.vue';
import  Btns    from   '~/components/composed/btns';
import {connectToDatabase,closeDatabaseConnection} from '~/plugins/db';
export default {
  name: 'IndexPage',
    components: {
    Clock,
    Banner,
    Btns
  },
  data() {
    return {
      params: '',
      buttonSelected: 0,
      buttons: [
        '1.png',
        '2.png',
        '3.png',
        ]
    }
  },

  methods:{
    selectedBtn(value){
      console.log(value);
      this.buttonSelected = value;
    }
  },
  async created() {
    try {
      const connection = await connectToDatabase();

      // Realiza las operaciones necesarias con la base de datos aquí
      

      closeDatabaseConnection(); // Cierra la conexión después de usarla

      console.log('cool!');
    } catch (error) {
      console.error('Error al conectarse a la base de datos:', error);
    }
  }
}
</script>
