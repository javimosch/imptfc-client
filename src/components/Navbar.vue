<template>
  <div class="container">
    <div class="columns is-centered is-mobile is-multiline">
      <div class="column">
        <b-navbar>
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <h2 class="Title">Montpellier FC</h2>
            </b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item>
              <router-link :to="{name:'home'}">Home</router-link>
            </b-navbar-item>
            <b-navbar-item>
              <router-link :to="{name:'events'}">Events</router-link>
            </b-navbar-item>
            <b-navbar-item>
              <router-link :to="{name:'location'}">Le terrain</router-link>
            </b-navbar-item>
          </template>
          <!--
          <template slot="end">
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </b-navbar-item>
          </template>
          -->
        </b-navbar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style lang="scss">
.Title{
  color:#35388e;
  font-size:35px;
}
</style>