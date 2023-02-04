let num_list = [1, 2, 3, 4, 5];
function solution(num_list) {
  let result = [];
  let odd = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 !== 0) {
      odd.push(i);
    }
  }
  result = [num_list.length - odd.length, odd.length];
  return result;
}
console.log(solution(num_list));

/*========*/

function solution2(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
console.log(solution2(num_list));

/*========*/

function solution3(num_list) {
  return [num_list.filter((num) => num % 2 === 0).length, num_list.filter((num) => num % 2 === 1).length];
}
console.log(solution3(num_list));

/*========*/

function solution4(list) {
  return list.reduce((acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc), [0, 0]);
}
console.log(solution4(num_list));
