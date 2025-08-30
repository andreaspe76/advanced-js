/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];

// let John = ages[0];
// let Persephone = ages[1];
// let Darth_Vader = ages[2];

let [John, Persephone, Darth_Vader] = ages;

console.log(John, Persephone, Darth_Vader);

// Destructuring objects
let jobs = {
    Mike: "designer",
    Jill: "developer",
    Aaron: "manager",
};

let { Mike, Jill, Aaron } = jobs;

console.log(Mike, Jill, Aaron);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

// Example
/**
 * Declare a variable named: makeList using the keyword const
* The variable makeList should be assigned an arrow function
* The arrow function should take two parameters named: arr, student
* The arrow function should use a return statement
* The function should return an array of the subjects for the student whose name is passed into the function when called.
* Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
* log out the values  first, second, and rest to view their values
 */

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 80, art: 95 },
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 93, maths: 77, art: 95 },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 87, art: 95 },
    }
];

const makeList = (arr, student) => {
    return arr.find(s => s.name === student).subjects;
};

let [first, second, ...rest] = makeList(students, 'John');

console.log(first);
console.log(second);
console.log(rest);
