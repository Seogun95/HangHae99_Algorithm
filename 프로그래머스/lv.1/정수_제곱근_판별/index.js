function solution(n) {
    let x = Math.sqrt(n);
    return Number.isInteger(x) ? Math.pow((x += 1)) : -1;
}
solution(123); //144
