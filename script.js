// • Hint 3: Use HTML and JavaScript
let name = document.getElementById("center");
let time = 10000; // time in milliseconds
name.hidden = true; // set img to hidden on load
setTimeout(() => {
  name.hidden = false; // after timeout show img
}, time);

// GRADE CONVERTER
// The MarkToGrade function scrapes the student mark out of the mark-input-box element and verifies it is realistic.
function MarkToGrade() {
  const inputgrade = document.getElementById("grade").value;
  //In JavaScript, we can use the global parseInt function to try and convert a string
  const gradevalue = parseInt(inputgrade);
  console.log("VALUE: ", inputgrade);
  const message = document.querySelector("#message");

  // If an invalid mark is entered, it displays a message back to the user in the. validation message element.
  // Messages should be informative... return as many different messages as you can to
  // guide the user what kind of erroneous value has entered
  try {
    // • Hint 2: Use exception handling.
    if (inputgrade === "") throw "Empty. Please input grade";
    if (isNaN(gradevalue)) throw "not a number. Please input number only."; // A Mark must be number only
    if (gradevalue < 0)
      throw "a negative number. Please input positive number only."; //   // A Mark must be nonnegative
    if (gradevalue > 100)
      throw "higher than 100. Please input grade from 0 to 100 only."; // A Mark must be less than 101.
    else {
      try {
        //If the user entered any value above 90 Grade A should be displayed as a result
        if (gradevalue > 90) throw "A"; // 91 - 100
        // If user entered any value above 80 Grade B should be displayed
        if (gradevalue > 80) throw "B"; // 81 - 90
        // If user entered any value above 70 Grade C should be displayed
        if (gradevalue > 70) throw "C"; // 71 - 80
        // If user entered any value above 50 Grade D should be displayed
        if (gradevalue >= 50) throw "D"; // 51 - 70
        if (gradevalue >= 0) throw "F";
      } catch (err) {
        message.innerHTML = " Your grade is " + err;
      }
    }
  } catch (err) {
    message.innerHTML = " Input is " + err;
  }
}

//WEATHER CONVERTER
//accept a temperature input in degree Fahrenheit and convert it into degree Celsius
function toCelsius() {
  const inputFahrenheit = document.getElementById("tempF").value;
  const tempFvalue = parseFloat(inputFahrenheit);
  const message = document.querySelector("#message");
  changeFont = document.getElementById("#message");
  console.log("INPUT: ", inputFahrenheit);
  console.log("VALUE: ", tempFvalue);
  try {
    if (inputFahrenheit === "") throw "Empty. Please input temperature";
    if (isNaN(tempFvalue))
      throw "not a number. Please input number only."; // A temp must be number only
    else {
      message.innerHTML = "Celsius: " + (tempFvalue - 32) / 1.8;
    }
  } catch (err) {
    message.innerHTML = " Input is " + err;
  }
}

// convert it from Celsius to Kelvin based on a button click event.
function toKelvin() {
  const inputCelcius = document.getElementById("tempC").value;
  const tempCvalue = parseFloat(inputCelcius);
  const message = document.querySelector("#messageC");

  //console.log("INPUT: ", inputCelcius);
  //console.log("VALUE: ", tempCvalue);
  try {
    if (inputCelcius === "") throw "Empty. Please input temperature";
    if (isNaN(tempCvalue))
      throw "not a number. Please input number only."; // A temp must be number only
    else {
      message.innerHTML = "Kelvin: " + (tempCvalue + 273.15);
    }
  } catch (err) {
    message.innerHTML = " Input is " + err;
  }
}
