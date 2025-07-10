"use strict";
class Shape {
}
class ColoredShape extends Shape {
}
class ColoredCircle extends ColoredShape {
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class ColoredRectangle extends ColoredShape {
    constructor(width, height, color) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const shapes = [
    new ColoredCircle(5, "red"),
    new ColoredRectangle(4, 6, "blue"),
];
shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea().toFixed(2)}, Color: ${shape.color}`);
});
