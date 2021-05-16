import React from 'react'
import styles from './MagicLink.module.scss'
import { Link } from 'react-router-dom'

const MagicLink = ({ children, internal=true, className, to, onClick }) => {
  if (internal) {
    return(
      <Link
        className={
          className === "inherit" ? styles.inherit : styles.main
        }
        to={to ? to : "/page-not-found"}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  } else {
    return(
      <a
        className={
          className === "inherit" ? styles.inherit : styles.main
        }
        href={`${to}`}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
}

export default MagicLink