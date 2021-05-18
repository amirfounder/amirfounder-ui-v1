import React, { useEffect } from 'react'
import { useIdleClickerContext } from '../context/IdleClickerContext'
import styles from './IdleClicker.module.scss'
import { getCookieValue, setCookie } from '../utils/CookieService'

const IdleClicker = () => {

  const {
    score, setScore
  } = useIdleClickerContext();

  const increaseScore = () => {
    setScore((prevValue) => prevValue + 1)
  }

  const handleMouseDown = (e) => {
    e.target.style.setProperty('width', '150px')
    e.target.style.setProperty('height', '150px')
    increaseScore()
    setCookie('idle-clicker-score', score)
  }

  const handleMouseUp = (e) => {
    e.target.style.setProperty('width', '100px')
    e.target.style.setProperty('height', '100px')
  }

  useEffect(() => {
    setScore(Number(getCookieValue('idle-clicker-score')))
  }, [setScore])

  return(
    <div className={styles.main}>
      <div>
        <div
          className={styles.clickerShape}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {score}
        </div>
      </div>
    </div>
  )
}

export default IdleClicker
