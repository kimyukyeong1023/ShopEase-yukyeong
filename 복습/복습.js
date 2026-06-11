// 실습4.js

let 명함 = {};

function 명함만들기(){
  // 1. 파일 + input 값 꺼내기
  // ...

  // 2. 유효성 검사
  // 이메일에 @ 포함됐는지 체크
  // 이메일.includes('@')

  // 전화번호에 - 포함됐는지 체크
  // 전화번호.includes('-')

  // 3. 객체에 저장
  // ...

  // 4. 콘솔 확인 + 화면 출력
  // innerText 로 각각 출력
  // ...
  let 사진태그 = document.getElementById('명함사진');
  let 이름태그 =document.getElementById('이름');
  let 이메일태그 =document.getElementById('이메일');
  let 사진파일= 사진태그.files;
  let 이름=이름태그.value;
  let 이메일=이메일태그.value;

  if(!이메일.includes('@') || !사진파일 || 이름태그==""){
    alert("입력확인하세요");
  }

}