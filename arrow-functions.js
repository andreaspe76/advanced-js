/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTowNumbers2 = (a, b) => {
    // Code Block
    return a + b;
}

let sum2 = addTowNumbers2(3, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTowNumbers3 = (a, b) => a + b;

let sum3 = addTowNumbers3(3, 5);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message); // For functions with one parameter, () not required
saySomething('Hello world!');

const sayHello = () => console.log('Hello!'); // In functions with no parameters, () required for JS to undertsand we declare a function
sayHello();

// Returning Multiple Lines
// If we need to return multiple lines of code, () after => are required. Note also ``
const returnMultipleLines = () => (
    `<p>
     This is a multiline string    
    </p>`
)

console.log(returnMultipleLines());

// Example
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for (let item of arr) {
        if(subject in item.results) {
            allPoints += item.results[subject];
            sum += 1;
        }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);

