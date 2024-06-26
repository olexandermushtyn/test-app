const findMissingNumbersInSortedSequence = require('./utils/findMissingNumbersInSortedSequence')

/**
 * Finds the missing numbers in a sorted sequence.
 *
 * @param {number[]} array - The sorted sequence of numbers.
 * @param {number} length - The length of the sequence.
 * @returns {number[]} - An array containing the missing numbers.
 */
function findMissingNumbers(array, length) {
  const missingNumbers = []

  const middleIndex = Math.floor(length / 2)
  const middleItem = array[middleIndex]
  const expectedMiddleItem = middleIndex + 1

  const middleItemDifference = middleItem - expectedMiddleItem

  // If difference is 1, then the missing numbers are in the start and end of the sequence
  // If difference is 2, then all missing numbers are in the start of the sequence
  // If difference is 0, then all missing numbers are in the end of the sequence

  if (middleItemDifference === 1) {
    const leftPart = array.slice(0, middleIndex)
    const rightPart = array.slice(middleIndex)

    const leftMissingNumbers = findMissingNumbersInSortedSequence(
      leftPart,
      middleIndex
    )
    const rightMissingNumbers = findMissingNumbersInSortedSequence(
      rightPart,
      length - middleIndex
    )

    missingNumbers.push(...leftMissingNumbers, ...rightMissingNumbers)
  } else if (middleItemDifference === 2) {
    const leftPart = array.slice(0, middleIndex)

    const leftMissingNumbers = findMissingNumbersInSortedSequence(
      leftPart,
      middleIndex
    )

    missingNumbers.push(...leftMissingNumbers)
  } else {
    const rightPart = array.slice(middleIndex)

    const rightMissingNumbers = findMissingNumbersInSortedSequence(
      rightPart,
      length - middleIndex
    )

    missingNumbers.push(...rightMissingNumbers)
  }

  return missingNumbers
}

module.exports = findMissingNumbers
