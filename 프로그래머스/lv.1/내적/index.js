function solution(a, b) {
    let result = 0;
    a.forEach((value, index) => {
        result += value * b[index];
    });
    console.log(result);
    return result;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); //3
