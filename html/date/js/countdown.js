timer = setInterval(function () {
  countDown();
}, 1000);

let $countBox = document.querySelector('.countBox');
console.log($countBox)
let $h1 = document.createElement('h1');
let $p = document.createElement('p');
$countBox.appendChild($h1);
$countBox.appendChild($p);

const countDown = function () {
  let today = new Date(); //현재 시간 구하기
  // D-day 날짜
  let dDay = new Date(2022, 07, 30, 19, 00, 00) // 2022/08/30/pm19:00:00

  const target = dDay.getTime() - today.getTime();

  const second = 1000; //초1000
  const minute = second * 60; //분60
  const hour = minute * 60 //시간60
  const day = hour * 24 //일24

  //Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
  let days = Math.floor(target / day);
  let hours = Math.floor((target % day) / hour);
  let minutes = Math.floor((target % day % hour) / minute);
  let seconds = Math.floor((target % day % hour % minute) / second);

  console.log(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`)

  $h1.textContent = "퇴근시간까지";
  $p.textContent = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다`

  if (target <= 0) {
    $h1.textContent = "D-day까지";
    clearInterval(timer);
    $p.textContent = `00일 00시간 00분 00초`
  }

}


/*

// 2022년 8월 1일 0시 0분 0초
const date01 = new Date(2022, 7, 1, 0, 0, 0);
// document.write(`${dateOne.toLocaleString()} <br/>`);
// 2022년 8월 1일 2시 30분 10초
const date02 = new Date(2022, 7, 1, 2, 30, 10);
// document.write(`${dateTwo.toLocaleString()} <br/>`);
const elapsedMliilSeconds = date02.getTime() - date01.getTime();
const elapsedSeconds = elapsedMliilSeconds / 1000;
const elapseMinutes = elapsedMliilSeconds / 1000 / 60;
const elapseHours = elapsedMliilSeconds / 1000 / 60 / 60;

document.write(
  `${elapsedMliilSeconds} <br/>
  ${elapsedSeconds} <br/>
  ${elapseMinutes} <br/>
  ${elapseHours} <br/>`
);


let date = new Date();
let period = date.getTime() / 86400000 // 하루는 86,400,000 밀리초로 계산됨.
document.write(`1970년 1월 1일부터 오늘까지 ${period.toFixed()} 일이 지났습니다.`) //소수 부분 생략.

// 2022년 8월 1일
const dateOne = new Date(2022, 7, 1);

// 2022년 8월 4일
const dateTwo = new Date(2022, 7, 4);

const elapsedMilliSeconds = dateTwo.getTime() - dateOne.getTime();
const elapsedDay = elapsedMilliSeconds / 1000 / 60 / 60 / 24; //259200000

document.write(`<br/> ${elapsedMilliSeconds} <br/> ${elapsedDay}`); //3
*/

// const countBox = document.querySelector('.countBox');

// let dDay = new Date("Aug 29, 2022,18:30:00").getTime();
// setInterval(function () {
//   let today = new Date().getTime();
//   let gap = dDay - today;
//   let sec = Math.ceil((gap % (1000 * 60)) / (1000));
//   let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
//   let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let day = Math.ceil(gap / (1000 * 60 * 60 * 24));
//   countBox.textContent = `end까지 ${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다. `
// }, 1000);

/*
$(document).ready(function () {

  var $countBox = $('.countBox');
  $countBox.each(function () {
    // var $this = $(this)
    // var start = new Date($this.data('start'))
    // var end = new Date($this.data('end'))
    // var today = new Date();
    // console.log(end)
    // console.log(today)
    // var isShow = today - start > 0 && end - today > 0;

    // if (end - start < 0) console.error('날짜를 다시 입력해 주세요')

    // if (isShow) {
    //   $this.show();
    //   console.log('있다')
    // } else {
    //   $this.hide();

    //   console.log('없다');
    // }
    const end = new Date(2022, 07, 30, 11, 10, 50)
    setInterval(function () {
      const today = new Date().getTime();
      let viewTime = end - today; // 두 시간 사이 경과시간(ms)
      let sec = Math.floor(viewTime / 1000);
      // console.log(viewTime)
      let min = Math.floor(sec / 1000 / 60);
      let hour = Math.floor(min / 1000 / 60 / 60);
      let day = Math.floor(hour / 1000 / 60 / 60 / 24);
      $countBox.html(`종료까지 ${day}일 ${hour}시간 <br> ${min}분 ${sec}초 남았습니다. `)
    }, 1000);

  });

});

*/

