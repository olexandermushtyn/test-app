/**
 * Generates two random IDs between 0 and the specified maximum value (exclusive).
 * The generated IDs will be different from each other.
 *
 * @param {number} max - The maximum value for the random IDs (exclusive).
 * @returns {number[]} An array containing two random IDs.
 */
function generateTwoRandomId(max) {
  const randomId1 = Math.floor(Math.random() * max)
  let randomId2 = Math.floor(Math.random() * max)
  while (randomId1 === randomId2) {
    randomId2 = Math.floor(Math.random() * max)
  }
  return [randomId1, randomId2]
}

module.exports = generateTwoRandomId
