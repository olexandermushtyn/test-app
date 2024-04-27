function removeElementFromSequence(sequence, ...indexes) {
  return sequence.filter((_, index) => !indexes.includes(index))
}

module.exports = removeElementFromSequence
