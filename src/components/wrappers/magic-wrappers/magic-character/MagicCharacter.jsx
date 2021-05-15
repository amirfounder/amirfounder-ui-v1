import React from 'react'
import styles from './MagicCharacter.module.scss'

const MagicCharacter = ({ children }) => {

  return(
    <span
      className={styles.main}
    >
      {children}
    </span>
  )
}

export default MagicCharacter