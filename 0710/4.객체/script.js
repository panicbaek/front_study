// 객체 ( object ) - 자바에서 Map과 유사
// key, value가 한쌍으로 구성
let user = {
  name:"홍길동",
  age: 20,
  "math score": 100
}

console.log(user.name);
console.log(user.age);
console.log(user[`math score`]);

const member = {
  name : `홍길동`,
  ahe : 20
}

console.log(user);
user = 10;
console.log(user);

// 당연히 상수니까 변경을 못함
// member = 10;

// 상주지만 큰 구조는 변경하지 않고
// 안쪽 내용만 수정은 가능함
member.name = "김자바";
console.log(member);

// 이름을 보고싶은지 나이를 보고싶은지 입력받음 
let key = "name";
console.log(member[key]) // member["name"]

let item = "바나나";
let cart = {
  [item] : 5
};

console.log(cart);

// 10명의 회원정보가 각각 담긴 객체 10개를 생성
function makeUserObject(name, age) {

  let obj = {
    name, // key로 설정할 이름과 value설정할 매개변수가 동일하면
    age 
  }
  return obj;
}

let a = makeUserObject("홍길동", 20);
let b = makeUserObject("고길동", 23);
let c = makeUserObject("오길동", 28);
console.log(a,b,c);

// key, value 추가하기
a.addr = "강동구";
console.log(a);
// key, value 삭제하기
delete a.addr;
console.log(a);
// key, value 검색하기
console.log("name" in a);
console.log(["age"] in a);

for( let key in a ) {
  console.log(`${key} : ${a[key]}`);
}

