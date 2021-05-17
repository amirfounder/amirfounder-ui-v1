import React from 'react';
import PageHeader from '../../wrappers/custom-wrappers/page-header/PageHeader';
import Heading from '../../wrappers/html-wrappers/heading/Heading';
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph';
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText';

const About = () => {
  return(
    <PageHeader>
      <Heading>
        <MagicText>
          About
        </MagicText>
      </Heading>
      <Paragraph>
        <MagicText>
          Hello. My name is Amir. I'm a full-stack Software Engineer in the Chicago-Land area. More information coming soon...
        </MagicText>
      </Paragraph>
    </PageHeader>
  )
}

export default About;