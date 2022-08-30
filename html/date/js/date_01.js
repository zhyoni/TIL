// 현재 날짜, 시간 구하기

let today = new Date();
document.write(today);

// 현재 연도/월/일/요일 구하기
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월 (1월은 0으로 표현 됨) 그래서 + 1 (0~11)
let date = today.getDate(); // 날짜 (0~31)
let day = today.getDay(); // 요일 (0~6) (일요일이 0, 월요일이1, 토요일이 6으로 표현됨)

document.write(`<br />년도:${year} 월:${month} 날짜:${date} 요일:${day}`);

// 현재 시간/분/초/밀리초 구하기

let hours = today.getHours(); //시 (0~23)
let minutes = today.getMinutes(); // 분 (0~59)
let seconds = today.getSeconds(); // 초 (0~59)
let milliseconds = today.getMilliseconds(); // 밀리초(0~999)

document.write(`<br/> 시:${hours} 분:${minutes} 초:${seconds} 밀리초:${milliseconds}`);

// 좀 더 손쉽게 날짜와 시간 가져오기
document.write(today.toLocaleDateString() + '<br/>');
document.write(today.toLocaleTimeString() + '<br/>');
document.write(today.toLocaleString() + '<br/>');
document.write(today.toLocaleDateString('en-US'));//미국에서 날짜를 표현하는 방식인 월/일/연도 순서로 날짜가 표현

//브라우저에 설정된 국가에서 사용되는 날짜, 시간 표현 형식으로 날짜와 시간을 보여줍니다.
//우리 나라에서는 보통 년/월/일 순서로 날짜를 표현하므로, toLocaleDateString() 함수를 사용하면 년/월/일 순서로 날짜를 표현해주고 있는 것을 확인할 수 있습니다.

