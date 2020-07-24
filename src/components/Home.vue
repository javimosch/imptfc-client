<template>
  <div id="app">
    <Events v-if="false"/>
    <ChoiceTeam />
    <Gallery />
  </div>
</template>

<script>
import ChoiceTeam from "./ChoiceTeam";
import Events from "./Events";
import Gallery from "./Gallery";
export default {
  name: "App",
  components: {
    Gallery,
    ChoiceTeam,
    Events
  }
};
</script>

<style>
body {
  /*background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 0, 0.6)),
    url("./assets/pics/1.jpg");*/
  background-size: cover;
  background-position: center;
  background-position-y: -230px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  height: 100px;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
</style>
