interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  console.log(str1 + "" + str2);

  return str1 + str2;
};

console.log(concatStrings("Hello, ", "world!"));
console.log(concatStrings("Type", "Script"));
