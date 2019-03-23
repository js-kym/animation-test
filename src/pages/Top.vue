<template>
  <div class="pages-top" @click="animation">
    <div class="svg-anim-area star" v-if="!isClick">
      <img :src="require('../assets/svg/star.svg')" width="400" height="400">
    </div>
    <components-top-effect
      class="svg-anim-area topeffect"
      v-if="isClick"
    >
    </components-top-effect>
  </div>
</template>

<script scoped>
import ComponentsTopEffect from '../components/TopEffect.vue'

export default {
  components: {
    ComponentsTopEffect
  },
  data () {
    return {
      isClick: false
    }
  },
  methods: {
    animation: function () {
      if (!this.isClick) {
        this.isClick = true
        setTimeout(() => {
          this.$router.push('/test')
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
.pages-top {
  position: relative;
  width: 100%;
  height: 100vh;
}
.svg-anim-area {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
