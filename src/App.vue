<template>
  <div id="app">
    <h1 class="is-size-1" style="
    color: #35388e;">International de Mpt FC</h1>
    <ChoiceTeam />

    <div class="container is-fullhd">
      <router-link :to="{name:'tournaments'}">Join</router-link>
      <Location />
    </div>
    <footer>
      Made with 💛 by&nbsp;
      <a
        href="https://montpedigital.misitioba.com"
        target="_blank"
      >Montpedigital</a>
    </footer>
  </div>
</template>

<script>
import ChoiceTeam from "./components/ChoiceTeam";
import Location from "./components/Map";

export default {
  name: "App",
  components: {
    ChoiceTeam,
    Location
  }
};
</script>

<style>
body {
  background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 0, 0.6)),
    url("./assets/pics/1.jpg");
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
