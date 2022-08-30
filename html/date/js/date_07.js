//문자열 날짜(Date) 변환하기

// "2020-07-20"
const str = "2020-07-20";
const strArr = str.split('-'); // 문자열의 연월일이 '-'로 구분되므로, split()함수를 이용하여 문자열을 잘라서 배열에 담기
const date = new Date(strArr[0], strArr[1] - 1, strArr[2]);
// new Date(strArr[0], strArr[1]-1, strArr[2]) 
// Date(년, 월, 일) 함수를 이용하여, 날짜로 변환.
// Date의 파라미터로 '월'을 넘겨줄 때  '-1'을 해주어야 한다.
// 0은 1월, 1은 2월을 의미하기 때문에
// 즉, Date(2020, 6, 20)은 2020년 7월 20일을 의미
document.write(date);