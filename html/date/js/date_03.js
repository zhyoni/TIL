// 연도 더하기, 빼기
let date1 = new Date(2019, 1, 1); // 2019 2월 1일
document.write(`기준일자 : ${date1} <br/>`);

date1.setFullYear(date1.getFullYear() + 1);
document.write(`1년 후: ${date1} <br/>`)

date1 = new Date(2019, 1, 1);
date1.setFullYear(date1.getFullYear() - 1);
document.write(`1년 전: ${date1} <br/>`);

// 1년 후의 날짜, 1년 전의 날짜를 계산하기 위해서 getFullYear()와 setFullYear() 함수를 사용
// date객체에서 getFullYear() 함수를 이용해서 연도를 추출한 후에 date.getFullYear()
// 해당 연도에 1을 더하거나 빼서 1년 후와 1년 전의 연도를 구하고 +1 -1
// 그 값을 다시 setFullYear() 함수를 사용해서 원래의 Date객체의 연도를 변경 date.setFullYear()

// 월 더하기, 빼기
let date2 = new Date(2019, 0, 1); // 2019 1월 1일
document.write(`기준일자 : ${date2} 1월 1일 2019년 <br/>`);
date2.setMonth(date2.getMonth() + 1);
document.write(`1달 후: ${date2} 2월 1일 2019년 <br/>`);
// 1달 후, 1달 전의 날짜를 계산하기 위해 getMonth(), setMonth() 함수를 사용

let date3 = new Date(2019, 0, 31);
document.write(`기준일자 : ${date3.toLocaleString()} <br/>`);
date3.setMonth(date3.getMonth() + 1);
document.write(`1달 후 : ${date3.toLocaleString()} <br/>`);

date3 = new Date(2019, 0, 31);
date3.setMonth(date3.getMonth() - 1);
document.write(`1달 전 : ${date3.toLocaleString()} <br/>`);
/*
말일인 경우에 예상치 못한 결과가 나왔습니다.
1월 31일의 한 달 후 날짜가 3월 3일이라고 나왔습니다. 
아마 대부분 이런 경우 2월의 말일자인 2월 28일(또는 2월 29일, 윤달인 경우)이 나오는 것을 기대할 것입니다.
 
이런 결과가 나오는 경우는 2019년 1월 31일에 '월'의 숫자만 2월로 갈아 끼웠기 때문입니다.

그러면 2019년 2월 31일이 되는데, 사실 2월 31일은 없습니다. 2019년 2월의 마지막 날은 28일입니다.
그래서, 브라우저는 31-28=3,을 적용하여 3월 3일이라고 표시해 주는 것입니다.

우리가 원하는 결과대로 1월 31일의 한 달 후 날짜는 2월 28일이라는 결과를 얻기 위해서는
말일자를 보정하는 로직을 추가로 넣어주어야 합니다.
*/

let date4 = new Date(2019, 0, 31);
document.write(`기준일자 : ${date4.toLocaleString()} <br/>`);
date4.setDate(date4.getDate() + 1);
document.write(`1일 후 : ${date4.toLocaleString()} <br/>`);

date4 = new Date(2019, 0, 31);
date4.setDate(date4.getDate() - 1);
document.write(`1일 전 : ${date4.toLocaleString()} <br/>`);



