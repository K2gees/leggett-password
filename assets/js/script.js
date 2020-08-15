// generate random password

// function generate(){

  //set password length/
         
  var specialCharacters = [
    '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'
  ]
  
  var numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ]
  var upperCase = [
    'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'
  ]
  var lowerCase = [
    'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'
  
  ]
  
  function getPasswordOption(){
    var length = parseInt (
      prompt("How many characters would you like your password to be?")
    )
      if (
        isNaN(length) === true
      )
      {
        alert("Has to be a number between 8-128!")
        return
      }
      if (length < 8 ){
        alert("The password needs to be at least 8 special characters.")
        return
      }
      if (
        length > 128){
        alert("The password has to be less than 128 characters.")
        return
      }
      var uppers = confirm("Would you like to use uppercase letters?");
      var lowers = confirm("Would you like to use lowercase letters?");
      var numbers = confirm("Would you like to use numbers?");
      var symbols = confirm("Would you like to use special characters?");
  
  
      if(
        uppers === false && 
        lowers === false &&
        numbers === false && 
        symbols === false 
  
      ){
        alert("You must select at least one.")
        return
      }
      var userInput = {
        length: length, uppers: uppers, lowers: lowers, numbers: numbers, symbols: symbols
      }
      return userInput
  
     
  }
  function getRandomValue(arr){
    var randomValue = Math.floor(Math.random() * arr.length)
  
    var randomElement = arr[randomValue]
    return randomElement
  
  }
  
  
  function generatePassword(){
    var options = getPasswordOption()
     
    var result = []
  
    var possibleCharacters = []
  
    var guaranteeCharacters = []
  
    if(options.uppers){
      possibleCharacters = possibleCharacters.concat(upperCase)
      guaranteeCharacters.push(getRandomValue (upperCase))
    }
    if(options.lowers){
      possibleCharacters = possibleCharacters.concat(lowerCase)
      guaranteeCharacters.push(getRandomValue (lowerCase))
    }
    if(options.numbers){
      possibleCharacters = possibleCharacters.concat(numbers)
      guaranteeCharacters.push(getRandomValue (numbers))
    } 
    if(options.symbols){
      possibleCharacters = possibleCharacters.concat(specialCharacters)
      guaranteeCharacters.push(getRandomValue (specialCharacters))
    }
    for(var i = 0; i < options.length; i++){
      var possibleCharacter = getRandomValue(possibleCharacters)
      result.push(possibleCharacter)
    }
    for(var i = 0; i < guaranteeCharacters.length; i++){
      result[i] = guaranteeCharacters[i]
    }
    return result.join("")
  
  
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
  
//   // "I love JS"
//   // "Kareem"
//   // var x = 1 //number
//   // var y = "1" //string
//   // var z = true //boolean
//   // var a //undefined
  
  
//   // var b = function(){
//   //   //This is a function expression
//   // }
  
//   // //1
//   // var score = 0;
  
//   // function addScore(){
//   //   score++; //score + 1
//   //   //score += 2
//   //   return score;
//   // }
//   // addScore();
  
  
//   // //2
//   // var password = "";
  
//   // function generatePw(){
//   //   password += "new password";
//   //   return password;
//   // }
  
  