<template>
  <div>
    <div class="notification">
      

      Follow us on 
      <a
        href="https://www.facebook.com/MontpellierUnitedFC"
        target="_blank"
      >Facebook</a>
      - 
      <a
        href="https://www.instagram.com/montpellierunited/"
        target="_blank"
      >Instagram</a>


    </div>
    <div class="container">
      <div class="columns is-centered is-mobile is-multiline">
        <div class="column">
          <b-navbar>
            <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="@/assets/logo.png" alt="MUFC Logo" />
              </b-navbar-item>
            </template>
            <template slot="start">
              <b-navbar-item>
                <router-link :to="{name:'home'}">Play on Sunday</router-link>
              </b-navbar-item>

              <b-navbar-item>
                <router-link :to="{name:'PlaySaturday'}">Play on Saturday</router-link>
              </b-navbar-item>


              <b-navbar-item>
                <router-link v-if="false" :to="{name:'events'}">Events</router-link>
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
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
.Title {
  color: #35388e;
  font-size: 35px;
}
.notification {
  border-radius: 0;
  padding: 10px;
}

img{
  max-height: 5rem;
}
.notification{
  background-color:#edb932;
  height:44px;
  color:#0062cb;
}
</style>