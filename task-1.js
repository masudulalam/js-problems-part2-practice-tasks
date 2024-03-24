/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];
function lowestNumber (arr) {
    let lowestNum = heights2[0];
    for(const number of arr) {
        if(number < lowestNum) {
            lowestNum = number;
        }
    }
    return lowestNum;
}

const numbers = lowestNumber(heights2);
console.log(numbers);