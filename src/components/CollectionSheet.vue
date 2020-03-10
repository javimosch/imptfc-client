<template lang="pug">
	.collection_sheet(ref="root")
		button(@click="refresh") Refresh
		input(type="range" min="50" max="200" step="5" v-model="styles.columnWidth")
		table(v-show="getFields.length>0")
			thead
				tr
					th(v-for="field in getFields" :ref="'field_'+field.label" :style="columnStyles")
						.label.is-size-6(v-text="field.label")
			tbody
				tr(v-for="item in items" :key="item._id")
					td(v-for="(field, index) in getFields" :style="columnStyles")
						.value(v-text="item[field.label]")
				tr
					td(v-for="(field, index) in getFields" :style="columnStyles")
						input(v-show="field.label!=='_id'" v-model="form[field.label]" @keyup.enter="save")
						.subdoc(v-show="isSubdocument(field)")
							.subdoc_def(v-for="path in subdocumentPaths(field)")
								select(v-show="path.enum.length>0" :placeholder="path.name")
									option(v-for="str in path.enum" :value="str" v-text="str")
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
			styles:{
				columnWidth: 150
			},
      form: {}
    };
  },
  mounted() {},
  methods: {
    save() {
      this.$store.dispatch(
        "collections/save",
        JSON.parse(JSON.stringify(this.form))
      );
    },
    refresh() {
      this.$store.dispatch("collections/refresh");
		},
		isSubdocument(field){
			return field.def.obj
		},
		subdocumentPaths(field){
			return Object.keys(field.def.paths||{}).filter(k=>k!=='_id').map(k=>{
				return {
					name: field.def.paths[k].path,
					type:field.def.paths[k].instance,
					enum:field.def.paths[k].enumValues||[], 
				}
			})
		}
  },
  computed: {
    ...mapGetters({
      schema: "collections/info"
    }),
    ...mapState({
      items: state => state.collections.items
		}),
		columnStyles(){
			return {
				"max-width": `${this.styles.columnWidth}px`
			}
		},
		
    getFields() {
      return Object.keys(this.schema.paths || {})
        .filter(key => !["__v"].includes(key))
        .sort((a, b) => {
          return a == "_id" ? -1 : 0;
        })
        .map(key => {
          return {
            label: this.schema.paths[key].path,
						type: this.schema.paths[key].instance,
						def: this.schema.obj[key]||{}
          };
        });
    }
  }
};
</script>
<style lang="scss" scoped>
table {
  overflow-x: auto;
  max-width: calc(100vw - 50px);
  padding: 50px 0px;
  display: block;
	margin: 20px 0px;
}
input {
  width: -webkit-fill-available;
}
th,
td {
  min-width: 50px;
  max-width: 170px;
  overflow: hidden;
  width: 1%;
  word-wrap: break-word;
}
th
.value{
	font-size:11px;
}
</style>