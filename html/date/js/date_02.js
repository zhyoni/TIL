// Date 객체로 원하는 날짜와 시간을 표현하는 방법.

let today = new Date(); // 파라미터로 아무것도 전달하지 않고 Date 객체를 생성하면 '현재 날짜와 시간을 가진 Date 객체가 생성'된다.

// new Date(year,month,day,hours,minutes,seconds,milliseconds) 
// new Date(년도,월,일,시,분,초,밀리초 ) 7개 파라미터 전달
//주의할 점 연도와 월은 필수 입력 값!! 월은 0에서 11 사이의 숫자(0~11)가 입력되어야 한다.


let date_1 = new Date(2022, 7, 22, 14, 05, 10, 00)//2022년 08월 22일 04시 05분 10초

document.write(`월요일 8월 22일 2022년 14시 05분 10초 00밀리초: ${date_1} <br/>`);

let dateMilli = new Date(1000);
document.write(`milliseconds: ${dateMilli} <br/>`) //milliseconds의 기준일자는 1970년 1월 1일 0시 0분 0초 0밀리초(UTC 시간 기준)
//우리 나라는 UTC시간과 9시간의 시차가 나기 때문에 1970년 1월 1일 9시 0분 1초라고 나오는 것
document.write('UTC시간 기준으로 표현했을때 : ' + dateMilli.toUTCString() + '<br/>')// toUTCString() 함수를 사용

let date = new Date("August 22, 2022 22:33:44");//파라미터로 날짜와 시간을 의미하는 String을 직접 입력하는 방법
document.write(`${date} <br>`);