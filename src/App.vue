<template>
  <div id="app">
    <le-nav />
  </div>
</template>

<script>
import leNav from './components/nav/nav.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'App',
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  components: {
    leNav
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
