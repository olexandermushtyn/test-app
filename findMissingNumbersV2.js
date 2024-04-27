/**
 * Finds missing numbers within an input array of numbers.
 *
 * @param {number[]} inputArray - The input array of numbers.
 * @param {number} arrayLength - The length of the array.
 * @returns {number[]} - An array containing the missing numbers.
 */
function findMissingNumbersV2(inputArray, arrayLength) {
  const missingNumbersArray = []

  // Checking missing numbers
  const checkCloseNumbers = index => {
    if (missingNumbersArray.length === 2) return

    if (inputArray[index + 1] - inputArray[index] === 3) {
      missingNumbersArray.push(index + 2)
      missingNumbersArray.push(index + 3)
      return
    }

    if (inputArray[index + 1] - inputArray[index] === 2) {
      return missingNumbersArray.push(inputArray[index] + 1)
    }
  }

  /**
   * Recursively finds missing numbers within a given range. Algorithm complexity is O(log n).
   *
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @param {boolean} onlyOneWay - Indicates whether to search for missing numbers in only one direction.
   * @returns {void}
   */
  const findMissingNumberRecursive = (min, max, onlyOneWay) => {
    // Recursion base case
    if (missingNumbersArray.length === 2) return

    // If the difference between the min and max is 1, check for missing numbers
    if (max - min === 1) {
      checkCloseNumbers(min)
      checkCloseNumbers(max)
      return
    }

    // Find the middle index
    const index = Math.floor((max + min) / 2)

    // How many numbers are missing between the min and max
    const acceptableDifference = onlyOneWay ? 1 : 2

    // If both numbers in the left side of sequence are missing
    if (
      inputArray[index] - inputArray[min] - (index - min) ===
      acceptableDifference
    ) {
      return findMissingNumberRecursive(min, index, onlyOneWay)
    }

    // If both numbers in the right side of sequence are missing
    if (
      inputArray[max] - inputArray[index] - (max - index) ===
      acceptableDifference
    ) {
      return findMissingNumberRecursive(index, max, onlyOneWay)
    }

    // Split the range into two and search for missing numbers in both sides
    findMissingNumberRecursive(index, max, true)
    findMissingNumberRecursive(min, index, true)
  }

  const findMissingNumber = () => {
    // Checking the limit values
    if (inputArray[0] !== 1) {
      missingNumbersArray.push(1)
    }
    if (inputArray[0] !== 1 && inputArray[0] !== 2) {
      missingNumbersArray.push(2)
    }

    if (missingNumbersArray.length === 2) return
    if (inputArray[inputArray.length - 1] !== arrayLength) {
      missingNumbersArray.push(arrayLength)
    }

    if (
      inputArray[inputArray.length - 1] !== arrayLength &&
      inputArray[inputArray.length - 1] !== arrayLength - 1
    ) {
      missingNumbersArray.push(arrayLength - 1)
    }
    if (missingNumbersArray.length === 2) return
    return findMissingNumberRecursive(0, inputArray.length - 1)
  }

  findMissingNumber()

  return missingNumbersArray
}

module.exports = findMissingNumbersV2
