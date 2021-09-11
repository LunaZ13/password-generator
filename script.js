// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // variables
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var newPassword = "";
  // function to generate a random password
  var generatePassword = function() {
    var result = "";
    alert("Please select from the following password criteria:");

  // prompt user to select password length and confirm password characters
  var passLength = prompt ("Password must be between 8 and 128 characters. Please select a number.");
  if (passLength < 8 || passLength > 128) {
      alert("Please select a password between 8 and 128 charcters long! Please try again.");
      return generatePassword ();
  }
  else {
    let lowerCase = confirm ("Select OK to include lowercase characters?");
    if (lowerCase === lower) {
      newPassword += lower
    }
    let upperCase = confirm ("Select OK to include uppercase characters?");
    if (upperCase === upper) {
      newPassword += upper
    }
    let numbers = confirm ("Select OK to include numbers?");
    if (numbers === number) {
      newPassword += number
    }
    let specialChars = confirm ("Select OK to include special characters?");
    if (specialChars === special) {
      newPassword += special
    }

    // if user did not select a valid option
    if (upper === false && lower === false && number === false && special === false) {
      alert("You must select at least one character option!");
    }
    // loop to select a random password 
    for (var i = 0; i < passLength; i++) {
      result += newPassword.charAt(Math.floor(Math.random() * passLength.length));
    }
    return result;

    }
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
