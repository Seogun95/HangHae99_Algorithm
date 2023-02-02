function solution(phone_number) {
    let result = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    console.log(result);
    return result;
}
solution('01033334444');

/*
function solution(phone_number) {
   let arr = [...phone_number];
   let num = arr.slice(-4).join('');
   return '*'.repeat(arr.lenght - 4) + num
}
solution('01033334444');
*/
