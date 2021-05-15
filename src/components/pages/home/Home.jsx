import React from 'react';
import MagicHeading from '../../blocks/wrappers/magic-heading/MagicHeading';
import styles from './Home.module.scss'

const Home = () => {

  return(
    <div className={styles.main}>
      <div className={styles.heading}>
        <MagicHeading>
          Hello there. My Name is Amir Sharapov. I'm a Software Engineer in the Chicago-Land Area.
        </MagicHeading>
      </div>
    </div>
  )
}

export default Home;