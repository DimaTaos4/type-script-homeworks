function successTask(name: string, ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} успешно выполнена`), ms);
  });
}

function failTask(name: string, ms: number): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`${name} завершилась с ошибкой`)), ms);
  });
}

async function runWithErrorHandling() {
  try {
    const results = await Promise.all([
      successTask("Задача A", 1000),
      failTask("Задача B", 1500),
      successTask("Задача C", 500),
    ]);
    console.log("Все задачи выполнены:", results);
  } catch (err) {
    console.error("⚠️ Ошибка при выполнении промисов:", err);
  }
}

runWithErrorHandling();
