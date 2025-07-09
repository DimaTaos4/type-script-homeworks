"use strict";
// Переопределение конструктора в классе `Vehicle`
// Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) и переопределяет конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}
const vehicle1 = new Vehicle("BWM", "M8");
console.log(vehicle1);
const moto1 = new Motorcycle("Honda", "QR101", "Street");
console.log(moto1);
