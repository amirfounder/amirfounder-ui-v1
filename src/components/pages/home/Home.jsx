import React from 'react';
import Heading from '../../wrappers/html-wrappers/heading/Heading';
import MagicText from '../../wrappers/magic-wrappers/magic-text/MagicText';
import styles from './Home.module.scss'

const Home = () => {

  return(
    <div className={styles.main}>
      <div className={styles.heading}>
        <Heading underline={false}>
          <MagicText>
            Hello there. My Name's Amir. I'm a full-stack Software Engineer in the Chicago-Land Area.
          </MagicText>
        </Heading>
      </div>
    </div>
  )
}

export default Home;