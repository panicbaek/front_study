// 정해진 시간이 흐른뒤 해당 코드가 작동되도록 함
// setTimeout ( 콜백함수, 시간(ms) ); <<기본구조
console.log( 'js로드 완료');

const time = document.querySelector('.time');

let t = 5;

const interval = setInterval( ()=> {
  t--;
  time.innerHTML = t;

  console.log(t);
}, 1000)

setTimeout( ()=> {
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval);
}, 5000);
// 5초 뒤에 콜백함수가 실행됨

//정해진 시간이 흐른 뒤 해당 코드가 반복하면 작동
// setInterval( 콜백함수, 시간(ms) ); <<기본구조

const stop = setInterval( ()=> {
  console.log('2초마다 실행되는 코드임');
}, 2000);

clearInterval(stop);

let timer;

document.querySelector('.btn').addEventListener('click', ()=> {
  
  clearTimeout(timer)
  
  timer = setTimeout( ()=> {
    console.log('클릭하면 3초뒤에 나타남');
  }, 3000)
})

// 날짜 관련된 함수들
const data = new Date(); //현재 날짜와 시간들이 다 들어오게되는 !속성값!
console.log(data);

// 년도 추출
console.log(data.getFullYear());
// 월 추출 - ( 0부터 11로 출력 )
console.log(data.getMonth());
// 일 추출 
console.log(data.getDate()); //<< 일 같은 곁우에는 day가 아니라 data임
// 요일 추출 - ( 0이 일요일, 6이 토요일 )
console.log(data.getDay()); // << 요일이 day임 근데 숫자로 나옴 
// 시간추출
console.log(data.getHours());
// 분 추출
console.log(data.getMinutes());
// 초 추출
console.log(data.getSeconds()); 

 const clock = document.querySelector('.clock');

    function insertTime() {
      const date = new Date();
      const hour = String(date.getHours()).padStart(2, '0');
      const minute = String(date.getMinutes()).padStart(2, '0');
      const second = String(date.getSeconds()).padStart(2, '0');

      // 👉 innerHTML로 시간 표시
      clock.innerHTML = `${hour} : ${minute} : ${second}`;
    }

    // 처음 한 번 실행 후 1초마다 갱신
    insertTime();
    setInterval(insertTime, 1000);
