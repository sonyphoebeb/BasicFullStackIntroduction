// 1. Object Literal
let phone = {brand: "Apple", model: "iPhone 15", price: 120000};
  
  function showLiteral() {
    document.getElementById("objLiteral").innerHTML =
      "The brand name is " + phone.brand +
      " and model " + phone.model +
      " priced at " + phone.price;
  }
  
  // 2. Using new Object()
  let stuDetails = new Object();
  stuDetails.course = "JavaScript";
  stuDetails.level  = "Beginner";
  stuDetails.duration = "3 months";
  
  function showNew() {
    document.getElementById("objNew").innerHTML =
    "The course is " + stuDetails.course +
    ", level: " + stuDetails.level +
    ", duration: " + stuDetails.duration;
  } 
  
  // 3. Empty Object, add properties later
  let laptop = {};
  laptop.brand = "Dell";
  laptop.model = "XPS 15";
  laptop.price = 200000;
  
  function showEmpty() {
    document.getElementById("objEmpty").innerHTML =
      "The brand name is " + laptop.brand +
      " and model " + laptop.model +
      " priced at " + laptop.price;
  }
  