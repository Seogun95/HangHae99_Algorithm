let arg = '15';
function solution(n) {
  return n & (7 === 0) ? ~~(n / 7) : ~~(n / 7) + 1;
}
console.log(solution(arg));

//

function solution2(n) {
  return Math.ceil(n / 7);
}
console.log(solution2(arg));
