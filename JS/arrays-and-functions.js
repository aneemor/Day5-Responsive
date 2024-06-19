/*
    ARRAYS
        -- can hold more than one value at a time.

        Index
            -- position of an element where it is stored
            -- array indices always starts at 0
*/

// create an empty array
let emptyArray = [];

//create an array of mixed values
let mixedArray = ['Bird' , true, 12, 40.6];

// create an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

console.log(fruits);

//access an array element
console.log(fruits[2]);
console.log(fruits[4]);
console.log(fruits[4]);

// modifying an element
fruits[1] = 'Grapes';

console.log(fruits);
console.log(fruits[1]);

// push() -- adds one or more element at the end of an array
fruits.push('Strawberry');
console.log(fruits);

//pop() -- removes the last element from an array
fruits.pop();
console.log(fruits);

// shift -- removes the first element
fruits.shift();
console.log(fruits);

// unshift() -- adds an item from the front of an array
fruits.unshift('Peach');
console.log(fruits);

// length
console.log('Number of fruits: ', fruits.length);

// indexOf
console.log('Grapes is at index: ', fruits.indexOf('Grapes'));

// looping through arrays
// for loop
for(let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i]);
}

// forEach
fruits.forEach(function(fruit) {
    console.log('Hey! I found a ', fruit);
})

/*
    FUNCTIONS
        -- set of instructions that perform a specific task
*/

/*// function Declaration
function greet() {
    console.log('Hello! Welcome to JS!');
}

greet();
*/

// Function Parameters
function greet(name) {
    console.log('Hello ' + name + '! Welcome to JS!');
}

// Arguments
greet('Edgar');
greet('Romeena')

// Multiple Parameters and Arguments
function fullName (firstName, lastName) {
    console.log('Full Name: ', + firstName + '' + lastName);
}

fullName('John', 'Doe');

// return Statement
function addEventListener(a, b) {
    return a + b;
};

let result = add(3, 5);
console.log(sum);

/*
    Modern JS Features
        -- aka ES6
*/

// Arrow Functions

/*// old way
function sayHello(fname) {
    console.log('Hello ',fname);
}

sayHello('Romeena');
*/

// es6 (arrow function)
const greeting = () => console.log ('Nice to meet you!');
greeting();

const sayHello = (name) => console.log('Hello ', fname);
sayHello('Delmie');

/* const sum = (a,b) => a + b;
sum(3,5);
*/

//Template Literals
//old/traditional way
let name = 'John';
let age = 30;
console.log('Hi! I am '+ name + ". I am " + age + " years old.");
let message = "This is a \nlong message \nand it spans \nmulitple lines.";
//es6
console.log(`Hi! I am ${name}. I am ${age} years old.`);
const multilineString =
` This is a multiline string. It allows you to break lines w/o using concatenation.
 This is a 
    long message 
 and it spans 
    mulitple lines. 
`

console.log(multilineString);
//Expression Interpolation using es6 template literals
const a = 5;
const b = 10;
// const result = `The sum of ${a} and ${b} is ${a + b}.`
console.log(result)