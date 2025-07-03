"use strict";
const users = [
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
const getTotalSalary = (users) => {
    const salariesUsers = users.map((user) => user.salary);
    console.log(salariesUsers);
    return salariesUsers;
};
getTotalSalary(users);
