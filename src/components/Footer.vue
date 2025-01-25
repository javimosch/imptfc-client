<script setup>
defineProps({
  message: {
    type: String,
    default: '❤️'
  },
  link: {
    type: String,
    default: 'https://savoietech.fr'
  }
});
</script>

<template>
  <footer class="py-8 mt-auto">
    <div class="flex justify-center items-center text-gray-600">
      <span>Made with {{ message }} by&nbsp;</span>
      <a :href="link" target="_blank" class="text-[#35388e] hover:text-[#35388e]/80 underline">Savoietech.fr</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* Removed the original styling to make way for Tailwind CSS */
</style>