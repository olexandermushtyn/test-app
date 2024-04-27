function generateSequence(length) {
  return Array.from({ length }, (_, i) => i + 1)
}

module.exports = generateSequence
