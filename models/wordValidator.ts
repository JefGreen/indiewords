class WordValidator {
  words: Record<string, number> = {
    "word": 12,
  }

  validate(word: string): Boolean {
    return !!this.words[word]
  }
}
