/* function solution(s) {
    let result = '';
    let removeSpace = s.split(' ');
    removeSpace.forEach((value, index) => {
        if (index % 2 === 0) result += value.toUpperCase();
        else result += value.toLowerCase();
    });
    console.log(result);
    return result;
}
solution('try hello world');


function solution(s) {
    let result = s
        .split(' ')
        .map((value) =>
            [...value].map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
        )
        .join(' ');
    console.log(result);
}
solution('try hello world');

let num = [1, 2, 3, 4];
console.log(num.reduce((a, b) => (a += b)));
*/

function solution(s) {
    let result = [];
    let removeSpace = s.split(' ');
    for (let i = 0; i < removeSpace.length; i++) {
        let temp = [];
        for (let j = 0; j < removeSpace[i].length; j++) {
            j % 2 === 0
                ? result.push(removeSpace[i][j].toUpperCase())
                : result.push(removeSpace[i][j].toLowerCase());
        }
        result.push(temp);
        temp = [];
    }
    console.log(result);
}
solution('try hello world ');
