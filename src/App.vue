<template>
  <div class="section"> 
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
import Footer from './components/Footer'
import Navbar from './components/Navbar'
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>