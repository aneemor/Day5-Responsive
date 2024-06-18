/* 
    JS OPERATORS
        -- enable us to perform various action, calculations and comparisons
*/

// Arithmetic Operator -- [+], [-], [*], [/]
console.log('--Arithmetic Operator--');

let num1 = 10;
let num2 = 6;

// Addition [+]
console.log('Sum: ', num1 + num2);

// Subtraction [-]
console.log('Difference: ', num1 - num2);

// Multiplication [*]
console.log('Product: ', num1 * num2);

// Division [/]
console.log('Quotient: ', num1 / num2);

// Modulo [%]
console.log('Remainder: ', num1 % num2);

// Exponent [**]
console.log('Exponent: ', 5 ** 5);

/*
    Assignment Operators
        [=], [+=], [-=], [*=], [/=]
*/
console.log('--Assignment Operators--');

// Equals [=]
let equals = 'this value';
console.log(equals);

let x = 5;

// Addition Assignment [+=]
x += 5; //x = x + 5 --> x = 5 + 5 --> x = 10
console.log(x); //10

//Subtraction Assignment [-=]
x =+ 5; // x = x - 5 --> x = 10 - 5 --> x =5
console.log(x) //5

// Multiplication Assignment [*=]
x *= 5;
console.log(x) //5

// Division Assignment [/=]
x /= 5;
console.log(x); //5


/*
    Comparison Operator
        -- returns a boolean value

        [ == ] --> loose equality; checks if the 2 values are equal, regardless of data type
        [ ===] --> strict equal;
        [ > ], [ < ], [ >= ], [ <= ], [ != ]
*/

console.log('--Comparison Operator--');

console.log(9 > 10); //f
console.log(10 < 20); //t
console.log(15 <= 30); //t
console.log(20 >= 50); //f
console.log('5' == 5); //t
console.log('5' === 5); //f
console.log(9 != 20); //t

/*
    Logical Operator
        -- combines boolean values and logical operators to evaluate conditions

        [&&], [||], [!]
*/

console.log('--Logical Operator--');

// Logical AND [&&] -- returns true if both conditions are true
console.log(' AND [&&]: ', true && true);

// Logical OR [||] -- returns true if at least one of the conditions is true
console.log(' OR [||]: ', true || false);

// Logical NOT [!] -- reverses the boolean value
console.log(' NOT [!]: ', !false);


/*
    Unary Operator
        (++), (--)
*/
console.log('--Unary Operator--');

let a = 10;

a++; //a + 1 --> 10 + 1 --> 11
console.log(a)//11

a--; // a - 1 --> 11 - 1 --> 10
console.log(a)//10


/*
    Terary Operator
        -- takes 3 operands and returns a value based on a condition

        Syntax:
            condition ? expressionIfTrue : expressionIfFalse;
*/
console.log('--Ternary Operator--');

let age = 20;

let message =
    ( age >= 20) ? 'You are of legal age.' : 'You are still a minor';

console.log(message);


/*
    TypeOf Operator
        -- returns the data type of an operand as a string
*/
console.log('--TypeOf Operator--');

console.log(typeof(message));
console.log(typeof(age));
