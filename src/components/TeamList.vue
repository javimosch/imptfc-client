 <template>
  <b-table
    :data="data"
    :columns="columns"
    :bordered="isBordered"
    :striped="isStriped"
    :narrowed="isNarrowed"
    :hoverable="isHoverable"
    :loading="isLoading"
    :focusable="isFocusable"
    :mobile-cards="hasMobileCards"
  >
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon icon="emoticon-sad" size="is-large"></b-icon>
          </p>
          <p>Aucune donnée pour l'instant.</p>
        </div>
      </section>
    </template>
  </b-table>
</template>
<script>
export default {
  props:['data'],
  name: "TeamList",
  computed:{
    isEmpty(){
      return (this.data && this.data.length===0) ? true : false
    }
  },
  data() {
    return {
      isBordered: false,
      isStriped: true,
      isNarrowed: true,
      isHoverable: false,
      isLoading: false,
      isFocusable: false,
      hasMobileCards: false,
      columns: [
        {
          field: 'nickname',
          label: 'Surnom',
          width: 'auto', 
        },
        {
          field: 'joinedFormatted',
          label: 'Subscribed',
          width: 'auto',
        },
        {
          field: 'teamNumberFormatted',
          label: 'Équipe',
          width: 'auto',
        }
      ]
    };
  },
  mounted(){
    console.log(this.data)
  }
};
</script>
<style scoped>
</style>