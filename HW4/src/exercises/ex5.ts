const makeTriple = <T>(arr1: T, arr2: T, arr3: T): T[] => {
  return [arr1, arr2, arr3];
};

console.log(makeTriple<number>(100, 200, 999));
console.log(makeTriple<string>("Dima", "Bogdan", "Web Dev"));
