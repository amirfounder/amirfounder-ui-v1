import React from 'react'
import styles from './Paragraph.module.scss'

const Paragraph = ({ children }) => {
  return(
    <p
      className={`
        ${styles.main}
        ${styles.fadeIn}
      `}
    >
      {children}
    </p>
  )
}

export default Paragraph
