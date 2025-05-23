// This file contains the JavaScript code for the index.html page
const accountButton = document.getElementById("account")
const passwordButton = document.getElementById("password")
const accountContent = document.getElementById("for-account")
const passwordContent = document.getElementById("for-password")

// Set default state
function account() {
  console.log("account")
  accountButton.style.backgroundColor = "black"
  accountButton.style.color = "white"
  passwordButton.style.backgroundColor = "white"
  passwordButton.style.color = "black"
  accountContent.style.display = "block"
  passwordContent.style.display = "none"
}

// Set default state
function password(){
  console.log("password")
  passwordButton.style.backgroundColor = "black"
  passwordButton.style.color = "white"
  accountButton.style.backgroundColor = "white"
  accountButton.style.color = "black"
  passwordContent.style.display = "block"
  accountContent.style.display = "none"
}
