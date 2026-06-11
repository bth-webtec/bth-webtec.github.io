/**
 * This file contains solutions to the lab, use it when you get stuck or when 
 * you want to compare your solution to with the teachers solution.
 * 
 * Execute the lab in the browser through lab.html and review the output in the 
 * console, or execute the lab through node using `node lab -s` in the terminal.
 */



/**
 * Returns a boolean weither the incoming value is larger than 42.
 *
 * @param {number} value The value to use.
 * @returns {boolean} true the incoming value is larger than 42, else false.
 */
export function isLarger (value) {
  // TODO: Write your code here.
  let result = false

  if (value > 42) {
    result = true
  }

  return result
}



/**
 * Returns "Positive" if the incoming value is positive, "Negative" if it is negative and "Neither" if it is zero.
 *
 * @param {number} value The value to use.
 * @returns {string} The answering string.
 */
export function isPositiveNegative (value) {
  // TODO: Write your code here.
  let result = "Neither"

  if (value > 0) {
    result = "Positive"
  } else if (value < 0) {
    result = "Negative"
  }

  return result
}



/**
 * Returns "Odd" if the incoming value is odd and "Even" if it is even.
 *
 * @param {number} value The value to use.
 * @returns {string} The answering string.
 */
export function isOddEven (value) {
  // TODO: Write your code here.
  let result = "Odd"

  if (value % 2 === 0) {
    result = "Even"
  }

  return result
}



/**
 * Returns "Black Jack" if the total sum is 21. If the sum is larger, return "Busted" and if it is lower, return "Draw".
 *
 * @param {number} value1 The first value to use.
 * @param {number} value2 The second value to use.
 * @param {number} value3 The third value to use.
 * @returns {string} The answering string.
 */
export function blackJack (value1, value2, value3) {
  // TODO: Write your code here.
  let total = value1 + value2 + value3
  let result = "Black Jack"

  if (total > 21) {
    result = "Busted"
  } else if (total < 21) {
    result = "Draw"
  }

  return result
}



/**
 * Returns the specific grade for a test score.
 * Score equal or higher than 90: A
 * Score equal or higher than 80: B
 * Score equal or higher than 70: C
 * Score lower than 70: F
 *
 * @param {number} score The score to use.
 * @returns {string} The answering grade.
 */
export function gradeChecker (score) {
  // TODO: Write your code here.
  let grade = "F"

  if (score >= 90) {
    grade = "A"
  } else if (score >= 80) {
    grade = "B"
  } else if (score >= 70) {
    grade = "C"
  } 

  return grade
}



/**
 * Returns a string based on the incoming temperature.
 * Temperature below 10: "Cold"
 * Temperature between or equal to 10 and 25: "Warm"
 * Temperature above 25: "Hot"
 *
 * @param {number} temp The temperature to use.
 * @returns {string} The answering string.
 */
export function temperature (temp) {
  // TODO: Write your code here.
  let result = "Hot"

  if (temp < 10) {
    result = "Cold"
  } else if (temp >= 10 && temp <= 25) {
    result = "Warm"
  }

  return result
}



/**
 * Returns the action based on the incoming traffic light color.
 * If the color is "Red", return "Stop"
 * If the color is "Yellow", return "Wait"
 * If the color is "Green", return "Go"
 * Otherwise return "Invalid color"
 * 
 * The check should not be case-sensitive.
 *
 * @param {number} color The color to use.
 * @returns {string} The answering string.
 */
export function trafficlight (color) {
  // TODO: Write your code here.
  let result = "Invalid color"
  color = color.toLowerCase()

  if (color === "red") {
    result = "Stop"
  } else if (color === "yellow") {
    result = "Wait"
  } else if (color === "green") {
    result = "Go"
  }

  return result
}



/**
 * Returns a boolean weither the incoming number is equal to the integer representation of the incoming string.
 *
 * @param {number} value The number to use.
 * @param {string} text The string to use.
 * @returns {boolean} The answering boolean.
 */
export function intRepresentation (value, text) {
  // TODO: Write your code here.
  let secondValue = parseInt(text)

  return value === secondValue
}



/**
 * Returns "Fizz", "Buzz", "FizzBuzz" or the passed value.
 * This is a code exercise called "FizzBuzz".
 * If the incoming number is divisible by 3, return "Fizz". 
 * If the incoming number is divisible by 5, return "Buzz". 
 * If the incoming number is divisible by 3 and 5, return "FizzBuzz".
 * Otherwise you return the actual number. 
 *
 * Read more: https://en.wikipedia.org/wiki/Fizz_buzz
 * 
 * @param {number} value The value to use.
 * @returns {string|number} The answering result.
 */
export function fizzBuzz (value) {
  // TODO: Write your code here.
  let result = null

  if (value % 15 === 0) {
    result = "FizzBuzz"
  } else if (value % 3 === 0) {
    result = "Fizz"
  } else if (value % 5 === 0) {
    result = "Buzz"
  } else {
    result = value
  }

  return result
}



/**
 * Returns the action based on the incoming traffic light color, using the switch statement.
 * If the color is "Red", return "Stop"
 * If the color is "Yellow", return "Wait"
 * If the color is "Green", return "Go"
 * Otherwise return "Invalid color"
 * 
 * The check should not be case-sensitive.
 *
 * @param {number} color The color to use.
 * @returns {string} The answering string.
 */
export function trafficlightSwitch (color) {
  // TODO: Write your code here.
  let result = null
  color = color.toLowerCase()

  switch(color) {
  case "red":
    result = "Stop"
    break
  case "yellow":
    result = "Wait"
    break
  case "green":
    result = "Go"
    break
  default:
    result = "Invalid color"
    break
  }
  return result
}



/**
 * Returns the result from a calculation on the incoming values, using the switch statement.
 * Default 
 *
 * @param {number} value1 The first value to use.
 * @param {number} value2 The second value to use.
 * @param {string} op The operator to use (+, -, *, /, %).
 * @param {boolean} reverse Boolean if values should be reversed so value2 is the first value to use.
 * @returns {number} The result.
 */
export function calculator (value1, value2, op, reverse=false) {
  // TODO: Write your code here.
  let result = -1
  let val1 = value1
  let val2 = value2

  if (reverse) {
    val1 = value2
    val2 = value1
  }

  switch(op) {
  case "+":
    result = val1 + val2
    break
  case "-":
    result = val1 - val2
    break
  case "*":
    result = val1 * val2
    break
  case "/":
    result = val1 / val2
    break
  case "%":
    result = val1 % val2
    break
  }
  return result
}