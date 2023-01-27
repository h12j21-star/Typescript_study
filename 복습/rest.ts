function 전부더하기(...a: number[]): number {
  let sum = 0;
  let arr = a.map((item) => {
    sum += item;
  });
  return sum;
}

console.log(전부더하기(1, 2, 3, 4, 5));
