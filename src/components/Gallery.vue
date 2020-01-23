<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
 
<script>
import VueGallery from "vue-gallery";
import PicOne from "../assets/pics/1.jpg";
import PicTwo from "../assets/pics/2.jpg";
import PicThree from "../assets/pics/3.jpg";
import PicFour from "../assets/pics/4.jpg";
export default {
  data: function() {
    return {
      images: [PicOne, PicTwo, PicThree, PicFour],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 
 
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style> 