"use strict";
const checkString = (string) => {
    return string.length > 0;
};
console.log(checkString("hello")); // true
console.log(checkString("")); // false
