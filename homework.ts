// type변수

//숙제1
// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
//

type ObjType1 = { name: string; age: number };
type ObjType2 = { gender: string; age: number };

type ObjType = ObjType1 & ObjType2;

let personObj: ObjType = { name: "hj", age: 12, gender: "2" };
// 에러 안남??

// 숙제2
/**
 * 1. 이 타입은 object 자료형이어야합니다.
   2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
   3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
   4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
 */

type ObjType3 = { color?: string };
type ObjType4 = { size: number };
type ObjType5 = { readonly position: number[] };

type newObjType2 = ObjType3 & ObjType4 & ObjType5;
let hw2Obj: newObjType2 = { color: "red", size: 12, position: [1, 2, 3] };

//숙제3
/**
 * 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
 */

type Info = {
  name: string;
  phone: number;
  email?: string;
};
let user2 = {
  name: "hj",
  phone: 12,
};
/**
 * 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
 */
type MoreInfo = {
  미성년자여부: boolean;
};
type newInfo = MoreInfo & Info;
let user3: newInfo = {
  name: "hj",
  phone: 12,
  미성년자여부: true,
};
