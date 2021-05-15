import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({children, hidden}) => {
  return(
    <div hidden={hidden}>
      <div className={styles.background}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal