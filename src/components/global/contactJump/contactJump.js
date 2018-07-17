import {h, Component} from 'preact';
import styles from './contactJump.scss';

const ContactJump = () => (
	<a href="#contact" className={styles['contact-jump']}>
		Jump to Contact Section
	</a>
);

export default ContactJump;
