const findMissingNumbers = require('./findMissingNumbers')
const generateSequence = require('./utils/generateSequence')
const generateTwoRandomId = require('./utils/generateTwoRandomId')
const removeElementFromSequence = require('./utils/removeElementFromSequence')

const SEQUENCE_LENGTH = 10000

function main() {
  const sequence = generateSequence(SEQUENCE_LENGTH)
  const [firstMissingIndex, secondMissingIndex] = generateTwoRandomId(
    sequence.length
  )
  const newSequence = removeElementFromSequence(
    sequence,
    firstMissingIndex,
    secondMissingIndex
  )

  const [missing1, missing2] = findMissingNumbers(newSequence, SEQUENCE_LENGTH)

  console.log(
    `Expected missing numbers: ${sequence[firstMissingIndex]}, ${sequence[secondMissingIndex]}\nMissing numbers: ${missing1} and ${missing2}`
  )
}

main()
