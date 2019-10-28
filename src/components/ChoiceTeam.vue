<template>
<div class="ChoiceTeam">
  <div class="container ">
    <div class="notification">Indiquez votre présence en vous inscrivant à une équipe chaque semaine (avant le dimanche!)</div>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-half">
        <div>
          <b-field label="Ton surnom">
            <b-input v-model="form.nickname"></b-input>
          </b-field>
        </div>
        <hr>
        <p class="is-size-6 subtitle" style="margin-top:20px;">Cliquez sur l'un des quatre boutons</p>
        
        <div class="buttons is-centered">
          <b-button type="is-success" @click="savePlayerSlot(1)">Équipe 1 ({{stats.teamNumbers[0]}})</b-button>
          <b-button type="is-info" @click="savePlayerSlot(2)">Équipe 2 ({{stats.teamNumbers[1]}})</b-button>
          <b-button type="is-danger" @click="savePlayerSlot(3)">Équipe 3 ({{stats.teamNumbers[2]}})</b-button>
          <b-button type="is-default" @click="savePlayerSlot(0)">Absence ({{stats.notGoing}})</b-button>
        </div>
      </div>
     
      <div class="column is-half">
        <team-list :data="formattedData"/>
        <div class="notification">Il y a {{goingCount}} joueurs qui vont au prochain match</div>
      </div>

      <div class="column is-half">
        <b-notification type="is-info" aria-close-label="Close notification">
            Prochain événement: {{dateFormatted}}
        </b-notification>
      </div>
      
    </div>
   
    
  </div>
  
</div>
</template>

<script>
import { call } from "../api";
import TeamList from "./TeamList";

export default {
  components:{
    TeamList,
    
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
    dateFormatted(){
      return require('moment-timezone')(this.stats.match.date)
      .tz('Europe/Paris')
      .utc()
      .locale('fr')
      .calendar()
      //.format('dddd DD-MM-YYYY HH[h]mm')
    },
    goingCount(){
      return this.stats.match.players.filter(p=>p.teamNumber!==0).length
    },
    formattedData(){
      return this.stats.match.players.map(p=>{
        p.nickname = p.nickname.charAt(0).toUpperCase() + p.nickname.substr(1)
        p.teamNumberFormatted = p.teamNumber===0 ? 'Absence' : p.teamNumber
        return p
      }).sort((a)=>{
        return (a.teamNumber<1) ? 1 : -1
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
          message: "D'abord, écrivez votre nom",
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
