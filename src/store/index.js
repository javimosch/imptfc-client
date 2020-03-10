import events from './events'
import collections from './collections'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        events,
        collections
    }
})