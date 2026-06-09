// 비동기실습.js

function 보이기(){
    let 공지사항태그=document.getElementById('공지사항');
    공지사항태그.style.display="contents";

}
setTimeout(보이기,4000);


//2초 뒤 경고메시지 div배경색 바꾸기(동작)

function 색상변경(){
    let 경고창태그=document.getElementById('경고창');

    경고창태그.style.backgroundColor='red';

}
setTimeout(색상변경,2000);
console.log("예약완료");






//------------------------------------
// 광고창 찾아서 3초 뒤 숨기는 함수 예약하기
function 광고숨기기(){
  //3초뒤에 바로 실행을 한다 ()괄호를 단다.
  // 1) 태그 찾기
  let 광고창 = document
                .getElementById('광고창');
  // 2) 숨기기 적용하기 
  광고창.style.display = 'none';
}

// 자바스크립트한테 예약
setTimeout(광고숨기기,3000);












//------------------------------------
// HTML,CSS,JS 각자 언어!
// 하나의 페이지를 만들려고 협업!
// 이  언어들은 각자 동작이 가능해요
// 함수 안에 설정을 하면 매번!
// 함수 밖에 있으면 한번만 실행된다.
// 브라우저가 html을 읽을 때 script태그를
// 만난다. 그러면 딱 한번 실행된다

let 숫자 = 10;
let 처음한번실행해서저장하는p태그 = document
        .getElementById('p태그');
console.log("한번찍음");
// 한번 script태그가 실행되면 페이지가 
// 닫힐 때까지 처음한번실행해서저장하는p태그변수를
// 기억한다.