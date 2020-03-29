class Fexpress {
  router = []
  route = null

  // request returns a promise...
  request(url, options) {
    return new Promise((resolve, reject) => {
      this.currentRoute = this.findRoute(url, options.method)

      if (!this.currentRoute) {
        this.response(resolve, { ok: false, status: 500, data: { message: "woops!" } })
      } else {
        const params = this.getParams(options.body, url)
        // call the registered callback from the route, passing in:
        // - the request object (params from url + body)
        // - a callback to send the response 
        this.currentRoute.callback({ params }, ({ ok, status, data }) => {
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

  // helper to find route from url + method
  findRoute(url, method) {
    return this.router.find(({ route }) => {
      if (route.method !== method) return false;

      return url.match(route.matcher)
    })
  }

  getParams(body, url) {
    // get params from body
    const params = body ? JSON.parse(body) : {}
    const matches = url.match(this.currentRoute.route.matcher)
    // add params from url
    for (let key in matches.groups) {
      params[key] = matches.groups[key]
    }
    return params
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