<template>
    <v-row justify="space-around" align="center">
    <!-- Un Btn por cada objeto en el array buttons -->
        <Btn v-for="(button,i) in buttons" :key="i" :imgBtn="button" :id="i" @btnId="emitBtnId"/> 
    </v-row>
</template>

<script>
import Btn from "../atomic/btn";
    export default {
        components:{
            Btn
        },
        props:{
            buttons:{
                type:Array,
                required:true
            } 
        },
        methods: {
            emitBtnId(value) {
            this.$emit('emitBtnId', value);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>