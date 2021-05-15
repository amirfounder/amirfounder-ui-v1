import React, { useEffect, useState } from 'react'
import MagicCharacter from '../magic-character/MagicCharacter'

const MagicText = ({ text }) => {

  const [textArr, setTextArr] = useState([])

  useEffect(() => {
    setTextArr(text.split(''))
  }, [text, setTextArr])

  return(
    <>
      {textArr && textArr.length > 0 && textArr.map((c, index) => (
        <MagicCharacter character={c} key={`${c + index}`}/>
      ))}
    </>
  )
}

export default MagicText
