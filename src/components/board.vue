<script setup lang="ts">
import  *  from './node_modules/pixi.js/dist/browser/pixi.min.js'

defineProps<{ msg: string }>()

const Application = PIXI.Application
const app = new Application();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
