/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26,27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'cleaner',
};
let { mike, jill, alicia } = jobs;
console.log(jobs);

// Destructuring subsets
let languages = ['english', 'french', 'italian', 'japanese', 'german'];
let [johnNative,johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstlanguage: 'greek',
    secondlanguage: 'german',
    thirdlanguage: 'suahili',
    fourthlanguage: 'italian'
};

let { firstlanguage, thirdlanguage } = languages2;
console.log(firstlanguage, thirdlanguage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [ favorite, secondFavorite, ...others ] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'sweets',
    andreas: 'meat',
};

let { brian, ...rest } = favoriteFoods;
console.log(brian);
console.log(rest);