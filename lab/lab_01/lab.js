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

dbw.assert(lab.hello, [], "Hello world")

dbw.assert(lab.magicNumber, [], 42)

dbw.assert(lab.stringNumber, [42], "42")

dbw.assert(lab.stringLength, ["Hello world"], 11)
dbw.assert(lab.stringLength, ["cactus"], 6)

dbw.assert(lab.product, [7, 6], 42)

dbw.assert(lab.sumValues, [42.2, 34.5], 76.7)

dbw.assert(lab.sumFloatRoundedLower, [42.2345, 34.55452], 76)

dbw.assert(lab.sumFloatRoundedHigher, [245.567, 124.6543], 371)

dbw.assert(lab.diffFloatRoundedActual, [76.887585, 42.543265], 34.34)

dbw.assert(lab.roundPI, [], 3.1416)

dbw.assert(lab.concatinateString, ["Hello", "everyone"], "Hello everyone")

dbw.assert(lab.charAtPosition, ["JavaScript"], "S", 2)
dbw.assert(lab.charAtPosition, ["programmering"], "r")

dbw.assert(lab.upper, ["programming"], "PROGRAMMING", 2)
dbw.assert(lab.upper, ["webtec"], "WEBTEC")

dbw.assert(lab.upperFirst, ["programming"], "Programming", 2)
dbw.assert(lab.upperFirst, ["javaScript"], "JavaScript")

dbw.assert(lab.substring, ["Polarbear"], "ear", 2)

dbw.assert(lab.wordIncludes, ["Polarbear"], true, 2)
dbw.assert(lab.wordIncludes, ["Lemon"], false)

process.exit(dbw.done())
