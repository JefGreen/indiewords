class Pool {
  public constructor(letters: string[]) {
    this.pool = letters;
  }

  public pickFromPool(quantity: number): string[] {
    let removedLetters = []
    for (let i = 0; i < quantity; i++) {
      removedLetters.append(this.pool.pop())
    }
    return removedLetters
  }

  private shuffle(): string[] {
    let current = this.pool.length;
    let random;
    let temp;

    // While there remain elements to shuffle.
    while (current) {

      // Pick a remaining element.
      random = Math.floor(Math.random() * current--);

      // And swap it with the current element.
      temp = this.pool[current];
      this.pool[current] = this.pool[random];
      this.pool[random] = temp;
    }

    return array;
  }


}
