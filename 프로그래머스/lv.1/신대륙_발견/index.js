function solution(mm, dd) {
    //윤일 고려
    let mydate = new Date(2023, mm - 1, dd + 98);
    let currentDate = mydate.toLocaleString();
    console.log(currentDate); //2023. 3. 5. 오전 12:00:00
    return `${currentDate.split('. ')[1]}월 ${currentDate.split('. ')[2]}`;
}

solution(11, 27);

function solution2(mm, dd) {
    //윤일 고려X
    let nowDate = new Date(2023, mm - 1, dd + 98);
    let getMonth = nowDate.getMonth() + 1;
    let getDay = nowDate.getDate();
    console.log(`${getMonth}월 ${getDay}일`);
    return `${getMonth}월 ${getDay}일`;
}
solution2(11, 27);
