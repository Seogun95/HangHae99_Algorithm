const filePath = process.platform === 'linux' ? '/dev/stdin' : '백준/8958_OX퀴즈/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input);

/* [
    '5',
    'OOXXOXXOOO',
    'OOXXOOXXOO',
    'OXOXOXOXOXOXOX',
    'OOOOOOOOOO',
    'OOOOXOOOOXOOOOX'
  ]
  */

// const beakjoonInput = [
//     '5',
//     'OOXXOXXOOO',
//     'OOXXOOXXOO',
//     'OXOXOXOXOXOXOX',
//     'OOOOOOOOOO',
//     'OOOOXOOOOXOOOOX'
//   ]

let num = Number(input[0]);

//1. input의 0번째 배열 즉, 5보다 작거나 같을때까지 For문을 돌림
for (let i = 1; i <= num; i++) {
    let result = 0;
    let count = 0;
    //2. 충접 for문을 사용하여 input의 첫번째 배열의 길이 만큼
    for (let j = 0; j < input[i].length; j++) {
        /* 3. input의 [i]번째 배열에 2차원 배열안에 j번째 요소와 0을 비교
        맞다면 count를 계속 더하고 아니라면 0으로 초기화 */
        input[i][j] === 'O' ? count++ : (count = 0);
        //4. for문이 돌때마다 result 변수에 count를 추가해 더함
        result += count;
    }
    console.log(result);
}

/*
10
9
7
55
30
*/

function solution1(str) {
    let answer = 0;
    let count = 0;
    //1. for문을 사용하여 str의 길이만큼 돌려준다.
    for (let i = 0; i < str.length; i++) {
        //2. str의 i번째를 순회하며, 값이 'O'와 같다면 count를 증가하고, 아니라면 count를 0으로 초기화
        str[i] === 'O' ? count++ : (count = 0);
        //3. for문이 돌때마다 answer에 count된 값 만큼 하나 하나 더해준다.
        answer += count;
    }
    return answer;
}
let str = 'OXOOOXXXOXOOXOOOOOXO';
console.log(solution1(str)); // 27
