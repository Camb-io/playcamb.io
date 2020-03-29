class Fexpress {
  router = []

  // request returns a promise...
  request(url, options) {
    return new Promise((resolve, reject) => {
      // get params from body
      const params = options.body ? JSON.parse(options.body) : {}

      const route = this.findRoute(url, options, params)

      if (!route) {
        this.response(resolve, { ok: false, status: 500, data: { message: "woops!" } })
      } else {
        route.callback({ params }, ({ ok, status, data }) => {
          this.response(resolve, { ok, status, data })
        })
      }
    })
  }

  // response resolves it
  response(resolve, { ok, status, data }) {
    setTimeout(() => {
      const body = JSON.stringify(data)
      resolve({
        ok,
        status,
        body,
        json() {
          return new Promise((resolve) => resolve(JSON.parse(body)))
        }
      })
    }, 500)
  }

  // match on string starting with :
  createMatcher(url) {
    const expression = url
      .split("/")
      .slice(1)
      .map(str => {
        if (str[0] === ":") {
          return `(?<${str.slice(1)}>[^/]+)`
        } else {
          return str
        }
      })
      .join("/")

    return new RegExp(`${expression}`)
  }

  findRoute(url, options, params) {
    return this.router.find(({ route }) => {
      if (route.method !== options.method) return false;

      const matches = url.match(route.matcher)
      if (matches) {
        // add params from url
        for (let key in matches.groups) {
          params[key] = matches.groups[key]
        }
        return true
      }
      return false
    })
  }

  registerRoute(url, method, callback) {
    this.router.push({
      route: {
        url,
        method,
        matcher: this.createMatcher(url)
      },
      callback
    })
  }

  get(url, cb) {
    this.registerRoute(url, "GET", cb)
  }

  post(url, cb) {
    this.registerRoute(url, "POST", cb)
  }

  patch(url, cb) {
    this.registerRoute(url, "PATCH", cb)
  }

  put(url, cb) {
    this.registerRoute(url, "PUT", cb)
  }

  delete(url, cb) {
    this.registerRoute(url, "PUT", cb)
  }
}

export default new Fexpress()