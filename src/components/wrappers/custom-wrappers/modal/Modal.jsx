import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({children, show, setShow}) => {

  const handleKeyDown = (e) => {
    if (e.key === 'escape') {
      setShow(false)
      console.log('key down! key down!')
    }
  }

  return(
    <div hidden={!show}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.background}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal