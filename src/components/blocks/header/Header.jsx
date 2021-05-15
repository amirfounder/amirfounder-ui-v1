import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import MagicLink from '../wrappers/magic-link/MagicLink';
import MagicListItem from '../wrappers/magic-list-item/MagicListItem';

const Header = () => {
  return(
    <div className={styles.main}>
      <div className={`${styles.column} ${styles.one}`}>
        <MagicLink to="/" className={styles.logo}>Amir Sharapov</MagicLink>
      </div>
      <div className={`${styles.column} ${styles.two}`}>
        <ul>
          <MagicListItem><MagicLink to="/about">About</MagicLink></MagicListItem>
          <MagicListItem><MagicLink to="/projects">Projects</MagicLink></MagicListItem>
          <MagicListItem><MagicLink to="/contact">Contact</MagicLink></MagicListItem>
        </ul>
      </div>
    </div>
  )
}

export default Header;