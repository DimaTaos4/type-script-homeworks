const getLastElement = <T>(arr: T[]): T => {
  const lastElement = arr.length - 1;
  const res = arr[lastElement];
  return res;
};

console.log(getLastElement<number>([1, 2, 3, 44, 112]));
console.log(getLastElement<string>(["I", "Love", "TypeScript"]));
console.log(getLastElement<string | number>(["I", "Love", "TypeScript", 100]));