import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MagicText from '../magic/magic-text/MagicText'
import Settings from '../settings/Settings'
import MagicLink from '../wrappers/magic-link/MagicLink'
import MagicListItem from '../wrappers/magic-list-item/MagicListItem'
import styles from './Footer.module.scss'

const Footer = () => {

  const [year, setYear] = useState()
  const [showSettings, setShowSettings] = useState(false)

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
   * Toggle the show settings
   */
  const toggleShowSettings = () => {
    showSettings ? setShowSettings(false) : setShowSettings(true)
  }

  return(
    <div className={styles.main}>
      <div className={styles.one}>
        <div className={styles.copyright}>
          <MagicText text={`Copyright © ${year} All Rights Reserved`} />
        </div>
      </div>
      <div className={styles.two}>
        <ul>
          <MagicListItem><MagicLink onClick={toggleShowSettings}>Settings</MagicLink></MagicListItem>
          <MagicListItem><MagicLink to="/">Privacy Policy</MagicLink></MagicListItem>
        </ul>
        <Settings
        show={showSettings}
        setShow={setShowSettings}
        toggleShow={toggleShowSettings}
      />
      </div>
    </div>
  )
}

export default Footer
