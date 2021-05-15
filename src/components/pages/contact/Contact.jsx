import React from 'react';
import Heading from '../../wrappers/html-wrappers/heading/Heading';
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph';
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText';

const Contact = () => {
  return(
    <div>
      <Heading>
        <MagicText>
          Contact
        </MagicText>
      </Heading>
      <Paragraph>Email me at </Paragraph>
    </div>
  )
}

export default Contact;