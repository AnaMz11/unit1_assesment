// console.log("hi")

const numberDisplay = document.querySelector('.floatingNumber')

numberDisplay.innerHTML = "0"

const plusButton = document.querySelector('#add')
plusButton.addEventListener('click',(event) => {
  console.log(plusButton)
})


const subtractButton = document.querySelector('#sub')
plusButton.addEventListener('click',(event) => {
  console.log(subtractButton)
})

let num = "1"
let userInput = "25"

if (userInput >= 1){
  console.log(num + userInput)
}