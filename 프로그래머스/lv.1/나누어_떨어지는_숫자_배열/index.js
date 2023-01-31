// function solution(arr, divisor) {
//     let answer = [];

//     arr.forEach((index) => {
//         if (index % divisor == 0) {
//             answer.push(index);
//         }
//     });
//     console.log(answer);
//     return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
// }
// solution([5, 9, 7, 10], 5); // [5,10]

function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }
    if (answer.length === 0) {
        return [-1];
    } else {
        answer.sort((a, b) => a - b);
    }
}
solution([5, 9, 7, 10], 5);
