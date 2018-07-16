import {h, Component} from 'preact';
import styles from './link.scss';

const Link = ({text, link}) => (
	<a href={link} className={styles['project-item-link']}>
		{text}
	</a>
);

export default Link;
