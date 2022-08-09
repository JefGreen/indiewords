// type Word = string
// type Description = string
// // type Dictionary = Record<Word, Description>

// class WordDictionary {
//   words: Dictionary = {
//     "word": 12,
//   }

//   theme: Dictionary = {}

//   constructor(theme?: Dictionary) {
//     if (theme !== undefined) {
//       this.theme = theme;
//     }
//   }

//   validate(word: string): boolean {
//     return !!this.theme[word] || !!this.words[word]
//   }

//   countPoints(word: string): number {
//     const pointsPerLetter: Record<string, number> = {
//       "d": 2,
//       "g": 2,
//       "b": 3,
//       "c": 3,
//       "m": 3,
//       "p": 3,
//       "f": 4,
//       "h": 4,
//       "v": 4,
//       "w": 4,
//       "y": 4,
//       "k": 5,
//       "j": 8,
//       "x": 8,
//       "q": 10,
//       "z": 10,
//     }
//     let points: number = 0
//     for (let i = 0; i < word.length; i++) {
//       points += pointsPerLetter[word[i]] || 1
//     }
//     return points
//   }

// }

// const dictionary = new WordDictionary()

// console.log(dictionary.validate("word"))
// console.log(dictionary.validate("wtord"))
// console.log(dictionary.countPoints("dvya"))
