<template>
  <div class="ChoiceTeam">
    <div class="container is-fluid">

      <h1 class="event-title">{{ $route.meta.eventTitle }}</h1>
      <p>{{ stats.match._id }}</p>
      
      <div v-show="mainNotice" class="notification" v-html="mainNotice.contents"></div>

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-full-mobile is-half-table is-half-desktop">
          <div>
            <b-field label="Ton surnom">
              <b-input v-model="form.nickname"></b-input>
            </b-field>
            <b-field label="Ton portable">
              <b-input
                placeholder="En cas de communication... (écrire une fois suffit)"
                v-model="form.phone"
              ></b-input>
            </b-field>

            <b-field label="Ton Email">
              <b-input
                placeholder="En cas de communication... (écrire une fois suffit)"
                v-model="form.email"
              ></b-input>
            </b-field>

          </div>
          <hr />
          <p class="is-size-6 subtitle" style="margin-top:20px;">Cliquez sur l'un des boutons</p>

          <div class="buttons is-centered">
            <b-button type="is-success" @click="savePlayerSlot(1)" >Je m'inscris pour {{ $route.meta.eventTitle }} ({{stats.teamNumbers[0]}})</b-button>

            <!--
            <b-button type="is-info" @click="savePlayerSlot(2)">Équipe 2 ({{stats.teamNumbers[1]}})</b-button>
            <b-button type="is-info" @click="savePlayerSlot(3)">Équipe 3 ({{stats.teamNumbers[2]}})</b-button>
            <b-button type="is-info" @click="savePlayerSlot(4)">Équipe 4 ({{stats.teamNumbers[3]}})</b-button>
            <b-button v-show="false" type="is-danger" @click="savePlayerSlot(5)">Remplaçant ({{stats.teamNumbers[4]}})</b-button>
            -->
            <b-button type="is-danger" @click="savePlayerSlot(0)">Se désinscrire / Absence ({{stats.notGoing}})</b-button>
          </div>
        </div>

        <div class="column is-full-mobile is-half-table is-half-desktop">
          <team-list :data="formattedData" />
          <div class="notification">Il y a {{goingCount}} joueurs qui vont au prochain match</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import funql from "funql-api/client.cjs";
import TeamList from "./TeamList";

const fql = funql(process.env.VUE_APP_FUNQL_ENDPOINT, {
        namespace: "imptfc"
      })

export default {
  components: {
    TeamList
  },
  name: "ChoiceTeam",
  data() {
    return {
      mainNotice:"",
      stats: {
        notGoing: 0,
        teamNumbers: [0, 0, 0, 0],
        match: {
          _id:null,
          players: []
        }
      },
      form: {
        nickname: "",
        phone: "",
        teamNumber: 0
      }
    };
  },
  async created() {
    this.update();
  },
  computed: {
    dateFormatted() {
      return !this.stats.match.date
        ? ""
        : require("moment-timezone")(this.stats.match.date)
            .tz("Europe/Paris")
            .utc()
            .locale("fr")
      //      .calendar();
      .format('dddd DD [à] HH[h]mm') //DD-MM-YYYY
    },
    formattedData() {
      let teamLabels = {
        "1": "Equipe 1",
        "2": "Equipe 2",
        "3": "Equipe 3",
        "4": "Equipe 4",
        "5": "Remplaçant"
      };
      if(!this.stats.match.players || this.stats.match.players.length===0){
        return []
      }
      let players = this.stats.match.players.map(p => {
        p.nickname = p.nickname.charAt(0).toUpperCase() + p.nickname.substr(1);
        p.joinedFormatted = moment(p.joined).format('DD-MM-YY HH:mm')
        p.teamNumberFormatted =
          p.teamNumber === 0 ? "Absence" : teamLabels[p.teamNumber.toString()];
        return p;
      });
      let playersMissingTheMatch = players.filter(p => p.teamNumber === 0);
      players = players
        .filter(p => p.teamNumber !== 0)
        .sort((a, b) => {
          return a.joined > b.joined ? 1 : -1;
        });
      return players.concat(playersMissingTheMatch);
    },
    goingCount() {
      return this.stats.match && this.stats.match.players && this.stats.match.players.filter(
        p => ![0].includes(p.teamNumber)
      ).length;
    }
  },
  methods: {
    getMatchDateFormat(format = "DD-MM-YYYY HH:mm:ss") {
      return !this.stats.match.date
        ? ""
        : require("moment-timezone")(this.stats.match.date)
            .tz("Europe/Paris")
            .utc()
            .locale("fr")
            .format(format);
    },
    async update() {
      Object.assign(this.$data, await fql("getAppHomeData",{
        eventCode:this.$route.meta.eventCode,
        eventDayOfWeek: this.$route.meta.eventDayOfWeek
      }));
      console.log(`MATCH DATE IS ${this.getMatchDateFormat()}`, {
        date: this.stats.match.date
      });
      window.moment = require("moment-timezone");
    },
    
    isCurrentSubcriberNew() {
      return (
        this.stats.match && this.stats.match.players && this.stats.match.players.filter(p => p.nickname == this.form.nickname)
          .length == 0
      );
    },
    /**
     * Subscribes the player to the match (Sunday)
     */
    async savePlayerSlot(teamNumber) {
     
     /*
     if (
        this.goingCount() >= 16 &&
        this.isCurrentSubcriberNew() &&
        teamNumber !== 0
      ) {
        this.$buefy.toast.open({
          message:
            "Au-delà des 16 joueurs, vous serez inscrit comme remplaçant.",
          type: "is-info",
          duration: 5000
        });
        teamNumber = 3; //3 => remplaçant
      }*/

      var wantsToPlay = ![0].includes(teamNumber);

      /*
      if (
        this.goingCount >= 44 &&
        wantsToPlay
      ) {
        return this.$buefy.toast.open({
          message: "Il y a déjà 44 joueurs sur le terrain (COVID guidelines)",
          type: "is-info",
          duration: 5000
        });
      }*/

      if (!this.form.nickname) {
        return this.$buefy.toast.open({
          message: "D'abord, écrivez votre nom",
          type: "is-warning"
        });
      }
      await fql("savePlayerSlot", {
        ...this.form,
        teamNumber,
        eventId: this.stats.match._id
      });

      this.$buefy.toast.open({
        message: "Est prêt!",
        type: "is-info"
      });
      this.update();

      this.form.nickname = "";
      this.form.phone = "";
      this.form.email = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.ChoiceTeam {
  padding: 20px;
}

.event-title{
  font-size:35px;
}
</style>
