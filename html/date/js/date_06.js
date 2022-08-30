// 경과 시간 계산하기 (시,분,초)
// 두 시간 사이의 차이를 구하기 위해서는 먼저 Date 객체의 getTime() 메소드를 이용해서 각각의 날짜의 시간에 해당하는 숫자를 구하고, 그 차이를 계산하면 된다.

// dateObj.getTime()
/*Date의 getTime() 메소드는 '1970년 1월1 일 00:00:00 UTC'로부터 주어진 시간 사이의 경과시간(밀리초)를 리턴합니다.
즉, '1970년 1월1 일 00:00:00 UTC'의 getTime() 값은 0입니다.
그리고, '1970년 1월 1일 00:00:01 UTC'의 getTime() 값은 1000입니다.
 
이를 이용해서 경과시간을 계산할 수 있습니다.*/

// 2020년 7월 1일 0시 0분 0초
const date1 = new Date(2020, 6, 1, 0, 0, 0);
// 2020년 7월 1일 2시 30분 4초
const date2 = new Date(2020, 6, 1, 2, 30, 4);

const elapsedMsec = date2.getTime() - date1.getTime(); // 9004000
//두 시간(date1, date2)의 getTime() 값의 차는 두 시간 사이의 경과시간(밀리세컨드 단위)을 의미한다.
const elapsedSec = elapsedMsec / 1000; // 9004
// 리세컨드(millisecond) 단위를 초단위(second)로 변환하기 위해 1000으로 나눈다.
const elapsedMin = elapsedMsec / 1000 / 60; // 150.0666...
//밀리세컨드(millisecond) 단위의 경과 시간을 초단위(second)로 변환하기 위해 1000으로 나누어 주고, 이것을 분단위(minute)로 변환하기 위해 60으로 다시 나눈다.
const elapsedHour = elapsedMsec / 1000 / 60 / 60; // 2.501111...
// 밀리세컨드(millisecond) 단위의 경과 시간을 초단위(second)로 변환하기 위해 1000으로 나누어 주고,
// 이것을 분단위(minute)로 변환하기 위해 60으로 다시 나눈다.
// 그리고, 시간단위(hour)로 변환하기 위해 다시 60으로 나눈다.

document.writeln(elapsedMsec);
document.writeln(elapsedSec);
document.writeln(elapsedMin);
document.writeln(elapsedHour);

//Date 객체의 연산을 할때는 getTime() 메소드를 사용하지 않고, Date 객체끼리 연산을 해도 getTime() 메소드를 사용하여 연산한 것과 같은 결과를 얻을 수도 있다.