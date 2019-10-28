 <template>
  <b-table
    :data="isEmpty ? [] : data"
    :bordered="isBordered"
    :striped="isStriped"
    :narrowed="isNarrowed"
    :hoverable="isHoverable"
    :loading="isLoading"
    :focusable="isFocusable"
    :mobile-cards="hasMobileCards"
  >
    <template slot-scope="props">
      
      <b-table-column field="nickname" label="Surnom">{{ props.row.nickname }}</b-table-column>

      <b-table-column field="last_name" label="Équipe">{{ props.row.teamNumberFormatted }}</b-table-column>

    </template>

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
      hasMobileCards: false
    };
  }
};
</script>
<style scoped>
</style>