<template lang="pug">
.team-list
  .list-item(v-for="item in data")
    span {{ item.nickname }}
    span {{ item.joinedFormatted }}
    span {{ item.teamNumberFormatted }}
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
