// Assignment Code
var generateBtn = document.querySelector("#generate");
var desiredLength = 0;
var desiredChar = [];
var excludedChar = '';

// Write password to the #password input
function writePassword() {
    setPwParams();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

function setPwParams() {
  var charOptions = ["lowercase", "uppercase", "numeric", "special"];

  setPwLength();

  var noChars = false;
  while (!noChars) {
  for (var i = 0; i < charOptions.length; i++) {
    if (setPwChar(charOptions[i])) {
      desiredChar.push(charOptions[i]);
      console.log("char = " + desiredChar);
    }
  }
  if (desiredChar.length) {
    noChars = true
  }
}

  if (desiredChar.includes("special")) {
  var tempArr = [ "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "|",
  ":",
  "<",
  ">",
  "?",
  "-",
  "=",
  "[",
  "]",
  ";",
  ",",
  ".",
  "/",]
  excludedChar = prompt("would you like to exclude any special characters? " + tempArr.join(' ') )
  }

  //console.log("excluded Char" + excludedChar)

}

function setPwLength() {
  var tempDesiredLength;
  var lengthCheck = false;

  while (!lengthCheck) {
    tempDesiredLength = prompt(
      "How long would you like your password to be? Enter a number between 8 and 128 (inclusive)"
    );

    if (tempDesiredLength >= 8 && tempDesiredLength <= 128) {
      lengthCheck = true;
      desiredLength = tempDesiredLength;
      console.log("dl in loop " + desiredLength)
    } else {
      alert("Please enter a number between 8 and 128 (inclusive)");
    }
  }

  return;
}

function setPwChar(type) {
  return confirm(
    "Would you like the password to contain " + type + " characters?"
  );
}

function generatePassword() {
  var tempPW = '';

  console.log('desiredLength')
  console.log(desiredLength)

  for (var i = 0; i < desiredLength; i++) {
    var charTypeIdx = Math.floor(Math.random() * desiredChar.length);
    tempPW += generateChar(desiredChar[charTypeIdx]);
    console.log("tempPW");
    console.log(tempPW);
  }

  return tempPW;
}

function generateChar(type) {
  var alphaArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var specialArr = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "{",
    "}",
    "|",
    ":",
    "<",
    ">",
    "?",
    "-",
    "=",
    "[",
    "]",
    ";",
    ",",
    ".",
    "/",
  ];
  var genChar;

  console.log("type")
  console.log(type)

  switch (type) {
    case "lowercase":
      var randIdx = Math.floor(Math.random() * alphaArr.length);
      genChar = alphaArr[randIdx].toLowerCase();

      break;
    case "uppercase":
      var randIdx = Math.floor(Math.random() * alphaArr.length);
      genChar = alphaArr[randIdx];
      break;
    case "numeric":
      genChar = Math.floor(Math.random() * 10);
      break;
    case "special":
        var validChar = false
        while (!validChar) {
      var randIdx = Math.floor(Math.random() * specialArr.length);
      genChar = specialArr[randIdx];

      if (!excludedChar.includes(genChar)) {validChar = true}
        }
      break;
  }

  console.log("genChar");
  console.log(genChar);
  return genChar;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
