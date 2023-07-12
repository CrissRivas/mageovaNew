<template>
  <div>
    <v-btn icon @click="emitBtnId">
      <img 
      :src="require(`@/assets/png/${imgBtn}`)"
      class="btn"/>
    </v-btn>
  </div>
</template>

<script>
export default {
    data() {
        return {
            buttonId: 0
        }
    },
  props: {
    imgBtn: {
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    }
  },
    methods: {
        emitBtnId() {
            this.$emit('btnId', this.buttonId);
        }
    },
    created(){
        this.buttonId = this.id +1
    }
  }
</script>


<style lang="scss" scoped>
    .btn{
    width: 40px;
    }
</style>