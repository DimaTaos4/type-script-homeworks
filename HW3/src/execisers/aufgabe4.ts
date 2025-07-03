interface Employee {
  name: string;
  salary: number;
}

const users: Employee[] = [
  {
    name: "Andrew",
    salary: 2120,
  },
  {
    name: "Egor",
    salary: 2500,
  },
  {
    name: "Lev",
    salary: 2850,
  },
  {
    name: "Tom",
    salary: 3000,
  },
];

const getTotalSalary = (users: Employee[]): number[] => {
  const salariesUsers = users.map((user) => user.salary);
  console.log(salariesUsers);
  return salariesUsers;
};

getTotalSalary(users);
