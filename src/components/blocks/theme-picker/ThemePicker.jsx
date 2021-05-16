import React, { useState } from 'react'
import styles from './ThemePicker.module.scss'
import Heading from '../../wrappers/html-wrappers/heading/Heading'
import Modal from '../../wrappers/custom-wrappers/modal/Modal'
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText'
import Button from '../../wrappers/html-wrappers/button/Button'
import ColorToggle from '../color-toggle/ColorToggle'
import { colorPalette } from '../../../utils/Constants'

const Settings = ({show, setShow, toggleShow}) => {

  const [activColor, setActiveColor] = useState('red')
  const [colors, setColors] = useState(colorPalette)
  
  return(
    <Modal
      show={show}
      setShow={setShow}
    >
      <div className={styles.main}>
        <Heading
          animate={false}
          italisize={false}
        >
          <MagicText>Choose a Theme</MagicText>
        </Heading>
        <div className={styles.colorPalette}>
          {colors.map((color) => (
            <ColorToggle
              key={color}
              color={color}
              activeColor={activColor}
              setActiveColor={setActiveColor}
            />
          ))}
        </div>
        <Button
          onClick={toggleShow}
        >
          Exit Theme Picker 
        </Button>
      </div>
    </Modal>
  )
}

export default Settings
