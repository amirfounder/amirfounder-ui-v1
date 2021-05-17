import React, { useEffect, useState } from 'react'

import MagicLink from '../../wrappers/magic-wrappers/magic-link/MagicLink'
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText'
import ListItem from '../../wrappers/html-wrappers/list-item/ListItem'
import ThemePicker from '../theme-picker/ThemePicker'
import styles from './Footer.module.scss'
import { useLocation } from 'react-router'

const Footer = () => {

  const [year, setYear] = useState()
  const [showThemePicker, setShowThemePicker] = useState(false)

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

  /**
   * Toggle showThemePicker
   */
  const toggleShowThemePicker = () => {
    showThemePicker ? setShowThemePicker(false) : setShowThemePicker(true)
  }

  const location = useLocation()

  return(
    <div className={styles.main}>
      <div className={styles.one}>
        <div className={styles.copyright}>
        <MagicText>{`Copyright © ${year} All Rights Reserved`}</MagicText>
        </div>
      </div>
      <div className={styles.two}>
        <ul>
          <ListItem className={styles.navLink}><MagicLink to={location.pathname} onClick={toggleShowThemePicker}>Customize Theme</MagicLink></ListItem>
          <ListItem className={styles.navLink}><MagicLink to="/">Privacy Policy</MagicLink></ListItem>
        </ul>
        <ThemePicker
          show={showThemePicker}
          setShow={setShowThemePicker}
          toggleShow={toggleShowThemePicker}
        />
      </div>
    </div>
  )
}

export default Footer
