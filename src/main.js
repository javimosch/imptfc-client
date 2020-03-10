import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueRouter)

// Export factory function
export default function createApp({ type }) {
    //type client/server
    // 1. Create a router instance 
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('./components/Home.vue'),
                meta: {
                    ssr: false
                }
            },
            {
                path: '/events',
                name: 'events',
                component: () => import('./components/Events.vue'),
                meta: {
                    ssr: false
                }
            },
            {
                name: 'location',
                path: '/location', component: () => import('./components/Location.vue'), 
                meta: {
                    ssr: false
                }
            },{
                name:"collection_list",
                path:'/collection/:name',
                component:()=>import('./components/CollectionList.vue'),
                meta:{
                    ssr:false
                }
            }
        ]
    })

    // 2. Create a root component
    const app = {
        store,
        router,
        // This is necessary, it is for vue-meta
        head: {},
        render: h => h(App)
    }

    // 3. return the root component
    return app
}