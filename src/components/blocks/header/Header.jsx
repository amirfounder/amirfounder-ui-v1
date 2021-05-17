import React from 'react';
import styles from './Header.module.scss';
import MagicLink from '../../wrappers/magic-wrappers/magic-link/MagicLink';
import ListItem from '../../wrappers/html-wrappers/list-item/ListItem';

const Header = () => {
  return(
    <div className={styles.main}>
      <div className={`${styles.column} ${styles.one}`}>
        <MagicLink to="/" className={styles.logo}>Amir Sharapov</MagicLink>
      </div>
      <div className={`${styles.column} ${styles.two}`}>
        <ul>
          <ListItem className={styles.navLink}><MagicLink to="/about">About</MagicLink></ListItem>
          <ListItem className={styles.navLink}><MagicLink to="/projects">Projects</MagicLink></ListItem>
          <ListItem className={styles.navLink}><MagicLink to="/pipeline">Pipeline</MagicLink></ListItem>
          <ListItem className={styles.navLink}><MagicLink to="/contact">Contact</MagicLink></ListItem>
        </ul>
      </div>
    </div>
  )
}

export default Header;