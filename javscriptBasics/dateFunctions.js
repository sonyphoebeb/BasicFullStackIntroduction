// Helper function: Get selected date or today's date
function getSelectedDate() {
  let inputDate = document.getElementById("dateInput").value;
  return inputDate ? new Date(inputDate) : new Date();
}

// Show toString()
function showToString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.toString();
}

// Show toDateString()
function showToDateString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.toDateString();
}

// Show toTimeString()
function showToTimeString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.toTimeString();
}

// Show UTC String
function showUTCString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerText = "toUTCString(): " + date.toUTCString();
}

// Show ISO String
function showISOString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerText = "toISOString(): " + date.toISOString();
}

// Show Local Date String
function showLocaleDateString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerText = "toLocaleDateString(): " + date.toLocaleDateString();
}

// Show Local Time String
function showLocaleTimeString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerText = "toLocaleTimeString(): " + date.toLocaleTimeString();
}

// Show toLocaleString()
function showToLocaleString() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.toLocaleString();
}

// Show getFullYear()
function showGetFullYear() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getFullYear();
}

// Show getMonth() (Note: 0 = Jan, 11 = Dec)
function showGetMonth() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getMonth() + " (0=Jan)";
}

// Show getDate()
function showGetDate() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getDate();
}

// Show getDay() (Note: 0 = Sunday, 6 = Saturday)
function showGetDay() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getDay() + " (0=Sun)";
}

// Show getHours()
function showGetHours() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getHours();
}

// Show getMinutes()
function showGetMinutes() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getMinutes();
}

// Show getSeconds()
function showGetSeconds() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getSeconds();
}

// Show getTime() (milliseconds since Jan 1, 1970)
function showGetTime() {
  let date = getSelectedDate();
  document.getElementById("dateResult").innerHTML = date.getTime();
}

// Show Date.now() (static method)
function showNow() {
  document.getElementById("dateResult").innerHTML = Date.now();
}
