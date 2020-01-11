import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import subreddits from './modules/subreddits'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        subreddits
    }
})
