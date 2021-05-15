import React from 'react'
import styles from './ListItem.module.scss'

const ListItem = ({children}) => {
  return(
    <li className={styles.main}>
      {children}
    </li>
  )
}

export default ListItem
