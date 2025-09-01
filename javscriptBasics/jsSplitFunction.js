let patients = []; // store patient arrays
let selectedPatient = [];

// Convert input into array of patients
function loadPatients() {
  let input = document.getElementById("inputString").value;
  patients = []; // reset array

  // Convert string into array of patient arrays using for loop
  let rawPatients = input.split(";");
  for (let i = 0; i < rawPatients.length; i++) {
    patients.push(rawPatients[i].split(":"));
  }

  let dropdown = document.getElementById("patientDropdown");
  dropdown.innerHTML = ""; // clear previous options

  // Add default option
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Select Patient";
  dropdown.appendChild(defaultOption);

  // Add patients (p1, p2, p3...) using for loop
  for (let i = 0; i < patients.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = "p" + (i + 1);
    dropdown.appendChild(option);
  }
}

// Show patient data when selected
function showPatientData() {
  let index = document.getElementById("patientDropdown").value;

  if (index === "") {
    document.getElementById("patientData").textContent = "";
    document.getElementById("indexResult").textContent = "";
    return;
  }

  selectedPatient = patients[index];
  document.getElementById("patientData").textContent = selectedPatient.join(":");
  document.getElementById("indexResult").textContent = "";
}

// Show specific element of patient array
function showIndexValue() {
  let idx = document.getElementById("indexInput").value;
  if (selectedPatient.length > idx && idx >= 0) {
    document.getElementById("indexResult").textContent =
      `Value at index ${idx} is ${selectedPatient[idx]}`;
  } else {
    document.getElementById("indexResult").textContent = "Invalid index!";
  }
}
