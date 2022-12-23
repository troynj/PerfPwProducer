// Assignment Code
var generateBtn = document.querySelector("#generate");
var desiredChar = [];
var desiredLength;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function setPwParams () {
    var charOptions = ['lowercase', 'uppercase', 'numeric', 'special']
    

    setPwLength();

    for (var i = 0; i < charOptions.length; i++) {
      if (setPwChar(charOptions[i])) {
    desiredChar.push(charOptions[i])
    console.log("char = " + desiredChar)
      }
    }
}

function setPwLength () {
    var tempDesiredLength;
    var lengthCheck = false;
    
    while (!lengthCheck) {
    tempDesiredLength = prompt("How long would you like your password to be? Enter a number between 8 and 128 (inclusive)");

    if(tempDesiredLength >= 8 && tempDesiredLength <= 128){
        lengthCheck = true;
        desiredLength = tempDesiredLength;
    }
    else {
        alert("Please enter a number between 8 and 128 (inclusive)");
    }

    }

    return;

}

function setPwChar(type) {
return confirm("Would you like the password to contain " + type + " characters?")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

