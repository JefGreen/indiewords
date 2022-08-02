<script setup lang="ts">
import { onMounted } from 'vue'
import { Letter } from '../models/letter'
import { useGameStore } from '../stores/gameStore'

// import * as PIXI from 'pixi.js';


const gameStore = useGameStore()


onMounted(() => {
  const canvas = document.getElementById("myCanvas")
  const ctx = canvas.getContext("2d")
  gameStore.pickLetters(21, "jeff")

  // console.log(gameStore.letters["jeff"])

  for (let i = 0; i < 21; i++) {
    const letter_value = gameStore.letters["jeff"][i]
    const letter = new Letter(5, 6 + (10*i), 20, 20, letter_value)
    letter.draw(ctx)
  }


  const letter = new Letter()
  letter.draw(ctx)
})

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
  background: red;
  margin: 0;

}
</style>
