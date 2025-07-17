function asyncToUpper(str: string): Promise<string> {
  const delay = Math.floor(Math.random() * 1000) + 500; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, delay);
  });
}

async function processStringsParallel(strings: string[]) {
  const tasks = strings.map((str) => asyncToUpper(str));
  const results = await Promise.all(tasks);
  console.log("Результаты:", results);
}

processStringsParallel(["hello", "world", "typescript"]);
