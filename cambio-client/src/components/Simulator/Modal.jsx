import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { usePortal } from './hooks'

const Portal = ({ children }) => {
  const target = usePortal('modal-root')
  return ReactDOM.createPortal(children, target)
}

const Modal = ({ children }) => {
  const [open, setOpen] = useState(true)

  const closeModal = e => {
    if (e.target.matches(".modal")) {
      setOpen(false)
    }
  }

  return (
    <Portal>
      <div className={`modal${open ? " open" : ""}`} onClick={closeModal}>
        <div className="inner">
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal