// 조건문

// if문
let age = 9;
if(age >= 20) {
  console.log("성인");
} else if(age >= 12) {
  console.log("청소년");
} else {
  console.log("어린이");
}

// 삼항연산자
// 조건식 ? 참 : 거짓
let result = age >= 20 ? "성인" : "청소년";
console.log(result);

// switch 문
let a = '2';

switch(a) {
  case 1:
    console.log("a는 1이다");
    break;
  case 2:
    console.log("a는 숫자 2이다");
    break;
  case '2':
    console.log("a는 문자 2이다")
    break;
  default:
    console.log("a는 1,2가 아니다");
}

// 반복문
// for문
//  for( 초기값; 조건식; 증감식 ) {
//  반복할코드
//  }
let total = 0;

for ( let j=1; j<=10; j++) {
  for( let i=1; i<=j; i++) {
    total = total + i;
  }
}
console.log(total);

// while 문
while(조건식) {
  반복할코드
}

// 반복 종료 - break;
// 반복문 상단으로 돌아감 - continue




