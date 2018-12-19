import {h, Component} from 'preact';
import styles from './copy.scss';

const currentYear = () => {
	let d = new Date();
	return d.getYear() + 1900;
};

const Copy = () => (
	<div className={styles['contact-title']}>
		@ copyright {currentYear()}, By Nicholas Mole
	</div>
);

export default Copy;
