export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Такой игрок уже существует")
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => {
      if (!this.members.has(item)) {
        this.members.add(item);
      }
    })
  }

  toArray() {
    return [...this.members];
  }
}
