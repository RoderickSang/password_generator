const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*_-+="
const generateBtn = document.getElementById("generate")
const pass1 = document.getElementById("password1")
const pass2 = document.getElementById("password2")
pass1.value = ""
pass2.value = ""

//Array to hold all possible characters
const originalChars = letters + numbers + symbols
const arrayChars = originalChars.split('')

//Button to generate 2 random password options
generateBtn.addEventListener("click", function () {
    pass1.value = generatePass()
    pass2.value = generatePass()
  })

function generatePass () {
    let passChars = scramble(arrayChars)
    let password = ""

    for (let i = 1; i < 16; i++) { //i < 16 because I want the full password to be 15
        password += passChars[i]
    }
    return password
}

function scramble(array) {
    let scramArray = array.sort(function() {
        return 0.5 - Math.random();
      });
    return scramArray
}