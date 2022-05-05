import events from './events'
import collections from './collections'

import { createStore } from 'vuex'

export default createStore({
    modules: {
        events,
        collections
    }
})