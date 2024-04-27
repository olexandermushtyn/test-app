/**
 * Generates a sequence of numbers from 1 to the specified length.
 *
 * @param {number} length - The length of the sequence.
 * @returns {number[]} - An array containing the generated sequence.
 */
function generateSequence(length) {
  return Array.from({ length }, (_, i) => i + 1)
}

module.exports = generateSequence
