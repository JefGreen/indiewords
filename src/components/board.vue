<script setup lang="ts">
import { Application } from 'pixi.js'

defineProps<{ msg: string }>()

// const Application = Application
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
