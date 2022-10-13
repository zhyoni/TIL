'use strict';

// Array(배열)
// 1.배열을 선언하는 방법
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 인덱스를 통해 배열에 접근하는 방법
const fruits = ['apply', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);//apply
console.log(fruits[1]);//banana
console.log(fruits[2]);//undifined

// 3.배열의 모든 요소 출력
// a. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(`for: ${fruits[i]}`);
}
// b. for of
for (let fruit of fruits) {
  console.log(`for of: ${fruit}`);
}
// c. forEach()
fruits.forEach((fruit) => console.log(`forEach: ${fruit}`));


// 4. 배열에 데이터 삽입, 삭제
// push: 맨 뒤 추가
fruits.push('watermelon', 'melon');
console.log(fruits);
// pop : 맨 뒤 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: 맨 앞 추가
fruits.unshift('watermelon', 'melon');
console.log(fruits);

//shift : 맨 앞 삭제
fruits.shift();
console.log(fruits);

// note!! shift,unshift는 pop,push보다 출력 속도가 느리다


// 배열의 지정된 요소를 삭제
//splice(start위치,삭제할 요소 갯수)
//splice(start위치) start위치만 지정할 경우 start위치부터 모든 요소를 삭제한다.
fruits.push('lemon', 'avocado', 'grape');
console.log(fruits); //['melon', 'apply', 'banana', 'lemon','avocado', 'grape']
fruits.splice(1, 1);
console.log(fruits); //['melon', 'banana', 'lemon', 'avocado', 'grape']
fruits.splice(1, 0, 'mango', 'kiwi');//요소를 지우지 않고 요소를 추가할 수 있음
console.log(fruits); //['melon', 'mango', 'kiwi','banana', 'lemon', 'avocado', 'grape']

// 두가지 배열 잇기
const fruits2 = ['배', '사과'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.log(fruits);
console.log(fruits.indexOf('apply'));
console.log(fruits.indexOf('lemon'));
console.log(fruits.includes('lemon'));
console.log(fruits.includes('apply'));

fruits.unshift('사과');
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));
