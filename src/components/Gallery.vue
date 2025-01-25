<template>
  <div>
    <!-- <gallery :images="images" :index="index" @close="index = null"></gallery> -->

    <div class="gallery-grid">
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: `url('${image}')`
        }"
      ></div>
    </div>
  </div>
</template>

<script>
//import * as VueGallery from "vue-gallery";
export default {
  data: function () {
    return {
      images: (() => {
        var len = 13;
        var arr = [];
        //for (var x = 0; x < len; x++)
          //arr.push(require("../assets/pics/" + (x + 1).toString() + ".jpg"));
        //return arr;
        return this.loadImages()
      })(),
      index: null,
    };
  },
  watch:{
    index(){
      this.openImageInNewTab()
    }
  },
  methods: {
    openImageInNewTab() {
      if (this.index !== null) {
        window.open(this.images[this.index], '_blank');
      }
    },
    loadImages() {
      const context = import.meta.globEager("../assets/pics/*.{jpg,png}");
      return Object.entries(context).map(([path, image]) => image.default);
    },
  },
};
</script>

<style scoped lang="scss">
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.image {
  height: 200px;
  background-size: cover;
  background-position: center;
  border: 1px solid #ebebeb;
  cursor: pointer;
}
.gallery {
  @media (max-width: 968px) {
    display: flex !important;
    justify-content: center !important;
    flex-direction: column !important;
    align-items: center !important;
  }
}
</style>
