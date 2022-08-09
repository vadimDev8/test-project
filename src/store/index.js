import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import result from './result'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth, result
	},
	state: {
		error: {}
	},
	mutations: {
		setError(state, payload) {
			state.error = payload
		},
		clearError(state) {
			state.error = {}
		}
	},
	actions: {

	},
	getters: {
		error(state) {
			return state.error
		}
	}
})
