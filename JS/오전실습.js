//실습4

function 배너변경(){
  // 여기에 작성하세요!
  // 1. 배너문구 태그 찾기
  // 2. 현재 innerText 가져오기
  // 3. if 문으로 문구 변경
  //    "무료배송 이벤트" 이면 → "신규회원 50% 할인!"
  //    아니면 → "무료배송 이벤트"
  let 배너문구태그=document.getElementById('배너문구');
  let 배너문구= 배너문구태그.innerText;
  if(배너문구=="무료배송 이벤트"){
    배너문구태그.innerText="신규회원 50% 할인!";
  }else { 배너문구태그.innerText="무료배송 이벤트";}
}

// 2초마다 반복
// 여기에 작성하세요!
// setInterval(배너변경,2000);

//실습3

// 전역변수 - 함수 밖에 선언
let 전역숫자 = 0;
let 지역변수결과태그=document.getElementById('지역변수결과');
let 전역변수결과태그=document.getElementById('전역변수결과');
function 지역변수증가(){
  // 여기에 작성하세요!
  // 함수 안에 let 숫자 = 0 선언
  // +1 해서 지역변수결과 태그에 출력
  let 지역숫자 =0;
  지역숫자+=1;
  지역변수결과태그.innerText=`${지역숫자}`;
}

function 전역변수증가(){
  // 여기에 작성하세요!
  // 전역숫자 = 전역숫자 + 1
  // 전역변수결과 태그에 출력
  전역숫자+=1;
  전역변수결과태그.innerText=`${전역숫자}`;

}

// 실습2

function 시간업데이트(){
  let 시계태그 = document.getElementById('시계');

  // 여기에 작성하세요!
  // 1. new Date() 로 현재 시간 가져오기
  // 2. 시 / 분 / 초 꺼내기
  // 3. 시계태그.innerText 로 출력
  // 힌트:
  // let 현재시간 = new Date();
  // let 시 = 현재시간.getHours();
  // let 분 = 현재시간.getMinutes();
  // let 초 = 현재시간.getSeconds();
  let 현재시간=new Date();
  console.log(현재시간);
  let 시= 현재시간.getHours();
  let 분=현재시간.getMinutes();
  let 초 =현재시간.getSeconds();

  시계태그.innerText=`${시}:${분}:${초}`;
}

// 1초마다 반복
// 여기에 작성하세요!
// setInterval(시간업데이트,1000);

//실습1
function 메시지보이기(){
  // 여기에 작성하세요!
  // 1. 환영메시지 태그 찾기
  // 2. display block 으로 변경
  let 환영메시지태그=document.getElementById('환영메시지');

  환영메시지태그.style.display="block";
}
setTimeout(메시지보이기,3000);

// 3초 후 예약
// 여기에 작성하세요!
// 힌트: setTimeout(함수이름, 3000) 괄호 없이!