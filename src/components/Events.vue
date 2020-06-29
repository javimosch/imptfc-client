<template lang="pug">
	.events
		h1 Events
		.columns.is-multiline.is-mobile
			.event(v-for="event in events" :key="event._id")
				.column.is-full-desktop
					.hero
						.hero-body
							.container
								.title(v-text="event.title")
								.subtitle(v-text="event.short_description")
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      events: "events"
    })
  },
  mounted() {
    this.$store.dispatch("fetchEvents");
  }
};
</script>
<style lang="scss" scoped>

</style>