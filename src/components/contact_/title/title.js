import {h, Component} from 'preact';
import styles from './title.scss';

const Title = ({title}) => (
	<h3 className={styles['contact-title']}>
		{title}
	</h3>
);

export default Title;
