export const getPlayers = ({ board: { currentUser, players } }) => {
  if (!players) return [];

  return Object.keys(players)
    .map(key => {
      const player = players[key]
      for (let card in player.cards) {
        if (player.cards[card].visibleTo.includes(currentUser)) {
          player.cards[card].visible = true
        }
      }
      return player
    })
}