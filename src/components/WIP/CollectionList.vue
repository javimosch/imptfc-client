<template lang="pug">
    .collection_list
        h1.is-size-1(v-text="$route.params.name")
        CollectionSheet
</template>
<script>
import CollectionSheet from './CollectionSheet.vue'
export default {
    components:{
        CollectionSheet
    },
    mounted(){
        this.$store.dispatch('collections/fetch',this.$route.params.name)
    }
}
</script>