// take in a fn definition and return an array of argument names
const getArgNames = fn => {
  let fnString = fn.toString()
  let argStr = "";
  // regular fns
  if (fnString.slice(0, 8) === "function") {
    let start = fnString.indexOf("(")
    let end = fnString.indexOf(")")
    argStr += fnString.slice(start + 1, end)
  } else { // arrow fns
    let args = fn.toString().split("=>")[0]
    argStr += args.replace(/\(|\)/g, '').trim()
  }
  let args = argStr.split(",").map(arg => arg.trim())
  return args
}

export const parseArgs = args => {
  return args.map(arg => {
    if (!arg.value) return undefined;
    return arg.value[0] === "{" || arg.value[0] === "[" ? JSON.parse(arg.value) : arg.value
  })
}

export const createFnArray = importedFns => {
  return Object.keys(importedFns).map(action => {
    const args = getArgNames(importedFns[action]).map(arg => ({ name: arg, value: undefined }))
    return {
      action: importedFns[action],
      name: action,
      args
    }
  })
}