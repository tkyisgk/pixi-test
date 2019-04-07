<template lang="pug">
  .contents
    .contents-inner
      section
        Particle1
      section
        ImageTransition01
      section
        GlitchImage01
      section
        Mask01
      section
        Mask02
</template>

<script>
// components
import Particle1 from '~/components/works/Particle1.vue'
import ImageTransition01 from '~/components/works/ImageTransition01.vue'
import GlitchImage01 from '~/components/works/GlitchImage01.vue'
import Mask01 from '~/components/works/Mask01.vue'
import Mask02 from '~/components/works/Mask02.vue'
// library
import axios from 'axios'
import {TweenMax, Circ, Back} from 'gsap'

export default {
  components: {
    Particle1,
    ImageTransition01,
    GlitchImage01,
    Mask01,
    Mask02
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.contents
  width 100%
  position relative
  .contents-inner
    margin auto

.intro-wrapper
  display flex
  flex-direction column
  align-items center

.works-wrapper
  padding 0 13% 

+mediaquery(md)
  .container
    width 300px

</style>

