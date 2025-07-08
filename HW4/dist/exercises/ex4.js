"use strict";
const getLastElement = (arr) => {
    const lastElement = arr.length - 1;
    const res = arr[lastElement];
    return res;
};
console.log(getLastElement([1, 2, 3, 44, 112]));
console.log(getLastElement(["I", "Love", "TypeScript"]));
console.log(getLastElement(["I", "Love", "TypeScript", 100]));
