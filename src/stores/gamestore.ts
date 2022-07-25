import { defineStore } from 'pinia'

const lettersPool: Array<string> = []
.concat(Array(5).fill("a"))
.concat(Array(5).fill("b"))
.concat(Array(5).fill("c"))
.concat(Array(5).fill("d"))
.concat(Array(5).fill("e"))
.concat(Array(5).fill("f"))
.concat(Array(5).fill("g"))
.concat(Array(5).fill("h"))
.concat(Array(5).fill("i"))
.concat(Array(5).fill("j"))
.concat(Array(5).fill("k"))
.concat(Array(5).fill("l"))
.concat(Array(5).fill("m"))
.concat(Array(5).fill("n"))
.concat(Array(5).fill("o"))
.concat(Array(5).fill("p"))
.concat(Array(5).fill("q"))
.concat(Array(5).fill("r"))
.concat(Array(5).fill("s"))
.concat(Array(5).fill("t"))
.concat(Array(5).fill("u"))
.concat(Array(5).fill("v"))
.concat(Array(5).fill("w"))
.concat(Array(5).fill("x"))
.concat(Array(5).fill("y"))
.concat(Array(5).fill("z"));

export const useGameStore = defineStore('gameStore', {
  state: () =>
    ({
      letters: ["a", "b", "c"],
    } as {
      letters: Array<string>
    }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})

shuffle(letters: Array<string>): Array<string> {
  let current: number = letters.length;
  let random;
  let temp;

  // While there remain elements to shuffle.
  while (current) {

    // Pick a remaining element.
    random = Math.floor(Math.random() * current--);

    // And swap it with the current element.
    temp = letters[current];
    letters[current] = letters[random];
    letters[random] = temp;
  }
  return letters
}
