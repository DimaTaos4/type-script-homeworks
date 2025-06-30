 // Задание 1
function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}
greetUser("Анна");

// Задание 2
interface Person {
    name: string;
    age: number;
    city: string;
}

function printPersonInfo(person: Person): void {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

const personExample: Person = {
    name: "Иван",
    age: 30,
    city: "Москва"
};
printPersonInfo(personExample);

// Задание 3
function squareNumber(num: number): number {
    return num * num;
}
console.log(squareNumber(5)); // Вывод: 25

// Задание 4
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// Задание 5
interface Student {
    name: string;
    grade: number;
}

function printStudentInfo(student: Student): void {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

const studentExample: Student = {
    name: "Мария",
    grade: 4.5
};
printStudentInfo(studentExample);

// Задание 6
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Это сообщение логируется в консоль.");
