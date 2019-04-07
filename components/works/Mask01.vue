<template lang="pug">
 .container(
   ref="container"
 )
</template>

<script>
// components
// library
import {TweenMax, Expo, Back, TimelineMax} from 'gsap'
import * as PIXI from 'pixi.js'
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
          transparent: false,
        }
      )
      var bg = new PIXI.Sprite.fromImage('https://picsum.photos/1920/1080/?image=14')
      bg.width = app.renderer.width
      bg.height = app.renderer.height
      bg.blendMode = PIXI.BLEND_MODES.DARKEN
      bg.alpha = .5
      app.stage.addChild(bg) 

      this.$refs.container.appendChild(app.view)
      const container = new PIXI.Container()
      app.stage.addChild(container)

      const background = PIXI.Sprite.fromImage('https://picsum.photos/1920/1080/?image=84')
      background.width = app.renderer.width
      background.height = app.renderer.height
      background.alpha = 1
      container.addChild(background)

      // mask
      const mask = new PIXI.Graphics()
      mask.drawRect(0, 0, 1, app.renderer.height)
      container.addChild(mask)
      mask.position.set = (0, 0)
      container.mask = mask


      TweenMax.to(mask, 2, {
        width: app.renderer.width,
        ease: Expo.easeInOut,
        yoyo: true,
        repeat: -1,
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

