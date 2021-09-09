// Assignment code here

  // variables
  var upper = "65, 90";
  var lower = "97, 122";
  var number = "48, 57";
  var special = "33, 47";
  // function to generate a random password
  var generatePassword = function() {
    alert("Please select from the following password criteria:");
  
  var newPassword = "";

  // prompt user to select password length
  var passLength = parseInt(prompt("Choose a password between 8 and 128 characters."));

  if (passLength < 8 || passLength > 128) {
      alert("Please select a password between 8 and 128 charcters long! Please try again.");
      return(generatePassword);
  }
  else {

  }


}
// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generatePassword.addEventListener("click", writePassword);
