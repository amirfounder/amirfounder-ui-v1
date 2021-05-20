import React, { useState } from 'react'
import { useLocation } from 'react-router'
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText'
import styles from './GamingHeader.module.scss'
import { getGameTitle } from './GamingHeaderService'

const GamingHeader = () => {

  const location = useLocation()

  const [gameTitle] = useState(getGameTitle(location.pathname))

  return(
    <div className={styles.main}>
      <div className={styles.column}>
        <MagicText>{gameTitle}</MagicText>
      </div>
      <div className={styles.column}>

      </div>
    </div>
  )
}

export default GamingHeader