function delayTask(name: string, ms: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`✅ ${name} выполнена за ${ms}мс`);
        }, ms);
    });
}

async function runSequentialTasks() {
    const result1 = await delayTask("Задача 1", 1000);
    console.log(result1);

    const result2 = await delayTask("Задача 2", 2000);
    console.log(result2);

    const result3 = await delayTask("Задача 3", 1500);
    console.log(result3);
}

runSequentialTasks();
