let passwordEl = document.getElementById("password");
let generatePasswordEl = document.getElementById("generatePassword");
let copyPasswordEl = document.getElementById("copyPassword");

const passLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*_-+=()|[]{}<>?/";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (passLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordEl.value = password;
}

async function copyPassword() {
  try {
    await navigator.clipboard.writeText(passwordEl.value);
    passwordEl.value = "";
    showAlert()
  } catch (err) {
    console.error("Failed to copy password: ", err); 
  }
}

copyPasswordEl.addEventListener("click", copyPassword);
generatePasswordEl.addEventListener("click", createPassword);

function showAlert() {
  Swal.fire({
     title: 'Hello!',
     text: 'Do you Want to Copy Password',
     icon: 'success',
     confirmButtonText: 'Cool'
  });
}
