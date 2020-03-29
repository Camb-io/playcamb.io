// take in a fn definition and return an array of argument names
export const getArgNames = fn => {
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