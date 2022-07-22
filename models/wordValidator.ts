type Word = string
type Description = string
type Dictionary = Record<Word, Description>


class WordDictionary {
  words: Dictionary = {
    "word": 12,
  }

  theme: Dictionary = {}

  constructor(theme?: Dictionary) {
    if (theme !== undefined) {
      this.theme = theme;
    }
  }

  validate(word: string): Boolean {
    return !!this.theme[word] || !!this.words[word]
  }






}


const dictionary = new WordDictionary()

console.log(dictionary.validate("word"))
console.log(dictionary.validate("wtord"))
