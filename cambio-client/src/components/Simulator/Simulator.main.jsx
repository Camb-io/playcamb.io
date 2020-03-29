import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Modal from './Modal'
import * as boardActions from '../../store/board/actions'

const getArgNames = fn => {
  let fnString = fn.toString()
  let argStr = "";
  // arrow fns
  if (fnString.slice(0, 8) === "function") {
    let start = fnString.indexOf("(")
    let end = fnString.indexOf(")")
    argStr += fnString.slice(start + 1, end)
  } else { // regular fns
    let args = fn.toString().split("=>")[0]
    argStr += args.replace(/\(|\)/g, '').trim()
  }
  let args = argStr.split(",").map(arg => arg.trim())
  return args
}

const Simulator = (props) => {
  const dispatch = useDispatch()
  const [args, setArgs] = useState([])
  const [action, setAction] = useState(Object.keys(boardActions)[0])

  const handleSubmit = e => {
    e.preventDefault()
    const parsedArgs = args.map(arg => arg[0] === "{" || arg[0] === "[" ? JSON.parse(arg) : arg)
    console.log(parsedArgs);
    // dispatch(boardActions[action](...parsedArgs));
  }

  const handleArgChange = changeIndex => e => {
    const newArgs = args.map((arg, index) => changeIndex === index ? e.target.value : arg)
    setArgs(newArgs)
  }

  const handleActionChange = e => {
    setAction(e.target.value)
  }

  const handleAddArg = e => {
    setArgs([...args, ""])
  }

  const renderActions = () => {
    return Object.keys(boardActions).map(action => 
      <option value={action} key={action}>
        {action}({getArgNames(boardActions[action]).join(", ")})
      </option>
    )
  }

  const renderArgs = () => {
    return args.map((arg, index) => {
      return (
        <>
          <label htmlFor="argument">Argument {index + 1}</label>
          <textarea name="argument" rows="2" onChange={handleArgChange(index)} value={arg}></textarea>
        </>
      )
    })
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <label htmlFor="action">Action</label>
        <select name="action" onChange={handleActionChange}>
          {renderActions()}
        </select>
        {renderArgs()}
        <button onClick={handleAddArg} type="button">Add Arg</button>
        <input type="submit" value="Dispatch" />
      </form>
    </Modal>
  )
}

export default Simulator
