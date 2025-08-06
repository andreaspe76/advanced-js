/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => a + b;
// let sum2 = addTwoNumbers(3, 5);
// console.log(sum2);

// Implicit Returns
const saySomething = msg => console.log(msg);
saySomething('Hello, there!');

const sayHello = () => console.log('Hello, there!');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiple line string!
    </p>`
)
console.log(returnMultipleLines());