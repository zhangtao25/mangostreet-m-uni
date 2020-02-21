import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'

const state = {
	list:[]
}

export default {
	state(){
		return state
	},
	namespaced: true,
	getters,
	mutations,
	actions
}