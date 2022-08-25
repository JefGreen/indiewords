<script setup lang='ts'>
import {onMounted} from 'vue';
import {Letter} from '../models/letter';
import {useGameStore} from '../stores/gamestore';

const gameStore = useGameStore();

function onMouseDown() {

}

function onMouseMove() {

}

function onMouseUp() {

}

// TODO: complete drap and drop logic
/** This function add event listeners in the canvas to allow drag and drop
   * @param {HTMLCanvasElement} canvas
   * */
function addEventListeners(canvas: HTMLCanvasElement): void {
  // See https://www.youtube.com/watch?v=FIyaIewZQsI
  canvas.addEventListener('mouseDown', onMouseDown);
  canvas.addEventListener('mouseMove', onMouseMove);
  canvas.addEventListener('mouseUp', onMouseUp);
}

onMounted(() => {
  const canvas: HTMLElement | null = document.getElementById('myCanvas');
  if (canvas === null) return

  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (ctx === null) return

  addEventListeners(canvas);
  gameStore.pickLetters(21, 'jeff');

  for (let i = 0; i < 21; i++) {
    const letterValue: string = gameStore.letters['jeff'][i];
    const letter = new Letter(20 + 20 * i, 30, 20, 20, letterValue);
    letter.draw(ctx);
  }
});
</script>

<template>
  <h1>Board</h1>
  <canvas id="myCanvas"></canvas>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
#myCanvas {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
