// * PC의 표준시간대 설정 관계 없이 한국 시간 표시하기 

// 현재 시간 확인하기
const curr = new Date();
document.write(`현재시간: ${curr} <br/>`);

// UTC 시간 계산
const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000); //getTimezoneOffset() 이라는 함수를 이용하여 UTC 시간을 계산
//getTimezoneOffset() 함수는 현재 사용자 PC 설정 시간대로부터 UTC 시간까지의 차이를 '분'단위로 리턴
// getTime() 함수는 '1970년 1월1 일 00:00:00 UTC'로부터 주어진 시간 사이의 경과시간(밀리초)를 리턴
/*
사용자 PC의 시간대 설정이 한국이라면 '-540'을 리턴할 것입니다.
한국 시간은 UTC 시간보다 9시간 빠르기 때문에,
UTC 시간은 한국시간으로부터 -9시간(-540분)이기 때문입니다.
만약 사용자 PC의 시간대가 중국으로 되어 있다면 '-480'을 리턴할 것입니다.
(중국 시간은 UTC 시간보다 8시간 빠릅니다.)

UTC 시간을 계산하기 위해
getTime()의 결과 값에
getTimezoneOffset() 함수에서 나온 분단위의 시간을 밀리초 단위로 변환하여 더해주었습니다.
 
이제 'utc'는 현재 시간을 utc 시간으로 변환한 밀리초 값입니다.
*/

// UTC to KST (UTC + 9시간)
const kr_time = 9 * 60 * 60 * 1000;
// const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
// 한국 시간(KST)은 UTC시간보다 9시간 더 빠릅니다.
// 9시간을 밀리초 단위로 변환

const kr_curr = new Date(utc + (kr_time));
//UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간(밀리초 단위로 변환한 값)을 더해주었습니다. 그리고, 'new Date()'를 사용하여, 밀리초값을 date로 변환

document.writeln(`한국시간 ${kr_curr}`);

// 사용자 환경의 시간대가 어떻게 설정이 되어 있든
// 사용자에게 한국 시간을 보여줄 수 있습니다.
// kr_time 값을 변경해준다면 한국 뿐 아니라 다른 나라의 시간도 보여줄 수 있습니다.