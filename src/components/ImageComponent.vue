<script>
export default {
    props: ['images'],
    data() {
        return {

        }
    },
    methods: {

    }

}

</script>

<template>
    <img v-for="i in images" class="w-40 h-auto m-4" :src="`https://image.tmdb.org/t/p/w500${i}`" />
</template>