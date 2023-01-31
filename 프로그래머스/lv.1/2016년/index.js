function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let someDate = new Date(2016, a - 1, b);
    let day = someDate.getDay(); //2

    //이거 한번 풀어보세요
    //week을 어떻게 해야 TUE가 나올지 for문 아니에요!

    console.log(week[day]);
}

solution(5, 24);
