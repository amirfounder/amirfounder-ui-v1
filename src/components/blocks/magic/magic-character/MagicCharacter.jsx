import React, { useState } from 'react'
import styles from './MagicCharacter.module.scss'

const MagicCharacter = ({ character }) => {

  return(
    <span
      className={styles.main}
    >
      {character}
    </span>
  )
}

export default MagicCharacter