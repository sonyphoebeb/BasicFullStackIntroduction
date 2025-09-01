let patients = []; // store patient arrays
let selectedPatient = [];

// Convert input into array of patients
function loadPatients() {
  let raw = document.getElementById("inputString").value.trim();
  patients = raw.split(";").map(p => p.split(":"));

  let dropdown = document.getElementById("patientDropdown");
  dropdown.innerHTML = ""; // clear previous options

  patients.forEach((_, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.text = "p" + (i + 1);
    dropdown.appendChild(option);
  });

  if (patients.length > 0) {
    dropdown.value = 0; // default select p1
    showPatientData();
  }
}

// Show patient data when selected
function showPatientData() {
  let index = document.getElementById("patientDropdown").value;
  selectedPatient = patients[index];
  document.getElementById("patientData").textContent = selectedPatient.join(":");
  document.getElementById("indexResult").textContent = "";
}

// Show specific element of patient array
function showIndexValue() {
  let idx = document.getElementById("indexInput").value;
  if (selectedPatient.length > idx && idx >= 0) {
    document.getElementById("indexResult").textContent =
      `Value at index ${idx}: ${selectedPatient[idx]}`;
  } else {
    document.getElementById("indexResult").textContent = "Invalid index!";
  }
}
