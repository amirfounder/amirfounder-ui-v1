import React from 'react'
import styles from './PageHeader.module.scss'

const PageHeader = ({ children }) => {
  return(
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default PageHeader