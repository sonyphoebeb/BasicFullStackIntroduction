
class Beverage  {

    constructor (name, ingredients){
         this.name = name;
         this.ingredients = ingredients;
    }

}

function getIngredients() {

    let coffee =  new Beverage ("Coffee", ["Milk", "Coffee powder", "Sugar"]);

    document.getElementById("coffeeResult").innerHTML =  
           `The Beverage: ${coffee.name} contains ingredients like ${coffee.ingredients.join(", ")}`
}

function addIngredients() {
   
    let coffee = new Beverage("Coffee", ["Milk", "Coffee powder", "Sugar"]);
   
    let newIngredient = "Cinnamon";

    coffee.ingredients.push(newIngredient);

    document.getElementById("addedCinnamon").innerHTML =
        `${newIngredient} is added to ${coffee.name}.<br>
         Updated Ingredients: ${coffee.ingredients.join(", ")}`;
}





