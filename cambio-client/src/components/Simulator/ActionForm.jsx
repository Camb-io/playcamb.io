import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ActionFormOption from './ActionFormOption'
import ActionFormArgument from './ActionFormArgument'
import { createFnArray, parseArgs } from './helpers'
import * as boardActions from '../../store/board/actions'

const ActionForm = () => {
  const dispatch = useDispatch()
  const [actions, setActions] = useState([])
  const [selectedActionIndex, setSelectedActionIndex] = useState(0)

  useEffect(() => {
    // if more actions are imported, add them here
    const allActions = createFnArray(boardActions)
    setActions(allActions)
  }, [])

  const selectedAction = actions[selectedActionIndex]
  
  const handleSubmit = e => {
    e.preventDefault()
    const parsedArgs = parseArgs(selectedAction.args)
    dispatch(selectedAction.action(...parsedArgs));
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
    const index = actions.findIndex(action => action.name === e.target.value)
    setSelectedActionIndex(index)
  }

  const renderOptions = () => {
    return actions.map(action => {
      const text = action.name + `(${action.args.map(arg => arg.name).join(", ")})`
      return <ActionFormOption 
        key={action.name} 
        value={action.name} 
        text={text}
      />
    })
  }

  const renderArgs = () => {
    if (!selectedAction) return null;

    return selectedAction.args.map(arg => 
      <ActionFormArgument 
        key={arg.name} 
        value={arg.value} 
        name={arg.name} 
        handleChange={handleArgChange} 
      /> 
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="action">Action</label>
      <select name="action" onChange={handleActionChange}>
        {renderOptions()}
      </select>
      {renderArgs()}
      <input type="submit" value="Dispatch" />
    </form>
  )
}

export default ActionForm
