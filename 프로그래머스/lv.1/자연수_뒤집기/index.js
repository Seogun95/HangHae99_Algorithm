function solution(n) {
    return `${n}`
        .split('')
        .map((i) => Number(i))
        .sort((a, b) => b - a);
}
