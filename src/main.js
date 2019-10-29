import Vue from 'vue'
import VueRouter from 'vue-router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'
import Tournaments from './components/Tournaments.vue'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false

// ROUTER
const routes = [
    { path: '/', component: App, name: 'home' },
    { path: '/tournaments', component: Tournaments, name: 'tournaments' }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    router
    // render: h => h(App)
}).$mount('#app')