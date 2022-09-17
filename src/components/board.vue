<script setup lang='ts'>
import {onMounted} from 'vue';
import {Letter} from '../models/letter';
import {useGameStore} from '../stores/gamestore';

const gameStore = useGameStore();

let SELECTED_PIECE = null

/** This function add event listeners in the canvas to allow drag and drop
  * @param {HTMLCanvasElement} canvas
  * */
function onMouseDown(evt) {
  SELECTED_PIECE = getPrecedPiece(evt)
  if (SELECTED_PIECE !== null) {
    SELECTED_PIECE.offset=(
      x: evt.x - SELECTED_PIECE.x,
      y: evt.y - SELECTED_PIECE.y,
    )
  }

}

/** This function add event listeners in the canvas to allow drag and drop
  * @param {HTMLCanvasElement} canvas
  * */
function onMouseMove() {
  if(SELECTED_PIECE !== null) {
    SELECTED_PIECE.x = evt.x - SELECTED_PIECE.offset.x
    SELECTED_PIECE.y = evt.y - SELECTED_PIECE.offset.y
  }
}

/** This function add event listeners in the canvas to allow drag and drop
  * @param {HTMLCanvasElement} canvas
  * */
function onMouseUp(evt) {
  // TODO
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
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

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
