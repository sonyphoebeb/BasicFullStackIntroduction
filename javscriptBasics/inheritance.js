
// Parent class
class Plant {
    constructor(name, type) {
      this.name = name;
      this.type = type; // Flower, Tree, Succulent etc.
    }
  
    grow() {
      return `${this.name} is growing as a ${this.type}.`;
    }
  }
  
  // Child class: Flower
  class Flower extends Plant {
    constructor(name, color) {
      super(name, "Flower");
      this.color = color;
    }
  
    describe() {
      return `${this.grow()} 🌸 Its color is ${this.color}.`;
    }
  }
  
  // Child class: Fruit Tree
  class FruitTree extends Plant {
    constructor(name, fruit) {
      super(name, "Fruit Tree");
      this.fruit = fruit;
    }
  
    describe() {
      return `${this.grow()} 🌳 It gives delicious ${this.fruit}.`;
    }
  }
  
  // Child class: Cactus
  class Cactus extends Plant {
    constructor(name, hasSpikes) {
      super(name, "Cactus");
      this.hasSpikes = hasSpikes;
    }
  
    describe() {
      return `${this.grow()} 🌵 Does it have spikes? ${this.hasSpikes ? "Yes" : "No"}.`;
    }
  }
  
  // Functions for buttons
  function showFlower() {
    let rose = new Flower("Rose", "Red");
    document.getElementById("flowerResult").innerHTML = rose.describe();
  }
  
  function showFruitTree() {
    let mangoTree = new FruitTree("Mango Tree", "Mangoes");
    document.getElementById("treeResult").innerHTML = mangoTree.describe();
  }
  
  function showCactus() {
    let desertCactus = new Cactus("Desert Cactus", true);
    document.getElementById("cactusResult").innerHTML = desertCactus.describe();
  }
  