function addToStorage(event) {
  let num = event.target.innerText
  //store number in an array
  numberStorage.push(Number)
  console.log(numberStorage);
}

function clearNumStorage() {
  numberStorage = []
}

// show number in display
//-[9, 4, 2] would be 942

function display() {
  let numDisplayed = numberStorage
}











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
