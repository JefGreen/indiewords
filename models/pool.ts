// class Pool {
//   letters: Array<string>;

//   constructor(letters: Array<string>) {
//     this.letters = this.shuffle(letters);
//   }

//   pickFromPool(quantity: number): Array<string> {
//     let removedLetters: Array<string> = []
//     for (let i = 0; i < quantity; i++) {
//       const removedLetter: string | undefined = this.letters.pop()
//       if (removedLetter) {
//         removedLetters.push(removedLetter)
//       }
//     }
//     return removedLetters
//   }

//   shuffle(letters: Array<string>): Array<string> {
//     let current: number = letters.length;
//     let random;
//     let temp;


//     // While there remain elements to shuffle.
//     while (current) {

//       // Pick a remaining element.
//       random = Math.floor(Math.random() * current--);

//       // And swap it with the current element.
//       temp = letters[current];
//       letters[current] = letters[random];
//       letters[random] = temp;
//     }
//     return letters
//   }
// }



