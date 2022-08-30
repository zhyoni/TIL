// 두 날짜 사이 일수 계산하기 (경과 일수)

// 2020년 7월 1일
const date1 = new Date(2020, 6, 1);
// 2020년 7월 3일
const date2 = new Date(2020, 6, 3);

const elapsedMsec = date2.getTime() - date1.getTime(); //172800000
//종료일자.getTime() - 시작일자.getTime()을 계산하면 두 날짜 사이의 '경과 밀리초'를 얻을 수 있다.

const elapsedDay = elapsedMsec / 1000 / 60 / 60 / 24 //2
console.log(elapsedDay)

// 1초 = 1000
// 밀리초1분 = 60초
// 1시간 = 60분
// 1일 = 24시간