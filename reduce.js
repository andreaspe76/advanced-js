/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
/**
 * acc = accumulator,
 * curr = currentValue. 
 * accumulator represents the final value, 
 * that will be returned from the reduce() function
 */
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);

/**
 * Expanded version to understand how reduce() works.
 * The accumulator always starts from the first element of the array.
 * So in the example below from 0. So it does not add 0 to 0,
 * but starts with a value of 0 and adds the second element of the array which is 1.
 */
const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => {
    console.log(
        'Accumulator:', acc,
        'Current Values:', curr,
        'Total:', acc + curr
    );
    return acc + curr;
});
console.log(sum2);

/**
 * If we want to control the initial value of the accumulator (acc),
 * we need to explicitly specify it as the second argument to reduce.
 * This ensures that the first callback receives acc = initialValue and curr = first array element.
 * Without an initial value, reduce will use the first element of the array as the initial acc, 
 * and start iteration from the second element. 
 * So curr would actually start from the second item in that case.
 * See Line 52.
 */
const nums3 = [0, 1, 2, 3, 4];
let sum3 = nums3.reduce((acc, curr) => {
    console.log(
        'Accumulator:', acc,
        'Current Values:', curr,
        'Total:', acc + curr
    );
    return acc + curr;
}, 0);
console.log(sum3);

/**
 * Example 2, see Line 68.
 * acc now starts with a value of 10, and the sum of the array is 10,
 * so the final result is 10 + 10 = 20.
 */
const nums4 = [0, 1, 2, 3, 4];
let sum4 = nums4.reduce((acc, curr) => {
    console.log(
        'Accumulator:', acc,
        'Current Values:', curr,
        'Total:', acc + curr
    );
    return acc + curr;
}, 10);
console.log(sum4);


const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3
    }
];

// Totaling a specific object property
let TotalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(TotalExperience);


// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is what we want, thus the curly braces in the end (object).
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});

console.log(experienceByProfession);