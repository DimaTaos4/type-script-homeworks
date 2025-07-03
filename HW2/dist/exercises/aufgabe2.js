"use strict";
let id;
function displayId(id) {
    if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID: ${id * 10}`);
    }
}
// Примеры вызова
id = "abc123";
displayId(id); // ID: ABC123
id = 42;
displayId(id); // ID: 420
// type Id = string | number;
// const displayId = (id: Id): string | number => {
//   if (typeof id === "string") {
//     return id.toUpperCase();
//   } else {
//     return id * 10;
//   }
// };
// console.log(displayId("string"));
// console.log(displayId(4));
