// details.js

let 탭내용들 = {

  '상품상세' : '<img src="../images/상품상세설명이미지.png" alt="">',
  '상품평'   : '<img src="../images/상품평이미지.png" alt="">',
  '상품문의' : '<img src="../images/상품문의이미지.png" alt="">',
  '배송/교환/반품' : '<img src="../images/배송_교환_반품이지.png" alt="">',
}

function 탭변경(tab메뉴,클릭한버튼){

  // 1. 버튼이 클릭되면 기존 active디자인을 모두 제거하고
  // getElementsByTagName() 현재 페이지에 있는 모든 버튼 태그를
  // 다가져와서 문제가 발생한다. 
  // 나는 탭 메뉴버튼들만 그룹지어서 가져오고 싶다.
  let 모든버튼태그들 = document.
                      getElementsByClassName("tab-btn");
  console.log(모든버튼태그들);
  for(버튼 of 모든버튼태그들){
    버튼.classList.remove('active');
  }

  // 2. 현재 클릭된 태그만 디자인 달기
  클릭한버튼.classList.add('active');

  // 3. div태그 안에 새로운 html 태그를 생성한다. 
  //  -1)  탭내용보이기 태그를 찾는다.

  //  -2) innerHTML을 이용해서 안에 있던 내용을 모두 제거한다  ''

  //  -3) 현재 tab메뉴를 이용해서 객체 탭내용들변수에서 key를 이용해서
  //      값을 가져오고 innerHTML로 새로 태그 저장한다.

let 탭내용보이기태그 =document.getElementById('탭내용보이기');

탭내용보이기태그.innerHTML='';

탭내용보이기태그.innerHTML=탭내용들[tab메뉴];


}