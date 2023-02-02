const filePath = process.platform === 'linux' ? '/dev/stdin' : '백준/5585_거스름돈/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

console.log(input); //380

let result = 0;
let price = 1000 - input; //620
let walletArr = [500, 100, 50, 10, 5, 1];

for (let i = 0; i < walletArr.length; i++) {
    // ~~ == Math.floor
    //1. price에 walletArr의 배열을 나눴을때 얼마나 나눠질수 있는지 몫을 구해줌
    let floorToInt = ~~(price / walletArr[i]);
    //2. price에 i번째 배열을 나누고 i번째 배열을 다시 곱해 price에 값을 빼준다.
    price -= floorToInt * walletArr[i];
    /*
        620 -= (620/500 = 1) * 500 = 120    result += 1
        120 -= (120/100 = 1) * 100 = 20     result += 1
        20 -= (20/50 = 0) * 50 = 20
        20 -= (20/10 = 2) * 10 = 0          result += 2
    */

    //3. result에 나눈 몫 만큼을 하나씩 더해줌
    result += floorToInt;

    //4. price 가 0이라면 for문을 빠져나옴.
    if (price === 0) break;
}
console.log(result);

function solution(num) {
    let answer = 0;
    let price = 1000 - num; // 840
    let wallet = [500, 100, 50, 10];

    for (let i = 0; i < wallet.length; i++) {
        // ~~ == Math.floor
        //1. price에 wallet 배열을 나눴을때 얼마나 나눠질수 있는지 몫을 구해줌
        let decimalToInt = ~~(price / wallet[i]);
        //2. price에 i번째 배열을 나누고 i번째 배열을 다시 곱해 price에 값을 빼준다.
        price -= decimalToInt * wallet[i];

        /*
        840 -= (840/500 = 1) * 500 = 340    result += 1
        340 -= (340/100 = 3) * 100 = 40     result += 3

        40 -= (40/10 = 4) * 10 = 0          result += 4
        */

        //3. for문이 돌때마다 answer 나눈 몫 만큼을 하나씩 더해줌
        answer += decimalToInt;
    }
    return answer;
}

let num1 = 160;
console.log(solution(num1));
