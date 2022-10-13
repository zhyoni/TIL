'use strict';

// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);
console.log('hyoni\'s \n\tbook');

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // suvstract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const perIncrement = ++counter; //3
// counter = counter + 1; // counter에 1을 더해서 변수 counter에 값을 할당한 다음
// perIncrement = counter;
console.log(`perIncrement: ${perIncrement}, counter${counter}`);
const postIncrement = counter++;
// postIncrement = counter; // 변수의 값을 먼저 postIncrement 할당한 다음에
// counter = counter + 1; // counter에 값에 1을 증가시킴.
console.log(`postIncrement: ${postIncrement}, counter${counter}`);
const perDecrement = --counter;
console.log(`perDecrement: ${perDecrement}, counter${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
// console.log(x)

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : ||(or) : true(둘다 false여야 false) , $$(and) : false(둘 다 true여야 true) , !(not)
const value1 = true;
const value2 = 4 < 2; // false;
console.log(`or: ${value1 || value2 || check()}`); // 무거운 코드들은 제일 뒤에 배치

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('wowo');
  }
  return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const hyoni1 = { name: 'hyoni' }
const hyoni2 = { name: 'hyoni' }
const hyoni3 = hyoni1;
console.log(`== : ${hyoni1 == hyoni2}`); // false
console.log(hyoni1 === hyoni2); // false
console.log(hyoni1 === hyoni3); //true

// equality - puzzler
console.log('puzzler')
console.log(0 == false); // true
console.log(0 === false) // false
console.log('' == false) // true
console.log('' === false) // false
console.log(null == undefined) // true
console.log(null === undefined) // false


// 8. Conditional operators: if
// if, else if, else
const name = 'hyoni';
if (name === 'hyoni') {
  console.log('Wellcome, hyoni!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'hyoni' ? 'yes' : 'no');

// 10.Switch statement
const browser = 'IE';

switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// Loops
// while loop. while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops (cpu에 좋지 않음 되도록 피해야하는 코드)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i} j:${j}`);
  }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// 0 ~ 10까지 반복 짝수만 출력

// for (let i = 0; i <= 11; i++) {
//   if (i % 2 !== 0) continue;

//   console.log(i);
// }
for (let i = 0; i <= 11; i++) {
  if (i % 2 == 0) {
    console.log(i);

  }
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
// 0 ~ 10까지 반복하되 8에 도달하면 break

for (let i = 0; i <= 10; i++) {
  if (i > 8) { break; }
  console.log(`8== ${i}`);
}