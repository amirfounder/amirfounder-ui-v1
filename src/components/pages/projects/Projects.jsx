import React from 'react';
import PageHeader from '../../wrappers/custom-wrappers/page-header/PageHeader';
import Heading from '../../wrappers/html-wrappers/heading/Heading';
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph';
import MagicLink from '../../wrappers/magic-wrappers/magic-link/MagicLink';
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText';

const Projects = () => {
  return(
    <PageHeader>
      <Heading>
        <MagicText>
          Projects
        </MagicText>
      </Heading>
      <Paragraph>
        <MagicText>A list of all completed projects will be here. You can also check out the </MagicText>
        <MagicLink
          className="inherit"
          to="/pipeline"
        >
          Project Pipeline
        </MagicLink>
        <MagicText> for all projects I'm currently working on!</MagicText>
      </Paragraph>
    </PageHeader>
  )
}

export default Projects;