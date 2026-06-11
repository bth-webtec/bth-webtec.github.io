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

dbw.assert(lab.sumLoop, [12], 66, 1)
dbw.assert(lab.sumLoop, [42], 861)

dbw.assert(lab.sumLoop2, [3, 10], 42, 1)
dbw.assert(lab.sumLoop2, [67, 104], 3145)

dbw.assert(lab.incIteration, [10, 2, 20], 50, 1)
dbw.assert(lab.incIteration, [126, 42, 5], 336)

dbw.assert(lab.decIteration, [10, 2, 20], -30, 1)
dbw.assert(lab.decIteration, [888, 42, 5], 678)

dbw.assert(lab.oddString, [10, 20], "11, 13, 15, 17, 19", 3)
dbw.assert(lab.oddString, [43, 53], "43, 45, 47, 49, 51, 53")

dbw.assert(lab.incWhile, [42, 5, 60], 4, 3)
dbw.assert(lab.incWhile, [40, 5, 100], 12)

dbw.assert(lab.decWhile, [100, 4, 67], 9, 3)
dbw.assert(lab.decWhile, [65, 5, -20], 17)

dbw.assert(lab.reverseString, ["dbwebb"], "bbewbd", 3)
dbw.assert(lab.reverseString, ["42 is life!"], "!efil si 24")

dbw.assert(lab.fibonacci, [10], "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", 5)
dbw.assert(lab.fibonacci, [13], "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144")

process.exit(dbw.done())
