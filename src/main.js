import Vue from 'vue'
import VueRouter from 'vue-router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Home from './components/Home.vue'
import Location from './components/Location.vue'

import Navbar from './components/Navbar'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false

// ROUTER
const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/location', component: Location, name: 'location' }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    template: `
    <div>
        <Navbar />
        <div class="container">
    <div class="columns is-centered is-mobile is-multiline">
      <div class="column">
        <router-view></router-view>
        </div>
        </div>
        </div>
        <footer>
            Made with ❤️ by&nbsp;
            <a href="https://montpellier.misitioba.com" target="_blank">MISITIOBA</a>
        </footer>
    </div>
    `,
    components: {
        Navbar
    },
    router
    // render: h => h(App)
}).$mount('#app')