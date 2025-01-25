<template>
  <div class="min-h-screen bg-gray-50 flex flex-col"> 
    <Navbar />
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view></router-view>
    </main>
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