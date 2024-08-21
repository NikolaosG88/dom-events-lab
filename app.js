/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const displayScreen = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalsProper = document.querySelector('.equals');
const add = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply =  document.getElementById('multiply');
const divide = document.getElementById('divide');
const clear = document.getElementById('clear');
const rows = document.querySelectorAll('.row');

/*-------------------------------- Variables --------------------------------*/
displayScreen.innerText = '0';
let firstNumber = '';
let secondNumber = '';
let calculationOperator = '';
let userInput = '';

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
// displayScreen.addEventListener('click', numbers.innerText);

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
  displayScreen.innerText += event.target.innerText;
    //console.log(event.target.innerText);
  });
});

clear.addEventListener('click', () => {
  calculationOperator = 'C';
  displayScreen.innerText = '0';
  // console.log('All Cleared');
});


add.addEventListener('click', () => {
  firstNumber = Number(displayScreen.innerText);
  calculationOperator = '+';
  displayScreen.innerText = '';
  // console.log(firstNumber);
  // console.log(calculationOperator);
});

minus.addEventListener('click', () => {
  firstNumber = Number(displayScreen.innerText);
  calculationOperator = '-';
  displayScreen.innerText = '';
  // console.log(firstNumber);
  // console.log(calculationOperator);
});

multiply.addEventListener('click', () => {
  firstNumber = Number(displayScreen.innerText);
  calculationOperator = '*';
  displayScreen.innerText = '';
  // console.log(firstNumber);
  // console.log(calculationOperator);
});

divide.addEventListener('click', () => {
  firstNumber = Number(displayScreen.innerText);
  calculationOperator = '/';
  displayScreen.innerText = '';
  // console.log(firstNumber);
  // console.log(calculationOperator);
});

equalsProper.addEventListener('click', () => {
  secondNumber = Number(displayScreen.innerText);
  if (calculationOperator === '+') {
    displayScreen.innerText = firstNumber + secondNumber;
  } else if (calculationOperator === '-') {
    displayScreen.innerText = firstNumber - secondNumber;
  } else if ( calculationOperator === '*') {
    displayScreen.innerText = firstNumber * secondNumber;
  } else {
    displayScreen.innerText = firstNumber / secondNumber;
  }
});






// calculator.addEventListener('click', (event) => {
//   // This log is for testing purposes to verify we're getting the correct value
//   // You have to click a button to see this log
//   console.log(event.target.innerText);

//   // Example
//   if (event.target.classList.contains('number')) {
//     // Do something with a number
//   }

//   // Example
//   if (event.target.innerText === '*') {
//     // Do something with this operator
//   }
// });

/*-------------------------------- Functions --------------------------------*/
