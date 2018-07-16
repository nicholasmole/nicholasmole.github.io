import {h, Component} from 'preact';
import styles from './text.scss';

const Text = ({text, text2}) => (
	<div className={styles['why-text_container']}>
		{text}
		<br/>
		{text2}
	</div>
);

export default Text;
