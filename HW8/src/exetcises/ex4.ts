function wait(ms: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
}

async function delayNumbers(numbers: number[]) {
  const promises = numbers.map((num) => wait(num));
  const results = await Promise.all(promises);
  console.log("Все задержки завершены:", results);
}

delayNumbers([500, 1000, 1500, 700]);
