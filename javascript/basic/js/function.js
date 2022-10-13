'use strict';
// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === on thing // 하나의 함수는 한가지의 일만 하도록 만들어야 함.
// naming: doDomething, command, verb // 함수 이름은 동사 형태로 지정 
// function is object in JS // 함수는 object

function printHello() {
  console.log('Hello')
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello!')
log(1234); // javascript에서는 숫자를 문자로 변환해서 출력

// 2. parameters
function changName(obj) {
  obj.name = 'coder';
}
const hyoni = { name: 'hyoni' };
changName(hyoni);
console.log(hyoni);

// Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) { // 배열 형태로 전달되는 파라미터
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // for (const arg of args) { // for of
  //   console.log(arg);
  // }

  // args.forEach((arg) => console.log(arg));
}
printAll('nana', 'house', 'hyoni');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(`message: ${message}`); // local variable
  console.log(globalMessage);

}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result)

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 때 리턴을 해서 빠르게 종료하고
  }
  //long upgrade logic... // 조건이 맞을때만 필요한 로직들을 실행
}

// 1. Function expression ★★★★★
// a function declaration can be called earlier than it is defiend. (hoisted) //함수 선언이 되기 이전에 함수 호출이 가능하다.
// a function expression is created when the execution reaches it.
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // 함수를 파라미터로 전달
  if (answer === 'love you') {
    printYes()
  } else {
    printNo();
  }
}

// anonymous function (익명함수)
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// resursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
simplePrint();
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b
}

// IIFE: Immediately Invoked Function Expression
(function () {
  console.log('IIFE');
})();


// Fun quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a * b;
    case 'multiply':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 30, 10))

