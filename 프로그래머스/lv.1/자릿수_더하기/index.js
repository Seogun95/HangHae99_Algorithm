function solution(n) {
    let result = 0;
    let arr = `${n}`.split('').map((i) => Number(i));

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);
}
solution(987);
