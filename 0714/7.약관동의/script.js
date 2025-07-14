const box = document.querySelector('.box');

let boxY = box.scrollHeight; // box의 높이를 알수있는 속성
console.log(boxY); // 실제 박스 높이

let boxHeight = box.clientHeight;
console.log(boxHeight); // 눈에 보이는 높이

let isDisabled = true;

//스크롤이 작동될때 실행되는 이벤트
box.addEventListener('scroll', ()=> {
  let scroll = box.scrollTop;
  console.log(scroll);
  if( isDisabled && boxHeight + scroll > boxY - 5 ) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }
})

const next = document.querySelector('#next')

next.addEventListener('click', ()=> {
  alert('동의하십쇼')  
})


  
