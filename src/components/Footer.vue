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
<footer>
  <div class="centered">
    <span>Made with {{ message }} by&nbsp;</span>
    <a :href="link" target="_blank">Savoietech.fr</a>
  </div>
</footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
}
</style>