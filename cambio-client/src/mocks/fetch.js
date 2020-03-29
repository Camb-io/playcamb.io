import { players, deck } from './data'
import app from './app'

// routes
app.post("/tables/:slug/join", (req, res) => {
  const { name } = req.params
  const player = { name, ready: false }
  players.push({ name, ready: false })

  res({
    ok: true,
    status: 200,
    data: player
  })
})

app.patch("/tables/:slug/ready", (req, res) => {
  const { name } = req.params
  const player = players.find(p => p.name === name)
  player.ready = true

  res({
    ok: true,
    status: 200,
    data: player
  })
})

app.get("/tables/:slug/deal", (req, res) => {
  players.forEach(player => {
    player.cards = {
      bottomLeft: { ...deck.splice(0, 1)[0], visibleTo: [player.name] },
      bottomRight: { ...deck.splice(0, 1)[0], visibleTo: [player.name] },
      topLeft: { ...deck.splice(0, 1)[0], visibleTo: [] },
      topRight: { ...deck.splice(0, 1)[0], visibleTo: [] }
    }
  })

  res({
    ok: true,
    status: 200,
    data: players
  })
})

// make a request
const mockFetch = (url, options = { method: "GET" }) => app.request(url, options)

export { mockFetch }