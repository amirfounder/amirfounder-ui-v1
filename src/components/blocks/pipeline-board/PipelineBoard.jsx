import React, { useState } from 'react'
import styles from './PipelineBoard.module.scss'

const PipelineBoard = () => {

  const [stages] = useState([
    'Backlog',
    'Started',
    '25% Complete',
    '50% Complete',
    '75% Complete',
    'Done',
  ])

  const [projects, setProjects] = useState({
    backlogProjects: [],
    startedProjects: [],
    completed25Projects: [],
    completed50Projects: [],
    completed75Projects: []
  })

  return(
    <div className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.header}>
          {stages && stages.map((stage) => (
            <div
              className={`
                ${styles.column}
              `}
            >
              {stage}
            </div>
          ))}
        </div>
        <div className={styles.content}>
          {stages.map((stage, index) => (
            <div
              className={`
                ${styles.column}
              `}
            >
              {`Project ${index}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PipelineBoard