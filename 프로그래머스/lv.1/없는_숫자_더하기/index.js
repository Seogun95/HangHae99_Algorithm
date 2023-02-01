function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        answer += numbers.includes(i) ? 0 : i;
    }
    console.log(answer);
    return answer;
}

/* function solution(numbers) {
        let answer = 0;
        for (let i = 0; i < 10; i++) {

            if (numbers.includes(i)) {
                answer += 0;
            } else {
                answer += i;
            }
        }
        console.log(answer);
        return answer;
    }
    solution([1, 2, 3, 4, 6, 7, 8, 0]); */
