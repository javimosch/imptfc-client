<template>
  <div id="app">
    <ChoiceTeam />
<!---






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




-
    <TournamentArticle />

    <div class="buttons is-centered" style="margin-top:20px;">
      <a
        href="https://www.helloasso.com/associations/yeobi/evenements/international-de-montpellier"
        target="_blank"
        class="button is-info is-large"
      >Voir plus dans HelloAsso</a>
    </div>
-->
    <Gallery />
  </div>
</template>

<script>
import ChoiceTeam from "./ChoiceTeam";
import Gallery from "./Gallery";
import TournamentArticle from "./TournamentArticle";
export default {
  name: "App",
  components: {
    Gallery,
    TournamentArticle,
    ChoiceTeam
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
