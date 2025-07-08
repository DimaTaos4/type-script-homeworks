interface StringToBooleanFunction {
  (input: string): boolean;
}

const checkString: StringToBooleanFunction = (string) => {
  return string.length > 0;
};

console.log(checkString("hello")); // true
console.log(checkString("")); // false
