let empobject={};
let person={
    name:"Boota",
    age:18,
    profession:"Developer"
}
console.log(person.name);
console.log(person.age);
console.log(person.profession);
person.city="new york"
console.log(person.city);

// task3

person.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};
person.sayHello();  

person.calculateBirthYear = function() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.age;
};
console.log(person.calculateBirthYear()); 

// task 4
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

Object.keys(person).forEach(key => {
    console.log("Property " + key + " has value " + person[key]);
});

// task 5
let person1 = {
    name: "John",
    age: 31,
    profession: "Developer"
};

let person2 = {
    name: "John",
    age: 31,
    profession: "Developer"
};

let areEqual = JSON.stringify(person1) === JSON.stringify(person2);
console.log(areEqual);  

let person3 = person1;
let sameReference = person1 === person3;
console.log(sameReference); 

// task 6
let company = {
    name: "TechCorp",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(company.address.city);  
company.address.city = "San Francisco";
console.log(company.address.city);

// task 7
function Car(model, year) {
    this.model = model;
    this.year = year;
}

Car.prototype.getDetails = function() {
    return this.model + " - " + this.year;
};

let car1 = new Car("Toyota", 2019);
let car2 = new Car("Honda", 2020);

console.log(car1.getDetails());  
console.log(car2.getDetails());  

Car.prototype.startEngine = function() {
    console.log(this.model + " engine started.");
};

car1.startEngine();  
car2.startEngine();

// task 8
let jsonString = JSON.stringify(person);
console.log(jsonString);  
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject); 

// task 9
let { name, age } = person;
console.log(name);  
console.log(age);

// task 10
let keys = Object.keys(person);
console.log(keys);

// task 11
let parent = {
    greet: function() {
        console.log("Hello from the parent.");
    }
};

let child = Object.create(parent);
child.greet()