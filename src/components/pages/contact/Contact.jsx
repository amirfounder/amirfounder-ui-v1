import React from 'react';
import styles from './Contact.module.scss'
import MagicHeading from '../../blocks/wrappers/magic-heading/MagicHeading';
import MagicParagraph from '../../blocks/wrappers/magic-paragraph/MagicParagraph';

const Contact = () => {
  return(
    <div className={styles.main}>
      <div>
        <MagicHeading>Contact</MagicHeading>
        <MagicParagraph>Hello there</MagicParagraph>
      </div>
    </div>
  )
}

export default Contact;