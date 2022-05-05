import events from './events'
import collections from './collections'
import Vue from 'vue'
import { createStore } from 'vuex'

export default createStore({
    modules: {
        events,
        collections
    }
})