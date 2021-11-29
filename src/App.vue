<template>
  <div id="app">
    <le-header />
    <le-nav />
    <le-product />
  </div>
</template>

<script>
import leHeader from './components/nav/top-header.vue'
import leNav from './components/nav/nav-menu.vue'
import leProduct from './components/product/product-details.vue'

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
    leProduct
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

<style lang="less">
  // @import './styles/variables.less';
  
  #app {

  }
</style>
