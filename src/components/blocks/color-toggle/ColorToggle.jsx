import React, { useContext } from 'react'
import { useMainContext } from '../../../context/MainContext'
import styles from './ColorToggle.module.scss'

const ColorToggle = ({color}) => {

  const {
    themeColor, setThemeColor
  } = useMainContext()
  
  const handleColorToggle = () => {
    themeColor !== color && setThemeColor(color)
    root.style.setProperty('--theme-color', color)
  }

  const root = document.documentElement

  return(
    <div
      onClick={handleColorToggle}
      className={styles.main}
      style={{
        backgroundColor: `${themeColor === color ? color : 'white'}`,
        border: `${color} 1px solid`
      }}
    />
  )
}

export default ColorToggle
