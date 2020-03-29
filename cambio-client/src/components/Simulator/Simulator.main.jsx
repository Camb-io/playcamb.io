import React, { useState } from 'react'

import Modal from './Modal'
import ActionForm from './ActionForm'

const Simulator = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>Show Action Tester</button>
      <Modal open={open} setOpen={setOpen}>
        <ActionForm />
      </Modal>
    </>
  )
}

export default Simulator
