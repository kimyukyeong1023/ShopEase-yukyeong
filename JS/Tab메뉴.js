// tab메뉴.js

// 내용을 객체로 저장을 한번 해놓고 페이지가 닫힐 때 까지
// 유지한다.
let 탭내용 = {
  '상품설명' : '상품내용 설명 tab 입니다.',
  '리뷰' : '리뷰 설명 tab입니다.',
  '배송안내' : '배송안내 설명 tab입니다',
  'Q&A' : 'Q&A 설명 tab입니다.'
}

// 버튼을 클릭할 때마다 매번! 실행!
function 탭변경(tab메뉴,클릭한버튼태그){

  console.log("클릭한 태그:", 클릭한버튼태그);
  // 1. 태그 찾기 
  let tab내용태그 = document
                    .getElementById('내용');

  // if~ else 없이 한줄로 끝!
  tab내용태그.innerText = 탭내용[tab메뉴];

  // 기존 디자인 모두 제거!
  let 모든버튼태그들 = document
                      .getElementsByTagName("button");
  console.log(모든버튼태그들);

  for(버튼 of 모든버튼태그들){
    버튼.classList.remove('btn-select');
  }
  // 클릭된 버튼만 디자인 적용한다. 
  클릭한버튼태그.classList.add('btn-select');

  // 2. 내용 변경 
  //    3개 중에 하나를 클릭하는 것 이기 때문에 상품설명
  //    상품 설명 tab , 리뷰 tab
  // if(tab메뉴 == '상품설명'){
  //     tab내용태그.innerText = "상품내용 설명 tab입니다";
  // }else if(tab메뉴 == '리뷰'){
  //     tab내용태그.innerText = "리뷰 설명 tab입니다";
  // }else if(tab메뉴 == '배송안내'){
  //     tab내용태그.innerText = "배송안내 설명 tab입니다";
  // }
  // button 모든 태그를 찾아서  디자인 제거하기 
  // css에서 제공하는 class 제거하기!
  // getElementsByTagName("태그명")
  // 배열 형식으로 여러개의 태그 올 수있다. 
  // 사용하는 방법도 배열처럼 사용하면 된다.
  // let 모든버튼태그들 = document
  //                     .getElementsByTagName("button");
  // console.log(모든버튼태그들);

  // 반복문 = 여러개의 태그를 가지고 있는 배열을 관리
  // for(버튼 of 모든버튼태그들){
  //   버튼.classList.remove('btn-select');
  // }


  //  아래 처럼 작성하면 동작은 하지만 실무에서는 싫어하는 방법
  //  tab을 추가하거나 삭제했을 때 변경 !
  // 모든버튼태그들[0].classList.remove('btn-select');
  // 모든버튼태그들[1].classList.remove('btn-select');
  // 모든버튼태그들[2].classList.remove('btn-select');

  // 현재 눌러진 태그에 디자인 추가하기 
  // classList 클래스를 관리하는 배열이다.
  // css class 추가, 삭제, 확인하는 기능할 수있다.
  //  css class는 여러개가 들어올 수있기 때문에 배열형태로
  //  받는다.
  // 클릭한버튼태그.classList.add('btn-select');

}