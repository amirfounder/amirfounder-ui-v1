import React from 'react'
import PipelineBoard from '../../blocks/pipeline-board/PipelineBoard'
import PageHeader from '../../wrappers/custom-wrappers/page-header/PageHeader'
import Heading from '../../wrappers/html-wrappers/heading/Heading'
import Paragraph from '../../wrappers/html-wrappers/paragraph/Paragraph'
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText'

const Pipeline = () => {
  return(
    <>
      <PageHeader>
        <Heading>
          <MagicText>
            Project Pipeline
          </MagicText>
        </Heading>
        <Paragraph>
          <MagicText>
            If you're here right now, you're early! This feature is not yet complete!
          </MagicText>
        </Paragraph>
      </PageHeader>
      <PipelineBoard />
    </>
  )
}

export default Pipeline
