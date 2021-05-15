import React from 'react'
import styles from './MagicLink.module.scss'
import { Link } from 'react-router-dom'
import MagicText from '../../magic/magic-text/MagicText'

const MagicLink = ({ children, magic=true, className, to, onClick }) => {
  return(
    <Link
      className={className ? className : styles.main}
      to={to}
      onClick={onClick}
    >
      {magic
      ? <MagicText text={children}/>
      : {children}
      }
    </Link>
  )
}

export default MagicLink