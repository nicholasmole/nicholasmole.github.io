import {h, Component} from 'preact';
import styles from './contact.scss';

const Contact = ({title, link}) => (
	<a href={link} className={styles['contact-list-contact']}>
		{title}
	</a>
);

export default Contact;
