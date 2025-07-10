// 이벤트 : 인터넷 브라우저에서 발생되는 모든 신호
// ex)클릭, 더블클릭, 포커스 이동, 전송, 엔터

// click, dblClick, mouseover, mouseout
// summit, focus
// keyup, keydown

const btn = document.querySelector('.btn');

btn.onclick = function() {
  alert('ㅋㅋㅋㅋㅋㅋㅋ');
}

// addEventListener 함수를 이용해서 이벤트 설정을 함
// 이벤트 종류 : 클릭, 더블클릭, 등등...
// 이벤트 핸들러 : 이벤트 발생 시 실행할 코드 -> 함수
// 요소.addEventListener(이벤트종류, 이벤트핸들러(이벤트가 발생됐을때 실행될 코드))

// 이벤트 삭제 
// 요쇼.removeEventListener(이벤트종류, 이벤트핸들러)

btn.addEventListener('click', function() {
  alert('ㅋㅋㅋㅋㅋ');
})
// 위에 걸어둔 이벤트가 안지워짐
btn.removeEventListener('click', function() {
  alert('ㅋㅋㅋㅋㅋ');
})

function handler() {
  alert('이건 지울 수 있음')
}

btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);
//===================================================
// 이벤트 객체 : 이벤트가 발생할 때 생기는 모든 정보를 가지고 있음
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', function(e) {
  console.log(e);
  console.log(e.clientX);
  console.log(e.target);
})