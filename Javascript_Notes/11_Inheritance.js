/**
 * Inheritance: classes can have child classes that inherit the properties and methods from the parent class
 */

class Vehicle {

    constructor(AutomobileBrand, color, engine, model) {

        this.AutomobileBrand = AutomobileBrand;
        this.engine = engine;
        this.color = color;
        this.model = model;
    }

    company() {
        console.log('This is a ' + this.AutomobileBrand);
    }

    colorOfAutomobile() {
        console.log("which is " + this.color);

    }

    engineOfAutomobile() {
        console.log("the engine of the vehicle" + this.engine);

    }

    model() {
        console.log('this is ' + this.model);

    }
}


//Defining the child class
//super word in the constructor is calling the constructor from the parent

class Motorcycle extends Vehicle {
    constructor(color, engine, model, fuelEffeciency) {
        super(color, engine, model);
        this.fuelEffeciency = fuelEffeciency;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle(0, "Black", 250, 28.5);
console.log(motor.color);

console.log("This is a " + motor.engine + "cc Engine");
console.log("This bike is having a  milage of " + motor.fuelEffeciency);
motor.doWheelie();


