<template>
	<div id="app">
	<div class="header">
		<le-header />
		<le-nav />
	</div>
	<div class="page">
		<le-breadcrumbs />
		<le-product />
	</div>
	<footer>
	</footer>
	</div>
</template>

<script>
import leHeader from './components/nav/top-header.vue'
import leNav from './components/nav/nav-menu.vue'
import leProduct from './components/product/product-details.vue'
import leBreadcrumbs from './components/breadcrumbs.vue'

import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'App',
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  components: {
    leHeader,
    leNav,
    leProduct,
    leBreadcrumbs
  },
  computed: {

  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    }
  }

}
</script>

<style lang='less'>
	@import './styles/variables.less';

	#app {
		position: relative;
		max-width: 1450px;
		margin: 0 auto;
		height: 100%;
		background-color: #fff;

		@media only screen and (min-width: @breakpoint) {
			.header {
				margin-bottom: 70px;
			}

			.page {
				padding: 0px 60px;
			}
		}

		footer {
			background-color: #1E1E1E;
			height: 200px;
		}
	}
</style>
