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
          backgroundColor: 0x090931,
          transparent: false,
        }
      )
      this.$refs.container.appendChild(app.view)
      
      var count = 0;

      // build a rope!
      var ropeLength = app.renderer.width / 20;
      var points = [];

      for (var i = 0; i < 25; i++) {
          points.push(new PIXI.Point(i * ropeLength, 0));
      }

      var g = new PIXI.Graphics();
      g.x = -150;
      g.y = app.renderer.height;

      var g2 = new PIXI.Graphics();
      g2.x = -200;
      g2.y = app.renderer.height;

      var group = new PIXI.Container();
      group.addChild(g);
      group.addChild(g2);

      app.stage.addChild(group);

      // start animating
      app.ticker.add(() => {

          count += 0.1;

          // make the snake
          for (var i = 0; i < points.length; i++) {
              points[i].y = Math.sin((i * 0.4) + count) * 40;
              points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
          }
          renderPoints()

      });

      function renderPoints () {

        g.clear();

        g.lineStyle(400, 0xEFAE51, 0.5);
        g.moveTo(points[0].x,points[0].y);

        for (var i = 1; i < points.length; i++) {
          g.lineTo(points[i].x, points[i].y);
        }
      
        g2.clear();

        g2.lineStyle(300, 0xEFAE51, 1);
        g2.moveTo(points[0].x,points[0].y);

        for (var i = 1; i < points.length; i++) {
          g2.lineTo(points[i].x,points[i].y);
        }

      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

