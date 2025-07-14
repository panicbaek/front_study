// click / mousedown / mouseup, dblclick
// mouseover / mouseout

document.querySelector('button').addEventListener('click', (e)=> {
  // 0 : 왼쪽, 1 : 가운데, 2 : 오른쪽
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);

  console.log(e.clientX, e.clientY); // << 클라이언트는 사용자가 보고있는 상태 기준
  console.log(e.pageX, e.pageY); // << 페이지는 페이지 전체 기준

  if(e.ctrlKey) {
    alert('컨트롤 클릭함')
  } else if(e.altKey) {
    alert('알트 클릭함')
  } else if(e.shiftKey) {
    alert('쉬프트 클릭함')
  }

  if(e.ctrlKey && e.shiftKey) {
    alert('컨트로 쉬프트 동시클릭함 ')
  }
})

// 이벤트 종류 
// change : 변경되고 포커스가 나가면 작동
// input : 변경감지되는 모든 순간 작동
// cut : 잘라내기
// copy : 복사
// paste : 붙여넣기
document.querySelector('input').addEventListener('cut', ()=> {
  console.log('cut이벤트 작동됨'); // <<유효성 검사는 보통 회원가입할때 많이 사용함
})