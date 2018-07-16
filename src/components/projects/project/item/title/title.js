import {h, Component} from 'preact';
import styles from './title.scss';

const Title = ({title}) => (
	<h4 className={styles['project-image_title']}>
		{title}
	</h4>
);

export default Title;
