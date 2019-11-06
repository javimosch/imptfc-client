<template>
  <div>
    <article class="root" ref="article"></article>
  </div>
</template>
<script>
export default {
  components: {},
  name: "TournamentArticle",
  mounted() {
    this.$refs.article.innerHTML = window.marked(`![](https://i.imgur.com/k7ejQuL.png)

## L'international de Montpellier est une coupe du monde locale réunissant des personnes du monde entier partageant la même passion du football

### International de Montpellier

L'international de Montpellier est une compétition de football amateur à Montpellier qui vise à réunir des passionnés de football du monde entier et à soutenir des initiatives sociales et environnementales.
Pour cette première édition nous avons décidé de jouer avec les 8 équipes suivantes :
Brésil 🇧🇷 Royaume-Uni🇬🇧 Syrie 🇸🇾 Soudan 🇸🇩 France 🇫🇷 Argentine 🇦🇷 Sénégal 🇸🇳 Reste du Monde 🌐

Chaque équipe comptera 12 joueurs. 8 joueurs sur le terrain et 3 remplaçant. Pour maximiser les rencontres pendant cette compétition, 50% des joueurs de l'équipe seront des personnes du pays en question et le reste des locaux. Vous serez amenés à choisir votre équipe au moment de l'inscription. En fonction du nombre de joueurs dans chaque équipe il se peut que les organisateurs vous mettent dans une autre équipe (France, reste du monde, ou une autre équipe).

L'inscription est pour les joueurs et les joueuses seulement. Les supporters et familles des joueurs peuvent venir sans s'inscrire. Les dons qui seront récoltés pour ce tournoi nous permettront de couvrir les frais d'organisations mais aussi de soutenir des associations partenaires dans leurs missions. Le Pique-nique international prévu à 13h est ouvert à tous et à toutes. N'oubliez pas de mentionner lors de l'inscription si vous serez en mesure de ramener à boire, à manger, ou les deux. Si vous venez avec vos familles, n'hésitez pas à rapporter plus de nourriture.`);
  }
};
</script>
<style lang="scss" >
.root h2 {
  font-size: 30px;
}
.root h3 {
  font-size: 25px;
}
.root {
  padding: 20px;
}
.root p {
  text-align: left;
}
.root img {
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
}
</style>