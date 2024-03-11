const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const lowerCase = "abcdefghijclmnopqurstuvwxyz";
const number = "123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

document.getElementById("generate-btn").addEventListener("click", () => {
  createPassword();
});

document.getElementById("copy-password").addEventListener("click", () => {
  copyPassword();
  passwordBox.value = "";
  document.querySelector(".copy-text").style.display = "flex";
  setTimeout(function () {
    document.querySelector(".copy-text").style.display = "none";
  }, 3000);
});
