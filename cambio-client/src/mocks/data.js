// players
const players = []

// make deck
const deck = []
const suits = ["clubs", "spades", "diamonds", "hearts"]
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