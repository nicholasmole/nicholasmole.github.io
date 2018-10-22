import {h, Component} from 'preact';
import styles from './link.scss';

const Link = ({text, link}) => {
  if (link !== '') {
  return (
	    <a href={link} className={styles['project-item-link']} target="_blank">
		    {text}
      </a>
    );
  }
}

export default Link;
