<template lang="pug">
.card
  .card-image
    figure.image.is-4by3
      img(src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image')
  .card-content
    .media
      .media-left
        figure.image.is-48x48
          img(src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image')
      .media-content
        p.title.is-4(v-text="event.title")
        //p.subtitle.is-6(v-text="event.short_description")
    .content
      p(v-text="event.short_description")

</template>
<script>
export default {
  props: {
    event: {
      type: Object,
    },
  },
};
</script>