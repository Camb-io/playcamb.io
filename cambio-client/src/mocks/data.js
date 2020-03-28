// players
const players = ["P1", "P2", "P3", "P4", "P5", "P6"]

// make deck
const deck = []
const suits = ["C", "S", "D", "H"]
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

suits.forEach(suit => {
  ranks.forEach(rank => {
    deck.push({
      suit,
      rank
    })
  })
})

// shuffle
deck.sort(() => Math.random() - 0.5)

export { players, deck }