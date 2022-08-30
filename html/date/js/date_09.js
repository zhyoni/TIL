// 함수 실행 시간 측정하기

function test() {
  let sum = 0;
  for (let i = 1; i <= 1000000; i++) {
    sum = sum + 1;
  }
};

let start = new Date(); //시작
console.log(`실행시간: ${start}`)
//let start = new Date(); 실행 시간을 측정 할 함수 시작 전의 현재 시간을 측정
test();
// 실행 시간을 측정 할 함수 실행

let end = new Date(20222, 7, 23, 1, 24, 10, 0); //종료
let j = end / 1000 / 60 / 60
console.log(`종료시간" ${end}`)
//함수가 종료된 시점의 현재 시간을 end에 저장

document.write(end - start); //경과시간(밀리초)
//end - start
// '함수가 종료된 시점의 시간 - 함수가 시작되기 직전 시점의 시간'을 계산하면 두 시간 사이의 경과시간을 밀리초 단위로 반환
