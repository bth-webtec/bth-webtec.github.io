/**
 * This file contains the assertions for testing each function in the lab.
 *
 * Execute the labs like this.
 *   node lab
 *
 * Execute the labs from the solutionsfile like this.
 *   node lab -s
 */
import { dbw } from './.dbw.js'
import * as laba from './answer.js'
import * as labs from './.solution.js'

const lab = process.argv[2] === '-s' ? labs : laba

dbw.assert(lab.isLarger, [41], false, 1)
dbw.assert(lab.isLarger, [100], true)

dbw.assert(lab.isPositiveNegative, [5], "Positive", 1)
dbw.assert(lab.isPositiveNegative, [-42], "Negative")
dbw.assert(lab.isPositiveNegative, [0], "Neither")

dbw.assert(lab.isOddEven, [3], "Odd", 1)
dbw.assert(lab.isOddEven, [42], "Even")

dbw.assert(lab.blackJack, [2, 3, 5], "Draw", 1)
dbw.assert(lab.blackJack, [10, 5, 7], "Busted")
dbw.assert(lab.blackJack, [10, 3, 8], "Black Jack")

dbw.assert(lab.gradeChecker, [94], "A", 2)
dbw.assert(lab.gradeChecker, [89], "B")
dbw.assert(lab.gradeChecker, [72], "C")
dbw.assert(lab.gradeChecker, [45], "F")

dbw.assert(lab.temperature, [5], "Cold", 2)
dbw.assert(lab.temperature, [14], "Warm")
dbw.assert(lab.temperature, [42], "Hot")

dbw.assert(lab.trafficlight, ["Red"], "Stop", 2)
dbw.assert(lab.trafficlight, ["YELLOW"], "Wait")
dbw.assert(lab.trafficlight, ["green"], "Go")
dbw.assert(lab.trafficlight, ["blue"], "Invalid color")

dbw.assert(lab.intRepresentation, [42, "42"], true, 2)
dbw.assert(lab.intRepresentation, [125, "125pieces of cake"], true)
dbw.assert(lab.intRepresentation, [42, "This contains 4 parts"], false)

dbw.assert(lab.fizzBuzz, [36], "Fizz", 3)
dbw.assert(lab.fizzBuzz, [35], "Buzz")
dbw.assert(lab.fizzBuzz, [90], "FizzBuzz")
dbw.assert(lab.fizzBuzz, [82], 82)

dbw.assert(lab.trafficlightSwitch, ["Red"], "Stop", 3)
dbw.assert(lab.trafficlightSwitch, ["YELLOW"], "Wait")
dbw.assert(lab.trafficlightSwitch, ["green"], "Go")
dbw.assert(lab.trafficlightSwitch, ["blue"], "Invalid color")

dbw.assert(lab.calculator, [37, 5, "+"], 42, 3)
dbw.assert(lab.calculator, [45, 7, "-"], 38)
dbw.assert(lab.calculator, [43, 123, "*"], 5289)
dbw.assert(lab.calculator, [10, 5, "/"], 2)
dbw.assert(lab.calculator, [67, 4, "%"], 3)
dbw.assert(lab.calculator, [10, 5, "/", true], 0.5)

process.exit(dbw.done())
