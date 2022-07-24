import { defineStore } from 'pinia'

export const useDummyStore = defineStore('dummyStore', {
  state: () =>
    ({
      letters: ["a", "b", "d"],
    } as {
      letters: Array<string>
    }),
})
