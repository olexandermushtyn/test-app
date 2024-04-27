function generateTwoRandomId(max) {
  const randomId1 = Math.floor(Math.random() * max)
  let randomId2 = Math.floor(Math.random() * max)
  while (randomId1 === randomId2) {
    randomId2 = Math.floor(Math.random() * max)
  }
  return [randomId1, randomId2]
}

module.exports = generateTwoRandomId
