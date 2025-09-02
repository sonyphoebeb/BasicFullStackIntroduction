
function showWeekday() {
    let dateInput = document.getElementById("dateInput").value;
    if (!dateInput) {
      document.getElementById("weekdayResult").innerHTML = "Please select a date!";
      return;
    }
  
    let date = new Date(dateInput);
    let dayIndex = date.getDay();
    let weekday = "";
  
    // Switch case for weekdays
    switch (dayIndex) {
      case 0:
        weekday = "SUN";
        break;
      case 1:
        weekday = "MON";
        break;
      case 2:
        weekday = "TUE";
        break;
      case 3:
        weekday = "WED";
        break;
      case 4:
        weekday = "THU";
        break;
      case 5:
        weekday = "FRI";
        break;
      case 6:
        weekday = "SAT";
        break;
      default:
        weekday = "Invalid Date";
    }
    document.getElementById("weekdayResult").innerHTML = "Weekday: " + weekday;
  }
  