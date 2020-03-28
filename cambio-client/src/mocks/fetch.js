import { players as allPlayers, deck } from './data'

const mockFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    // const params = {
    //   ...JSON.parse(options.body)
    // }
    // define routes
    const router = () => {
      switch (true) {
        // POST /tables/:slug/join
        // case url.match(/tables\/([^\/]+)\/join/) && options.method === "POST":
        //   params.slug = url.match(/tables\/([^\/]+)\/join/)[1]
        //   return join(params)
        // GET /tables/:slug/deal
        case url.match(/tables\/([^\/]+)\/deal/):
          return deal()
        default:
          return error()
      }
    }

    // controller actions
    const join = params => {
      allPlayers.push(params.player)
      respond({
        ok: true,
        status: 200,
        data: { players: allPlayers }
      })
    }

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