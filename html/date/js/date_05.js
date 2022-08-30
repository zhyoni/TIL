// Date() 함수를 이용한 날짜 계산에서 발생하는 말일자 문제

let date = new Date(2019, 0, 31);
document.write(`기준일자 : ${date.toLocaleString()} <br/>`);

date.setMonth(date.getMonth() + 1);
document.write(`1달 후: ${date.toLocaleString()} <br/>`);

date = new Date(2019, 0, 31);
date.setMonth(date.getMonth() - 1);
document.write(`1달 전 : ${date.toLocaleString()} <br/>`);
/*
아마 대부분 이런 경우,
1월 31일 + 1개월을 계산하면
2월의 말일자인 2월 28일(또는 2월 29일, 윤달인 경우)이 나오는 것을 기대할 것입니다.
그렇지만, 위와 같이 계산하면 Javascript에서는
1월 31+1개월 = 2월 31일이라고 계산하게 되고,
실제로 2월 31일은 존재하지 않으므로,
2월의 마지막 날짜인 2월 28일로부터 3일 후의 날짜(31-28 = 3)를 적용하여,
3월 3일이라고 표현하게 됩니다.
*/

// 날짜 계산(Date)에서 마지막 날짜/윤달/윤년 처리하기

//기준일자
let date1 = new Date(2019, 0, 31);
document.write(`<<<<날짜 계산(Date)에서 마지막 날짜/윤달/윤년 처리하기>>>> <br/>`);
document.write(`기준일자 : ${date1.toLocaleString()} <br/>`);

//1달 후의 1일
let nextMonthFirstDate = new Date(
  date1.getFullYear(),
  date1.getMonth() + 1,
  1
);

document.write(`1달 후의 1일 : ${nextMonthFirstDate.toLocaleString()} <br/>`);

// 1달 후의 말일
let nextMonthLastDate = new Date(
  nextMonthFirstDate.getFullYear(),
  nextMonthFirstDate.getMonth() + 1,
  0
)

document.write(`1달 후의 말일 : ${nextMonthLastDate.toLocaleString()} <br/>`);


function addMonth(date, month) {
  // month달 후의 1일
  let addMonthFirstDate = new Date(
    date.getFullYear(),
    date.getMonth() + month,
    1
  );

  // month달 후의 말일
  let addMonthLastDate = new Date(
    addMonthFirstDate.getFullYear(),
    addMonthFirstDate.getMonth() + 1,
    0
  );
  let result = addMonthFirstDate;
  if (date.getDate() > addMonthLastDate.getDate()) {
    result.setDate(addMonthLastDate.getDate());
  } else {
    result.setDate(date.getDate());
  }
  return result;
};

let janLastDate = new Date(2019, 0, 31);
document.write('------- 말일 테스트 -------<br>');
document.write('기준일자 : ' + janLastDate.toLocaleString() + '<br>');
document.write('1달 후 : ' + addMonth(janLastDate, 1).toLocaleString() + '<br>');
document.write('2달 후 : ' + addMonth(janLastDate, 2).toLocaleString() + '<br>');
document.write('3달 후 : ' + addMonth(janLastDate, 3).toLocaleString() + '<br>');
document.write('13달 후(윤년) : ' + addMonth(janLastDate, 13).toLocaleString() + '<br>');

let janSomeDate = new Date(2019, 0, 11);
document.write('------- 중간날짜 테스트 ------- <br>');
document.write('기준일자 : ' + janSomeDate.toLocaleString() + '<br>');
document.write('1달 후 : ' + addMonth(janSomeDate, 1).toLocaleString() + '<br>');
document.write('2달 후 : ' + addMonth(janSomeDate, 2).toLocaleString() + '<br>');
document.write('3달 후 : ' + addMonth(janSomeDate, 3).toLocaleString() + '<br>');
document.write('13달 후(윤년) : ' + addMonth(janSomeDate, 13).toLocaleString() + '<br>');