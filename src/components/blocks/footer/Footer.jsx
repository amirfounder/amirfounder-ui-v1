import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {

  const [year, setYear] = useState()

  /**
   * Get the current year
   * @returns current year in XXXX format
   */
  const getCurrentYear = () => {
    const date = new Date()
    const year = date.getFullYear()
    return year
  }

  /**
   * sets the year to the current year upon render
   */
  useEffect(() => {
    setYear(getCurrentYear())
  }, [])

  return(
    <div className={styles.main}>
      <div className={styles.one}>
        {`Copyright © ${year} All Rights Reserved`}
      </div>
      <div className={styles.two}>
        <Link>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
