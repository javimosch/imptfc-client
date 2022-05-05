import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

import store from './store'

const router = createRouter({
    history: createWebHashHistory(),
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
            name: 'location',
            path: '/location', component: () => import('./components/Location.vue'),
            meta: {
                ssr: false
            }
        }
       
    ]
})


const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')