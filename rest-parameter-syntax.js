/**
 * To run this file in Gitpod, use the
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);

console.log('Sum1:', sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);

console.log('Sum2:', sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);

console.log('Sum3:', sum3);

//Example
/**
 * You will assign an array to a variable which will contain a copy of the array mixedLetters and 6 other letters.
*You will create an arrow function which should take two parameters. This function should combine all the argument passed in into a single array and sort them and reverse them and then return this array
*You are free to choose an arrow function of your choice to do this.
*Within the function body, you are free to create the array any way you want, but try to look out for opportunities to use what you have been learning in the advanced JavaScript material.
*
*Create a variable named: moreMixedLetters using the keyword let
*Assign an array to the variable moreMixedLetters which should be a copy of the array mixedLetters and then the following values: 'h', 'k', 'g', 'j', 'i', 'l'  (note steps 1 and 2 should be done on a single line)
*log out moreMixedLetters
*Create a variable named: updateSortReverse using the keyword const
*Assign the variable updateSortReverse an arrow function 
*The arrow function should take two parameters one named: arr and another named: letters which should use the rest parameter syntax 
*This arrow function should combine all the argument passed in into a single array and sort them and reverse them and then return this array
*Create a variable named reverseSort using the keyword let
*Variable reverseSort should be assigned the return value from calling the updateSortReverse function passing in the moreMixedLetters array and the string values: 'n', 'm', 'o'
*log out the variable reverseSort to see its value
*log out the variable mixedLetters to see that it has not been changed if you have done everything correctly
 */

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log('Reverse:', reverseSort);
console.log('Mixed:', mixedLetters);