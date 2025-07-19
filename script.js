'use strict';
/**
 * Returns a flattened array
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
  // Traditional way
  // let maxValue = 0;
  // for (const x of flatArray(arrayObject))
  // {
  //   x > maxValue ? maxValue = x : maxValue;
  // }
  // return maxValue;

  return flatArray(arrayObject).reduce((temp, value) => temp > value ? temp : value, 0);
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

/**
 * Returns a reversed string
 * @param {string} word to be reversed
 * @returns a reversed string
 */
function reverseString(word)
{
  let toReturn ="";
  for (let i= word.length -1; i >= 0; i--) toReturn += word[i];
  return toReturn;
}
console.log(reverseString("Massimiliano"));

/**
 * Returns a string with the first capital letter and the remaining ones in lower case
 * @param {string} name to be fixed
 * @returns a string with the first capital letter and the remaining ones in lower case
 */
function fixCapitalization(name)
{
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(fixCapitalization("massImIliaNo"));

/**
 * Returns all names with the first capital letter and the rest in lower cases
 * @param {string} name(s) to be capitalized
 * @returns all names with the first capital letter and the rest in lower cases
 */
function capitalizeName(name)
{
  const capitalizedName = [];
  for (const n of name.toLowerCase().split(" "))
  {
    capitalizedName.push(n.replace(n[0], n[0].toUpperCase()));
    //capitalizedName.push(n[0].toUpperCase() + n.slice(1)); // alternatively
  }
  return capitalizedName.join(" ");
}
console.log(capitalizeName("jessica ann smITh"));
console.log(capitalizeName("massimo crisafulli"));

/**
 * @param {string/number} number to be masked
 * @returns a string with the last 4 digits visible and the rest masked by the "*"
 */
function maskNumber(number)
{
  const stringNumber = number + ""; // convert to string
  const slicedNumber = stringNumber.slice(-4); // take the last 4 digits
  return slicedNumber.padStart(stringNumber.length, "*"); // mask all the remaing characters
}
console.log(maskNumber(5633423453));
console.log(maskNumber("554435798689"));

/**
 * Verify if a word or phrase reads the same backwards and forwards
 * @param {string} word to be checked
 * @returns true or false if the word is palindrome
 */
function isPalindrome(word)
{
  return word === reverseString(word);
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("level"));

/**
 * Check if two strings are anagrams
 * @param {string} word1 to check
 * @param {string} word2 to check
 * @returns true or false whether two words contain the exact same letters in any order
 */
function checkAnagrams(word1, word2)
{
  if (word1.length != word2.length) return false;
  if (word1 === word2) return true;
  for (let i=0; i < word1.length; i++)
  {
    if (!word2.includes(word1[i])) return false;
  }
  return true
}
console.log(checkAnagrams("listen", "silent"));

/** @returns a random die (1 to 6) */
const randomDice = () => Math.trunc(Math.random() * 6) + 1;
/** Create and fill an array of length 100 with random dice numbers */
const oneHundredDices = Array.from({length: 100}, randomDice);
console.log(oneHundredDices);

/**
 * @param {Number} min - start generating from
 * @param {Number} max - end generating to
 * @returns a random integer number between min and max
 */
const randomInt = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(randomInt(10, 20));





