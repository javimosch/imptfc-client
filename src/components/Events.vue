<template lang="pug">
	.events
		h1.title.is-1 Events
		.columns.is-multiline.is-desktop
			.column.is-half-desktop.is-one-third-widescreen(v-for="event in filteredEvents" :key="event._id")
				Event(:event="event")
</template>
<script>
import { mapGetters } from "vuex";
import Event from './Event'
export default {
	components:{
		Event
	},
  computed: {
    ...mapGetters({
      events: "events"
	}),
	filteredEvents(){
		return this.events.concat(this.events).concat(this.events).concat(this.events).concat(this.events).concat(this.events)
	}
  },
  mounted() {
    this.$store.dispatch("fetchEvents");
  }
};
</script>
<style lang="scss" scoped>

</style>