import {h, Component} from 'preact';
import styles from './content.scss';

const Content = ({content}) => (
	<p className={styles['project-item-content']}>
		{content}
	</p>
);

export default Content;
