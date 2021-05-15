import React from 'react'
import Heading from '../../wrappers/html-wrappers/heading/Heading'
import Modal from '../../wrappers/custom-wrappers/modal/Modal'

const Settings = ({show, setShow, toggleShow}) => {

  return(
    <Modal
      show={show}
      setShow={setShow}
    >
      <Heading
        animate={false}
        italisize={false}
      >
        Settings
      </Heading>
      <button onClick={toggleShow}>Click</button>
    </Modal>
  )
}

export default Settings
