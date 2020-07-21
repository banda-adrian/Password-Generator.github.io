var generateBtn = document.querySelector("#generate");

var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function generatePassword() {

    var minLength = 8;
    var maxLength = 128;

    var length = prompt("Choose password length between 8 - 128 characters");

    if (length >= minLength && length <= maxLength) {
      var useUpper = confirm("Would you like upper case letters?");
      var useLower = confirm("Would you like lower case letters?");
      var useNumber = confirm("Would you like numbers?");
      var useSpecial = confirm("Would you like special characters?");
    }     else if (confirm("Try again! Remember between 8 - 128 characters")) { }

    var password = "";
    var characterArr = [];
    var passwordLength = parseInt(length);

    if (useUpper) {
      characterArr = characterArr.concat(upper);
    }

    if (useLower) {
      characterArr = characterArr.concat(lower);
    }

    if (useSpecial) {
      characterArr = characterArr.concat(special);
    }

    if (useNumber) {
      characterArr = characterArr.concat(numbers);
    }

    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * characterArr.length);
      password += characterArr[random];
    }

    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);