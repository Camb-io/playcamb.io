import React from 'react'

const ActionFormArgument = ({ name, value, handleChange }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <textarea name={name} rows="2" onChange={handleChange(name)} value={value}></textarea>
    </>
  )
}

export default ActionFormArgument