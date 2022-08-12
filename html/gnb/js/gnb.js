// var $gnb_load = $("#adminGnb");

// // gnb 로드
// $gnb_load.load('../../include/gnb.html', function () {

var $gnb = $(".gnb")
var $gnbID = $gnb.data("link");
var $gnbLink = $(".gnb a");
var $subGnb = $(".sub-gnb");
if ($subGnb.hasClass('active')) {
  $subGnb.show();
}
//data-link='gnb ID' 찾기
// $gnb.find($('#' + $gnbID)).addClass('active')//ㅁ태그 링크걸렸을때 active style주기 
$gnbLink.on('click', function () {
  if ($(this).next().hasClass('sub-gnb')) {


    var $thisSubGnb = $(this).next('.sub-gnb');
    var $thisSubGnbIcon = $(this).children('i');
    $thisSubGnb.toggleClass('active');
    if ($thisSubGnb.hasClass('active')) {
      $thisSubGnb.slideDown(400);
      $thisSubGnbIcon.addClass('rotate');
    } else {
      $thisSubGnb.slideUp(400);
      $thisSubGnbIcon.removeClass('rotate');
    }
  } else {
    $gnbLink.parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
  }
});
// });