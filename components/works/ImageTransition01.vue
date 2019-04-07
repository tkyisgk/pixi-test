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

      // フィルター画像の読み込み
      const displacementSprite = PIXI.Sprite.fromImage(filterImg)
      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

      const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite)
      app.stage.addChild(displacementSprite)
      container.filters = [displacementFilter]

      displacementFilter.scale.x = 0
      displacementFilter.scale.y = 0
      displacementSprite.scale.set(0.6)
      displacementSprite.anchor.set(0.5)

      const background = PIXI.Sprite.fromImage('https://picsum.photos/1920/1080/?random')
      background.width = app.renderer.width
      background.height = app.renderer.height
      background.alpha = 1
      container.addChild(background)

      TweenMax.to(displacementSprite.anchor, 4, { y: 0 });
      TweenMax.to(displacementFilter.scale, 10, { x: 1, y: 1, ease: Expo.easeInOut });

      var timeLine = new TimelineMax({paused: true});
      timeLine.to(displacementFilter.scale, 8, { x: -3000, y: -3000, ease: Expo.easeInOut });
      timeLine.to(canvas, 0.7, { autoAlpha: 0, ease: Expo.easeInOut }, "-=4");

      container.mouseover = () => {
        timeLine.play()
      }
      container.mouseout = () => {
        timeLine.reverse()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

