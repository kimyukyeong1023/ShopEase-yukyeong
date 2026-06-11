// main.js

function 상세페이지로이동(상품명){
  console.log("상세페이지 이동 함수 실행됨!");
  //htmlㅣ끼리 상품명으 ㄹ옮기때 함수명상요불가
  //페이지들 끼리 데이터를 주고 받을수 있는 저장소가 간단하게 있음(자동로그인, 파알을저장하면 낵 지울때까지 유지)
    localStorage.setItem("상품명",상품명);

  // 상품 페이지로 이동하는 코드 
  location.href='details.html';
}