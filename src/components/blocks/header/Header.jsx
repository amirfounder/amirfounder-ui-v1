import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className={styles.main}>
      <div className={`${styles.column} ${styles.one}`}>
        <Link to="/">Amir Sharapov</Link>
      </div>
      <div className={`${styles.column} ${styles.two}`}>
        <ul>
        <li className={styles.link}><Link to="/about">About</Link></li>
        <li className={styles.link}><Link to="/projects">Projects</Link></li>
        <li className={styles.link}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;