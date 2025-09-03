// Constructor function
function Student(name, age, course) {
    this.name = name;
    this.age = Number(age);
    this.course = course;
  }
  
  // Add method using prototype
  Student.prototype.sayHello = function () {
    return `Hi, my name is ${this.name}, I am ${this.age}, learning ${this.course}.`;
  };
  
  let currentStudent = null;
  
  // Create Student
  function createStudent() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const course = document.getElementById("courseInput").value;
  
    if (!name || !age || !course) {
      show("❌ Please fill all fields.");
      return;
    }
  
    currentStudent = new Student(name, age, course);
    enableButtons();
    show("✅ Student Created:\n" + listProps(currentStudent));
  }
  
  // Show entries
  function showEntries() {
    if (!currentStudent) return show("❌ No student created yet.");
    show("Object.entries:\n" + listProps(currentStudent));
  }
  
  // Call prototype method
  function showGreeting() {
    if (!currentStudent) return show("❌ No student created yet.");
    show(currentStudent.sayHello());
  }
  
  // Add extra property
  function addExtraProperty() {
    if (!currentStudent) return show("❌ No student created yet.");
    currentStudent.city = "Hyderabad";
    show("🏙️ Added city property.\n" + listProps(currentStudent));
  }
  
  // Small helpers
  function show(msg) {
    document.getElementById("resultBox").textContent = msg;
  }
  
  function listProps(obj) {
    return Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join("\n");
  }
  
  function enableButtons() {
    ["entriesBtn", "greetBtn", "addPropBtn"].forEach(id => {
      document.getElementById(id).disabled = false;
    });
  }
  