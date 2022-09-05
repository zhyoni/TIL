/*
let date = new Date();
//연도
let calendarYear = date.getFullYear();
//월
let calendarMonth = date.getMonth();

// title
document.querySelector('.calendar-year-month').innerHTML = `${calendarYear}년 ${calendarMonth}월`

// 지난달 마지막 일자
const prevLast = new Date(calendarYear, calendarMonth, 0);
// 이번달 마지막 일자
const thisLast = new Date(calendarYear, calendarMonth + 1, 0);
// console.log(prevLast.toLocaleDateString())
// console.log(thisLast.toLocaleDateString())

//지난달 마지막 일자, 요일
const prevDate = prevLast.getDate();
const prevDay = prevLast.getDay();

//이번달 마지막 일자, 요일
const thisDate = thisLast.getDate();
const thisDay = thisLast.getDay();

// 지난달 날짜 배열로 담기
const prevDates = [];
// 이번달 날짜 배열로 담기 Array(n) 길이가 n인 배열 생성/.keys() n - 1까지 값 생성/slice 메서드로 맨 앞 0 없애기
const thisDates = [...Array(thisDate + 1).keys()].slice(1);
// console.log(thisDates)
// 다음달 날짜 배열로 담기
const nextDates = [];

// 지난달 마지막 요일이 토요일이 아니라면 
if (prevDay !== 6) {
  // 지난달 마지막 요일이 될 때까지 반복
  for (let i = 0; i < prevDay + 1; i++) {
    // 지난달 마지막 날짜부터 1씩 줄어든 값 배열 앞쪽에 추가
    prevDates.unshift(prevDate - i);
  };
}

// 이번달 마지막 날짜의 요일 기준으로 1부터 1씩 증가시키며 nextDates 배열 뒤에 추가
for (let i = 1; i < 7 - thisDay; i++) {
  nextDates.push(i);
}

// 배열 잇기
const dates = prevDates.concat(thisDates, nextDates);
// console.log(dates);

dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
});
document.querySelector('.calendar-days').innerHTML = dates.join(''); // 배열의 모든 요소 연결

*/



let date = new Date();
function renderCalendar() {
  const $Year = date.getFullYear();
  const $month = date.getMonth();

  // calendar-year-month
  document.querySelector('.calendar-year-month').textContent = `${$Year}년 ${$month + 1}월`;

  // 지난달 마지막 일자
  const prevLast = new Date($Year, $month, 0);
  // 이번달 마지막 일자
  const thisLast = new Date($Year, $month + 1, 0);

  //지난달 마지막 일자, 요일
  const prevDate = prevLast.getDate();
  const prevDay = prevLast.getDay();

  //이번달 마지막 일자, 요일
  const thisDate = thisLast.getDate();
  const thisDay = thisLast.getDay();

  // 지난달 날짜 배열로 담기
  const prevDates = [];
  // 이번달 날짜 배열로 담기 Array(n) 길이가 n인 배열 생성/.keys() n - 1까지 값 생성/slice 메서드로 맨 앞 0 없애기
  const thisDates = [...Array(thisDate + 1).keys()].slice(1);
  // console.log(thisDates)
  // 다음달 날짜 배열로 담기
  const nextDates = [];

  // 지난달 마지막 요일이 토요일이 아니라면 
  if (prevDay !== 6) {
    // 지난달 마지막 요일이 될 때까지 반복
    for (let i = 0; i < prevDay + 1; i++) {
      // 지난달 마지막 날짜부터 1씩 줄어든 값 배열 앞쪽에 추가
      prevDates.unshift(prevDate - i);
    };
  }

  // 이번달 마지막 날짜의 요일 기준으로 1부터 1씩 증가시키며 nextDates 배열 뒤에 추가
  for (let i = 1; i < 7 - thisDay; i++) {
    nextDates.push(i);
  }

  // 배열 잇기
  const dates = prevDates.concat(thisDates, nextDates);
  // console.log(dates);

  // 지난 달 부분 알아내기 첫날의 index
  const firstDateIndex = dates.indexOf(1);
  // 다을 달 부분 알아내기 마지막 날 index
  const lastDateIndex = dates.lastIndexOf(thisDate);
  // console.log(firstDateIndex)
  // console.log(lastDateIndex)
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  });
  document.querySelector('.calendar-days').innerHTML = dates.join(''); // 배열의 모든 요소 연결


  //오늘 날짜
  const today = new Date();
  // $month,$Year today 데이터와 동일한지 비교
  if ($month === today.getMonth() && $Year === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) { // this클래스 가진 태그 모두 찾기
      if (+date.innerText === today.getDate()) { // +단항 연산자 숫자로 변경, 오늘 날짜와 비교하기
        date.classList.add('today'); // 충족된다면 today클래스 추가
        break; // 오늘 날짜는 하나밖에 없으니 반복할 필요없이 break;
      }
    }
  }

}
renderCalendar();

// 이전 달
const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};
// 다음 달
const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

// 현재
const thisMonth = () => {
  date = new Date();
  renderCalendar();
};