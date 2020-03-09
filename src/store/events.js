import {default as fql, get} from '../api'

export default {
    //namespaced: true,
    state: { 
        events:[]
     },
    mutations: {  
        SET_EVENTS(state, events){
            state.events= events
        }
    },
    actions: { 
        async fetchEvents({commit}){
            let events = await get('api/events')
            commit("SET_EVENTS",events.data||[])
        }
     },
    getters: {  
        events(state){
            return state.events
        }
    }
}