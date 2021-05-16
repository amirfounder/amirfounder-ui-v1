import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ children, onClick, to=false, type="button" }) => {

  const location = useLocation()

  return(
    <Link
      to={to ? to : location.pathname}
    >
      <button
        className={styles.main}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button
