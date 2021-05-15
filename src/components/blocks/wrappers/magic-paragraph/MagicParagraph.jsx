import React from 'react'
import MagicText from '../../magic/magic-text/MagicText'
import styles from './MagicParagraph.module.scss'

const MagicParagraph = ({ children }) => {
  return(
    <p className={`${styles.main} ${styles.fadeIn}`}>
      <MagicText text={children}/>
    </p>
  )
}

export default MagicParagraph
