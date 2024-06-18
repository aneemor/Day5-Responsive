// == DATA TYPES == 

/*
    Primitive Data Type
        - most basic data type in JS.
*/

console.log('--Primitive Data Types --');

// Number
let myNum1 = 20;
let myNum2 = 90.8;
let myNum3 = -15;

console.log ('Number: ', myNum1, myNum2, myNum3);

// String
let myString1 = "Hello World!";
let myString2 = "Welcome to JS";

console.log('String: ', myString1, myString2);

// Boolean
let isStudent = false;
console.log('Boolean: ', isStudent);

// Undefined -- uninitialized or missing value
let nothing;
console.log('Undefined: ', nothing);

// Null -- intentional absence; explicitly empty
let nullVar = null;
console.log('Null: ', nullVar);


/*
    Reference Data Type
        -- holds more complex data types
*/

console.log('--Reference Data Types--');

//Object -- represents a collection of key-value pairs, enclosed in {}; can also support multiple data types
let person = {
    name: 'Romeena',
    age: 36,
    city: 'Binan'
};

console.log(person);
console.log(person.name);

// Array -- represents an ordered list of values enclosed in []; can also hold multiple data types and can be accessed using numeric indices
let numbers = [1, 2, 3, 4, 5, 'JavaScript'];

console.log(numbers);
console.log(numbers[5]);
console.log(numbers[1]);
console.log(numbers[6]);

// Functions -- reusable blocks of codes that can be called by name
function greet (name) {
    console.log('Hello ' + name);
};

greet('Romeena');
