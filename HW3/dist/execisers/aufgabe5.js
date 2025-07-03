"use strict";
const student = {
    firstname: "Lev",
    lastname: "Voronin",
    grade: 11,
};
const infoStudent = (student) => {
    const { firstname, lastname, grade } = student;
    console.log(`
    Имя: ${firstname} ${lastname};
    Оценка: ${grade}
    `);
};
infoStudent(student);
