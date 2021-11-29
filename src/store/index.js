import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isNav: false,
		logoUrl: '../assets/le-logo.png',
		cart: 0
	},
	getters: {
		getIsNav(state) {
			return state.isNav;
		},
		logoUrl(state) {
			return state.logoUrl;
		},
		getCart(state) {
			return state.cart
		}
	},
	mutations: {
		setIsNav(state, val) {
			state.isNav = val;
		},
		setCart(state, val) {
			state.cart = val;
		}
	},
	actions: {
	},
	modules: {
	}
})
