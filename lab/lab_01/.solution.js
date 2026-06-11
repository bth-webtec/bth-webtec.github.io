/**
 * This file contains solutions to the lab, use it when you get stuck or when 
 * you want to compare your solution to with the teachers solution.
 * 
 * Execute the lab in the browser through lab.html and review the output in the 
 * console, or execute the lab through node using `node lab -s` in the terminal.
 */



/**
 * Returns the string "Hello world".
 *
 * @returns {string} A welcome message "Hello world".
 */
export function hello () {
  // TODO: Write your code here.
  return "Hello world"
}



/**
 * Returns the numeric value 42.
 *
 * @returns {number} The numeric value 42.
 */
export function magicNumber () {
  // TODO: Write your code here.
  return 42
}



/**
 * Returns the string representation of the incoming number.
 * Hint: toString()
 * 
 * @param {number} value - The number to cast to string.
 * @returns {string} The string representation.
 */
export function stringNumber (value) {
  // TODO: Write your code here.

  return value.toString()
}



/**
 * Returns the length of the incoming string.
 *
 * @param {string} word - The string to use.
 * @returns {number} The length of the string.
 */
export function stringLength (word) {
  // TODO: Write your code here.
  return word.length
}



/**
 * Returns the product of the incoming numbers.
 *
 * @param {number} value1 - The first number to use.
 * @param {number} value2 - The second number to use.
 * @returns {number} The product.
 */
export function product (value1, value2) {
  // TODO: Write your code here.
  return value1 * value2
}



/**
 * Returns the sum of two incoming numbers.
 *
 * @param {number} value1 - The first number to use.
 * @param {number} value2 - The second number to use.
 * @returns {number} The sum.
 */
export function sumValues (value1, value2) {
  // TODO: Write your code here.

  return value1 + value2
}



/**
 * Returns the sum of two incoming float values, rounded to the lower integer value.
 * Hint: Math.floor()
 * 
 * @param {number} value1 - The first number to use.
 * @param {number} value2 - The second number to use.
 * @returns {number} The sum of value1 and value2, rounded to lower integer value.
 */
export function sumFloatRoundedLower (value1, value2) {
  // TODO: Write your code here.

  return Math.floor(value1 + value2)
}



/**
 * Returns the sum of incoming two float values, rounded to the higher integer value.
 * Hint: Math.ceil()
 * 
 * @param {number} value1 - The first number to use.
 * @param {number} value2 - The second number to use.
 * @returns {number} The sum of value1 and value2, rounded to the higher integer value.
 */
export function sumFloatRoundedHigher (value1, value2) {
  // TODO: Write your code here.

  return Math.ceil(value1 + value2)
}



/**
 * Returns the difference between two incoming float values, rounded to two decimals.
 * Hint: To round a value to four decimals you can use: Math.round(value*10000)/10000
 * 
 * @param {number} value1 - The first number to use.
 * @param {number} value2 - The second number to use.
 * @returns {number} The difference between value1 and value2, rounded to two decimals.
 */
export function diffFloatRoundedActual (value1, value2) {   
  // TODO: Write your code here.

  let difference =  value1 - value2

  return Math.round(difference*100)/100
}



/**
 * Returns the value of PI, rounded to four decimals.
 * Hint: Math.PI
 *
 * @returns {number} The value of PI, rounded to four decimals.
 */
export function roundPI () {    
  // TODO: Write your code here.

  return Math.round(Math.PI*10000)/10000
}



/**
 * Returns a concatinated string of the incoming string, with a space between the words.
 *
 * @param {string} word1 - The first string to use.
 * @param {string} word2 - The second number to use.
 * @returns {string} The concatinated string.
 */
export function concatinateString (word1, word2) {    
  // TODO: Write your code here.

  return word1 + " " + word2
}



/**
 * Returns the character at index 4 of the incoming string.
 * Hint: charAt()
 * 
 * @param {string} word - The string to use.
 * @returns {string} The character at index 4 in the incoming string.
 */
export function charAtPosition (word) {    
  // TODO: Write your code here.

  return word.charAt(4)
}



/**
 * Returns the incoming string in uppercase.
 * Hint: toUpperCase()
 * 
 * @param {string} word - The string to use.
 * @returns {string} The string in uppercase.
 */
export function upper (word) {    
  // TODO: Write your code here.

  return word.toUpperCase()
}



/**
 * Returns the incoming string with the first character in uppercase.
 * Hint: slice()
 * 
 * @param {string} word - The string to use.
 * @returns {string} A string with the first character in uppercase.
 */
export function upperFirst (word) {    
  // TODO: Write your code here.

  return word.charAt(0).toUpperCase() + word.slice(1)
}



/**
 * Returns the last three characters in the incoming string.
 * Hint: substring()
 *
 * @param {string} word - The string to use.
 * @returns {string} The last three characters.
 */
export function substring (word) {
  // TODO: Write your code here.

  return word.substring(word.length-3)
}



/**
 * Returns a boolean weither the incoming string includes the letter "a".
 * Hint: includes()
 *
 * @param {string} word - The string to use.
 * @returns {boolean} If the incoming string includes the letter "a", return true, eler false.
 */
export function wordIncludes (word) {
  // TODO: Write your code here.

  return word.includes("a")
}
