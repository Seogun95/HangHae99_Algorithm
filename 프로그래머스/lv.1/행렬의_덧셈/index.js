/*첫 번째 방법 ==========*/
/* function solution(arr1, arr2) {
    let answer = [];
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr);
        arr = [];
    }
    console.log(answer);
}
*/

/*두 번째 방법 ==========*/
/* function solution(arr1, arr2) {
    const answer = [];

    for (let i = 0; i < arr1.length; i++) {
        const arr = [];
        for (let j = 0; j < arr1[i].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr);
    }
    console.log(answer);
}

solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ]
);
 */

/*세 번째 방법 ==========*/

function solution(arr1, arr2) {
    return arr1.map((v, i) => v.map((e, j) => e + arr2[i][j]));
}
solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ]
);
