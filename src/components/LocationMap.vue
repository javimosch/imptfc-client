<template>
  <div>
    <p>
      There are two terrains. We play in Astruc or Alain Delylle. Check in Astruc first.
      <br/><br/>
    </p>
    <img src="../assets/map.jpg"/>
    <img src="../assets/map-astruc.jpg"/>
    <iframe
      class="Location"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=3.8483852148056035%2C43.6117506897653%2C3.852494359016419%2C43.61401890404468&amp;layer=mapnik&amp;marker=43.61288480759847%2C3.8504397869110107"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "LocationMap"
};
</script>
<style scoped>
.Location {
  width: 100%;
  min-height: calc(100vh);
}
</style>


