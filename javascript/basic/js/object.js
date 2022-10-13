'use strict';

// Objects
// object = {key : value}

// 1. Literals and properties 리터럴 및 속성
const obj1 = {}
const obj2 = new Object();
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const hyoni = { name: 'hyoni', age: 20 };
print(hyoni);

{// 좋지 않은 코드
  hyoni.hasJob = true;
  console.log(hyoni.hasJob);

  delete hyoni.hasJob;
  console.log(hyoni.hasJob);
}

// 2. Computed properties 계산된 프로퍼티
// key should be always string
console.log(hyoni.name); // 
console.log(hyoni['name']); // 실시간으로 원하는 키의 값을 받아오고싶을때 사용 
hyoni['hasJob'] = true;
console.log(hyoni.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(hyoni, 'name'); //key는 항상 string타입으로 전달해야함.
printValue(hyoni, 'age');


// 3. Property value shorthand

const person1 = { name: 'bob', age: 21 };
const person2 = { name: 'steve', age: 35 };
const person3 = { name: 'deve', age: 30 };
// const person4 = makePerson('hyoni', 34);
// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }


// 4. Constuctor Function 생성자 함수

const person4 = new Person('hyoni', 34);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log(person4);


// 5. in operator : 해당하는 오브젝트 안에 키가 있는지 없는지 확인 (key in obj)

console.log('name' in hyoni); // name라는 key가 hyoni object안에 있는지 확인
console.log('age' in hyoni);
console.log('random' in hyoni);
console.log(hyoni.random);

// 6. for..in vs for..of
// for (property in obj) obj의 속성
console.clear();
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


// for (element of iterable) 반복 가능한 값
const array = [1, 2, 4, 5];
for (const element of array) {
  console.log(element);
}

// 7. cloning 복제
const user = { name: 'hyoni', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (const property in user) {
  user3[property] = user[property];
}
console.clear();
console.log(user3)












// console.clear();
// for (key in hyoni) {
//   console.log(key);
// }

// // for (value of iterable)
// const array = [1, 2, 4, 5];
// for (value of array) {
//   console.log(value);
// }

// fun cloning
// const user = { name: 'hyoni', age: '20' };
// const user2 = user;
// user2.name = 'coder';
// console.log(user);

// // old way
// const user3 = {};
// for (key in user) {
//   user3[key] = user[key];
// }
// console.log(user3);