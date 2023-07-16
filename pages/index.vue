<template>
  <v-row justify="center">
    <v-col :md="8"  :xs="12">
        <Clock :waitingTime="10" @emitTime="timeOver" />
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
import {getInsertData} from '~/plugins/sistemas';
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
        ],
      insertData : {}
    }
  },

  methods:{
    selectedBtn(value){
      console.log(value);
      this.buttonSelected = value;
    },
    timeOver(){
      console.log('time over!');
    },
    async callToConnect(){
      try {
        console.log('try');
      await connectToDatabase(this.insertData);
      console.log('connected');
      closeDatabaseConnection(); // Cierra la conexión después de usarla
      console.log('closed');
    } catch (error) {
      console.log('error');
      console.error('Error al conectarse a la base de datos:', error);
    }
    }
  },
mounted() {
    this.insertData = getInsertData();
    this.callToConnect();
    console.log(this.insertData);
  }
}
</script>
