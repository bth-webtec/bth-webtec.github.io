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

dbw.assert(lab.createArray, [], [1, 2, 3, 42, "hello"], 1)

dbw.assert(lab.arrayLength, [[1, 3, "penguin", "shark"]], 4, 1)
dbw.assert(lab.arrayLength, [[1, 3]], 2)

dbw.assert(lab.addToArray, [[47, 98, -13, 0, -412, 499], 42, "penguin"], [47, 98, -13, 0, -412, 499, 42, "penguin"], 1)

dbw.assert(lab.nthElement, [[1, 3, 6, 3], 3], 3, 1)
dbw.assert(lab.nthElement, [[1, 3, "penguin", "shark"], 2], "penguin")

dbw.assert(lab.sliceArray, [[1, 3, "penguin", "shark"]], [1, 3, "penguin", "shark", 3, "penguin"], 2)
dbw.assert(lab.sliceArray, [[1, 32, 2, 42, 56, 777]], [1, 32, 2, 42, 56, 777, 32, 2])

dbw.assert(lab.spliceArray, [["cow", "hen", "chicken", "cat", "pig"]], ["cat", "pig", "cow", "hen", "chicken"], 2)
dbw.assert(lab.spliceArray, [[10, 9, 8, 7, 6]], [7, 6, 10, 9, 8])

dbw.assert(lab.largest, [[1, 3, 10, 42, 23, 33]], 42, 2)
dbw.assert(lab.largest, [[-2, -44, -31, -12]], -2)

dbw.assert(lab.average, [[2, 4, 6, 8, 10]], 6, 2)
dbw.assert(lab.average, [[-2, -44, -31, -12]], -22.25)

dbw.assert(lab.mergeArrays, [[10, 20, 30, 40], [50, 60, 70]], [10, 20, 30, 40, 50, 60, 70], 2)

dbw.assert(lab.removeDuplicates, [[2, "2", 42, "lipstick", 2, "pencil", "pencil"]], [2, "2", 42, "lipstick", "pencil"], 2)

dbw.assert(lab.firstLast, [['melon', 'banana', 'apple', 'orange', 'lemon']], "melon-lemon", 2)

dbw.assert(lab.findindex, [['melon', 'banana', 'apple', 'orange', 'lemon'], 'apple'], 2, 3)
dbw.assert(lab.findindex, [['melon', 'banana', 'apple', 'orange', 'lemon'], 'cactus'], -1)

process.exit(dbw.done())
