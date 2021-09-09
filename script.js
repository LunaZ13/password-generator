// Assignment code here


// Get references to the #generate element
var generatePassword = function() {
  alert("Please select from the following password criteria:");

  var passwordHas = "";

  var containsUpper;
  var containsLower;
  var containsNumeric;
  var containsSpecial;

  var containsUpper = "65, 90";
  var containsLower = "97, 122";
  var containsNumeric = "48, 57";
  var containsSpecial = "33, 47";

  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generatePassword.addEventListener("click", writePassword);
