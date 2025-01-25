import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
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
            path: '/play-friday',
            name: 'PlayFriday',
            component: () => import('./components/ChoiceTeam.vue'),
            meta: {
                ssr: false,
                eventTitle:'Friday Match',
                eventCode:'fridayEveningFootball',
                eventDayOfWeek:4
            }
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')