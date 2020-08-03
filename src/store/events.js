import {default as fql} from '../api'

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
            let events = await fql('getEvents')
            commit("SET_EVENTS",events)
        }
     },
    getters: {  
        events(state){
            return state.events
        }
    }
}