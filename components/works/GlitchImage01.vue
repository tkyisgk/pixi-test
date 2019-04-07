<template lang="pug">
 .container(
   ref="container"
 )
</template>

<script>
// components
// library
import {TweenMax, Circ, Back, TimelineMax} from 'gsap'
import * as PIXI from 'pixi.js'
import * as FILTERS from 'pixi-filters'
// images
import * as filterImg from '~/assets/img/filter.png'

export default {
  components: {
  },
  mounted () {
    this.initPixi()
  },
  methods: {
    initPixi() {
      const app = new PIXI.Application(
        window.innerWidth,
        window.innerHeight, {
          transparent: true
        }
      )
      this.$refs.container.appendChild(app.view)
      const container = new PIXI.Container()
      container.interactive = true
      app.stage.addChild(container)
      const canvas = this.$refs.container.querySelector('canvas')

      const background = PIXI.Sprite.fromImage('https://picsum.photos/1920/1080/?random')
      background.width = app.renderer.width
      background.height = app.renderer.height
      background.alpha = 1
      container.addChild(background)

      container.filters = [new FILTERS.GlitchFilter({
        slices: 0,
        fillMode: 4,
        direction: 0,
        red: [5, 5],
        green: [-5, -5],
        blue: [-5, 5]
      })]

      console.log(container.filters[0])
      TweenMax.to(container.filters[0], .01, {
        offset: 100,
        seed: 5,
        yoyo: true,
        repeat: -1,
        ease: Circ.easeOut,
      })

      // TweenMax.to(container.filters[0].red, .3, {
      //   0: 10,
      //   1: 0,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: Circ.easeOut,
      // })
      // TweenMax.to(container.filters[0].blue, .1, {
      //   0: 0,
      //   1: -10,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: Circ.easeOut,
      // })
      // TweenMax.to(container.filters[0].green, .2, {
      //   0: 0,
      //   1: 10,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: Circ.easeOut,
      // })

      // TweenMax.to(container, .2, {
      //   x: 5,
      //   y: 5,
      //   yoyo: true,
      //   repeat: -1
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

