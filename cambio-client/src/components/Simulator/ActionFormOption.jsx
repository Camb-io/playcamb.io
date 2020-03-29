import React from 'react'

const ActionFormOption = ({ value, text }) => {
  return (
    <option value={value}>
      {text}
    </option>
  )
}

export default ActionFormOption