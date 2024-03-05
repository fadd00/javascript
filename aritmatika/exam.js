let firstName = "Jhon";
let lastName = "Doe";
let age = 25;
let isMarried = true;

console.log(firstName,lastName,age,isMarried)

function scoreChecker(score) {
    let result; if (score >= 90) {

        result = 'Selamat! Anda mendapatkan nilai A.';
    
    } else if (score >= 80) {
    
        result = 'Anda mendapatkan nilai B.';
    
    } else if (score >= 70) {
    
        result = 'Anda mendapatkan nilai C.';
    
    } else if (score >= 60) {
    
        result = 'Anda mendapatkan nilai D.';
    
    } else {
    
        result = 'Anda mendapatkan nilai E.';
    
    }
  
  
    // TODO
  
  
  
    // Jangan hapus kode ini
    return result;
  }
  
  /**
   * Jangan hapus kode di bawah ini
   */
  module.exports = scoreChecker;

const name = 'Dicoding';
const language = 'JavaScript';

console.log(`Hello $name. Welcome to $language!`);

let restaurant = {
    name: "Bakso Mang Dicoding",
    city: "Bandung",
    "favorite drink": "Es Teh",
    "favorite food": "Bakso",
    isVegan: false
};

let name = restaurant.name;

let favoriteDrink = restaurant["favorite drink"];

console.log(favoriteDrink)

let evenNumber = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    }
}

console.log(evenNumber);

let currency = new Map();
currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

let priceInIDR = priceInJPY * currency.get("JPY");

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);

function kali(a, b){
    return a*b;
}

let result = kali(120899, 853965)
console.log(result)

function getCircleArea(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
       throw new Error('Invalid radius. Radius must be a positive number.');
    }
    return Math.PI * Math.pow(radius, 2);
   }
   
   Example usage:
   try {
    console.log(getCircleArea(21));
   } catch (error) {
    console.error(error.message);
//    }
function minimal(a, b) {
   if (a === b) {
      return a;
   } else {
      return Math.min(a, b);
   }
  }
  
  console.log(minimal(1, 4)); // output: 1
  console.log(minimal(3, 2)); // output: 2
  console.log(minimal(3, 3)); // output: 3
function findIndex(array, number) {
   for (let i = 0; i < array.length; i++) {
       if (array[i] === number) {
           return i;
       }
   }
   return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 3)); // output: 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // output: -1
console.log(findIndex([1, 2, 3, 4, 5], 5)); // output: 4
function multiply(num) {
   total = num * num;
}

const result = multiply(3);

console.log(result);
function Car(brand, color, maxSpeed, chassisNumber) {
   this.brand = brand;
   this.color = color;
   this.maxSpeed = maxSpeed;
   this.chassisNumber = chassisNumber;
 }
  
 Car.prototype.drive = function() {
   console.log(`${this.brand} ${this.color} is driving`);
 }
  
 Car.prototype.reverse = function() {
   console.log(`${this.brand} ${this.color} is reversing`);
 }
  
 Car.prototype.turn = function() {
   console.log(`${this.brand} ${this.color} is turning`);
//  }
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
   class Rabbit extends Animal {
    constructor(name) {
       super(name, true);
    }
   
    eat() {
       return `${this.name} sedang makan!`;
    }
   }
   
   let rabbit = new Rabbit("Rabbit");
   console.log(rabbit.eat()); // Rabbit sedang makan!
   console.log(rabbit.isMammal); // true

   class Eagle extends Animal {
    constructor(name, age) {
       super(name, age, false);
    }
   
    fly() {
       return `${this.name} sedang terbang!`;
    }
   }
   
   let myRabbit = new Rabbit("Labi", 2);
   let myEagle = new Eagle("Elo", 4);
   
   console.log(myEagle.fly()); // Elo sedang terbang!
class Animal {
    constructor(name, age, isMammal) {
       this.name = name;
       this.age = age;
       this.isMammal = isMammal;
    }
   }
   
   class Rabbit extends Animal {
    constructor(name, age) {
       super(name, age, true);
    }
   
    eat() {
       return `${this.name} sedang makan!`;
    }
   }
   
   class Eagle extends Animal {
    constructor(name, age) {
       super(name, age, false);
    }
   
    fly() {
       return `${this.name} sedang terbang!`;
    }
   }
   
   let myRabbit = new Rabbit("Labi", 2);
   let myEagle = new Eagle("Elo", 4);
   
   console.log(myRabbit.eat());
 console.log(myEagle.fly());
class Car { }
const car = new Car();
console.log(typeof Car);