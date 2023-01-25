// 모든 파일에서 Dog타입을 사용 할 수 있다.
export { B };

declare global {
  type Dog = string;
}
type B = number;
