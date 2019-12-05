<template>
  <div class="ChoiceTeam">
    <div class="container is-fluid">

    <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-half">
         <b-notification
            style="margin-bottom:20px;"
            type="is-warning"
            aria-close-label="Close notification"
          >
	      PROCHAIN MATCH (HEBDOMADAIRE) : {{dateFormatted}}
	 </b-notification>
        </div>
      </div>
     

	<div
        class="notification"
      >Indiquez votre présence en vous inscrivant à une équipe chaque semaine (avant le dimanche!)</div>

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-full-mobile is-half-table is-half-desktop">
          <div>
            <b-field label="Ton surnom">
              <b-input v-model="form.nickname"></b-input>
            </b-field>
          </div>
          <hr />
          <p class="is-size-6 subtitle" style="margin-top:20px;">Cliquez sur l'un des boutons</p>

          <div class="buttons is-centered">
            <b-button
              type="is-success"
              @click="savePlayerSlot(1)"
            >Équipe 1 ({{stats.teamNumbers[0]}})</b-button>
            <b-button type="is-info" @click="savePlayerSlot(2)">Équipe 2 ({{stats.teamNumbers[1]}})</b-button>
            <b-button
              v-show="showThirdTeam"
              type="is-danger"
              @click="savePlayerSlot(3)"
            >Équipe 3 ({{stats.teamNumbers[2]}})</b-button>
            <b-button type="is-default" @click="savePlayerSlot(0)">Absence ({{stats.notGoing}})</b-button>
          </div>
        </div>

        <div class="column is-full-mobile is-half-table is-half-desktop">
          <team-list :data="formattedData" />
          <div class="notification">Il y a {{goingCount}} joueurs qui vont au prochain match</div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-half">
         <b-notification
            style="margin-bottom:20px;"
            type="is-info"
            aria-close-label="Close notification"
          >
		Rappelez-vous que le 17 novembre, il y a un tournoi au lieu du jeu hebdomadaire.
	 </b-notification>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { funql } from "funql-api/client";
import TeamList from "./TeamList";

export default {
  components: {
    TeamList
  },
  name: "ChoiceTeam",
  data() {
    return {
      options: {
        max_number_of_teams: 3
      },
      stats: {
        teamNumbers: [0, 0, 0],
        match: {
          players: []
        }
      },
      form: {
        nickname: "",
        teamNumber: 0
      }
    };
  },
  async created() {
    this.update();
  },
  computed: {
    dateFormatted() {
      return require("moment-timezone")(this.stats.match.date)
        .tz("Europe/Paris")
        .utc()
        .locale("fr")
        .calendar();
      //.format('dddd DD-MM-YYYY HH[h]mm')
    },
    goingCount() {
      return this.stats.match.players.filter(p => p.teamNumber !== 0).length;
    },
    showThirdTeam() {
      return false; //this.stats.match.players.length >= 16;
    },
    formattedData() {
      let players = this.stats.match.players.map(p => {
        p.nickname = p.nickname.charAt(0).toUpperCase() + p.nickname.substr(1);
        p.teamNumberFormatted = p.teamNumber === 0 ? "Absence" : p.teamNumber;
        return p;
      });
      let playersMissingTheMatch = players.filter(p => p.teamNumber === 0);
      players = players
        .filter(p => p.teamNumber !== 0)
        .sort((a, b) => {
          return a.teamNumber > b.teamNumber ? 1 : -1;
        });
      return players.concat(playersMissingTheMatch);
    }
  },
  methods: {
    async update() {
      Object.assign(this.$data, await funql("getAppHomeData"));
    },
    async savePlayerSlot(teamNumber) {
      
	if(this.stats.match.players.length>=20){
		return this.$buefy.toast.open({
			message: "Au-delà des 20 joueurs, vous pouvez venir sans vous inscrire, mais nous ne pouvons pas vous garantir de pouvoir jouer en continu. Vous devrez peut-être attendre dans le froid de l'hiver :(",
			type: "is-warning"
		})
	}

	if (!this.form.nickname) {
        return this.$buefy.toast.open({
          message: "D'abord, écrivez votre nom",
          type: "is-warning"
        });
      }
      await funql("savePlayerSlot", {
        ...this.form,
        teamNumber
      });

      this.$buefy.toast.open({
        message: "Est prêt!",
        type: "is-info"
      });
      this.update();
    }
  }
};
</script>
<style lang="scss" scoped>
.ChoiceTeam {
  padding: 20px;
}
</style>
