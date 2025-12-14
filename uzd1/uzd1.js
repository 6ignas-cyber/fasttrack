let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()-+"; //??????????????????

function randomizeLetter(password) {
  let includeUppercase = document.getElementById("opt1").checked;
  let includeNumbers = document.getElementById("opt2").checked;
  let includeSymbols = document.getElementById("opt3").checked;

  let charType = Math.floor(Math.random() * 3);
  if (charType === 0) {
    password += lowercaseChars.charAt(
      Math.floor(Math.random() * lowercaseChars.length)
    );
    return password;
  } else if (includeUppercase === true && charType === 1) {
    password += uppercaseChars.charAt(
      Math.floor(Math.random() * uppercaseChars.length)
    );
    return password;
  } else if (includeNumbers === true && charType === 2) {
    password += numberChars.charAt(
      Math.floor(Math.random() * numberChars.length)
    );
    return password;
  } else if (includeSymbols === true && charType === 3) {
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    return password;
  } else {
    //console.log("No character type selected");
    return randomizeLetter(password);
  }
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  let m = 0;
  let passwordLength = parseInt(document.getElementById("amount").value);
  let password = "";

  for (let i = 0; i < passwordLength; i++) password = randomizeLetter(password);
  document.getElementById("password").value = password;
});
