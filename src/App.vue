<template>
  <div> 
    <Navbar />
    <div class="container">
      <div class="columns is-centered is-mobile is-multiline">
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>