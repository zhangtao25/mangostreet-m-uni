import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import state from './state.js'
console.log(state)

export default {
	state(){
		return state
	},
	namespaced: true,
	getters,
	mutations,
	actions
}
