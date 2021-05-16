import React from 'react';
import styles from './Heading.module.scss'

const Heading = ({ children, animate=true, italisize=true, underline=true }) => {
  return(
    <h1
      className={`
        ${styles.main}
        ${underline ? styles.underline : null}
        ${animate ? styles.fadeInBottom : null}
        ${italisize ? styles.italic : null}
      `}
    >
      {children}
    </h1>
  )
}

export default Heading
