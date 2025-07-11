const FRUITS = [
  { name: 'apple', memo : '빨간색 맛있는 사과'},
  { name: 'mango', memo : '노란색 맛있는 망고'},
  { name: 'melon', memo : '초록색 맛있는 멜론'},
  { name: 'strawberry', memo : '빨간색 맛있는 딸기'},
  { name: 'watermelon', memo : '초록색 맛있는 수박'},
];

for(let i=0; i<FRUITS.length; i++) {
let card = `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./images/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
      </div>
`;

document.querySelector(`.row`).insertAdjacentHTML(`beforeend`, card);
}

const cart = document.querySelectorAll(`.cart`);

for(let i=0; i<cart.length; i++) {

  cart[i].addEventListener(`click`, (e) => {
    let nameTag = ( e.target.previousElementSibling.previousElementSibling );
    let name = nameTag.innerHTML;

    let temp = localStorage.getItem(`cart`);
    if( temp !=null ) {
      // 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야 함
      // 문자열 형태이므로 원본인 배열로 되돌려줌
      temp = JSON.parse(temp);

      //새로 장바구니에 담을 name을 추가
      temp.push(name);
      //추가된 정보를 로컬스토리지에 다시 넣음
      localStorage.setItem(`cart`, JSON.stringify( temp ));

    } else {
      localStorage.setItem(`cart`, JSON.stringify( [name]));
    }

   })
}


//향상된 for문이라 생각하면 편함
// FRUITS.forEach( (data, index) => {
//   console.log(data.name, index);
// } )


// beforebegin : 해당 요소 앞에 html을 넣어줌 (형제 관계로 들어감)
// afterbegin : 해당 요소 첫번째 자식으로 추가 (자식 관계로 들어감)
// beforeend : 해당 요소 마지막 자식으로 추가 (자식 관계로 들어감)
// afterend : 해당 요소 뒤에 넣어줌 (형제관계로 들어감)

// const cardTitle = document.querySelectorAll(`.card-body h5`);
// const cardMemo = document.querySelectorAll(`.card-body p`);
// const cardImg = document.querySelectorAll(`img`);

// for(let i=0; i<=FRUITS.length; i++) {
//   cardTitle[i].innerHTML = FRUITS[i].name;
//   cardMemo[i].innerHTML = FRUITS[i].memo;
//   cardImg[i].setAttribute( 'src', `./images/${FRUITS[i].name}.jpg`);
// };

// 로컬스토리지 - 브라우저를 유저 컴퓨터에 저장
// 세션스토리지 - 브라우저를 종료하면 사라짐
// 둘다 문자만 저장가능

// 로컬스토리지에 저장 or 수정 ( 동일한 키를 넣으면 기존 데이터를 지움 )
localStorage.setItem( 'key', '값' )
// 로컬스토리지에서 해당 키에 대한 값을 리턴해줌
localStorage.getItem( '키')
// 로컬스토리지에서 해당 키를 삭제
localStorage.removeItem( '키' )

let arr = [1,2,3,4,5];
let obj = {
  name : 'kim',
  age : 20
};

// 로컬스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
localStorage.setItem( 'arr', arr );
localStorage.setItem( 'obj', obj );

// JSON형식으로 변환 
// arr인 배열을 문자열(JSON)로 변환
let arr_json = JSON.stringify(arr);
// 배열은 아니지만 배열 구조 ( 대괄호 )가 유지된채로 문자열이 됨
console.log(arr_json, typeof arr_json);

localStorage.setItem( 'arr', arr_json );

arr = localStorage.getItem('arr');

// 로컬스토리지에서 꺼내와도 아직까진 문자열임 ( 구조가 살아있는 상태 )
console.log(arr, typeof arr);
// 문자열인 형태를 다시 배열로 되돌려줌
arr = JSON.parse(arr)

console.log(arr, typeof arr);
