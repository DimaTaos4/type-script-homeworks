export const capitalize = (word: string): string => {
  if (!word) return "";
  return word.charAt(0).toLocaleUpperCase() + word.slice(1);
};

export const reverseString = (word: string): string => {
  if (!word) return "";
  return word.split("").reverse().join("");
};
