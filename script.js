'use strict';
/**
 * Returns a flatten array
 * @param {array} arrayObject - array(s) to be flatten
 * @returns a flatten array
 */
function flatArray(arrayObject)
{
  return arrayObject.flat(Infinity);
}

const nestedArray = [1, 9, 7, [1, 5, [10, 7]]];
console.log(flatArray(nestedArray));

/**
 * Returns the largest Number in an array 
 * @param {array} arrayObject - array(s) to be iterated
 * @returns the largest Number in an array
 */
function maxInArray(arrayObject)
{
  let maxValue = 0;
  for (const x of flatArray(arrayObject))
  {
    x > maxValue ? maxValue = x : maxValue;
  }
  return maxValue;
}
console.log(maxInArray(nestedArray));

/**
 * Remove duplicates from an Array
 * @param {array} arrayObject - array(s) to be iterated
 * @returns an array without duplicates
 */
function cleanArray(arrayObject)
{
  return [...new Set(flatArray(arrayObject))];
}
console.log(cleanArray(nestedArray));

/**
 * I used Short Circuiting but it can be achieved with an if statement
 * Print numbers 1 to N, replacing multiples of 3 with “Fizz,” multiples of 5 with “Buzz,” and multiples of both with “FizzBuzz.”
 * @param {number} number to be checked
 */
function FizzBuzz(number)
{
  console.log(number % 15 == 0 && "FizzBuzz" || number % 5 == 0 && "Buzz" || number % 3 == 0 && "Fizz" || number);
}
for (let i=1; i < 16; i++) FizzBuzz(i)

/**
 * Returns the factorial of a number using recursion.
 * @param {number} n - the number to calculate the factorial for.
 * @returns the factorial of a number
 */
function factorial(n)
{
  if (n == 1) return 1
  return factorial(n - 1) * n;
}
console.log(factorial(7));








