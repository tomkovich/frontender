const cat = {
  firstName: "Betty",
  weight: 5,
  getWeight() {
    return this.getName() + " " + "has " + this.weight + "kg"
  },
  getName: () => this.firstName,
  kitty: {
    name: "Tommy",
    getName() {
      return this.name
    }
  }
}

console.log(cat.getName())