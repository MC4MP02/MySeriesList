<script>
import ImageComponent from './components/ImageComponent.vue'
export default {
  components: {
    ImageComponent
  },
  data() {
    return {
      info: {},
      query: '',
      imageGenerated: false,
      imagesQuery: []
    }
  },
  methods: {
    fetch() {
      fetch(`http://localhost:3000/search/${this.query}`)
        .then(res => res.json())
        .then(json => {
          console.log({ json: json });
          this.info = json
          this.imageGenerated = true
          this.imagesQuery = []
          json.results.forEach(el => {
            this.imagesQuery.push(el.poster_path)
          })
        })
        .catch(err => {
          console.log({ err: err });
        })
    },
  }

}

</script>

<template>
  <div class="flex flex-col w-[50%] m-auto mt-10">
    <div class="flex flex-row m-auto w-full">
      <input type="text" v-model="query" class="border border-black w-full pl-3 ">
      <button class=" bg-white border p-2 w-[20%] border-black" @click="fetch">Buscar Peli</button>
    </div>
    <div class="grid grid-cols-3 mt-10">
      <ImageComponent v-if="imageGenerated == true" :images="imagesQuery" />
    </div>
  </div>
</template>
