/**
 * This file contains solutions to the lab, use it when you get stuck or when 
 * you want to compare your solution to with the teachers solution.
 * 
 * Execute the lab in the browser through lab.html and review the output in the 
 * console, or execute the lab through node using `node lab -s` in the terminal.
 */



/**
 * Returns the sum of all numbers from 0 to stop.
 *
 * @param {number} stop The value to use as end.
 * @returns {number} The resulting sum.
 */
export function sumLoop (stop) {
  // TODO: Write your code here.
  let sum = 0

  for (let i = 0; i < stop; i++) {
    sum += i
  }

  return sum
}



/**
 * Returns the sum of all numbers from start to stop.
 *
 * @param {number} start The value to use as start.
 * @param {number} stop The value to use as end.
 * @returns {number} The resulting sum.
 */
export function sumLoop2 (start, stop) {
  // TODO: Write your code here.
  let sum = 0

  for (let i = start; i < stop; i++) {
    sum += i
  }

  return sum
}



/**
 * Increment the variable "start" with "increment", "iter" times. Return the result.
 *
 * @param {number} start The value to use as start.
 * @param {number} increment The value used to increment start.
 * @param {number} iter The number of iterations.
 * @returns {number} The resulting sum.
 */
export function incIteration (start, increment, iter) {
  // TODO: Write your code here.
  for (let i = 0; i < iter; i++) {
    start += increment
  }
  return start
}



/**
 * Decrement the variable "start" with "decrement", "iter" times. Return the result.
 *
 * @param {number} start The value to use as start.
 * @param {number} decrement The value used to decrement start.
 * @param {number} iter The number of iterations.
 * @returns {number} The resulting sum.
 */
export function decIteration (start, decrement, iter) {
  // TODO: Write your code here.

  for (let i = 0; i < iter; i++) {
    start -= decrement
  }
  return start
}



/**
 * Use a for-loop to add all the odd values in the range (including) "start" to "stop" to a comma separated string.
 * The resulting string should not have a comma or space at the end.
 * Return the result.
 *
 * @param {number} start The value to use as start.
 * @param {number} stop The value to use as end.
 * @returns {string} The resulting string.
 */
export function oddString (start, stop) {
  // TODO: Write your code here.
  let res = ""

  for (let i = start; i <= stop; i++) {
    if (i % 2 !== 0) {
      res += `${i}, `
    }
  }

  return res.slice(0, -2)
}



/**
 * Use a while-loop to increment "start" with "increment" until it has reached or passed "stop".
 * Return the amount of steps needed.
 *
 * @param {number} start The value to use as start.
 * @param {number} increment The value used to increment start.
 * @param {number} stop The value to use as end.
 * @returns {number} The amount of steps needed.
 */
export function incWhile (start, increment, stop) {
  // TODO: Write your code here.
  let steps = 0

  while (start < stop) {
    start += increment
    steps++
  }

  return steps
}



/**
 * Use a while-loop to decrement "start" with "decrement". It should stop when "start" has reached or passed "stop".
 * Return the amount of steps needed.
 *
 * @param {number} start The value to use as start.
 * @param {number} decrement The value used to decrement start.
 * @param {number} stop The value to use as end.
 * @returns {number} The amount of steps needed.
 */
export function decWhile (start, decrement, stop) {
  // TODO: Write your code here.
  let steps = 0

  while (start > stop) {
    start -= decrement
    steps++
  }

  return steps
}



/**
 * Use a while-loop to reverse a string.
 * Return the reversed string.
 *
 * @param {string} word The word to be reversed.
 * @returns {string} The reversed string.
 */
export function reverseString (word) {
  // TODO: Write your code here.
  let reversed = ""
  let i = word.length - 1
  while (i >= 0) {
    reversed += word[i]
    i--
  }
  return reversed
}


/**
 * Use a while-loop to create a comma separated string with the first n numbers in the Fibonacci sequence.
 * Hint: https://en.wikipedia.org/wiki/Fibonacci_sequence
 * 
 * Return the resulting string without trailing space or comma.
 *
 * @param {number} n The number of values in the Fibonacci sequence to be calculated.
 * @returns {string} The resulting string.
 */
export function fibonacci (n) {
  // TODO: Write your code here.
  let result = ""
  let a = 0
  let b = 1
  let count = 0

  while (count < n) {
    result += `${a}, `
    let next = a + b
    
    a = b
    b = next
    count++
  }

  return result.slice(0, -2)
}