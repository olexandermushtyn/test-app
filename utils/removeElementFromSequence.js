/**
 * Removes elements from a sequence based on the specified indexes.
 *
 * @param {Array} sequence - The sequence from which elements will be removed.
 * @param {...number} indexes - The indexes of the elements to be removed.
 * @returns {Array} - A new sequence with the specified elements removed.
 */
function removeElementFromSequence(sequence, ...indexes) {
  return sequence.filter((_, index) => !indexes.includes(index))
}

module.exports = removeElementFromSequence
