function solution(num) {
    var answer = 0;
    while (num !== 1) {
        if (answer++ === 500) return -1;
        num = num % 2 ? num * 3 + 1 : num / 2;
    }
    return answer;
}

solution(6);
