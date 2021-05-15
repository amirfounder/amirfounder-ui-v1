import React from 'react';
import MagicText from '../../magic/magic-text/MagicText';
import styles from './MagicHeading.module.scss'

const MagicHeading = ({ children, magic=true, animate=true, italisize=true }) => {
  return(
    <h1
      className={`
        ${styles.main}
        ${animate ? styles.fadeInBottom : null}
        ${italisize ? styles.italic : null}
      `}
    >
      {magic
      ? <MagicText text={children} />
      : children
      }
    </h1>
  )
}

export default MagicHeading
