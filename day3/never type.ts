// return 값이 있으면 안된다.
// 함수 실행이 끝나면 안된다. endpoint가 없어야함
// 1. while (true)
// 2. throw new Error()
// 어디에 사용하는가? void로 대체가능
// 알아야하는 이유 : 코드를 작성할때 가끔 나타난다.

//never가 나타나는 경우
// 타입이 명확하게 지정되어있는데 else로 또 지정해주는 경우 never 타입이라는 말이 등장함
// 2 함수표현식은 return 타입이 never이다.
// 내코드가 never 타입을 가진다.
function f4(parameter: string) {
  if (typeof parameter === "string") {
    console.log(parameter);
  } else {
  }
}
let f5 = function () {
  throw new Error();
};
