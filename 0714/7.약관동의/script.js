const box = document.querySelector('.box');

let boxY = box.scrollHeight; // box의 높이를 알수있는 속성
console.log(boxY); // 실제 박스 높이

let boxHeight = box.clientHeight;
console.log(boxHeight); // 눈에 보이는 높이

let isDisabled = true;
const next = document.querySelector('#next')

//스크롤이 작동될때 실행되는 이벤트
box.addEventListener('scroll', ()=> {
  let scroll = box.scrollTop;
  console.log(scroll);
  if( isDisabled && boxHeight + scroll > boxY - 5 ) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }

})

chk.addEventListener('change', () => {
  if (chk.checked) {
    alert('다음');
  }
});

next.addEventListener('click', () => {
  if (chk.checked) {
    alert('감사합니다');
  } else {
    alert('동의하십쇼');
  }
});