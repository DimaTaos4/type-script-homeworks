class Vehicle {
  make: string;
  model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const vehicle1 = new Vehicle("BWM", "M8");
console.log(vehicle1);

const moto1 = new Motorcycle("Honda", "QR101", "Street");
console.log(moto1);
