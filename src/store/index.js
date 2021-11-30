import Vue from 'vue'
import Vuex from 'vuex'
import vikingJson from '../data/viking-product.json'
import navListJson from '../data/nav-menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isNav: false,
		logoUrl: '../assets/le-logo.png',
		cart: 0,
		vikingProduct: vikingJson.product,
		navList: navListJson.menu,
		breadCrumbs: ["Home", "Equipment", "Safety", "Helmets & Shields", "Helmets", "Viking 3350" ]
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
		},
		getVikingProduct(state) {
			return state.vikingProduct
		},
		getNavList(state) {
			return state.navList
		},
		getBreadCrumbs(state) {
			return state.breadCrumbs
		},
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
