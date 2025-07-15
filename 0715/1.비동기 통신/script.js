// 비동기 통신 - ajax
// HTTP
// 요청 (request) 서버로 요청을 보내는 것
// 응답 (response) 서버에서 다시 응답을 해주는것

// 요청 시 사용되는 메서드 
// get : 정보를 받아옴 (마이페이지)
// post : 정보를 생성( 회원가입, 로그인...)
// put : 정보를 수정 (회원정보 수정)
// delete : 정보를 삭제 (회원탈퇴)

// 통신에서 주고받는 데이터는 전부 문자임
// JSON 형태로 거의 대부분 주고 받음
// JSON : js에 object처럼 키와 값으로 되어있음
//        배열형태도 가능함  하지만 우리가 hs에서 사용하는 배열, 오브젝트를 바로 전송하는건 불가능
// 그래서 해당 데이터를 JSON으로 변환 후 전송 

//  요청 후 응답이 온 데이터도 JSON임 해당 데이터를 js에서 사용하려면 배열, 오브젝트로 변환

// 옛날꺼 
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");

const data = { //<< 백엔드에서 정해놓은 양식으로 요청해야함
  userId : 100,
  title : '비동기통신 연습',
  body : '이것저것 보내는중'
};

xhr.send( JSON.stringify(data)); // <요청

xhr.onload = () => {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드
  console.log( JSON.parse(xhr.response)); // 응답 데이터
}

// 요즘꺼
// fetch( '요청주소' )
// .them((변수) => 성공 시 처리할 코드)
// .them((변수) => 성공 시 처리할 코드)
// .catch((e) => 요청 실패시 처리할 코드)

// get요청 버튼을 사용자가 누름
// get요청 버튼을 누르는 순간 서버에 요청을 날림
// 그럼 서버가 DB에서 데이터를 가져와서 응답객체에 담아서 사용자에게 응답함 
const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title')
const id = document.querySelector('.id')
const userId = document.querySelector('.userId')
const body = document.querySelector('.body')

getBtn.addEventListener('click', ()=> {

  fetch('https://jsonplaceholder.typicode.com/posts/1') //<<서버에 요청을함
    .then( (response) => response.json() ) // .then 는 응답을 기다리다가 응답이 오면 데이터 처리를 시작
    .then( (data) => {   // response는 파스 작업이라고 생각하셈 그걸 다시 data란 매개변수에 넣음
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
    })
    .catch( (e) => {
      console.log(e);
    })
})

const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

postBtn.addEventListener('click', (e)=> {
  e.preventDefault(); //<< 브라우저의 기본동작을 막아주는 속성값

  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  };

  fetch('https://jsonplaceholder.typicode.com/posts', { // 서버에 요청함
    method : 'post',
    body : JSON.stringify(data),
    headers : {
      "content-type" : "application/json"
    }
  }).then( response => response.json() )
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료!');
    })
    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패');
    })
    
    console.log('비동기통신이다 이게! 요청을 보낼동안 나는 먼저 출력한다 콘솔에 !')
})

const async_test = document.querySelector(".async");

async_test.addEventListener('click', async ()=> {
  let a = 1;
  a = add(a);
  console.log(a);
})

function add(i) {
  for(i=0; i<10000; i++) {

  }
  return i;
}

