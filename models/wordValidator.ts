type Word = string
type Description = string
type Dictionary = Record<Word, Description>


class WordValidator {
  words: Dictionary = {
    "word": 12,
  }

  theme: Dictionary = {}

  constructor(theme?: Dictionary) {
    if (theme !== undefined) {
      this.theme = theme;
    }
  }

  isWordValid(word: string): Boolean {
    if (this.theme)
    return !!this.words[word]
  }






}


const validator = new WordValidator()

console.log(validator.isWordValid("word"))
console.log(validator.isWordValid("wtord"))
