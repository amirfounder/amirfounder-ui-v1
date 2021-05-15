import React from 'react';
import Heading from '../../wrappers/html-wrappers/heading/Heading';
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph';
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText';

const Projects = () => {
  return(
    <div>
      <Heading>
        <MagicText>
          Projects
        </MagicText>
      </Heading>
      <Paragraph>
        <MagicText>
          Projects coming soon...
        </MagicText>
      </Paragraph>
    </div>
  )
}

export default Projects;