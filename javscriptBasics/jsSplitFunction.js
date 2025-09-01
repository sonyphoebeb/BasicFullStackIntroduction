let patients = []; // array of patients
let selectedPatient = []; // array of selected patient

// Static patients input 
let inputPatientsData = 
"1:2:2:3:4:4:5;2:33:3:2:4:2:2;12:3:23:1:3:1:3;32:3:2:3:1:3:1;1:33:1:3:2:42:2;32:3:11:33:11:33:11;34:1:31:1:3:1:1;12:2:2:2:2:3:2";

// Load patients data into dropdown
window.onload = function () {  
  patients = inputPatientsData.split(";").map(patientsData => patientsData.split(":"));

  let dropdown = document.getElementById("patientDropdown");
  dropdown.innerHTML = '<option value="" disabled selected>Select Patient</option>';

  for (let i = 0; i < patients.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = "patient" + (i + 1);
    dropdown.appendChild(option);
  }
};

// Populate index dropdown when patient is selected
function showPatientData() {
  let index = document.getElementById("patientDropdown").value;
  if (index === "") 
    return;

  selectedPatient = patients[index];
  document.getElementById("indexResult").textContent = "";

  // Reset index dropdown
  let indexDropdown = document.getElementById("indexDropdown");
  indexDropdown.innerHTML = '<option value="" disabled selected>Select Index</option>';

  for (let i = 0; i < selectedPatient.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    indexDropdown.appendChild(option);
  }

  // Disable button until index is selected
  document.getElementById("getValueBtn").disabled = true;

  indexDropdown.onchange = function () {
    document.getElementById("getValueBtn").disabled = false;
  };
}

// Show value at selected index
function showIndexValue() {
  let idx = document.getElementById("indexDropdown").value; // index of the patient
  let patientIndex = document.getElementById("patientDropdown").value; // index of the patient
  if (idx === "") {
    document.getElementById("indexResult").textContent = "Please select an index!";
    return;
  }
  document.getElementById("indexResult").textContent =
    `Value at index ${idx} of patient${parseInt(patientIndex) + 1} is ${selectedPatient[idx]}`;
}
