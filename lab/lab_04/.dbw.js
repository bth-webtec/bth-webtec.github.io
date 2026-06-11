/**
 * This module contains the tools to assert and collect statistics when running
 * the lab and present output from each assertion and output for the summary.
 */



/**
 * Class to hold statistics summary for each method.
 */
class Statistic {
  constructor(points) {
    this.runCount = 0
    this.passed = 0
    this.failed = 0
    this.points = points
  }

  run(success) {
    this.runCount++
    if (success) {
      this.passed++
    } else {
      this.failed++
    }
  }
}

export class dbw {
  /**
   * Color output
   */
  static RESET = "\x1b[0m";
  static GREEN = "\x1b[32m";
  static RED = "\x1b[31m";
  static YELLOW = "\x1b[33m";

  /**
   * Define the levels to PASS, PASS W HONOUR, PASS TOTAL.
   */
  static PASS = 15
  static PASS_W_HONOUR = 19
  static PASS_TOTAL = 21

  /**
   * Dictionary to hold statistics of each method call.
   */
  static stats = new Map()

  /**
     * Return a string with motivational feedback.
     * @returns {string} A string with a message.
     */
  static feedback(points) {
    let msg = "Great, you are on fire and progress is made. 😋"
    if (points === 0) {
      msg = "Try to earn 1 point to get started... 😏"
    } else if (points === 1) {
      msg = "Nice work, lets go, do another! 😉"
    } else if (points === this.PASS - 3) {
      msg = "Just three more to PASS. Lets go. 😅"
    } else if (points === this.PASS - 2) {
      msg = "Just two more to PASS. Lets go. 😅"
    } else if (points === this.PASS - 1) {
      msg = "Just one more to PASS. Lets go. 😅"
    } else if (points === this.PASS) {
      msg = "Excellent, you have PASSED. One more? 😁"
    } else if (points === this.PASS_W_HONOUR - 2) {
      msg = "Two more to PASS WITH HONOUR! Lets go. 😅"
    } else if (points === this.PASS_W_HONOUR - 1) {
      msg = "One more to PASS WITH HONOUR! Lets go. 😅"
    } else if (points === this.PASS_W_HONOUR) {
      msg = "That is the way, you PASSED WITH HONOUR! 😍"
    } else if (points === this.PASS_TOTAL) {
      msg = "What can I say. You impress me. 🙌"
    }

    return msg
  }

  /**
    * Execute the testcase and assert that it was corrent or not and return a
    * status string the can be written out.
    * @param {Function} func - The function to test.
    * @param {Object} expected - The expected result from the function call.
    * @param {Object} args - The arguments to send to the function.
    * @param {number} point - The number of points that this functions is worth in total.
    * @returns {string} A string representation of the test case success or failure.
    */
  static assert(func, args, expected, points = 1) {
    let result
    try {
      result = func(...args)
    } catch (error) {
      console.error(error)
    }

    const success = JSON.stringify(result) === JSON.stringify(expected)

    const methodName = func.name
    if (!this.stats.has(methodName)) {
      this.stats.set(methodName, new Statistic(points))
    }
    this.stats.get(methodName).run(success)

    const successStr = success ? "✅" : "❌"
    const pointsEarned = this.stats.get(methodName).points
    const argsStr = this.argsAsString(args)
    const expectedStr = JSON.stringify(expected)
    const resultStr = JSON.stringify(result)

    console.log(`${successStr} ${pointsEarned}p. ${methodName}(${argsStr}), expected: ${expectedStr}, actual: ${resultStr}`)
  }

  /**
    * Format a value to its string representation.
    * @param {Object} args - A value to parse and format as a string.
    * @returns {string} A string representation of the value.
    */
  static argsAsString(args) {
    return args
      .map(arg =>
        Array.isArray(arg)
          ? `[${arg}]`
          : typeof arg === "string"
            ? `"${arg}"`
            : arg
      )
      .join(", ")
  }

  /**
    * Print out the results when the execution is done.
    * @returns {string} A string representation of the results.
    */
  static done() {
    let passed = 0
    let failed = 0
    let total = 0
    let result = 0
    const pointArray = Array(this.PASS_TOTAL).fill(false)

    let step = 0
    for (const stat of this.stats.values()) {
      passed += stat.passed
      failed += stat.failed
      total += stat.passed + stat.failed
      result += stat.failed > 0 ? 0 : stat.points

      for (let i = 0; i < stat.points; i++) {
        pointArray[step++] = stat.failed === 0
      }
    }

    const pointStr = pointArray
      .map((pass, idx) => {
        if (pass) return this.GREEN + " ⦿ " + this.RESET
        if (idx + 1 === this.PASS) return " 😁 "
        if (idx + 1 === this.PASS_W_HONOUR) return " 😍 "
        if (idx + 1 === this.PASS_TOTAL) return " 🙌 "
        return this.RED + " ⦾ " + this.RESET
      })
      .join("")

    const summary = `
--------------------------------------------------------------------
| Points: ${result}/${this.PASS_TOTAL} (PASS:${this.PASS} HONOUR:${this.PASS_W_HONOUR}) Tests: ${total} (✅ ${passed} ❌ ${failed})
| ${pointStr}
| ${this.feedback(result)}
--------------------------------------------------------------------
`

    console.log(summary)
    return result
  }
}
