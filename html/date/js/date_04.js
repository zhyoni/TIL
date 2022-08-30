// 해당 월의 마지막 날짜, 말일을 구하는 방법

//3월 1일
let date = new Date(2019, 2, 1);
document.write(`2019년 3월 1일 -> ${date.toLocaleString()} <br/>`);

//2월 28일(말일)
let lastDate = new Date(2019, 2, 0); // 2019년 3월 0일
document.write(`2019년 2월 28일 -> ${lastDate.toLocaleString()} <br/>`);
// 2019년 3월 0일은 없습니다.
// 그래서 위 코드는 3월 1일의 하루 전날인 2월의 마지막 날짜를 반환하게 됩니다.
// 그래서, 결과는 2월의 마지막 날인 "2019년 2월 28일"이 됩니다.
document.write(`28일 -> ${lastDate.getDate()} <br/>`); //마지막 날짜 2자리 숫자만 얻고 싶다면, getDate() 함수를 사용


//2월 27일
let lastDateBefore = new Date(2019, 2, -1); // 2019년 3월 -1일
document.write(`2019년 2월 27일 -> ${lastDateBefore.toLocaleString()}`) //2019년 3월 -1일은 없으므로, 2019년 3월 1일의 2일 전날을 반환