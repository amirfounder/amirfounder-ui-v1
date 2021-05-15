import React from 'react';
import styles from './Heading.module.scss'

const Heading = ({ children, animate=true, italisize=true }) => {
  return(
    <h1
      className={`
        ${styles.main}
        ${animate ? styles.fadeInBottom : null}
        ${italisize ? styles.italic : null}
      `}
    >
      {children}
    </h1>
  )
}

export default Heading
