// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
//  변수 변경될수 있는 값.
// let (added in ES6)

//항상 메모리에 저장되어있기때문에 글로벌 스코프는 최소한으로 사용하는 것이 좋음. 
let globalName = 'global name';
{
  let name = 'hyoni';
  console.log(name);
  name = 'hello';
}
console.log(name);
console.log(globalName);

// var는 값을 선언하기도 전에 사용할 수 있다. (don't ever use this!)
// var hoisting (어디에 선언했냐에 상관 없이 항상 제일 위로 선언을 끌어올려줌)
{
  age = 4;
  var age;
}
console.log(age);
// 블럭을 이용해 변수를 사용해도 어느곳에서나 출력이 됨.

// 3.Contants (read only)
// 상수 절대 변하지 않는 값. 값을 선언함과 동시에 할당되기때문에 이후에 값을 변경할 수 없음.
const daysInWeek = 7;
const maxNumber = 5;


// Immutable data types const
// Mutable data types let

//4. Variable types
// primitive, single item: number, string, boolean, null, undefind, symbol // 값 자체가 메모리에 저장
// object, box container 

//고유한 식별자를 만들기 위해 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// string이 똑같다면 동일한 심볼을 만들고 싶은 경우
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2); //true
//출력할땐 스트링으로 변환해서 출력해야 한다.(description)
console.log(`value: ${symbol1.description}`)

