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
          {stages.map(() => (
            <div
              className={`
                ${styles.column}
              `}
            >
              No projects yet...
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PipelineBoard