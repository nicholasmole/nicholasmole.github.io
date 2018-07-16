import {h, Component} from 'preact';
import styles from './wrapper.scss';

const Wrapper = children => (
	<div className={styles['project-item-wrapper']}>
		{children}
	</div>
);

export default Wrapper;

