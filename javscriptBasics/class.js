class Beverage {
    constructor(name, ingredients = []) {
        this.name = name;
        this.ingredients = ingredients;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    removeIngredient(ingredient) {
        this.ingredients = this.ingredients.filter(item => item !== ingredient);
    }

    listIngredients() {
        return this.ingredients.join(", ");
    }
}

// Global beverage object
let coffee = new Beverage("Coffee", ["Milk", "Coffee powder", "Sugar"]);

function showIngredients() {
    document.getElementById("beverageResult").innerHTML =
        `<b>${coffee.name}</b> Ingredients: ${coffee.listIngredients()}`;
}

function addCinnamon() {
    coffee.addIngredient("Cinnamon");
    showIngredients();
}

function removeSugar() {
    coffee.removeIngredient("Sugar");
    showIngredients();
}
