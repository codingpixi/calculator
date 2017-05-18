function addStringToStorage(event) {
  let number = event.target.innerText
  //store number in an array
  numberStorage.push(number)
  console.log(numberStorage);
}

function clearNumStorage() {
  numberStorage = []
}

// show number in display
//[9, 4, 2] would be 942

function renderDisplay() {
  let numbersDisplayed = numberStorage.join("")
  answerElement.innerText = numbersDisplayed
}

function handleNumberOrOperatorClick(event) {
  addStringToStorage(event)
  renderDisplay()
}

let buttonContainer = document.querySelector('.numbers');
let answerElement = document.querySelector('#answer');

buttonContainer.addEventListener('click',
handleNumberOrOperatorClick);

//empty array for stored numbers
let numberStorage = []

//clear button clears the screen
function handleClear() {
  clearNumberStorage()
  renderDisplay()
}

//
let clearButton = document.querySelector('.clear')

//next add the eventListener for the click evnet
clearButton.addEventListener('click', handleClear)
//then call a function that will clear the input

let addButton = document.querySelector('.add');
let minusButton = document.querySelector('.minus');
let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');

function UseOperator() {
  if (numberStorage.includes('+')) {
    addProblem();
    numberStorage = []
    console.log('it worked');
  } else if (numberStorage.includes ('-')) {
    minusProblem();
    numberStorage = []
    console.log('does this work');
  } else if (numberStorage.includes('x')){
    multiplyProblem();
    // numberStorage = [] DOES THIS NEED TO BE ADDED
  } else if (numberStorage.includes('/')) {
    divideProblem();
  }

}

addButton.addEventListener('click',
handleNumberOrOperatorClick)
minusButton.addEventListener('click',
handleNumberOrOperatorClick)
multiplyButton.addEventListener('click',
handleNumberOrOperatorClick)
divideButton.addEventListener('click',
handleNumberOrOperatorClick)

function addProblem() {
  let numbers = numberStorage.filter(item => item !== '+' )
  let solution = parseInt(numbers[0]) + parseInt(numbers[1])
  // for var i = -; i < numbers.length; i++) {
  // solution = solution + parseInt(numbers[i])
  // }
  answerElement.innerText = solution
}

function minusProblem() {
  let numbers = numberStorage.filter(item => item !== '-' )
  let solution = numbers[0] - numbers[1]
  //for (var i = 0; i < numbers.length; i++ ) {
  // solution = solution - parseInt(numbers[i])
  // }
  answerElement.innerText = solution
}

function multiplyProblem() {
  let numbers = numberStorage.filter(item => item !== 'x' )
  console.log(numbers)
  let solution = numbers[0] * numbers[1]
  //for var i = 0; i < numbers.length; i++) {
  //solution = solution * parseInt(number[i])
  //}
  answerElement.innerText = solution
}

function divideProblem() {
  let numbers = numberStorage.filter(item => item !== '/' )
  let solution = solution / parseInt(numbers[i])
  //for var( i = 0; i < numbers.length; i++) {
  // solution = solution / parseInt(numbers[i])
  // }
  answerElement.innerText = solution
}

let equalsButton = document.querySelector('#equals')

equalsButton.addEventListener('click', UseOperator)



////////////////////////////////////////////////////////////////////////////
// //I want to click a number button and make it display in the window
//
//
// /* STEPS
// 1. make single number appear in the screen section.
// 2. store data typed
//     myArray = []
// 3.perform match with two single digits
// */
//
// // function clickedButton(event) {
// //   console.log("YES");
// // }
// // let button = document.querySelectorAll('div.number button');
// //   eachButton = addEventListener('click', clickedButton)
//
//
// function showNumber() {
//  // console.log(button.textContent); //all that changed is this line
//  screen.textContent = button.textContent;
// }
// let button = document.querySelector('.numbers button');
// button.addEventListener('click', showNumber);
//
// let screen = document.querySelector('#answer');
//
// let lis = document.querySelectorAll('ul.sizes li');
// for(let i=0; i < lis.length; i++) {
//   let li = lis[i];
//   li.addEventListener('click', msg);
//
//
//
// /*
// function matchSpanText (){
//   let span = li.parentElement.previousElementSibling;
//   span.textContent = li.textContent;
// }
// li.addEventListener('click', matchSpanText);
// */
//
//
//
// /*
// //What I think I need to add
// let lis = document.querySelectorAll('ul.sizes li');
// for(let i=0; i < lis.length; i++) {
//   let li = lis[i];
//   li.addEventListener('click', msg);
//
// */
//
//
//
// /* ANSER FROM WILLIAM
// function clickedButton(event){
//   let number = event.target.innerText
//   answerElement.innerText = number
// }
// let buttonContainer = document.querySelector('.numbers');
// let answerElement = document.querySelector('#answer');
//
// buttonContainer.addEventListener('click', clickedButton)
// */
//
// /*make the operators
// /*
// function testButtonClick(event){
//   let number = event.target.innerText
//   answerElement.innerText = number
// }
// let buttonContainer = document.querySelector('.numbers');
// let answerElement = document.querySelector('#answer');
//
// buttonContainer.addEventListener('click', testButtonClick)
//
// //look up const - constant vs var vs let
// */
//
// /*
// function msg() {
//   console.log('really');
// }
// let buttonClicked = document.querySelector('.numbers');
//   buttonClicked.addEventListener('click', msg);
// */
