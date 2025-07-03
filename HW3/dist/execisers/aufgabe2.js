"use strict";
const car = {
    make: "BMW",
    model: "M4",
    engine: {
        type: "V8",
        horsepower: 630,
    },
    year: 2024,
};
const auto = {
    make: "Mercedes",
    model: "G-63s",
    engine: {
        type: "V8",
        horsepower: 634,
    },
    //   year: 2025,
};
function aboutCar(car) {
    const { make, model, engine, year } = car;
    const { type, horsepower } = engine;
    console.log(`Марка: ${make}`);
    console.log(`Модель: ${model}`);
    console.log(`Тип двигателя: ${type}`);
    console.log(`Мощность: ${horsepower} л.с.`);
    if (year !== undefined) {
        console.log(`Год выпуска: ${year}`);
    }
    else {
        console.log("Год выпуска: не указан");
    }
}
aboutCar(auto);
