"use strict";
class Appliance {
}
class WashingMachine extends Appliance {
    turnOn() {
        console.log("Washing machine is now ON.");
    }
    turnOff() {
        console.log("Washing machine is now OFF.");
    }
}
class Refrigerator extends Appliance {
    turnOn() {
        console.log("Refrigerator is now ON.");
    }
    turnOff() {
        console.log("Refrigerator is now OFF.");
    }
}
const appliances = [new WashingMachine(), new Refrigerator()];
appliances.forEach(appliance => {
    appliance.turnOn();
    appliance.turnOff();
});
