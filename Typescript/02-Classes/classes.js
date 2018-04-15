// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...
// How to create a class
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed || 0;
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
}());
// Instantiate (create) an object from a class
var car = new Car(5);
car.accelerate();
car.getSpeed();
console.log(Car.numberOfWheels());
