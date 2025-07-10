// 함수 - 자바의 메서드와 독같음
function showMsg() {
  let msg = "하이";

  console.log(msg);
}
// 함수호출
showMsg();
showMsg();
showMsg();

let name = "홍길동";

function showInfo() {
  name = "고길동";
  let msg = `안녕하세요 ${name}님`;

  console.log(msg);
}

console.log(name);
showInfo();
console.log(name);

// 매개변수와 리턴
function sum(x, y) {
  console.log(x+y);
}
sum(10, 5);

function sum2(x, y) {
  return x+y;
}
let result = sum2(10, 5);
console.log(result);