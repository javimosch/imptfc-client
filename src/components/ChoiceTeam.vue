<template>
  <div class="ChoiceTeam container">
    <div class="notification">Indiquez votre présence en vous inscrivant à une équipe chaque semaine (avant le dimanche!)</div>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-three-quarters">
        <section>
          <b-field label="Ton surnom">
            <b-input v-model="form.nickname"></b-input>
          </b-field>
        </section>
      </div>
      <div class="column is-three-quarters">
        <div class="buttons is-centered">
          <b-button type="is-success" @click="savePlayerSlot(1)">Équipe 1 ({{stats.teamNumbers[0]}})</b-button>
          <b-button type="is-info" @click="savePlayerSlot(2)">Équipe 2 ({{stats.teamNumbers[1]}})</b-button>
          <b-button type="is-danger" @click="savePlayerSlot(3)">Équipe 3 ({{stats.teamNumbers[2]}})</b-button>
        </div>
      </div>
    </div>
    <div class="notification">Il y a {{stats.match.players.length}} joueurs qui vont au prochain match</div>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-two-third">
        <team-list :data="formattedData"/>
      </div>
      <div class="column is-two-third">
        <map/>
      </div>
    </div>
  </div>
</template>

<script>
import { call } from "../api";
import TeamList from "./TeamList";
import Map from './Map'
export default {
  components:{
    TeamList,
    Map
  },
  name: "ChoiceTeam",
  data() {
    return {
      options: {
        max_number_of_teams: 3
      },
      stats: {
        teamNumbers: [0, 0, 0],
        match:{
          players:[]
        }
      },
      form: {
        nickname: "",
        teamNumber: 0
      }
    };
  },
  async created() {
    this.update()
  },
  computed:{
    formattedData(){
      return this.stats.match.players.map(p=>{
        p.nickname = p.nickname.charAt(0).toUpperCase() + p.nickname.substr(1)
        return p
      })
    }
  },
  methods: {
    async update(){
      Object.assign(this.$data, await call("getAppHomeData"));
    },
    async savePlayerSlot(teamNumber) {
      
      if (!this.form.nickname){
        return this.$buefy.toast.open({
          message: "Surnom requis!",
          type: "is-warning"
        });
      }
      await call('savePlayerSlot',{
        ...this.form,
        teamNumber
      })
      
      this.$buefy.toast.open({
        message: "Est prêt!",
        type: "is-info"
      });
      this.update()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
