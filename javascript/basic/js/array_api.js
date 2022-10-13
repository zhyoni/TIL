// 유용한 10가지 배열 함수
// Q1. make a string out of an array
// 배열에서 문자열 만들기
{
  const fruits = ['apple', 'banana', 'orange'];
  // const fruitsString = fruits.toString();
  // console.log(fruitsString);
  const result = fruits.join('-')
  console.log(result);

}
// Q2. make an array out of a string
// 문자열로 배열 만들기
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // split은 구분자를 전달해주어야 한다.
  console.log(result);
  // const fruitsArray = ['🍎, 🥝, 🍌, 🍒'];
  // console.log(fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 이 배열을 다음과 같이 만듭니다: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(array);
  console.log(result);
  console.log(array); // recerse를 사용하면 기존에 만든 배열이 변환되어 return되는 것이다.
}

// Q4. make new array without the first two elements
// 처음 두 요소 없이 새 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
  /*
  const result = array.splice(0, 2); // 어디서부터 몇개나 지울건지 배열 자체에서 삭제됨. (splice 배열 자체를 수정)
  console.log(result); //삭제된 요소
  console.log(array); // 삭제되고 남은 요소
*/

  const result = array.slice(2, 5); // slice 배열에서 원하는 부분만 return해서 받아오고싶을때 사용.
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }

}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
//점수가 90인 학생을 찾습니다.
{
  //(value or item,)
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
//등록된 학생들의 배열을 만드십시오
{
  // const arr1 = [];
  // for (const property in students) {
  //   arr1[property] = students[property];
  // }
  // console.log(students)
  const result = students.filter(student => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
//학생의 점수만 포함하는 배열 만들기
// 결과는 다음과 같아야 합니다. [45, 80, 90, 66, 88]
{
  // const arr2 = [];
  // for (const element of students) {
  //   arr2[element.score] = students[element.score]
  // }
  // console.log(arr2)

  const result = students.map((student) => student.score);
  console.log(result);
  //map 배열에 들어있는 요소들을 (콜백함수에서 리턴하는 값으로 교체)새로운 값으로 변환한다.
}

// Q8. check if there is a student with the score lower than 50
//점수가 50점 미만인 학생이 있는지 확인
{
  const result = students.some((student) => student.score < 50);// 학생들중에 점수가 50점 미만인 학생이 있는지
  console.log(result); // true
  // 어떤 것이라도 하나 만족되는 것이 있는지 없는지 확인할때는 some

  const result1 = students.every((student) => student.score < 50); // 모든 학생들의 점수가 50점미만이면
  console.log(result1); //false
  const result2 = !students.every((student) => student.score < 50); // 모든 학생들의 점수가 50점미만이 아니면
  console.log(result2); //true
  // 모든 배열의 조건이 만족되어야할때는 every
}

// Q9. compute students' average score
//학생들의 평균 점수 계산
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // 총 합계 구하기
  console.log(result / students.length); //평균 계산
  // reduce 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 사용
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
//모든 점수를 포함하는 문자열 만들기
// 결과는 '45, 80, 90, 66, 88'이어야 합니다
{
  const result = students.map(student => student.score) // 학생들의 배열을 점수로 변환
    // .filter(score => score >= 50) // 
    .join(); // 스트링으로 변환
  console.log(result);
  // api 연결해서 사용
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
//보너스! Q10을 오름차순으로 정렬
// 결과는 '45, 66, 80, 88, 90'이어야 합니다.
{
  const result = students.map(student => student.score).sort((a, b) => a - b).join();
  const result1 = students.map(student => student.score).sort((a, b) => b - a).join();
  console.log(result);
  console.log(result1);
}