class Donut {
    constructor(type, shape, isGlazed) {
        this.type = type;
        this.shape = shape;
        this.isGlazed = isGlazed;
        this.filling = null;
        this.powder = null;
        this.icing = null;
        this.toppings = [];
    }
}

let chocolateGlazedTwist = new Donut("yeast", "twist", true);
console.log(chocolateGlazedTwist);

let cinnamonOldFashioned = new Donut("cake", "ring", false);
console.log(cinnamonOldFashioned);
cinnamonOldFashioned.powder = "cinnamon sugar";
console.log(cinnamonOldFashioned);

let grapeJellyFilled = new Donut("yeast", "sphere", false);
grapeJellyFilled.filling = "grape jelly";
grapeJellyFilled.powder = "powdered sugar";
console.log(grapeJellyFilled);

let mapleBaconBar = new Donut("yeast", "bar", true);
mapleBaconBar.icing = "maple vanilla";
mapleBaconBar.toppings = ["candied bacon", "maple sugar bits"];
console.log(mapleBaconBar);

class houseForSale {
    constructor(type, yearBuilt, listPrice, sqft, bedrooms, bathrooms, garage = false, finishedBasement = false) {
        this.type = type
        this.yearBuilt = yearBuilt;
        this.listPrice = listPrice;
        this.sqft = sqft;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garage = garage;
        this.finishedBasement = finishedBasement;
    }
}

let cottageOnOakDrive = new houseForSale("single-family", 1942, 132500, 1284, 3, 1.5);
console.log(cottageOnOakDrive);

let duplexOnWalnutAve = new houseForSale("multi-family", 1968, 259000, 5, 3, true);
console.log(duplexOnWalnutAve);

let mansionOnMainSt = new houseForSale("single-family", 1902, 694000, 4418, 8, 4, false, true);
console.log(mansionOnMainSt);

class Produce {
    constructor(name, category, unit, costPerUnit) {
        this.name = name;
        this.category = category;
        this.unit = unit;
        this.costPerUnit = costPerUnit;

        this.describe = () => {
            console.log(`The ${this.name} is a type of ${this.category} that is currently selling for ${this.costPerUnit} per ${this.unit}. \n`);
        }
    }

    calculateTotal(quantity) {
        let calculateTotal = quantity * this.costPerUnit;
        let digitsToString = String(Math.floor(calculateTotal * 100));
        let n = digitsToString.length;
        let totalCostFormatted = "$" + digitsToString.slice(0, n - 2) + "." + digitsToString.slice(n - 2);
        console.log(`The totals cost is ${totalCostFormatted}. \n`);
    }
}

let grannySmith = new Produce("Granny Smith Apple", "fruit", "pound", 0.99);
console.log(grannySmith);
grannySmith.describe();
grannySmith.calculateTotal(3);

let yellowBellPepper = new Produce("Yellow Bell Pepper", "vegetable", "each", 1.12);
console.log(yellowBellPepper);
yellowBellPepper.describe();
yellowBellPepper.calculateTotal(5);
