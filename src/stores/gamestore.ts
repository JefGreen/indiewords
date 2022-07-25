import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', {
  state: () =>
    ({
      letters: ["a", "b", "c"],
    } as {
      letters: Array<string>
    }),
})
