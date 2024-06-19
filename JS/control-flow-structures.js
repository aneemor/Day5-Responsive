// Control Flow Structures

/*
    Conditional Statements
        -- allows you to execute different blocks of code on a condition/boolean 
*/

// if...else statement
let age = 20;

if(age >= 21) {
    console.log("You're eligible to vote!");
}   else {
    console.log("You're not eligible to vote!");
}

// nested if...else statement
let temperature = 50;

if (temperature < 0) {
    console.log("I'm probably frozen.");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is a cold day.");
} else if (temperature >= 20 && temperature < 40) {
    console.log("It is a warm day");
} else if (temperature >= 40 && temperature < 60) {
    console.log("It is a hot day.");
} else {
    console.log("I'm melting");
}

// switch...case statement
let day = 'Monday';

switch(day) {
    case 'Monday':
        console.log('Irish eats an apple.');
        break;
    
    case 'Tuesday':
        console.log('Irish eats an orange.');
        break;

    case 'Wednesday':
        console.log('Irish eats an banana.');
        break;
        
    case 'Thursday':
        console.log('Irish eats an pear.');
        break;
    
    case 'Friday':
        console.log('Irish eats an watermelon.');
        break;
        
    case 'Saturday':
        console.log('Irish eats an pineapple.');
        break;

    case 'Sunday':
        console.log('Irish eats an grapes.');
        break;
    default:
        console.log('Invalid day!');

}

/*
    Loops
        -- used to repeatedly execute a block of code until a specific condition is met.
*/

/*
    FOR loop

    Syntax:
        for (initialization ; condition ; arithmetic expression) {
            // code block
        }
*/

for (let i = 1; i <= 5; i++) {
    console.log('For loop count: ', i);
}

// i = 1 --> 1 <= 5 ? True --> Print: For loop count: 1 --> i+1 --> i = 2
// i = 2 --> 2 <= 5 ? true --> Print For loop count: 2 --> 2+1 --> i = 3
// ....
// i=6 --> 6 <= 5 ? False --> stop loop.

/*
    WHILE Loop

    Syntax:
        while (condition) {
            // code block
        }
*/

let count = 1;

while(count <= 5) {
    console.log('While loop count: ', count);
    count++;
}

/*
    DO.. WHILE Loop

    Syntax:
        do {
            //code block
        } while (condition)
*/

let num = 1;

do {
    console.log('Do..while loop count: ', num);
    num++
} while (num <= 5)