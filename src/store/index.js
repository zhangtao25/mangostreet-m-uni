import Vue from 'vue'
import Vuex from 'vuex'

import common from './common/index.js'
import eventList from './eventList/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		common,
        eventList
	}
})
