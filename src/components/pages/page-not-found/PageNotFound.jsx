import React from 'react'
import Heading from '../../wrappers/html-wrappers/heading/Heading'
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph'
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText'

const PageNotFound = () => {
  return(
    <>
      <Heading>
        <MagicText>
          404 Error
        </MagicText>
      </Heading>
      <Paragraph>
        <MagicText>
          Oops. This page was not found. (If you clicked the phone number on the contact page, that is a known bug under development.)
        </MagicText>
      </Paragraph>
    </>
  )
}

export default PageNotFound
