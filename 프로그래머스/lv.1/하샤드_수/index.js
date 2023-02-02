/* function solution(x) {
    let answer = 0;
    let add = x.substring(0, 1) += x.substring(-1);
    if (add % x === 0) {
        answer = true;
    } else if (add % x === 1) {
        answer = false;
    }
    console.log(answer);
    return answer;
}
solution(12); //true
 */

function solution(x) {
    let str = `${x}`.split('');
    let backToIntArr = str.map((x) => parseInt(x));
    let addAll = backToIntArr.reduce((a, b) => a + b);
    return x % addAll === 0;
}

solution(12); //true
