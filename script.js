// Assignment code here

  // function to generate a random password
  function generatePassword() {
    alert("Please select from the following password criteria:");

   // variables for input
   var lowerCase;
   var upperCase;
   var numbers;
   var specialChars;

  // variables to define characters
   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lower = "abcdefghijklmnopqrstuvwxyz";
   var number = "0123456789";
   var special = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
   var newPassword = "";

  // prompt user to select password length and password characters
  var passLength = prompt ("Password must be between 8 and 128 characters. Please select a number.");
  console.log(passLength)

  // confirm password length or return to generatePassword function
  if (passLength < 8 || passLength > 128) {
      alert("Please select a password between 8 and 128 charcters long! Please try again.");
      passLength = parseInt(passLength);
      return generatePassword ();
  }
  else {
      let lowerCase = confirm("Select OK to include lowercase characters?");
      if (lowerCase === true) {
        newPassword += lower
      }
      let upperCase = confirm("Select OK to include uppercase characters?");
      if (upperCase === true) {
        newPassword += upper
      }
      let numbers = confirm("Select OK to include numbers?");
      if (numbers === true) {
        newPassword += number
      }  
      let specialChars = confirm("Select OK to include special characters?");
      if (specialChars === true) {
        newPassword += special
      }
     
    // if user did not select a valid option
    if (lowerCase === false && upperCase === false && numbers === false && specialChars === false) {
      alert("You must select at least one character option!");
      return generatePassword();
    }
    // loop to select a random password 
    var result = "";
    for (i = 0; i < passLength; i++) {
      var sum = Math.floor(Math.random() * newPassword.length);
      result += newPassword[sum]  
    }
    console.log(result)
    return result;
    }
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
