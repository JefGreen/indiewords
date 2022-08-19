<script setup lang="ts">
import {onMounted} from 'vue';
import {Letter} from '../models/letter';
import {useGameStore} from '../stores/gameStore';

const gameStore = useGameStore();

function addEventListeners(canvas: HTMLElement) {
  // See https://www.youtube.com/watch?v=FIyaIewZQsI
  canvas.addEventListener('mouseDown', onMouseDown);
  canvas.addEventListener('mouseMove', onMouseMove);
  canvas.addEventListener('mouseUp', onMouseUp);
}

onMounted(() => {
  const canvas: HTMLCanvasElement = document.getElementById('myCanvas');
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
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
  <h1>{{ msg }}</h1>
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
