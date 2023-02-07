let strlist = ['We', 'are', 'the', 'world!'];

function solution(strlist) {
  var answer = [];
  strlist.forEach((x, i) => {
    answer.push(x.length);
  });
  return answer;
}

console.log(solution(strlist));
