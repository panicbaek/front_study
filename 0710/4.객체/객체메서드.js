// 객체 (object)에는 함수(메서드)도 넣을 수 있음

let user = {
  name : "홍길동",
  age : 20
}

user.hi = () => {
  console.log('hi');
}

user.hi();

function hi2() {
  console.log('hi2');
}
// () <<가 있는 순간은 호출을 하는거
user.hi2 = hi2;// () << 가 없으면 객체
user.hi2(); // ()<< 가 있는 순간은 호출 함수기능도 가져옴

let user2 = {
  name : "김자바",
  age : 20,

  hi : function() {
    console.log('hi')
  },

  hi2() {
    console.log('hi2');
  }
}

user2. hi();

// 객체 참조
let a = {
  name : "홍길동"
};
let b = a;
a.name = "김자바";
console.log(b.name);

// 배열
let arr = [1,2,3,4]

arr[0] = 20;
arr[1] = 'a'
console.log(arr);
// 배열방 추가
arr.push("zzzz");
console.log(arr);
// 배열방 삭제
arr.pop();
console.log(arr);
