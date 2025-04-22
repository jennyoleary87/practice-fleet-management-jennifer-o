/*
04/22/25
Classes and Inheritance - 1 Practice: Fleet Management

You’ve been hired to help a logistics company build a system to manage its fleet of vehicles. The system should be able to:
1. Create individual vehicles with properties like type, make, model, year, and mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.
===== Tasks =====
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year, and mileage.
○ Use default values for mileage (e.g., 0).
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s details.
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g., a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated information
*/

class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    drive(distance) {
        this.mileage += distance;
    }
    getDetails() {
        console.log(`
            Type: ${this.type}
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}
            Mileage: ${this.mileage}`);
    }
}

let car = new Vehicle("Car", "Honda", "Civic", 2013, 50000);
let truck = new Vehicle("Truck", "Ford", "Wrangler", 2024, 10000);
let motorcycle = new Vehicle("Motorcycle", "Harley Davidson", "Street 750", 2018, 20000);

car.drive(500);
truck.drive(200);
motorcycle.drive(300);

car.getDetails();
truck.getDetails();
motorcycle.getDetails();
