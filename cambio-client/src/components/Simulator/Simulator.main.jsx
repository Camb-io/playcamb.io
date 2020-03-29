import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Modal from './Modal'
import * as boardActions from '../../store/board/actions'

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

const allActions = Object.keys(boardActions).map(action => {
  const args = getArgNames(boardActions[action]).map(arg => ({ name: arg, value: undefined}))
  return {
    name: action,
    args
  }
})

const Simulator = (props) => {
  const dispatch = useDispatch()
  const [actions, setActions] = useState([])
  const [selectedActionIndex, setSelectedActionIndex] = useState(0)

  useEffect(() => {
    setActions(allActions)
  }, [])

  const selectedAction = actions[selectedActionIndex]
  
  const handleSubmit = e => {
    e.preventDefault()
    const parsedArgs = selectedAction.args.map(arg => arg.value[0] === "{" || arg.value[0] === "[" ? JSON.parse(arg.value) : arg.value)
    dispatch(boardActions[selectedAction.name](...parsedArgs));
  }

  const handleArgChange = name => e => {
    const newActions = actions.map((action, index) => {
      if (index === selectedActionIndex) {
        const newArgs = action.args.map(arg => {
          if (arg.name === name) {
            return {
              name: arg.name,
              value: e.target.value
            }
          } else {
            return arg
          }
        })

        return {
          ...action,
          args: newArgs
        }
      } else {
        return action
      }
    })
    setActions(newActions)
  }

  const handleActionChange = e => {
    setSelectedActionIndex(parseInt(e.target.value))
  }

  const renderActions = () => {
    return actions.map((action, index) => 
      <option value={index} key={action.name}>
        {action.name}({action.args.map(arg => arg.name).join(", ")})
      </option>
    )
  }

  const renderArgs = () => {
    if (!selectedAction) return null;

    return selectedAction.args.map((arg, index) => {
      return (
        <div key={arg.name}>
          <label htmlFor={arg.name}>{arg.name}</label>
          <textarea name={arg.name} rows="2" onChange={handleArgChange(arg.name)} value={arg.value}></textarea>
        </div>
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
        <input type="submit" value="Dispatch" />
      </form>
    </Modal>
  )
}

export default Simulator
