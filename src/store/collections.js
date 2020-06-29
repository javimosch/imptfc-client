import {default as fql, get, post} from '../api'

export default {
    namespaced: true,
    state: { 
        info:{},
        items:[]
     },
    mutations: {  
        SET_INFO(state, info){
            state.info= info
            console.log('SET_INFO',info)
        },
        SET_ITEMS(state,items){
            state.items=items
            console.log("SET_ITEMS",items)
        }
    },
    actions: { 
        async fetch({commit}, name){
            let info = await fql('getCollectionInfo',name)
            commit("SET_INFO",info||{})
        },
        async refresh({commit,state}){
            commit("SET_ITEMS", (await get(`api/${state.info.plural}`)).data||[])
        },
        async save({commit, dispatch, state}, form){
            await post(`api/${state.info.plural}`,form)
            dispatch('refresh')
        }
     },
    getters: {  
        info(state){
            return state.info
        }
    }
}