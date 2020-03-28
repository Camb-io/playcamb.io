import { players as allPlayers, deck } from './data'

const mockFetch = (url, options = { method: "GET" }) => {
  return new Promise((resolve, reject) => {
    // get params from body
    let params = {}
    if (options.body) {
      params = {
        ...JSON.parse(options.body)
      }
    }

    // define routes
    const router = () => {
      switch (true) {
        // GET /tables/:slug/deal
        case url.match(/tables\/([^\/]+)\/deal/) && options.method === "GET":
          return deal()
        default:
          return error()
      }
    }

    // controller actions
    const deal = () => {
      const players = allPlayers.reduce((playerObj, player) => {
        playerObj[player] = {
          bottomLeft: deck.splice(0, 1)[0],
          bottomRight: deck.splice(0, 1)[0],
          topLeft: deck.splice(0, 1)[0],
          topRight: deck.splice(0, 1)[0],
        }
        return playerObj
      }, {})

      return respond({
        ok: true,
        status: 200,
        data: { players }
      })
    }

    const error = () => respond({
      ok: false,
      status: 400,
      data: { message: "woops!" }
    })

    // helpers
    const respond = ({ ok, status, data }) => {
      const body = JSON.stringify(data)
      resolve({
        ok,
        status,
        body,
        json() {
          return new Promise((resolve) => resolve(JSON.parse(body)))
        }
      })
    }

    // initiate request
    setTimeout(router, 500)
  })
}

export { mockFetch }