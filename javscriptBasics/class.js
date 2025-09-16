class Beverage {
    constructor(name, ingredients) {
      this.name = name;
      this.ingredients = ingredients;
    }
  }
  
  let beverages = []; // store all beverages
  
  function addBeverage() {
    let name = document.getElementById("beverageName").value;
    let ingredientsText = document.getElementById("beverageIngredients").value;
  
    if (name === "" || ingredientsText === "") {
      alert("Please enter both name and ingredients!");
      return;
    }
  
    // split ingredients by comma
    let ingredients = ingredientsText.split(",");
  
    // create new beverage
    let bev = new Beverage(name, ingredients);
    beverages.push(bev);
  
    // clear inputs
    document.getElementById("beverageName").value = "";
    document.getElementById("beverageIngredients").value = "";
  
    // show updated list
    showBeverages();
  }
  
  function showBeverages() {
    let output = "";
    beverages.forEach(b => 
    {
      output += `<h3>${b.name}</h3><ul>`;
      b.ingredients.forEach(ing => {
        output += `<li>${ing}</li>`;
      });
      output += "</ul>";
    });
    document.getElementById("beverageList").innerHTML = output;
  }
  