import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Home.vue'),
            meta: {
                ssr: false,
                eventTitle:'Sunday Match',
                eventCode:'sundayMorningFootball',
                eventDayOfWeek:0
            }
        },
        {
            path: '/play-saturday',
            name: 'PlaySaturday',
            component: () => import('./components/ChoiceTeam.vue'),
            meta: {
                ssr: false,
                eventTitle:'Saturday Match',
                eventCode:'saturdayMorningFootball',
                eventDayOfWeek:6
            }
        },
        /*
        {
            name: 'location',
            path: '/location', component: () => import('./components/Location.vue'),
            meta: {
                ssr: false
            }
        }*/
        /*{
            path: '/events',
            name: 'events',
            component: () => import('./components/Events.vue'),
            meta: {
                ssr: false
            }
        },
        , {
            name: "collection_list",
            path: '/collection/:name',
            component: () => import('./components/CollectionList.vue'),
            meta: {
                ssr: false
            }
        }*/
    ]
})

new Vue({
    store, router,
    render: h => h(App)
}).$mount('#app')