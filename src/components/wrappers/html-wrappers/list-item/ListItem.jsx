import React from 'react'
import styles from './ListItem.module.scss'

const ListItem = ({children, className}) => {
  return(
    <li className={className ? className : styles.main}>
      {children}
    </li>
  )
}

export default ListItem
