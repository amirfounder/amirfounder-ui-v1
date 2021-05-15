import React, { useState } from 'react'
import MagicHeading from '../wrappers/magic-heading/MagicHeading'
import Modal from '../wrappers/modal/Modal'

const Settings = ({show, setShow, toggleShow}) => {

  return(
    <Modal hidden={!show}>
      <MagicHeading
        animate={false}
        italisize={false}
      >
        Settings
      </MagicHeading>
      <button onClick={toggleShow}>Click</button>
    </Modal>
  )
}

export default Settings
