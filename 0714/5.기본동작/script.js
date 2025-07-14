// 태그의 기본동작
// 몇몇 태그들은 기본적으로 이벤트들을 수행함
document.querySelector('a').addEventListener('click', (e)=> {

  // 기본동작 막아주는 속성
  e.preventDefault(); //이걸로 막고 알침창 뜨도록 함 보통

  console.log('aaaa');
})

// contextmenu 우클릭했을때 속성
document.querySelector('p').addEventListener('contextmenu', (e)=> {

  e.preventDefault();
  alert('ㅋㅋㅋㅋㅋ')
})

document.querySelector('p').addEventListener('selectstart', (e)=> {

  for(let i=0; i<5; i++) {
    e.preventDefault();
    alert('드레그 하지마쇼 제발')
  }
})