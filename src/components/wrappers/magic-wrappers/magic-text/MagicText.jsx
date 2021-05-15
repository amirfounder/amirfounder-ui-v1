import React, { useEffect, useState } from 'react'
import MagicCharacter from '../magic-character/MagicCharacter'

const MagicText = ({ children }) => {

  const [textArr, setTextArr] = useState([])

  useEffect(() => {
    children && setTextArr(children.split(''))
  }, [children, setTextArr])

  return(
    <>
      {textArr && textArr.length > 0 && textArr.map((character, index) => (
        <MagicCharacter key={`${character + index}`}>
          {character}
        </MagicCharacter>
      ))}
    </>
  )
}

export default MagicText
