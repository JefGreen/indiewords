import { defineStore } from "pinia";

type User = string;
type Word = string;
type Letters = Array<string>;
type Words = Array<Word>;
type Dictionary = Set<string>;

const lettersPool: Letters = Array.prototype.concat(Array(13).fill("a"))
  .concat(Array(3).fill("b"))
  .concat(Array(3).fill("c"))
  .concat(Array(6).fill("d"))
  .concat(Array(18).fill("e"))
  .concat(Array(3).fill("f"))
  .concat(Array(4).fill("g"))
  .concat(Array(3).fill("h"))
  .concat(Array(12).fill("i"))
  .concat(Array(2).fill("j"))
  .concat(Array(2).fill("k"))
  .concat(Array(5).fill("l"))
  .concat(Array(3).fill("m"))
  .concat(Array(8).fill("n"))
  .concat(Array(11).fill("o"))
  .concat(Array(3).fill("p"))
  .concat(Array(2).fill("q"))
  .concat(Array(9).fill("r"))
  .concat(Array(6).fill("s"))
  .concat(Array(9).fill("t"))
  .concat(Array(6).fill("u"))
  .concat(Array(3).fill("v"))
  .concat(Array(3).fill("w"))
  .concat(Array(2).fill("x"))
  .concat(Array(3).fill("y"))
  .concat(Array(2).fill("z"));

export const useGameStore = defineStore("gameStore", {
  state: () =>
    ({
      letters: { pool: shuffle(lettersPool) },
      words: {},
      theme: null,
    } as {
      letters: Record<User, Letters>;
      words: Record<User, Words>;
      theme: Dictionary | null;
    }),
  actions: {
    pickLetters(quantity: number, player: User): Array<string> {
      let removedLetters: Array<string> = [];
      for (let i = 0; i < quantity; i++) {
        const removedLetter: string | undefined = this.letters["pool"].pop();
        if (removedLetter) {
          if (!this.letters[player]) {
            this.letters[player] = [removedLetter];
          } else {
            this.letters[player].push(removedLetter);
          }
        }
      }
      return removedLetters;
    },
    validateWord(word: Word): boolean {
      if (this.theme === null) {
        return false;
      }
      return this.theme.has(word);
    },
  },
});

function shuffle(letters: Array<string>): Array<string> {
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
  return letters;
}
