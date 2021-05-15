import React, { useEffect, useState } from 'react'

import MagicLink from '../../wrappers/magic-wrappers/magic-link/MagicLink'
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText'
import ListItem from '../../wrappers/html-wrappers/list-item/ListItem'
import Settings from '../settings/Settings'
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
          <ListItem><MagicLink onClick={toggleShowSettings}>Settings</MagicLink></ListItem>
          <ListItem><MagicLink to="/">Privacy Policy</MagicLink></ListItem>
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
