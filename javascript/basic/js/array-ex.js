'use strict';

// Array

// 1. 배열 선언 방법
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position (index를 통해서 배열에 접근하는 방법)

const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 마지막 데이터 접근 : 총길이에 -1

// 3. Looping over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits: ${fruits[i]}`);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach 배열안에 들어있는 value들 마다 내가 전달한 함수 출력.
fruits.forEach((fruit) => console.log(`forEach : ${fruit}`));

// 4. Addtion, deletion, copy
// push: 배열의 제일 뒤 추가
fruits.push('사과', '복숭아');
console.log(fruits);
// pop : 배열에 끝에서 부터 삭제
fruits.pop();
fruits.pop();
console.log(fruits);


// unshift : 배열의 맨 앞 추가
fruits.unshift('딸기', '키위');
console.log(fruits);
// shift: 배열의 맨 앞 부터 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

// splice
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1); // 지정한 index부터 삭제
console.log(fruits);
fruits.splice(1, 1, '사과', '수박'); // 지운 뒤 추가
console.log(fruits);

const fruits2 = ['배', '감자'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과')); // 원하는 배열의 위치를 알려줌
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('망고')); // 배열에 존재하지 않으면 -1을 출력

// 6. includes
console.log(fruits.includes('수박')); // 배열에 있는지 확인하기
console.log(fruits.includes('코코넛')); // 배열에 있는지 확인하기

// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과')); // 맨 마지막에 있는 사과의 인덱스 출력

console.clear();
// Array
// length 배열의 길이를 반환
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

//toString() 배열의 문자열 표현을 반환합니다.  

function Dog(name) {
  this.name = name;
}
const dog1 = new Dog('Gabby');

Dog.prototype.toSting = function dogToString() {
  return `${this.name}`;
};
console.log(dog1.toSting());

// toLocaleString() 메서드를 사용하여 문자열로 변환됩니다.
/*
const array1 = [1, 'a', new Date()];
console.log(array1);
console.log(`toLocaleString()문자열반환: ${array1.toLocaleString()}`);
*/

// pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다. 배열이 비어 있으면 undefined가 반환되고 배열은 수정되지 않습니다.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // expected output: "tomato"
console.log(plants);// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);// expected output: Array ["broccoli", "cauliflower", "cabbage"]


//push 메서드는 배열의 끝에 하나 이상의 새 요소를 추가하고, 배열의 새로운 길이를 반환합니다. @param items 배열에 추가할 새 요소.
/*
const animals = ['pigs', 'goats', 'sheep'];
console.log(animals.length); //3
const count = animals.push('cows');
console.log(count) // 4
console.log(animals); //  ['pigs', 'goats', 'sheep', 'cows']
animals.push('chickens', 'cats', 'dogs');
console.log(animals) // ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs']
console.log(animals.length) //7
*/

//concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. (둘 이상의 배열을 결합합니다.)
// 이 메서드는 기존 배열을 수정하지 않고 새 배열을 반환합니다.

const array_1 = ['a', 'b', 'c'];
const array_2 = ['d', 'e', 'f'];
const array_3 = array_1.concat(array_2);
console.log(array_3); // ['a', 'b', 'c', 'd', 'e', 'f']

//join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// 배열의 모든 요소를 지정된 구분 기호 문자열로 구분하여 문자열에 추가합니다.
//@param separator 결과 문자열에서 배열의 한 요소를 다음 요소와 분리하는 데 사용되는 문자열입니다. 생략하면 배열 요소가 쉼표로 구분됩니다.
/*
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); //Fire,Air,Water (쉼표로 구분)
console.log(elements.join('')); //FireAirWater
console.log(elements.join('-')); //Fire-Air-Water
*/

// reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
//(배열의 요소를 제자리에서 뒤집습니다.)
/*
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log(`reversed: ${reversed}`)

console.log('array1:', array1);
*/

// shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
/*
const array1 = [1, 2, 3];
const fristElement = array1.shift();
console.log(array1); // [2,3]
console.log(fristElement); // 1
*/

//slice() 메서드는 어떤 배열의 start부터 end까지(end 미포함)에 대한 복사본을 새로운 배열 객체로 반환합니다. 원본을 대체하지 않습니다.
//start 배열의 지정된 부분의 시작 인덱스입니다.
//start가 정의되지 않은 경우 슬라이스는 인덱스 0에서 시작합니다.
//end 배열의 지정된 부분의 끝 인덱스입니다. 이것은 인덱스 '끝'에 있는 요소를 제외합니다.
//end가 정의되지 않은 경우 슬라이스는 배열의 끝까지 (arr.length)를 추출합니다.
/*
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); //['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4)); // ['camel', 'duck']
console.log(animals.slice(1, 5)); // ['bison', 'camel', 'duck', 'elephant']
//-2는 배열의 마지막에서 두 번째 요소를 나타냅니다.
console.log(animals.slice(-2)); //['duck', 'elephant']
console.log(animals.slice(2, -1)); //['camel', 'duck']
console.log(animals.slice()); //['ant', 'bison', 'camel', 'duck', 'elephant']
*/
//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
/*
배열을 제자리에 정렬합니다.
      * 이 메서드는 배열을 변경하고 동일한 배열에 대한 참조를 반환합니다.
      * @param compareFn 요소의 순서를 결정하는 데 사용되는 함수입니다. 돌아올 것으로 예상된다
      * 첫 번째 인수가 두 번째 인수보다 작으면 음수, 같으면 0, 양수
      * 그렇지 않으면 값. 생략하면 요소가 ASCII (유니코드) 문자 오름차순으로 정렬됩니다.
      * ```
      * [11,2,22,1].sort((a, b) => a - b)
      * ```
*/
const months = ['March', 'Jan', 'Feb', 'Dec'];//3월,1월,2월,12월
months.sort();
console.log(months);//['Dec', 'Feb', 'Jan', 'March']
// 참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//splice() 메서드는 배열에서 요소를 제거하고 필요한 경우 그 자리에 새 요소를 삽입하여 삭제된 요소를 반환합니다
//* @param start 요소 제거를 시작할 배열의 0부터 시작하는 위치입니다.
// * @param deleteCount 제거할 요소의 수.
// * @returns 삭제된 요소를 포함하는 배열입니다.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 0, 'Feb');//['Jan', 'Feb', 'March', 'April', 'June']
console.log(months1)

months1.splice(4, 1, 'May');//['Jan', 'Feb', 'March', 'April', 'May']
console.log(months1)

//unshift() 메서드는 배열의 시작 부분에 새 요소를 추가하고 배열의 새 길이를 반환합니다.
/*
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5, 6));
console.log(array1); //[4, 5, 6, 1, 2, 3]
*/

// indexOf() 배열의 값이 처음 나타나는 인덱스를 반환하거나, 없으면 -1을 반환합니다. indexOf(searchElement: T, fromIndex?: number): number;
//* @param searchElement 배열에서 찾을 요소.
// * @param fromIndex 검색을 시작할 배열 인덱스입니다. fromIndex를 생략하면 인덱스 0부터 검색이 시작됩니다.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2)); // 4
console.log(beasts.indexOf('giraffe')); // 발견되지 않으면 -1 반환

console.clear();
// 요소의 모든 항목 찾기
let items = [];
beasts.push('bison', 'bison', 'camel', 'bison');
console.log(`beasts: ${beasts}`);
const elements = 'bison';
let idx = beasts.indexOf(elements);
while (idx != -1) {
  items.push(idx);
  idx = beasts.indexOf(elements, idx + 1);
}
console.log(items);//[1, 4, 6, 9]
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// lastIndexOf() 메서드는 배열에서 지정된 값이 마지막으로 발생하는 인덱스를 반환하거나 존재하지 않는 경우 -1을 반환합니다.
//lastIndexOf(searchElement: T, fromIndex?: number): number;
//* @param searchElement 배열에서 찾을 값.
//* @param fromIndex 역방향 검색을 시작할 배열 인덱스입니다. fromIndex를 생략하면 배열의 마지막 인덱스에서 검색이 시작됩니다.
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Tiger'];
console.log(animals.lastIndexOf('Dodo')) //3
console.log(animals.lastIndexOf('Tiger')) //4

//every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트 합니다. Boolean 값을 반환합니다.
// 뭔 소리야.. 화가나네
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every


//some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

//map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
const array2 = [1, 4, 9, 16];

// pass a function to map
const map1 = array2.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter