import React from 'react';
import styles from './Home.module.scss'
import { Link } from 'react-router-dom';

const Home = () => {

  const handleScroll = (e) => {
    // scroll.scrollTotop();
  } 

  return(
    <div className={styles.main}>
      <div className={styles.sectionOne}>
        <h1 className={styles.heading}>
          Hello. My Name Is Amir.
        </h1>
      </div>
      <div className={styles.sectionTwo}>
        <p className={styles.paragraph}>
        Hello. My name is Amir and I am a software engineer based in Chicago, Illinois.
        <br/>
        <br/>        
        I put together a few links to help you navigate this website:
        <br/>
        <ul className={styles.list}>
          <li className={styles.link}><Link>About</Link></li>
          <li className={styles.link}><Link>Project</Link></li>
          <li className={styles.link}><Link>Contact</Link></li>
        </ul>
        </p>
      </div>
    </div>
  )
}

export default Home;