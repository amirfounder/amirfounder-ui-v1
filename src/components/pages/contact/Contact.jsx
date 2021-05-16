import React from 'react';
import Heading from '../../wrappers/html-wrappers/heading/Heading';
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph';
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText';
import MagicLink from '../../wrappers/magic-wrappers/magic-link/MagicLink';

const Contact = () => {
  return(
    <div>
      <Heading>
        <MagicText>
          Contact
        </MagicText>
      </Heading>
      <Paragraph>
        <MagicText>Email: </MagicText>
        <MagicLink
          className="inherit"
          internal={false}
          to="mailto:amirfounder.com"
        >
          amir@amirfounder.com
        </MagicLink>
        <br/>
        <MagicText>Text: </MagicText>
        <MagicLink className="inherit">(331) 255 - 6927</MagicLink>
      </Paragraph>
    </div>
  )
}

export default Contact;