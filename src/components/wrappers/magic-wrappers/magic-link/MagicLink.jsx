import React from 'react'
import styles from './MagicLink.module.scss'
import { Link } from 'react-router-dom'

const MagicLink = ({ children, magic=true, className, to, onClick }) => {
  return(
    <Link
      className={
        className === "inherit" ? styles.inherit : styles.main
      }
      to={`${to}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default MagicLink