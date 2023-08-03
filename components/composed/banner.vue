<template>
    <v-row justify="center">
        <v-col align="center">
            <img 
            :src="require(`@/assets/jpg/${src}`)" />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
    max-height: 80vh;
    aspect-ratio: 2/3;
    border-radius: 5px;
}
</style>