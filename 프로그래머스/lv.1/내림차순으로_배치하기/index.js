function solution(n) {
    return parseInt(
        `${n}`
            .split('')
            .sort((a, b) => b - a)
            .join('')
    );
}

function solution2(n) {
    return (
        `${n}`
            .split('')
            .sort((a, b) => b - a)
            .join('') * 1
    );
}
