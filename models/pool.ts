class Pool {
  letters: Array<string>;

  constructor(letters: Array<string>) {
    this.letters = letters;
  }

  pickFromPool(quantity: number): Array<string> {
    let removedLetters: Array<string> = []
    for (let i = 0; i < quantity; i++) {
      const removedLetter: string | undefined = this.letters.pop()
      if (removedLetter) {
        removedLetters.push(removedLetter)
      }
    }
    return removedLetters
  }

  shuffle() {
    let current: number = this.letters.length;
    let random;
    let temp;


    // While there remain elements to shuffle.
    while (current) {

      // Pick a remaining element.
      random = Math.floor(Math.random() * current--);

      // And swap it with the current element.
      temp = this.letters[current];
      this.letters[current] = this.letters[random];
      this.letters[random] = temp;
    }
  }
}


const exemple = new Pool(["a", "b", "c"])

console.log(exemple.letters)
exemple.shuffle()
console.log(exemple.letters)
console.log(exemple.pickFromPool(2))
console.log(exemple.letters)


