function MySlider(className) {
  // 인자로 들어온 클래스이름을 기억해둔다. 이 객체의 다른 메써드에서도 클래스이름을 써야 하니까..
  this.className = className;

  //지금 보고 있는 이미지 번호를 기억해둔다. 다음이미지/이전이미지 넘어갈때 이 번호를 증가하거나 감소해서 스크롤 위치를 계산해야 하니까..
  this.currentImage = 0; //현재 보고 있는 이미지

  // 자동슬라이드에 사용할 타이머를 담아둘 변수
  this.timer = undefined;

  // 자동슬라이드의 방향
  this.direction = "right";

  // 슬라이더 랩퍼 만들기
  $(className).before('<div></div>');
  $(className).prev().append($(className));

  // li와 ul과 div랩퍼에 스타일을 입힌다.
  $(className).find('li').css({
    "margin": "0px",
    "padding": "0px",
    "float": "left"
  });
  $(className).css({
    "margin": "0px",
    "padding": "0px",
    "list-style": "none",
    "width": ($(className).find('li').eq(0).find('img').width() * $(className).find('li').length) + "px" // (ul의 자식중에 첫번째 li의 img의 width값*ul의 자식 li들의 갯수)+"px" -> 숫자로 나오기 때문에 단위를 붙여줌
  });
  $(className).parent().css({
    "padding": "0px",
    "height": "350px",
    'width': $(className).find('li').eq(0).find('img').width(), //img한장의 크기
    "overflow": "hidden"
  });
  // 버튼들을 담을 div를 만든다.
  $(className).parent().after('<div></div>');
  $(className).parent().next().append('<button class="prev">이전 이미지</button>');
  $(className).parent().next().append('<button class="next">다음 이미지</button>');
  // 이전이미지 버튼과 다음이미지 버튼이 작동하도록 이벤트를 걸어서 기능을 부여한다.
  $(className).parent().next().find('button.prev').on('click', () => { //function안에서 this는 window객체지만 화살표함수안에서 this를 사용하면 this키워드가 유지된다.
    this.prev();
  })
  $(className).parent().next().find('button.next').on('click', () => {
    this.next();
  })
  // 각 이미지별 바로가기 버튼을 만든다.
  for (var i = 0; i < $(className).find('li').length; i += 1) {
    $(className).parent().next().append('<button class="go" data-index="' + i + '">' + (i + 1) + "</button>");
  }
  // 각 이미지별 바로가기 버튼을 눌렀을 때 기능이 작동하도록 이벤트를 걸어준다.
  $(className).parent().next().find("button.go").on('click', (e) => {
    this.goto(parseInt($(e.target).attr('data-index'))); // 이미지 번호를 가지고 산술연산을 해야하니까 문자열을 숫자로 바꿔서 넣어준다.
  })
  // 자동슬라이드를 시작한다.
  this.startSlide();

  // 이미지에 마우스를 올리면 자동슬라이드를 멈추고
  $(className).find('li img').on('mouseenter', () => {
    this.stopSlide();
  })

  // 이미지에서 마우스가 빠지면 자돌슬라이드를 재게한다.
  $(className).find('li img').on('mouseleave', () => {
    this.startSlide();
  })
}


//다음 이미지로 넘어가는 메써드
MySlider.prototype.next = function () {
  this.currentImage += 1; // 지금 보고잇는 이미지번호를 다음 이미지로 설정은 하는데..
  // 이미지 번호가 이미지 갯수를 초과하지 못하도록 막는다.
  if (this.currentImage == $(this.className).find('li').length) {
    this.currentImage -= 1;
    this.direction = "left";
    //  console.log(this.currentImage)
  }
  $(this.className).parent().animate({
    "scrollLeft": $(this.className).find('li').eq(0).find('img').width() * this.currentImage,
  })
}
//이전 이미지로 넘어가는 메써드
MySlider.prototype.prev = function () {
  this.currentImage -= 1; // 지금 보고잇는 이미지번호를 이전 이미지로 설정은 하는데..
  // 이미지 번호가 0보다 작아지지 못하게 막는다.
  if (this.currentImage == -1) {
    this.currentImage += 1; // -1이되면 다시 +1올려서 0이 되도록
    this.direction = "right";
  }
  $(this.className).parent().animate({
    "scrollLeft": $(this.className).find('li').eq(0).find('img').width() * this.currentImage,
  })
}
//특정 이미지로 넘어가는 메써드
MySlider.prototype.goto = function (n) {
  this.currentImage = n;
  $(this.className).parent().animate({
    "scrollLeft": $(this.className).find('li').eq(0).find('img').width() * this.currentImage,
  })
}
// 자동 슬라이드를 시작하는 메서드
MySlider.prototype.startSlide = function () {
  this.timer = setInterval(() => {
    if (this.direction == "right") this.next();
    else this.prev();
  }, 1000);
}
// 자동 슬라이드를 중단하는 메서드
MySlider.prototype.stopSlide = function () {
  clearInterval(this.timer);
}

