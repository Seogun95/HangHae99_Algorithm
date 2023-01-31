function solution(s) {
    let answer = '';

    let center = Math.floor(s.length / 2);

    if (s.length % 2 === 1) {
        answer = s.substr(center, 1);
    } else {
        answer = s.substr(center - 1, 2);
    }
    return answer;
}
solution('acdqefa');

/*
let str = '안녕하세요?';

let second_char = str.substring(2, 4);
let someSubstr = str.substr(2, 1);
console.log(second_char);

*/
