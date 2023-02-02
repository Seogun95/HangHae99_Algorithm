/* function solution(arr) {
    let answer = 0;

    arr.forEach((_, i) => {
        answer += arr[i];
    });
    return answer / arr.length;
}

solution([1, 2, 3, 4], 2.5);
 */

function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}

const str = '안녕 하세요 제 일므은 서근';
const word = str.split(' ');
console.log(word[0]);

const chars = str.split('');
console.log(chars[7]);
