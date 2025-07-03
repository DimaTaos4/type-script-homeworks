interface Person {
  firstname: string;
  lastname: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstname: "Lev",
  lastname: "Voronin",
  grade: 11,
};

const infoStudent = (student: Student): void => {
  const { firstname, lastname, grade } = student;
  console.log(`
    Имя: ${firstname} ${lastname};
    Оценка: ${grade}
    `);
};

infoStudent(student);
