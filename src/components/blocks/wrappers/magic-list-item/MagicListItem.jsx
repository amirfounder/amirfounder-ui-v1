import React from 'react'
import styles from './MagicListItem.module.scss'

const MagicListItem = ({children}) => {
  return(
    <li className={styles.main}>
      {children}
    </li>
  )
}

export default MagicListItem
