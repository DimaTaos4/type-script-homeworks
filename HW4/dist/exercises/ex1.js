"use strict";
const sumEvenNumbers = (arr) => {
    const filtered = arr.filter((num) => num % 2 === 0);
    return filtered.reduce((acc, num) => acc + num);
};
console.log(sumEvenNumbers([10, 20, 30, 11, 22]));
