function findMissingNumbersInSortedSequence(array, length) {
  const missingNumbers = []

  for (let i = 0; i < length - 1; i++) {
    const current = array[i]
    const next = array[i + 1]

    if (next - current > 1) {
      for (let j = current + 1; j < next; j++) {
        missingNumbers.push(j)
      }
    }
  }

  return missingNumbers
}

module.exports = findMissingNumbersInSortedSequence
