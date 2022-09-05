// 1) 콘솔창에 1 부터 30 까지 띄어쓰기로 구분해서 한 줄에 출력하세요.
// ex)
// 1 2 3 4 5 6 … 30
{
  let arr = ""
  for (let i = 0; i <= 30; i++) {
    arr = i + " "
    document.write(arr);
  }
}
// 2) 1단계에서 30까지 출력했던걸, 30까지 출력하지 말고, 이 달의 마지막 날짜를 구해서 그 숫자까지 출력하세요.
// 1 2 3 4 … 31

{
  arr = "";
  var date = new Date();
  console.log(date.toLocaleString());
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();//연도, 월+1(월은0부터세끼때문에+1), 일
  console.log(lastDay.toLocaleString());

  var month = `${date.getFullYear()}년 ${date.getMonth() + 1}월 입니다.`
  document.write(`${month} <br/>`);

  for (let i = 0; i <= lastDay; i++) {
    arr = " " + i;
    document.write(arr);
  };
}

// 3) 2단계에서 출력한 날짜들을, 7칸 출력할 때마다 줄바꿈이 일어나도록 하세요.
// 1 2 3 4 5 6 7
// 8 9 10 11 12 13 14
// …
// 29 30 31

{
  arr = "";
  var date = new Date();
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= lastDay; i++) {
    arr = i + " ";
    if (i % 7 == 0) {
      arr += '<br>';
    }
    document.write(arr);
  };
}

// 4) 3단계에서 1일을 출력하기 전에, 빈칸을 2개 출력하고 1일을 출력하기 시작하세요.
//      빈칸은 눈에 안보이니까 [] 로 표기합니다.
//      그리고 7칸 출력할때마다 줄바꿈이 일어나야 합니다.
//      ex)
//      [] [] 1 2 3 4 5
//      6 7 8 9 10 11 12
//      ..
//      27 28 29 30 31

{
  arr = "";
  let date = new Date();
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  for (let i = 1; i <= lastDay; i++) {
    if (i == 1) {
      arr = "[][]";
    }
    arr += " " + i;
    if (i % 7 == 0) {
      arr += "<br/>"
    }
  }
  document.write(arr);
}

// 5) 4단계에서 빈칸을 2개 출력했던것을, 2개 출력하지 말고, 이 달의 1일의 요일을 구해서 그 요일만큼의 빈칸을 출력하세요.
// ex)
// [] [] [] [] 1 2 3
// …

{
  arr = "";
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let firstDay = new Date(year, month, 1).getDay() // 1일의 요일
  var lastDate = new Date(year, month + 1, 0).getDate(); // 이달 마지막 일
  console.log(`${firstDay} ${lastDate}`);

  // 첫 번째 줄 빈칸 숫자
  for (let blank = 0; blank < firstDay; blank++) {
    arr = "[]";
  };

  // 빈칸 뒤에 날짜 출력
  for (var i = 1; i <= lastDate; i++) {
    var getDay = new Date(year, month, 1).getDay();
    if (i % 7 == 0) {
      arr += "<br/>"
    }
    arr += " " + i
  }
  document.write(arr);
}



// 6) 4단계에서 마지막날짜를 출력한 후에, 그 날이 토요일이 아니라면, 그 주의 토요일까지 빈칸을 채워서 출력하세요.
// ex)
// [] [] [] [] 1 2 3
// …
// 25 26 27 28 29 30 31

arr = "";
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let firstDay = new Date(year, month, 1).getDay() // 1일의 요일
var lastDate = new Date(year, month + 1, 0).getDate(); // 이달 마지막 일
// console.log(`${firstDay} ${lastDate}`);
let nextMonthFirstDay = new Date(year, month + 1, 1).getDay(); // 다음달 1일의 요일 얻기
// console.log(nextMonthFirstDay)

const $calendar = document.querySelector('.calendar');
console.log($calendar)

// 첫 번째 줄 빈칸 숫자
for (let blank = 0; blank < firstDay; blank++) {
  arr = "[]";
};

// 빈칸 뒤에 날짜 출력
for (var i = 1; i <= lastDate; i++) {
  if (i % 7 == 0) {
    var getDay = new Date(year, month, 1).getDay();
    // arr += "\n"
    arr += "<br/>"
  }
  arr += " " + i
}

if (lastDate !== 6) {
  for (let i = 0; i < nextMonthFirstDay; i++) {
    arr += "[]"
  }
};
document.write(arr);
