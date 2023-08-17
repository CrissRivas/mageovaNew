<template>
  <div>
    <v-card justify="center" align="center">
      <h3>No cierres esta ventana</h3>
      <p>{{ counter }} segundos restantes</p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    waitingTime: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      counter: 10
    };
  },
  mounted() {
    this.counter = this.waitingTime;
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      let interval = setInterval(() => {
        if (this.counter > 0) {
          this.counter--;
        } else {
          this.$emit('emitTime', true);
          clearInterval(interval);
        }
      }, 1000);
    }
  }
};
</script>


<style lang="css" scoped>
h3{
  font-size: 25px !important;
}
p{
  font-size: 20px !important;
}
</style>