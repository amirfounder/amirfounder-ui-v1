import React from 'react'
import { useMainContext } from '../../../context/MainContext'
import styles from './ColorToggle.module.scss'

const ColorToggle = ({color}) => {

  const {
    themeColor, setThemeColor,
    setThemeHighlightColor
  } = useMainContext()

  const createThemeHighlightColor = (color, transparencyLevel) => {
    let transparentColor = color;
    transparentColor = transparentColor.replace('rgba(', '')
    transparentColor = transparentColor.replace(', 1)', '')
    let rgb = transparentColor.split(', ')
    transparentColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${transparencyLevel})`
    return transparentColor;
  }

  const handleColorToggle = () => {
    const themeHighlightColor = createThemeHighlightColor(color, .25)
    // SET CONTEXT
    setThemeColor(color)
    setThemeHighlightColor(themeHighlightColor)
    // SET CSS CUSTOM VARIABLES
    document.documentElement.style.setProperty('--theme-color', color)
    document.documentElement.style.setProperty('--theme-highlight-color', themeHighlightColor)
    // SET COOKIES
    const cookieExpiration = new Date(9999, 12, 12).toUTCString()
    document.cookie = `themeColor=${color};expires=${cookieExpiration}`
    document.cookie = `themeHighlightColor=${themeHighlightColor};expires=${cookieExpiration}`
  }

  return(
    <div
      onClick={handleColorToggle}
      className={styles.main}
      style={{
        backgroundColor: `${color}`,
        outline: `${themeColor === color ? `2px solid ${color}` : `0px`}`,
        outlineOffset: `2px`
      }}
    />
  )
}

export default ColorToggle
