<template>
  <div id="app">
    <choice-team></choice-team>
  </div>
</template>

<script>
import ChoiceTeam from "./components/ChoiceTeam";

export default {
  name: "App",
  components: {
    ChoiceTeam
  }
};
</script>

<style>
body {
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
