import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isNav: false,
		logoUrl: '../assets/le-logo.png'
	},
	getters: {
		getIsNav(state) {
			return state.isNav;
		},
		logoUrl(state) {
			return state.logoUrl;
		}
	},
	mutations: {
		setIsNav(state, val) {
			state.isNav = val;
		}
	},
	actions: {
	},
	modules: {
	}
})
