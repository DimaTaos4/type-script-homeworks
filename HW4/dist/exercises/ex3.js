"use strict";
const compareStrings = (word1, word2) => {
    if (word1.length === word2.length)
        return true;
    else
        return false;
};
console.log(compareStrings("NodeJS", "Javascript"));
console.log(compareStrings("NodeJS", "NestJS"));
// либо проверка на равенство строк
const compareStrings2 = (word1, word2) => {
    return word1 === word2;
};
console.log(compareStrings2("NodeJS", "Javascript"));
console.log(compareStrings2("NodeJS", "NodeJS"));
