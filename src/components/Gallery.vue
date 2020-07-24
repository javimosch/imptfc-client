<template>
  <div>
    <no-ssr placeholder="You can even add a placeholder to be rendered instead!">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
    </no-ssr>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: `url('${image}')`, width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
 
<script>
import NoSSR from 'vue-no-ssr';
import VueGallery from "vue-gallery";
export default {
  
  data: function() {
    return {
      images: (()=>{
        var len = 11;
        var arr = []
        for(var x=0;x<len;x++) arr.push(require('../assets/pics/' + (x+1).toString() + '.jpg'))
        return arr;
      })(),
      index: null
    };
  },

  components: {
    'no-ssr':NoSSR,
    gallery: VueGallery
  }
};
</script> 
 
<style scoped lang="scss">
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
.gallery{
  @media (max-width: 968px) {
    display: flex!important;
    justify-content: center!important;
    flex-direction: column!important;
    align-items: center!important;
  }
}
</style> 