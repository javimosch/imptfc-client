<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white shadow-xl rounded-xl p-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center tracking-tight">{{ $route.meta.eventTitle }}</h1>
      
      <div v-show="mainNotice" class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 rounded-r-lg shadow-sm" v-html="mainNotice.contents"></div>

      <div class="grid md:grid-cols-2 gap-10">
        <div class="space-y-8">
          <div class="space-y-4">
            <div class="relative">
              <label class="block text-sm font-medium text-gray-700 mb-1">Ton surnom</label>
              <input 
                type="text" 
                v-model="form.nickname"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                placeholder="Entre ton surnom..."
              >
            </div>
            <!-- Hidden fields
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ton portable</label>
              <input
                type="text"
                placeholder="En cas de communication... (écrire une fois suffit)"
                v-model="form.phone"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ton Email</label>
              <input
                type="email"
                placeholder="En cas de communication... (écrire une fois suffit)"
                v-model="form.email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
            </div>
            -->
          </div>

          <hr class="border-gray-200" />
          
          <p class="text-sm text-gray-500 italic mb-3">Cliquez sur l'un des boutons</p>

          <div class="space-y-4">
            <button 
              @click="savePlayerSlot(1)"
              class="w-full bg-primary text-white px-6 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Je m'inscris pour {{ $route.meta.eventTitle }} ({{stats.teamNumbers[0]}})
            </button>

            <button 
              @click="savePlayerSlot(0)"
              class="w-full bg-red-500 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Se désinscrire / Absence ({{stats.notGoing}})
            </button>
          </div>
        </div>

        <div>
          <team-list :data="formattedData" />
          <div class="mt-6 bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-r-lg shadow-sm">
            Il y a {{goingCount}} joueurs qui vont au prochain match
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import funql from "funql-api/client.cjs";
import TeamList from "./TeamList.vue";
import moment from 'moment-timezone'
const fql = funql(import.meta.env.VITE_FUNQL_ENDPOINT, {
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
        : moment(this.stats.match.date)
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
        : moment(this.stats.match.date)
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
      window.moment = moment;
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

<style>
/* Remove any scoped styles as we're using Tailwind classes */
</style>
