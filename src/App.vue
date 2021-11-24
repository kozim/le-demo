<template>
  <div id="app">
    <desktop-nav
    v-if="width > 600"/>

    <mobile-nav
    v-if="width < 600"/>
  </div>
</template>

<script>
import desktopNav from './components/nav/desktop.vue'
import mobileNav from './components/nav/mobile.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'App',
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  components: {
    desktopNav,
    mobileNav
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
