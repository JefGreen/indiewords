<script setup lang="ts">
import * as PIXI from 'pixi.js';

defineProps<{ msg: string }>()

// Create the application helper and add its render target to the page
// let app = new PIXI.Application({ width: 640, height: 360 });
// document.body.appendChild(app.view);

// Create the sprite and add it to the stage
// let sprite = PIXI.Sprite.from('sample.png');
// app.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
// });

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement

const ctx = canvas.getContext("2d")
const letter = new Letter()
car.draw(ctx)

</script>

<template>
  <h1>{{ msg }}</h1>
  <canvas id="myCanvas"></canvas>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
#myCanvas{
  background: red
  margin: 0,

}
</style>
