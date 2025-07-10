// 화살표함수 : 자바에 람다와 유사함
// 함수 작성하는 코드를 간경하게 만듬 (람다랑 유사)

// function sum(a,b){
//   return a+b;
// }
// let sum = function(a,b){
//   return a+b;
// }


let sum = (a,b) => a + b;
let sum2 = (a,b) => {
  return a + b;
};

let a = () => {
  console.log("aaa");
};

sum(10, 5);
a();