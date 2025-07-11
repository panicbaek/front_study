const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

// let isShow = false;

btn.addEventListener('click', () => {
  list.classList.toggle(`show`);
});  
  

  
  //   if( isShow)  {
  //     // isShow가 true일때 실행되는 영역
  //     // true라는 소리는 목록이 현재 보이고 있다
  //     list.classList.remove('show');
  //   } else {
  //     // isSHow가 false일때 실행되는 영역
  //     // false라는 소리는 목록이 현재 안보이고 있다
  //     list.classList.add(`show`);
  //   }
  //   isShow = !isShow
  // })

const listAll = document.querySelectorAll('.list-group-item');

for(let i=0; i<listAll.length; i++) {

  listAll[i].addEventListener(`click`, ()=> {
    alert('ㅋㅋ');
  });

}
