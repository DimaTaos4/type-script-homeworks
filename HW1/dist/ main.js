"use strict";
// Задание 1
function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser("Анна");
function printPersonInfo(person) {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}
const personExample = {
    name: "Иван",
    age: 30,
    city: "Москва"
};
printPersonInfo(personExample);
// Задание 3
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5)); // Вывод: 25
// Задание 4
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
function printStudentInfo(student) {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}
const studentExample = {
    name: "Мария",
    grade: 4.5
};
printStudentInfo(studentExample);
// Задание 6
function logMessage(message) {
    console.log(message);
}
logMessage("Это сообщение логируется в консоль.");
