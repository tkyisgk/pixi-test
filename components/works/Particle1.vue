<template lang="pug">
 .container(
   ref="container"
 )
</template>

<script>
// components
// library
import * as PIXI from 'pixi.js'

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
        window.innerHeight
      )
      this.$refs.container.appendChild(app.view)

      const boxes = [];

      for (var i = 0; i < 6000; i++) {
  
        var circle = new PIXI.Graphics()
          .beginFill(0xFF0000)
          .lineStyle(0)
          .drawRect(0, 0, 10, 10)
          .endFill()
          
        app.stage.addChild(circle)

        boxes.push({    
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          v: 1,
          a: Math.random() * 2 * Math.PI,
          element: circle,
        }); 
      }

      app.ticker.add(() => {
  
        for (var box of boxes) {    
          box.x += box.v * Math.cos(box.a);
          box.y += box.v * Math.sin(box.a);
          box.a += 0.03;
          box.element.x = box.x;
          box.element.y = box.y;

          box.element.graphicsData[0].fillColor = Math.random() * 0xffffff
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

