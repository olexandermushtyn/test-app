const findMissingNumbers = require('./findMissingNumbers')
const generateSequence = require('./utils/generateSequence')
const generateTwoRandomId = require('./utils/generateTwoRandomId')
const removeElementFromSequence = require('./utils/removeElementFromSequence')
const findMissingNumbersV2 = require('./findMissingNumbersV2')

const SEQUENCE_LENGTH = 100

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

  // First version
  const [missing1, missing2] = findMissingNumbers(newSequence, SEQUENCE_LENGTH)

  console.log(
    `V1 Best speed O(N/2), worst speed O(N) . Expected missing numbers: ${sequence[firstMissingIndex]}, ${sequence[secondMissingIndex]}\nMissing numbers: ${missing1} and ${missing2}`
  )

  // Second version
  const [missing1V2, missing2V2] = findMissingNumbersV2(
    newSequence,
    SEQUENCE_LENGTH
  )

  console.log(
    `V2 Approximate complexity log(N). Expected missing numbers: ${sequence[firstMissingIndex]}, ${sequence[secondMissingIndex]}\nMissing numbers: ${missing1V2} and ${missing2V2}`
  )
}

main()
