// 비동기.js
// 몇 초 뒤 실행하는 내용!
//  비동기 ==  몇 초 뒤 실행 예약!

function 숨기기(){
  //1. 몇 초 뒤에 숨길 태그를 찾아라!

  let 숨길div태그 = document
                  .getElementById('box');
  console.log(숨길div태그);
  //2. 실행될 내용을 작성!
  숨길div태그.style
            .display = 'none';
}

// 3초 뒤 실행 예약 
// setTimeout(어떤함수예약,밀리초시간)
// 1초 -- 1000ms
// 0.5초 -- 500ms
// 바로 실행하지 말고 3초 뒤 실행해라
// ()괄호를 적지 않는다!
console.log("자바스크립트 시작한다.");

setTimeout(숨기기,3000);

console.log("브라우저 실행시 딱 한번실행");