import React from 'react';
import styles from './Home.module.scss'
import { Link } from 'react-router-dom';

const Home = () => {

  const handleScroll = (e) => {
    // scroll.scrollTotop();
  } 

  return(
    <div className={styles.main}>
      <div className={styles.text}>
        Hello there. My Name is Amir Sharapov. I'm a Software Engineer in the Chicago-Land Area.
      </div>
    </div>
  )
}

export default Home;