<template>
  <div>
    <!-- Top notification banner -->
    <div class="bg-yellow-50 border-b border-yellow-200">
      <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-sm text-yellow-700">
          Follow us on 
          <a href="https://www.facebook.com/MontpellierUnitedFC" target="_blank" class="font-medium underline hover:text-yellow-800">Facebook</a>
          - 
          <a href="https://www.instagram.com/montpellierunited/" target="_blank" class="font-medium underline hover:text-yellow-800">Instagram</a>
        </div>
      </div>
    </div>

    <!-- Navigation bar -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo and brand -->
          <div class="flex">
            <router-link to="/" class="flex-shrink-0 flex items-center">
              <img src="/src/assets/logo.png" alt="Logo" class="h-8 w-auto">
              <h2 class="ml-2 text-2xl font-bold text-[#35388e]">Montpellier FC</h2>
            </router-link>
          </div>

          <!-- Navigation links -->
          <div class="flex space-x-8">
            <router-link 
              :to="{name:'home'}" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-[#35388e] hover:border-[#35388e] border-b-2 border-transparent"
              :class="{ 'border-[#35388e] text-[#35388e]': $route.name === 'home' }"
            >
              Play on Sunday
            </router-link>

            <router-link 
              :to="{name:'PlayFriday'}" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-[#35388e] hover:border-[#35388e] border-b-2 border-transparent"
              :class="{ 'border-[#35388e] text-[#35388e]': $route.name === 'PlayFriday' }"
            >
              Play on Friday
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
