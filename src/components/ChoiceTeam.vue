<template>
  <div class="ChoiceTeam container">
    <div class="notification">Report your assitance and subscribe a team before Sunday!</div>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-three-quarters">
        <section>
          <b-field label="Nickname">
            <b-input v-model="form.nickname"></b-input>
          </b-field>
        </section>
      </div>
      <div class="column is-three-quarters">
        <div class="buttons is-centered">
          <b-button type="is-success" @click="savePlayerSlot(1)">Team 1</b-button>
          <b-button type="is-info" @click="savePlayerSlot(2)">Team 2</b-button>
          <b-button type="is-danger" @click="savePlayerSlot(3)">Team 3</b-button>
        </div>
      </div>
    </div>
    <div class="notification">There are {{stats.assitances}} players going to the next match</div>
    <div class="columns is-multiline is-mobile">
      <div class="column is-one-third">
        <div class="notification">Team 1 has {{stats.teamNumbers[0]}}</div>
      </div>
      <div class="column is-one-third">
        <div class="notification">Team 2 has {{stats.teamNumbers[1]}}</div>
      </div>
      <div class="column is-one-third">
        <div class="notification">Team 3 has {{stats.teamNumbers[2]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { savePlayerSlot, call } from "../api";

export default {
  name: "ChoiceTeam",
  data() {
    return {
      options: {
        max_number_of_teams: 3
      },
      stats: {
        teamNumbers: [0, 0, 0],
        assitances: 0
      },
      form: {
        nickname: "",
        teamNumber: 0
      }
    };
  },
  async created() {
    Object.assign(this.$data, await call("getAppHomeData"));
  },
  methods: {
    async savePlayerSlot(teamNumber) {
      this.form.teamNumber = teamNumber;
      if (!this.form.nickname)
        return this.$buefy.toast.open({
          message: "nickname required",
          type: "is-warning"
        });
      console.log(await savePlayerSlot({ ...this.form }));
      this.$buefy.toast.open({
        message: "Saved!",
        type: "is-success"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
